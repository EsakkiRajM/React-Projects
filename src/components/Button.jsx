import React from 'react'

const Button = (onClick) => {
    console.log(onClick);
  return (
    <div>
        <button className="btn btn-outline-dark mb-3">Add to cart</button>
    </div>
  )
}

export default Button