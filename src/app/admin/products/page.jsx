
import Sidebar from "../../__components__/Sidebar"
import Table from "./__components__/Table"
import axios from "@/src/lib/axios"

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

export default async function AdminProductsPage() {
    const products = await fetchProducts()

    return (
        <>
            <Sidebar />
            <div className="ml-44 pt-20 pb-12 px-8 lg:ml-64">
                <h1 className="text-xl font-bold text-black pb-4">
                    Data Produk
                </h1>
                
                <div className="max-h-[100vh] overflow-hidden">
                    <Table data={products} />
                </div>
            </div>
        </>
    )
}