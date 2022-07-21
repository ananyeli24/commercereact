import React from 'react'
import { useState, useEffect } from 'react'
import { NavBar } from './NavBar'
import { Card } from '../Components/Card'
import { Footer } from './Footer'


export const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const showProducts = async () => {
      try {
        const res = await fetch('http://localhost:5000/products')
        const data = await res.json()
        setProducts(data)
      } catch (err) {
        console.log(err)
      }
    }
    showProducts();
  }, [])
  
  return (
    <React.Fragment>
      <NavBar />
      <section className="hero">
        <h1 className="hero__title"> Elite Gloves </h1>
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
                key={key}
              />
            )
          })
        }
      </section>
<hr/>
      <aside>
        <a aria-label="facebook" href="#" className="fa fa-facebook"></a>
        <a aria-label="twitter" href="#" className="fa fa-twitter"></a>
        <a aria-label="instagram" href="#" className="fa fa-instagram"></a>
        <a aria-label="pinterest" href="#" className="fa fa-pinterest"></a>
      </aside>
 
 
   <Footer />
     


    </React.Fragment>
  )
}




