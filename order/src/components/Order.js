import React from 'react';

const Order = ({ pizza }) => {
  return (
    <div className="container order">
      <h2>Booking Confirmation</h2>
      <p>You booked an appointment with: {pizza.base}</p>
      {/* <p>You {pizza.base} pizza with:</p> */}
      {pizza.toppings.map(topping => <div key={topping}>{topping}</div>)}
    </div>
  )
}

export default Order;