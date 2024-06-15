import { useState, useEffect } from "react"

const AddItemModal = ({ onAddItem, editItem }) => {
    const [formState, setFormState] = useState({
        itemName: "",
        description: "",
        category: "Buah",
        price: "",
        stock: "",
        image: "",
    })

    useEffect(() => {
        if (editItem) {
            setFormState(editItem)
        } else {
            setFormState({
                itemName: "",
                description: "",
                category: "Buah",
                price: "",
                stock: "",
                image: "",
            })
        }
    }, [editItem])

    const handleChange = (e) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value,
        })
    }

    const handleFormSubmit = (event) => {
        event.preventDefault()
        const newItem = {
            ...formState,
            id: editItem
                ? editItem.id
                : Math.random().toString(36).substr(2, 9),
        }
        onAddItem(newItem)
        document.getElementById("my_modal_5").close()
    }

    return (
        <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
            <div className="modal-box">
                <h3 className="font-bold text-lg">
                    {editItem ? "Edit Barang" : "Tambah Barang Baru"}
                </h3>
                <form onSubmit={handleFormSubmit} className="py-4">
                    <div className="form-control mb-2">
                        <label className="label">
                            <span className="label-text">Nama Barang</span>
                        </label>
                        <input
                            type="text"
                            name="itemName"
                            value={formState.itemName}
                            onChange={handleChange}
                            className="input input-bordered"
                            required
                        />
                    </div>
                    <div className="form-control mb-2">
                        <label className="label">
                            <span className="label-text">Deskripsi</span>
                        </label>
                        <input
                            type="text"
                            name="description"
                            value={formState.description}
                            onChange={handleChange}
                            className="input input-bordered"
                            required
                        />
                    </div>
                    <div className="form-control mb-2">
                        <label className="label">
                            <span className="label-text">Kategori</span>
                        </label>
                        <select
                            name="category"
                            value={formState.category}
                            onChange={handleChange}
                            className="select select-bordered"
                        >
                            <option value="Buah">Buah</option>
                            <option value="Sayur">Sayur</option>
                        </select>{" "}
                    </div>
                    <div className="form-control mb-2">
                        <label className="label">
                            <span className="label-text">Harga</span>
                        </label>
                        <input
                            type="number"
                            name="price"
                            value={formState.price}
                            onChange={handleChange}
                            className="input input-bordered"
                            required
                        />
                    </div>
                    <div className="form-control mb-2">
                        <label className="label">
                            <span className="label-text">Stok</span>
                        </label>
                        <input
                            type="number"
                            name="stock"
                            value={formState.stock}
                            onChange={handleChange}
                            className="input input-bordered"
                            required
                        />
                    </div>
                    <div className="form-control mb-2">
                        <label className="label">
                            <span className="label-text">Gambar (URL)</span>
                        </label>
                        <input
                            type="text"
                            name="image"
                            value={formState.image}
                            onChange={handleChange}
                            className="input input-bordered"
                            required
                        />
                    </div>
                    <div className="modal-action">
                        <button type="submit" className="btn btn-primary">
                            {editItem ? "Update" : "Tambah"}
                        </button>
                        <button
                            type="button"
                            className="btn"
                            onClick={() =>
                                document.getElementById("my_modal_5").close()
                            }
                        >
                            Tutup
                        </button>
                    </div>
                </form>
            </div>
        </dialog>
    )
}

export default AddItemModal
