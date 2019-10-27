import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import test from 'ava'
import ApiProviderMock from '../../helpers/api-provider-mock'
import CategoriesFilter from '../../../src/components/apps-sidebar/categories-filter'

test('Component CategoriesFilter', async (t) => {
  t.plan(2)

  const setFilterByCategoryHandle = (name) => {
    t.true(name === 'foo-category')
  }

  const { container } = render(
    <ApiProviderMock setFilterByCategory={setFilterByCategoryHandle}>
      <CategoriesFilter />
    </ApiProviderMock>
  )

  const liElements = container.querySelectorAll('ul li')
  fireEvent.click(liElements[1].querySelector('button'))

  t.true(liElements.length === 4)
})
