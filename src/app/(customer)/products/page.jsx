"use client"

import { useEffect, useState } from 'react'
import axios from '@/src/lib/axios'
import Footer from '@/src/app/__components__/Footer'
import Navbar from '@/src/app/__components__/Navbar'
import ProductList from './__components__/ProductList'

function ProductPage() {
    const [products, setProducts] = useState([])

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('api/products')
                const data = response.data.products
                setProducts(data)
                console.log('Products fetched:', data)
            } catch (error) {
                console.error('Error fetching products:', error)
            }
        }

        fetchProducts()
    }, []) // Empty dependency array ensures this effect runs only once

    return (
        <div className="flex flex-col min-h-screen justify-between">
            <Navbar />
            <ProductList products={products} />
            <Footer />
        </div>
    )
}

export default ProductPage
