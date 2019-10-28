import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import test from 'ava'
import ApiProviderMock from '../../helpers/api-provider-mock'
import AppRow from '../../../src/components/app-list/app-row'
import Categories from '../../../src/components/app-list/categories'

test('Component AppRow', (t) => {
  const appName = 'app name'
  const description = 'nice description'

  const { container } = render(
    <ApiProviderMock>
      <AppRow
        name={appName}
        description={description}
        categories={['foo', 'bar']}
        subscriptions={[{ name: 'sub', price: 100 }]}
      />
    </ApiProviderMock>
  )

  const appNameElement = container.querySelector('h1')
  const descriptionElement = container.querySelector('p')
  const categoriesElement = container.querySelectorAll('.category')
  const subscriptionsElement = container.querySelectorAll('.subscription')

  t.true(appNameElement.textContent === appName)
  t.true(descriptionElement.textContent === description)
  t.true(categoriesElement.length === 2)
  t.true(subscriptionsElement.length === 1)
})

test('Component Categories', (t) => {
  t.plan(2)

  const setFilterByCategoryHandle = (name) => {
    t.true(name === 'bar')
  }

  const { container } = render(
    <ApiProviderMock setFilterByCategory={setFilterByCategoryHandle}>
      <Categories
        categories={['foo', 'bar', 'baz']}
      />
    </ApiProviderMock>
  )

  const spanElements = container.querySelectorAll('.category')
  fireEvent.click(spanElements[1])

  t.true(spanElements.length === 3)
})
