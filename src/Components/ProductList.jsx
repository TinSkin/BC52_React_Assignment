import React from 'react'
import ProductItem from './ProductItem'

export default function ProductList({ productsData, setStateModal }) {
    return (
        <div className="row gy-5">
            {productsData.map((product) => {
                return (
                    <div key={product.id} className='col-md-4'>
                        <ProductItem item={product} setStateModal={setStateModal} />
                    </div>
                )
            })}
        </div>
    )
}

