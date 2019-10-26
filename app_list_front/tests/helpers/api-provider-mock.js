import React from 'react'
import PropTypes from 'prop-types'
import ApiContext from '../../src/contexts/api-context'

const ApiProviderMock = ({ children }) => {
  const categoriesState = {
    data: ['foo-category', 'bar-category', 'baz-category'],
    status: 'loaded',
  }

  return (
    <ApiContext.Provider
      value={{
        categoriesState,
      }}
    >
      {children}
    </ApiContext.Provider>
  )
}

ApiProviderMock.propTypes = {
  children: PropTypes.node.isRequired,
}

export default ApiProviderMock
