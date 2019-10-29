const filterApps = (apps, { category, name }) => {
  const filterByCategoryPredicate = (
    category
      ? app => app.categories.includes(category)
      : () => true
  )

  const filterByNamePredicate = (
    name
      ? app => app.name.includes(name)
      : () => true
  )

  const appsFiltered = apps
    .filter(filterByCategoryPredicate)
    .filter(filterByNamePredicate)

  return appsFiltered
}

module.exports = { filterApps }
