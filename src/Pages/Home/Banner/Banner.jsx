import { Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";

const Banner = () => {
  return (
    <div className="relative bg-gradient-to-r from-blue-500 to-indigo-500 ">
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center py-12 gap-4 sm:px-6 lg:px-8">
        <div className="lg:w-1/2">
          <h1 className="text-4xl font-bold text-white mb-4">
            Welcome to VroomVroomToy
          </h1>
          <p className="mt-3 max-w-lg text-xl text-slate-400 font-bold">
            The Ultimate Toy Store for Kids
          </p>
          <p className="mt-6 text-lg text-white">
            Discover a World of Fun and Imagination
          </p>
          <p className="mt-2 text-lg text-white">
            Explore Our Collection of Exciting Toys
          </p>
          <div className="mt-8">
            <Link
              to="/all-toys"
              className="text-lg px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-white rounded-full transition-colors duration-300"
            >
              Explore Our Toys
            </Link>
          </div>
          <div className="absolute top-0 right-0 py-4 pr-4">
            <Link to="/" className="text-white flex items-center">
              <FiShoppingCart className="mr-2" />
              <span className="font-semibold">View Cart</span>
            </Link>
          </div>
        </div>
        <div className="sm:w-1/2 w-[220px] rounded-xl">
          <img
            src={
              "https://images.unsplash.com/photo-1589677677517-5784e74efbaa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=398&q=80"
            }
            alt="Toy"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
