import React from 'react'
import PropTypes from 'prop-types'
import ApiContext from '../../src/contexts/api-context'

const ApiProviderMock = ({
  appsListState,
  children,
  page,
  setFilterByCategory,
  setPage,
}) => {
  const categoriesState = {
    data: ['foo-category', 'bar-category', 'baz-category'],
    status: 'loaded',
  }

  return (
    <ApiContext.Provider
      value={{
        appsListState,
        categoriesState,
        page,
        setFilterByCategory,
        setPage,
      }}
    >
      {children}
    </ApiContext.Provider>
  )
}

ApiProviderMock.propTypes = {
  appsListState: PropTypes.objectOf({
    data: PropTypes.objectOf({
      metadata: PropTypes.objectOf({
        pagesCount: PropTypes.number,
      }),
    }),
  }),
  children: PropTypes.node.isRequired,
  page: PropTypes.number,
  setFilterByCategory: PropTypes.func,
  setPage: PropTypes.func,
}

ApiProviderMock.defaultProps = {
  appsListState: {},
  page: 0,
  setFilterByCategory: () => {},
  setPage: () => {},
}

export default ApiProviderMock
