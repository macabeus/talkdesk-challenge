import React from 'react'
import PropTypes from 'prop-types'
import { Flexbox, Spacing } from 'former-kit'
import Categories from './categories'
import Subscriptions from './subscriptions'
import style from './style.css'

const AppListRow = ({
  categories,
  description,
  name,
  subscriptions,
}) => (
  <Flexbox direction="column">
    <Flexbox direction="row" alignItems="center">
      <h1 className={style.appName}>{name}</h1>
      <Spacing />
      <Categories categories={categories} />
    </Flexbox>

    <p>{description}</p>

    <Subscriptions subscriptions={subscriptions} />
  </Flexbox>
)

AppListRow.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  description: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  subscriptions: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  })).isRequired,
}

export default AppListRow
