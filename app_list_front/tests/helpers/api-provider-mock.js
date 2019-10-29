import React from 'react'
import PropTypes from 'prop-types'
import ApiContext from '../../src/contexts/api-context'

const ApiProviderMock = ({
  appsListState,
  children,
  filterByName,
  page,
  setFilterByCategory,
  setFilterByName,
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
        filterByName,
        page,
        setFilterByCategory,
        setFilterByName,
        setPage,
      }}
    >
      {children}
    </ApiContext.Provider>
  )
}

ApiProviderMock.propTypes = {
  appsListState: PropTypes.shape({
    data: PropTypes.shape({
      apps: PropTypes.array,
      metadata: PropTypes.shape({
        pagesCount: PropTypes.number,
      }),
    }),
  }),
  children: PropTypes.node.isRequired,
  filterByName: PropTypes.string,
  page: PropTypes.number,
  setFilterByCategory: PropTypes.func,
  setFilterByName: PropTypes.func,
  setPage: PropTypes.func,
}

ApiProviderMock.defaultProps = {
  appsListState: {},
  filterByName: '',
  page: 0,
  setFilterByCategory: () => {},
  setFilterByName: () => {},
  setPage: () => {},
}

export default ApiProviderMock
