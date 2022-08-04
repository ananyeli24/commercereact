import React from 'react'
import { useState, useEffect } from 'react'
import { NavBar } from './NavBar'
import { Card } from '../Components/Card'
import { Footer } from './Footer'



export const Products = () => {


  const [products, setProducts] = useState([])

  let fetchUrl = 'https://elitegloves.herokuapp.com/products'

  const showProducts = async (url) => {
    try {
      const res = await fetch(url)
      const data = await res.json()
      setProducts(data)
    } catch (err) {
      console.log(err)
    }

  }

  useEffect(() => {
    const showProducts = async () => {
      try {
        const res = await fetch(fetchUrl)
        const data = await res.json()
        setProducts(data)
      } catch (err) {
        console.log(err)
      }

    }
    showProducts();
  }, [])

  function lowToHight() {
    fetchUrl = 'https://elitegloves.herokuapp.com/products/prices/asc'
    return showProducts(fetchUrl)

  }
  function recommended() {
    fetchUrl = 'https://elitegloves.herokuapp.com/products'
    return showProducts(fetchUrl)
  }

  function highToLow() {
    fetchUrl = 'https://elitegloves.herokuapp.com/products/prices/desc'
    return showProducts(fetchUrl)

  }
  function color() {
    fetchUrl = 'https://elitegloves.herokuapp.com/products/color'
    return showProducts(fetchUrl)
  }
  return (
    <React.Fragment>

      <NavBar />
     
      <section className="los-cuatro-botones">
        <button className="botones" onClick={lowToHight}>Low To Hight</button>
        <button className="botones" onClick={highToLow}> Hight To Low</button>
        <button className="botones" onClick={recommended}>Recommended</button>
        <button className="botones" onClick={color}>By Color</button>
      </section>
      <section className="products">
        {
          products.map((item, key) => {
            return (
              <Card
                image={item.images}
                des={item.des}
                price={item.prices}
                name={item.gloves_name}
                key={item.gloves_id}
              />
            )
          })
        }

      </section>



      <hr />


      <Footer />



    </React.Fragment>
  )
}
