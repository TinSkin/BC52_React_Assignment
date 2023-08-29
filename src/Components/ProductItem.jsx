import React from 'react'

export default function ProductItem({ item, setStateModal }) {
    return (
        <div className="card">
            <img src={item.image} alt="shoe" className="card-img" />
            <div className="card-body">
                <h3 className="card-title">
                    {item.name}
                </h3>
                <p className="card-text">{item.price}</p>
                <button className="btn btn-dark" onClick={event => setStateModal(item)}>add to carts <i className="bi bi-cart-plus-fill"></i></button>
            </div>
        </div>
    )
}