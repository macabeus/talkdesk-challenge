import React from 'react'
import PropTypes from 'prop-types'
import ApiContext from '../../src/contexts/api-context'

const ApiProviderMock = ({ children, setFilterByCategory }) => {
  const categoriesState = {
    data: ['foo-category', 'bar-category', 'baz-category'],
    status: 'loaded',
  }

  return (
    <ApiContext.Provider
      value={{
        categoriesState,
        setFilterByCategory,
      }}
    >
      {children}
    </ApiContext.Provider>
  )
}

ApiProviderMock.propTypes = {
  children: PropTypes.node.isRequired,
  setFilterByCategory: PropTypes.func,
}

ApiProviderMock.defaultProps = {
  setFilterByCategory: () => {},
}

export default ApiProviderMock
