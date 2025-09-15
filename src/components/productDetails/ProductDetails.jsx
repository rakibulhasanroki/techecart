import { useLoaderData } from "react-router";

function ProductDetails() {
  const products = useLoaderData();

  return (
    <div>
      <div className="bg-purple-700 text-center text-white ">
        <h1 className="text-3xl font-bold">Product Details</h1>
        <p className="max-w-6/12 mx-auto">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
      </div>
      {products.map((product) => (
        <div></div>
      ))}
    </div>
  );
}

export default ProductDetails;
