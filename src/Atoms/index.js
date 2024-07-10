import "../index.css";

const ProductCard= ({image,price,category,description,onAddToCart})=>{

    return(
        <div>
            <img src={image} alt={price} />
            <h2>{category} {price}</h2>
            <h3>{description}</h3>
            <button className="add-to-cart-btn" onClick={onAddToCart}>Add to Cart</button>
        </div>
    );
};
export default ProductCard;