import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { Tag } from 'former-kit'
import classNames from 'classnames'
import ApiContext from '../../contexts/api-context'
import style from './style.css'

const Categories = ({ categories }) => {
  const {
    clearFilterByCategory,
    filterByCategory,
    setFilterByCategory,
  } = useContext(ApiContext)

  const createOnClickHandle = name => (
    name === filterByCategory
      ? clearFilterByCategory
      : () => setFilterByCategory(name)
  )

  const isActive = category => category === filterByCategory

  const choiceStyles = category => (
    isActive(category)
      ? classNames([style.category, style.active])
      : style.category
  )

  const tags = categories.map((category) => {
    const onClickHandle = createOnClickHandle(category)

    return (
      <div
        className={choiceStyles(category)}
        key={category}
        role="button"
        tabIndex={0}
        onClick={onClickHandle}
        onKeyPress={onClickHandle}
      >
        <Tag>{category}</Tag>
      </div>
    )
  })

  return tags
}

Categories.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Categories
