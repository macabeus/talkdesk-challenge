import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import ApiContext from '../contexts/api-context'
import { serverBaseUrl } from '../constants.json'

const useAppsList = () => {
  const appsListStates = {
    loaded: apps => ({ apps, status: 'loaded' }),
    starting: { apps: null, status: 'starting' },
  }

  const [appsListState, setAppsListState] = useState(appsListStates.starting)

  useEffect(() => {
    const fetchApps = async () => {
      const response = await fetch(`${serverBaseUrl}/apps`)
      const responseJson = await response.json()

      setAppsListState(
        appsListStates.loaded(responseJson)
      )
    }

    fetchApps()
  }, []) /* it should run only once */ // eslint-disable-line react-hooks/exhaustive-deps

  return appsListState
}

const useCategories = () => {
  const categoriesStates = {
    loaded: data => ({ data, status: 'loaded' }),
    starting: { data: [], status: 'starting' },
  }

  const [categoriesState, setCategoriesState] = useState(
    categoriesStates.starting
  )

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await fetch(`${serverBaseUrl}/categories`)
      const responseJson = await response.json()

      setCategoriesState(
        categoriesStates.loaded(responseJson)
      )
    }

    fetchCategories()
  }, []) /* it should run only once */ // eslint-disable-line react-hooks/exhaustive-deps

  return categoriesState
}

const ApiProvider = ({ children }) => {
  const appsListState = useAppsList()
  const categoriesState = useCategories()

  return (
    <ApiContext.Provider
      value={{
        appsListState,
        categoriesState,
      }}
    >
      {children}
    </ApiContext.Provider>
  )
}

ApiProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export default ApiProvider
