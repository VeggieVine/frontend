import React, { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/action";
import Skeleton from "react-loading-skeleton";
import { Link } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [isLoading, setIsLoading] = useState(false);
  const isComponentMounted = useRef(true);

  const dispatch = useDispatch();

  const addToCart = (product) => {
    dispatch(addCart(product));
  };

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);
      const response = await fetch("https://fakestoreapi.com/products/");
      if (isComponentMounted.current) {
        const productsData = await response.json();
        setProducts(productsData);
        setFilteredProducts(productsData);
        setIsLoading(false);
      }
    };

    fetchProducts();

    return () => {
      isComponentMounted.current = false;
    };
  }, []);

  const LoadingSkeleton = () => (
    <>
      <div className="col-12 py-5 text-center">
        <Skeleton height={40} width={560} />
      </div>
      {[...Array(6)].map((_, index) => (
        <div key={index} className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
          <Skeleton height={592} />
        </div>
      ))}
    </>
  );

  const filterProducts = (category) => {
    const updatedList = products.filter((item) => item.category === category);
    setFilteredProducts(updatedList);
  };

  const DisplayProducts = () => (
    <>
      <div className="buttons text-center py-5">
        <button className="btn btn-outline-dark btn-sm m-2" onClick={() => setFilteredProducts(products)}>All</button>
        <button className="btn btn-outline-dark btn-sm m-2" onClick={() => filterProducts("men's clothing")}>Buah</button>
        <button className="btn btn-outline-dark btn-sm m-2" onClick={() => filterProducts("women's clothing")}>Sayur</button>
        <button className="btn btn-outline-dark btn-sm m-2" onClick={() => filterProducts("jewelery")}>Jewelery</button>
        <button className="btn btn-outline-dark btn-sm m-2" onClick={() => filterProducts("electronics")}>Electronics</button>
      </div>

      {filteredProducts.map((product) => (
        <div key={product.id} className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
          <div className="card text-center h-100" style={{ borderRadius: "15px", boxShadow: "0 4px 8px rgba(0,0,0,0.1)" }}>
            <img
              className="card-img-top p-3"
              src={product.image}
              alt={product.title}
              height={300}
              style={{ borderRadius: "15px 15px 0 0" }}
            />
            <div className="card-body">
              <h5 className="card-title" style={{ fontWeight: "bold" }}>
                {product.title.substring(0, 12)}...
              </h5>
              <p className="card-text" style={{ fontSize: "0.9rem" }}>
                {product.description.substring(0, 90)}...
              </p>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item lead" style={{ fontSize: "1.2rem", color: "#28a745", fontWeight: "bold" }}>$ {product.price}</li>
            </ul>
            <div className="card-body">
              <Link to={`/product/${product.id}`} className="btn btn-success m-1" style={{ backgroundColor: "#28a745", border: "none" }}>
                Buy Now
              </Link>
              <button className="btn btn-outline-success m-1" style={{ border: "2px solid #28a745", color: "#000" }} onClick={() => addToCart(product)}>
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );

  return (
    <div className="container my-3 py-3">
      <div className="row">
        <div className="col-12">
          <h2 className="display-5 text-center"style={{ color: 'green', fontSize: '2.5rem', fontWeight: 'bold', textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}>Kategori Produk</h2>
          <hr />
        </div>
      </div>
      <div className="row justify-content-center">
        {isLoading ? <LoadingSkeleton /> : <DisplayProducts />}
      </div>
    </div>
  );
};

export default Products;
