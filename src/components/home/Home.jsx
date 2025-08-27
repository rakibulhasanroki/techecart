import banner from "../../assets/banner.png";

function Home() {
  return (
    <section>
      <div className="lg:min-h-screen">
        <div className="2xl:h-[650px]  h-[550px] md:h-[450px] lg:h-[550px] bg-purple-700 rounded-b-3xl text-center relative ">
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
          <div className="flex justify-center">
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
      <div className="my-16 md:mt-40 lg:mt-0 xl:mt-4 ">
        <h1 className="text-4xl font-bold text-center">
          Explore Cutting-Edge Gadgets
        </h1>
        <div className="flex justify-between mt-8">
          <aside className="flex flex-col w-/12 gap-4">
            <button className="btn">All Product</button>
            <button className="btn">All Product</button>
            <button className="btn">All Product</button>
            <button className="btn">All Product</button>
            <button className="btn">All Product</button>
            <button className="btn">All Product</button>
            <button className="btn">All Product</button>
          </aside>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 flex-1 max-w-10/12 gap-4">
            <div className="border p-4 rounded-2xl">
              <small>img</small>
              <h1>Dell</h1>
              <p>price: 77.7k</p>
              <button className="btn-accent">View details</button>
            </div>
            <div className="border p-4 rounded-2xl ">
              <small>img</small>
              <h1>Dell</h1>
              <p>price: 77.7k</p>
              <button className="btn-accent">View details</button>
            </div>
            <div className="border p-4 rounded-2xl">
              <small>img</small>
              <h1>Dell</h1>
              <p>price: 77.7k</p>
              <button className="btn-accent">View details</button>
            </div>
            <div className="border p-4 rounded-2xl">
              <small>img</small>
              <h1>Dell</h1>
              <p>price: 77.7k</p>
              <button className="btn-accent">View details</button>
            </div>
            <div className="border p-4 rounded-2xl">
              <small>img</small>
              <h1>Dell</h1>
              <p>price: 77.7k</p>
              <button className="btn-accent">View details</button>
            </div>

            <div className="border p-4 rounded-2xl">
              <small>img</small>
              <h1>Dell</h1>
              <p>price: 77.7k</p>
              <button className="btn-accent">View details</button>
            </div>
            <div className="border p-4 rounded-2xl">
              <small>img</small>
              <h1>Dell</h1>
              <p>price: 77.7k</p>
              <button className="btn-accent">View details</button>
            </div>
            <div className="border p-4 rounded-2xl">
              <small>img</small>
              <h1>Dell</h1>
              <p>price: 77.7k</p>
              <button className="btn-accent">View details</button>
            </div>
            <div className="border p-4 rounded-2xl">
              <small>img</small>
              <h1>Dell</h1>
              <p>price: 77.7k</p>
              <button className="btn-accent">View details</button>
            </div>
            <div className="border p-4 rounded-2xl">
              <small>img</small>
              <h1>Dell</h1>
              <p>price: 77.7k</p>
              <button className="btn-accent">View details</button>
            </div>
            <div className="border p-4 rounded-2xl">
              <small>img</small>
              <h1>Dell</h1>
              <p>price: 77.7k</p>
              <button className="btn-accent">View details</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
