import React from 'react'
import PropTypes from 'prop-types'
import { Flexbox } from 'former-kit'
import Price from '../price'
import style from './style.css'

const Subscriptions = ({ subscriptions }) => {
  const drawSubscriptions = subscriptions.map(({ name, price }) => (
    <div className={style.subscription} key={name}>
      <p className={style.name}>{name}</p>
      <Price cents={price} />
    </div>
  ))

  return (
    <Flexbox direction="row">
      {drawSubscriptions}
    </Flexbox>
  )
}

Subscriptions.propTypes = {
  subscriptions: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  })).isRequired,
}

export default Subscriptions
