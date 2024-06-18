"use client"

export default function CategoryItem({category, selectedCategory, onClick}) {
    return (
        <button data-category={category} onClick={(event) => onClick(event.target.dataset.category)} className={"btn justify-start " + (selectedCategory === category ? "btn-primary" : "btn-ghost hover:text-primary")}>
            {category}
        </button>
    )
}