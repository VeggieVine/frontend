"use client"

import Image from "next/image"
import { useEffect, useState } from "react"
import { useAuth } from "@/src/hooks/useAuth"
import AddItemModal from "@/src/app/admin/products/__components__/AddItemModal"
import axios from "@/src/lib/axios"

const Table = ({ data }) => {
    const { user } = useAuth({ middleware: "auth" })

    const [products, setProducts] = useState(data)
    const [editItem, setEditItem] = useState(null)

    useEffect(() => {
        fetchProducts().then((data) => setProducts(data))
    }, [user])

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

    const handleAddItem = async (newItem) => {
        if (editItem) {
            setEditItem(null)

            try {
                const response = await axios.put(`api/products/${editItem.id}`, newItem)
                const data = await response.data
                const updatedProducts = await fetchProducts()

                alert(data.message)
                setProducts(updatedProducts)

            } catch (error) {
                console.error(error)
            }
        } else {

            try {
                const response = await axios.post("api/products", newItem)
                const data = await response.data
                const updatedProducts = await fetchProducts()
                
                alert(data.message)
                setProducts(updatedProducts)
            } catch (error) {
                console.error(error)
            }
        }
    }

    const handleEditItem = (item) => {
        setEditItem(item)
        document.getElementById("my_modal_5").showModal()
    }

    const handleDeleteItem = async (id) => {
        setProducts(data.filter(item => item.id !== id))

        try {
            const response = await axios.delete(`api/products/${id}`)
            const data = response.data

            alert(data.message)
        } catch (error) {
            console.error(error)
        }
    }

    const handleDelete = (id) => {
        if (window.confirm("Apakah Anda yakin ingin menghapus barang ini?")) {
            handleDeleteItem(id)
        }
    }

    return (
        <div className="overflow-auto max-h-screen">
            <button
                className="btn btn-outline btn-primary mb-4"
                onClick={() => {
                    setEditItem(null)
                    document.getElementById("my_modal_5").showModal()
                }}
            >
                Tambah barang
            </button>
            <AddItemModal onAddItem={handleAddItem} editItem={editItem} />

            <table className="table table-md table-pin-rows table-pin-cols w-full">
                <thead>
                    <tr>
                        <th>ID</th>
                        <td>Nama Barang</td>
                        <td>Keterangan</td>
                        <td>Kategori</td>
                        <td>Harga</td>
                        <td>Stok</td>
                        <td>Gambar</td>
                        <td>Aksi</td>
                    </tr>
                </thead>
                <tbody>
                    {products.map((item) => (
                        <tr key={item.id}>
                            <th>{item.id}</th>
                            <td>{item.name}</td>
                            <td>{item.description}</td>
                            <td>{item.category.type}</td>
                            <td>{item.price}</td>
                            <td>{item.stock}</td>
                            <td>
                                <Image
                                    src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/public/storage/product-images/${item.image}`}
                                    alt={item.name}
                                    width={100}
                                    height={100}
                                    className="object-cover"
                                />
                            </td>
                            <td className="flex gap-x-0 justify-center">
                                <button className="btn btn-sm btn-primary mr-4" onClick={() => handleEditItem(item)}>
                                    Edit
                                </button>
                                <button className="btn btn-sm btn-error" onClick={() => handleDelete(item.id)}>
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Table
