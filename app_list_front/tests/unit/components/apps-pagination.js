import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import test from 'ava'
import ApiProviderMock from '../../helpers/api-provider-mock'
import AppsPagination from '../../../src/components/apps-pagination'

test('Component AppsPagination', async (t) => {
  t.plan(3)

  const appsListState = {
    data: {
      metadata: {
        pagesCount: 3,
      },
    },
  }

  const setPage = (number) => {
    t.true(number === 1)
  }

  const { container } = render(
    <ApiProviderMock appsListState={appsListState} page={0} setPage={setPage}>
      <AppsPagination />
    </ApiProviderMock>
  )

  const inputCurrentPageElement = container.querySelector('input')
  t.true(inputCurrentPageElement.getAttribute('value') === '1')

  const spanLastPageElement = container.querySelector('span:last-child')
  t.true(spanLastPageElement.textContent === '3')

  const [/* buttonPreviousElement */, buttonNextElement] = container.querySelectorAll('button')
  fireEvent.click(buttonNextElement)
})
