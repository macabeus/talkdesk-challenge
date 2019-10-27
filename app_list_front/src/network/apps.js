import { serverBaseUrl } from '../constants.json'

const getApps = async (filterByCategory, page) => {
  const response = filterByCategory
    ? await fetch(`${serverBaseUrl}/apps?page=${page}&filterByCategory=${filterByCategory}`)
    : await fetch(`${serverBaseUrl}/apps?page=${page}`)

  const responseJson = await response.json()

  return responseJson
}

export { getApps } // eslint-disable-line import/prefer-default-export
