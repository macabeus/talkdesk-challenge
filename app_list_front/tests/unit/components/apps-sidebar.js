import React from 'react'
import { render } from '@testing-library/react'
import test from 'ava'
import ApiProviderMock from '../../helpers/api-provider-mock'
import CategoriesFilter from '../../../src/components/apps-sidebar/categories-filter'

test('Component CategoriesFilter', (t) => {
  const { container } = render(
    <ApiProviderMock>
      <CategoriesFilter />
    </ApiProviderMock>
  )

  const liElements = container.querySelectorAll('ul li')

  t.true(liElements.length === 4)
})
