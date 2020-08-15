import React from "react"

const Product = ({ id, name, price, image }) => {
  const baseImgURL = "https://rowenkuiper.nl/"
  return (
    <div>
      <div>
        <img src={baseImgURL + image} alt="" />
      </div>
      <div>
        <p>{name}</p>
        <p>{price}</p>
      </div>
    </div>
  )
}

export default Product
