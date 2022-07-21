import React from 'react'

export const Card = (props) => {
    return (
        <React.Fragment>
        
            <div className="product">
                <div className="product__image">
                <img src={`${props.image}`} alt={props.des}/>
                </div>
                <h2 className="hdos"> {props.name} </h2>
                <p className="descripcion_del_producto"> {props.des} </p>
                <p className="product__price"> ${props.price}</p>
                <a className="product__button" href="#"> Buy Now </a>
            </div>
        
        </React.Fragment>
    )
}
