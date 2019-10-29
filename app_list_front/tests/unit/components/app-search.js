import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import test from 'ava'
import ApiProviderMock from '../../helpers/api-provider-mock'
import AppSearch from '../../../src/components/app-search'

test('Component AppSearch', (t) => {
  t.plan(2)

  const setFilterByNameHandle = (name) => {
    t.deepEqual(name, 'foo')
  }

  const { container } = render(
    <ApiProviderMock
      filterByName=""
      setFilterByName={setFilterByNameHandle}
    >
      <AppSearch />
    </ApiProviderMock>
  )

  const filterLabelElement = container.querySelectorAll('span')[2]
  t.deepEqual(filterLabelElement.textContent, 'No name filter')

  const inputElement = container.querySelector('input')
  fireEvent.change(inputElement, { target: { value: 'foo' } })

  const buttonFilterElement = container.querySelector('button')
  fireEvent.click(buttonFilterElement)
})

test('Component AppSearch when is filtering', (t) => {
  const { container } = render(
    <ApiProviderMock
      filterByName="foo"
      setFilterByName={() => {}}
    >
      <AppSearch />
    </ApiProviderMock>
  )

  const filterLabelElement = container.querySelectorAll('span')[2]

  t.deepEqual(filterLabelElement.textContent, 'Filtering by "foo"')
})
