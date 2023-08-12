import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ProductRightDetails from './ProductItem/ProductRightDetails'

const ProductItem = () => {
    const params = useParams()

    const [product, setProduct] = useState({})

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${params.id}`)
            .then(res => res.json())
            .then(json => setProduct(json) )

    }, [])

    return (
        <div className='product-item-container d-flex justify-content-center mt-3'>
            <img className='product-item-img ' src={product.image}></img>
            <ProductRightDetails product={product} />
        </div>
    )
}

export default ProductItem