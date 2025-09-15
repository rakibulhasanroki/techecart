import { Link } from "react-router";

function ProductCard({ product }) {
  const { product_image, product_title, price, product_id } = product;

  return (
    <div className="border p-4 rounded-2xl">
      <img
        src={product_image}
        alt="product image is loading"
        className="w-96 h-48  rounded-2xl"
      />
      <h1>{product_title}</h1>
      <p>{price}</p>
      <Link to={`productDetails/${product_id}`}>
        <button className="btn">View details</button>
      </Link>
    </div>
  );
}

export default ProductCard;
