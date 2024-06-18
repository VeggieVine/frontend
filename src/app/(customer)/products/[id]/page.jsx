import axios from "@/src/lib/axios"

import ProductDetail from "./__components__/ProductDetail"

import Footer from "@/src/app/__components__/Footer"
import Navbar from "@/src/app/__components__/Navbar"

// API CALLS
async function fetchProductDetail(id) {
    try {
        const response = await axios.get("api/product/" + id)
        const data = await response.data.product

        return data
    }
    catch (error) {
        console.error(error)
    }
    finally {
        console.log("Fetching product detail...")
    }
}

async function ProductDetailPage({params}) {
    const product = await fetchProductDetail(params.id)

    return (
        <>
            <Navbar />
            <ProductDetail product={product} />
            <Footer />
        </>
    )
}

export default ProductDetailPage
