import React, { useEffect, useState } from 'react';
import { fetchToApi } from '../helpers/fetchToApi';
import { Card } from './Card';

export const Main = () => {

  const [products, setProducts] = useState([])

  useEffect(() => {
    return async ()=> {
      const url = 'https://corebiz-test.herokuapp.com/api/v1/products';
      const data = await fetchToApi(url);

      setProducts(data)
    }
  }, [])
  

  const last = products[products.length - 1]

  return (
    <div className="main-container">
      <div className="main-text-container">
        <h3>Más Vendidos</h3>
        <div></div>
      </div>
      <div className="main-products-gallery">
      <i className="main-gallery-arrow--left fas fa-chevron-left"></i>
        <div className="main-gallery-card">
          {
            products.map(product => {
            return(
              <Card 
                img={product.imageUrl}
                title={product.productName}
                listPrice={product.listPrice}
                price={product.price}
                installments={product.installments}
                key={product.productId}
                styleCard={last.productId === product.productId ? true : false}

              />
            )
            })
          }
        </div>
        <i
          className="main-gallery-arrow--right fas fa-chevron-right"></i>
      </div>

    </div>
  )
}
