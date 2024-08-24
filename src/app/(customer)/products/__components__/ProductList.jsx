"use client"

import { useEffect, useState } from "react"
import { usePathname, useRouter, useSearchParams } from "next/navigation"

import { useInput } from "@/src/hooks/useInput"

import ProductItem from "./ProductItem"
import CategoryList from "./CategoryList"
import TextInput from "@/src/app/__components__/form/TextInput"
import { InfoSVG, SearchSVG } from "@/src/app/__components__/ui/Icons"

export default function ProductList({products}) {
    // COMPONENT's STATE
    const router = useRouter()
    const pathname = usePathname()
    const searchParams = useSearchParams()
    const currentParams = new URLSearchParams(Array.from(searchParams.entries()))
    const [filteredProducts, setFilteredProducts] = useState(products || [])
    const [selectedCategory, setSelectedCategory] = useState("default")
    const [searchKeyword, setSearchKeyword] = useInput(searchParams.get('name') || '')

    // MODIFIED STATE
    const categories = ['default', 'fruits', 'vegetables']

    // EFFECTS
    useEffect(() => {
        if (searchKeyword) {
            setFilteredProducts(products.filter((product) => product.name.toLowerCase().includes(searchKeyword.toLowerCase())))
        } else {
            setFilteredProducts(products)
        }
    }, [products])

    // ACTIONS
    const handleSearch = (event) => {
        const { value } = event.target
        const filteredByCategory = selectedCategory === 'default' ? products : products.filter((product) => product.category.type === selectedCategory)

        if (!value) {
            currentParams.delete("name")
        } else {
            currentParams.set("name", event.target.value)
        }

        router.push(`${pathname}?${currentParams.toString()}`)
        setSearchKeyword(event)
        setFilteredProducts(filteredByCategory.filter((product) => product.name.toLowerCase().includes(value.toLowerCase())))
    }

    const handleCategory = (category) => {
        const filteredByCategory = category === 'default' ? products : products.filter((product) => product.category.type === category)

        setSelectedCategory(category)

        if (searchKeyword !== '') {
            setFilteredProducts(filteredByCategory.filter((product) => product.name.toLowerCase().includes(searchKeyword.toLowerCase())))
        } else {
            setFilteredProducts(filteredByCategory)
        }
    }

    return (
        <div className="flex flex-col max-w-screen-lg min-h-fit mx-auto mb-8 space-y-8 px-6 lg:px-8 w-full">
            {/* CATEGORY BUTTONS */}
            <div className="flex justify-center mt-24">
                <CategoryList categories={categories} selectedCategory={selectedCategory} onClick={(category) => handleCategory(category)}/>
            </div>
            {/* SEARCH BAR */}
            <TextInput
                id="search"
                type="text"
                placeholder="Cari nama produk..."
                value={searchKeyword}
                onChange={(event) => handleSearch(event)}
            >
                <SearchSVG className="w-4 h-4 opacity-70" />
            </TextInput>
            {/* PRODUCT LIST */}
            {(() => {
                if (filteredProducts.length === 0) {
                    return (
                        <section className="card border-2 border-warning">
                            <div className="card-body gap-y-4 p-8">
                                <div className="flex gap-x-2 items-center">
                                    <InfoSVG className="w-8 h-8 stroke-warning" />
                                    <div className="font-bold text-center">{`Tidak ada produk dengan nama "${searchKeyword}"`}</div>
                                </div>
                            </div>
                        </section>
                    )
                }
                
                if (filteredProducts.length > 0) {
                    return (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-stretch items-center content-center justify-center self-center">
                            {filteredProducts.map((product) => (
                                <ProductItem
                                    key={product.id}
                                    id={product.id}
                                    name={product.name}
                                    description={product.description}
                                    imageSource={`${process.env.NEXT_PUBLIC_BACKEND_URL}/public/storage/product-images/${product.image}`}
                                    price={product.price}
                                    harvestedAt={product.harvested_at}
                                />
                            ))}
                        </div>
                    )
                }
                return <div>Something Went Wrong</div>
            })()}
        </div>
    )
}
