import { serverBaseUrl } from '../constants.json'

const getApps = async (filterByCategory, filterByName, page) => {
  const params = new URLSearchParams()
  params.append('page', page)

  if (filterByCategory) {
    params.append('filterByCategory', filterByCategory)
  }

  if (filterByName) {
    params.append('filterByName', filterByName)
  }

  const response = await fetch(`${serverBaseUrl}/apps?${params}`)
  const responseJson = await response.json()

  return responseJson
}

const getCategories = async () => {
  const response = await fetch(`${serverBaseUrl}/categories`)
  const responseJson = await response.json()

  return responseJson
}

export { getApps, getCategories }
