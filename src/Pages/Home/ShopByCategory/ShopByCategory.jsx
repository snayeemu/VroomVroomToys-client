import { useState } from "react";
import { BsStarFill } from "react-icons/bs";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const ShopByCategory = () => {
  const [activeTab, setActiveTab] = useState("Remote Control Cars");
  const [toys, setToyData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/toys")
      .then((res) => res.json())
      .then((toys) => setToyData(toys));
  }, []);

  return (
    <div className="my-20">
      <h2 className="text-5xl mb-5 text-blue-600">Shop by Category</h2>
      <div className="space-x-4">
        <button
          onClick={() => setActiveTab("Remote Control Cars")}
          className={`btn mb-3 ${
            activeTab === "Remote Control Cars" &&
            "btn-active border-red-600 shadow-xl "
          }`}
        >
          Remote Control Cars
        </button>

        <button
          onClick={() => setActiveTab("Pull-Back Cars")}
          className={`btn mb-3 ${
            activeTab === "Pull-Back Cars" &&
            "btn-active border-red-600 shadow-xl "
          }`}
        >
          Pull-Back Cars
        </button>

        <button
          onClick={() => setActiveTab("Transforming Cars")}
          className={`btn mb-3 ${
            activeTab === "Transforming Cars" &&
            "btn-active border-red-600 shadow-xl "
          }`}
        >
          Transforming Cars
        </button>
      </div>
      <div className="grid grid-cols-3 gap-4 ">
        {toys.map(
          (toy, index) =>
            toy.subCategory === activeTab && (
              <div key={index} className="p-4 bg-white shadow-md rounded-lg">
                <img
                  src={toy.toyPhoto}
                  alt={toy.name}
                  className="w-full h-32 object-cover mb-4"
                />
                <h3 className="text-lg font-medium">{toy.name}</h3>
                <h3 className="text-lg font-medium">{toy.subCategory}</h3>
                <p className="text-gray-500 mb-2">${toy.price}</p>
                <div className="flex items-center mb-2">
                  {Array.from({ length: Math.floor(toy.rating) }).map(
                    (_, index) => (
                      <BsStarFill
                        key={index}
                        className="text-yellow-500 mr-1"
                      />
                    )
                  )}
                </div>
                <Link to={`/toy/${toy?._id}`}>
                  <button className="btn btn-warning btn-sm">
                    View Details
                  </button>
                </Link>
              </div>
            )
        )}
      </div>
    </div>
  );
};

// Tab content component

export default ShopByCategory;
