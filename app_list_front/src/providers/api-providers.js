import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import ApiContext from '../contexts/api-context'
import { getApps, getCategories } from '../network/apps'

const useAppsList = (filterByCategory, filterByName, page) => {
  const appsListStates = {
    loaded: data => ({ data, status: 'loaded' }),
    starting: { data: null, status: 'starting' },
  }

  const [appsListState, setAppsListState] = useState(appsListStates.starting)

  useEffect(() => {
    const fetchApps = async () => {
      const data = await getApps(filterByCategory, filterByName, page)

      setAppsListState(
        appsListStates.loaded(data)
      )
    }

    fetchApps()
  }, [filterByCategory, filterByName, page]) // eslint-disable-line react-hooks/exhaustive-deps

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
      const data = await getCategories()

      setCategoriesState(
        categoriesStates.loaded(data)
      )
    }

    fetchCategories()
  }, []) /* it should run only once */ // eslint-disable-line react-hooks/exhaustive-deps

  return categoriesState
}

const ApiProvider = ({ children }) => {
  const [filterByCategory, setFilterByCategory] = useState(null)
  const [filterByName, setFilterByName] = useState('')
  const [page, setPage] = useState(0)
  const appsListState = useAppsList(filterByCategory, filterByName, page)
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

ApiProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export default ApiProvider
