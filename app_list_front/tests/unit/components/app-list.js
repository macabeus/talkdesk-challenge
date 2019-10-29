import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import test from 'ava'
import ApiProviderMock from '../../helpers/api-provider-mock'
import AppList from '../../../src/components/app-list'
import AppRow from '../../../src/components/app-list/app-row'
import Categories from '../../../src/components/app-list/categories'

test('Component AppList when is empty state', (t) => {
  const { container } = render(
    <ApiProviderMock
      appsListState={{
        data: {
          apps: [],
          metadata: {
            pagesCount: 0,
          },
        },
      }}
    >
      <AppList />
    </ApiProviderMock>
  )

  t.true(container.textContent === 'No result')
})

test('Component AppList when is filled', (t) => {
  const appsMock = [
    {
      categories: ['foo'],
      description: 'description text',
      id: 'dd024ed5-efae-5785-addc-09e592066e5c',
      name: 'app name',
      subscriptions: [
        {
          name: 'Starter',
          price: 2000,
        },
      ],
    },
  ]

  const { container } = render(
    <ApiProviderMock
      appsListState={{
        data: {
          apps: appsMock,
          metadata: {
            pagesCount: 0,
          },
        },
      }}
    >
      <AppList />
    </ApiProviderMock>
  )

  const cardAppElements = container.querySelectorAll('.cardApp')

  t.true(cardAppElements.length === 1)
})

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
