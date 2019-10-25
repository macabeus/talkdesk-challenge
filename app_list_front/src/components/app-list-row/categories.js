import React from 'react'
import PropTypes from 'prop-types'
import { Tag } from 'former-kit'
import style from './style.css'

const Categories = ({ categories }) => categories.map(category => (
  <span className={style.category} key={category}>
    <Tag>{category}</Tag>
  </span>
))

Categories.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Categories
