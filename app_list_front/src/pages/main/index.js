import React, { useContext } from 'react'
import ApiContext from '../../contexts/api-context'
import LoadedApps from './loaded-apps'
import './style.css'

const Main = () => {
  const { appsListState } = useContext(ApiContext)

  const status = {
    loaded: () => <LoadedApps />,
    starting: () => <h6>Loading apps...</h6>,
  }

  return React.createElement(status[appsListState.status])
}

export default Main
