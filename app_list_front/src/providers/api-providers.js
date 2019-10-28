import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import ApiContext from '../contexts/api-context'
import { getApps } from '../network/apps'
import { serverBaseUrl } from '../constants.json'

const useAppsList = (filterByCategory, page) => {
  const appsListStates = {
    loaded: data => ({ data, status: 'loaded' }),
    starting: { data: null, status: 'starting' },
  }

  const [appsListState, setAppsListState] = useState(appsListStates.starting)

  useEffect(() => {
    const fetchApps = async () => {
      const data = await getApps(filterByCategory, page)

      setAppsListState(
        appsListStates.loaded(data)
      )
    }

    fetchApps()
  }, [filterByCategory, page]) // eslint-disable-line react-hooks/exhaustive-deps

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
  const [filterByCategory, setFilterByCategory] = useState(null)
  const [page, setPage] = useState(0)
  const appsListState = useAppsList(filterByCategory, page)
  const categoriesState = useCategories()

  const clearFilterByCategory = () => setFilterByCategory(null)

  useEffect(() => {
    setPage(0)
  }, [filterByCategory])

  return (
    <ApiContext.Provider
      value={{
        appsListState,
        categoriesState,
        clearFilterByCategory,
        filterByCategory,
        page,
        setFilterByCategory,
        setPage,
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
