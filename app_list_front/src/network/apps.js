import { serverBaseUrl } from '../constants.json'

const getApps = async (filterByCategory) => {
  const response = filterByCategory
    ? await fetch(`${serverBaseUrl}/apps?filterByCategory=${filterByCategory}`)
    : await fetch(`${serverBaseUrl}/apps`)

  const responseJson = await response.json()

  return responseJson
}

export { getApps } // eslint-disable-line import/prefer-default-export
