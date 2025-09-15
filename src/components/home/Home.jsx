import banner from "../../assets/banner.png";
import { useLoaderData } from "react-router";
import ProductCard from "../productCard/ProductCard";
import ProductButton from "../productButton/ProductButton";
import { useEffect, useState } from "react";

function Home() {
  const products = useLoaderData();
  const [categoryProduct, setCategoryProduct] = useState();

  const handleButton = (category) => {
    const filterProduct =
      category.id === 0
        ? products
        : products.filter((product) => product.category_id === category.id);
    setCategoryProduct(filterProduct);
  };

  useEffect(() => {
    setCategoryProduct(products);
  }, []);

  return (
    <section>
      <div className="lg:min-h-screen">
        <div className="2xl:h-[650px]  h-[500px] md:h-[450px] lg:h-[550px] bg-purple-700 rounded-b-3xl text-center relative ">
          <h1 className="max-w-8/12  2xl:text-6xl text-3xl md:text-4xl lg:pt-10 font-bold text-white mx-auto">
            Upgrade Your Tech Accessorize with Gadget Heaven Accessories
          </h1>
          <p className="md:mt-8 mt-4 max-w-6/12 mx-auto text-gray-300 lg:text-xl text-sm">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to the coolest accessories, we have
            it all!
          </p>
          <button className="btn btn-soft md:mt-8 mt-4 text-purple-700 rounded-4xl">
            Shop Now
          </button>
          <div className="md:flex justify-center hidden">
            <div className="absolute max-w-8/12 p-4 border-white border rounded-2xl  xl:-bottom-1/2 -bottom-1/12 md:-bottom-4/12 lg:-bottom-5/12 bg-transparent ">
              <img
                src={banner}
                alt="banner image loading"
                className="object-cover w-full rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="my-16 md:mt-40 lg:mt-0 xl:mt-20 ">
        <h1 className="text-4xl font-bold text-center">
          Explore Cutting-Edge Gadgets
        </h1>
        <div className="flex justify-between mt-8 flex-col gap-4 md:flex-row items-center md:items-start ">
          <ProductButton handleButton={handleButton}></ProductButton>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 flex-1 max-w-10/12 gap-4">
            {categoryProduct &&
              categoryProduct.map((product, index) => (
                <ProductCard product={product} key={index} />
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
