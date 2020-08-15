import React, { useState, useEffect } from "react"
import axios from "axios"

import Product from "../product/product.comp"

const Elixir = () => {
  const [products, setProducts] = useState([])
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          "https://elixir-app-cc471.firebaseio.com/products.json"
        )
        console.log(response.data)
        setProducts(response.data)
      } catch (error) {
        console.log(`Er was een error joh! 🍆`, error)
      }
    }
    getData()
  }, [])

  return (
    <div>
      {products.map((product, i, a) => (
        <Product key={product.id} {...product} />
      ))}
    </div>
  )
}

export default Elixir
