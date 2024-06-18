import axios from "@/src/lib/axios"

import Footer from "@/src/app/__components__/Footer"
import Navbar from "@/src/app/__components__/Navbar"
import ProductList from "./__components__/ProductList"

// API CALLS
async function fetchProducts() {
    try {
        const response = await axios.get("api/products")
        const data = await response.data.products

        return data
    }
    catch (error) {
        console.error(error)
    }
    finally {
        console.log("Fetching products...")
    }
}

async function ProductPage() {
    const products = await fetchProducts()

    return (
        <>
            <Navbar />
            <ProductList products={products} />
            <Footer />
        </>
    )
}

export default ProductPage
