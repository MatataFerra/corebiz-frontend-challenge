import React, { useState } from 'react'

export const Card = ({img, title, listPrice, price, installments, styleCard }) => {
  const [button, setButton] = useState(false)

  const handleButtonVisibility = () => {
    setButton(true)
  }

  const handleButtonHide = () => {
    setButton(false)
  }

  const style = styleCard ? {display: 'none'} : {display: 'block'}

  return (
    <div className={(!!listPrice) ? 'main-gallery-product relative' : 'main-gallery-product'} 
      onMouseEnter={handleButtonVisibility}
      onMouseLeave={handleButtonHide}
      style={style}
    >
      <img className="main-gallery-image" src={img} alt="Product-1" />
      { !!listPrice && <div className="main-gallery-off"></div>}
      <div className="main-gallery-product-description">
        <p className="main-gallery-title">{title}</p>
        <div className="main-gallery-star-container">
          <i className="main-star far fa-star"></i>
          <i className="main-star far fa-star"></i>
          <i className="main-star far fa-star"></i>
          <i className="main-star far fa-star"></i>
          <i className="main-star far fa-star"></i>
        </div>
        <p className="main-gallery-listprice">{(!!listPrice) ? `de $ ${listPrice}` : '--'}</p>
        <p className="main-gallery-price">{price}</p>
        <p className="main-gallery-installment">
          {
            (installments.length === 0) 
            ? 'No financiable' 
            : installments.map(element => (`o en ${element.quantity} cuotas de R $ ${element.value}`))
          }
        </p>
        {
          (button)
          ? <div style={{visibility: 'visible'}} className="main-gallery-button">Comprar</div>
          : <div style={{visibility: 'hidden'}} className="main-gallery-button">Comprar</div>
        }
          
      </div>
    </div>
  )
}
