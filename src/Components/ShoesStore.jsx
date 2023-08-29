import React, { useState } from 'react'

import ProductList from './ProductList'
import Modal from './Modal'
import products from '../dataShoes.json'

export default function ShoesStore() {
    const [state, setState] = useState({
        productDetail: null
    });

    const setStateModal = (item) => {
        setState(previousState => {
            return { ...previousState, productDetail: item }
        })
    }

    return (
        <>
            <ProductList productsData={products} setStateModal={setStateModal} />
            {/* setStateModal={this.setStateModal} */}

            <Modal content={state.productDetail}/>
            {/* content={this.state.productDetail} */}
        </>
    )
}

