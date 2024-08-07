import "./index.css";
import { useGetProducts } from "./hooks/useGetProducts";
import ProductCard from "../Atoms";
import { useState } from "react";

const Products = () =>{
    const { products, error, loading } = useGetProducts();
    const [items, setItems]=useState([]);
    const addToCart = (product)=>{
      setItems([...items,product])
    }

  console.log({ products });
  return (
    <div className="product-images">
      {loading && <h2>Loading Products...</h2>}
      {error && <h2>{error}</h2>}
      {products.length > 0
        ? products.map((product) => (
            <ProductCard
              key={product.id}
              image={product.image}
              price={product.price}
              category={product.category}
              description ={product.title}
              onAddToCart={()=>addToCart(product)}
            />
          ))
        : !loading && <h2>No products found</h2>}
    </div>
  );
};

export default Products;