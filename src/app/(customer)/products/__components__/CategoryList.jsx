"use client"

import CategoryItem from "./CategoryItems"

export default function CategoryList ({categories, selectedCategory, onClick}) {
    return (
        <div className="space-x-2">
            {categories.map((category) => (
                <CategoryItem
                    key={category}
                    selectedCategory={selectedCategory}
                    category={category}
                    onClick={onClick}
                />
            ))}
        </div>
    )
}