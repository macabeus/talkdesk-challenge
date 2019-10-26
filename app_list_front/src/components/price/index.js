import React from 'react'
import PropTypes from 'prop-types'

const Price = ({ cents }) => {
  const priceString = (
    cents === 0
      ? 'Free'
      : (cents / 100).toLocaleString(undefined, {
        currency: 'EUR',
        style: 'currency',
      })
  )

  return <p>{priceString}</p>
}

Price.propTypes = {
  cents: PropTypes.number.isRequired,
}

export default Price
