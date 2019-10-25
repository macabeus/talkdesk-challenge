import React, { useContext } from 'react'
import ApiContext from '../../contexts/api-context'

const Main = () => {
  const { appsListState } = useContext(ApiContext)

  const status = {
    loaded: () => <h6>Apps lodaded!</h6>,
    starting: () => <h6>Loading apps...</h6>,
  }

  return React.createElement(status[appsListState.status])
}

export default Main
