import React from 'react'
import { render } from '@testing-library/react'
import test from 'ava'
import AppListRow from '../../../src/components/app-list-row'

test('Component AppListRow', (t) => {
  const appName = 'app name'
  const description = 'nice description'

  const { container } = render(
    <AppListRow
      name={appName}
      description={description}
      categories={['foo', 'bar']}
      subscriptions={[{ name: 'sub', price: 100 }]}
    />
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
