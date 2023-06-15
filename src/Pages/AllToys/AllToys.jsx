import { useEffect, useState } from "react";

const AllToys = () => {
  const [toys, setToys] = useState([]);

  useEffect(() => {
    fetch("fakeData.json")
      .then((res) => res.json())
      .then((toys) => setToys(toys));
  }, []);

  return (
    <div className="my-40 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 p-8">
      <h2 className="text-4xl text-white font-bold mb-8">All Toys</h2>
      <div className="md:grid grid-cols-3 gap-4 justify-between">
        {toys.map((toy) => (
          <div
            key={toy?._id}
            className="card bg-black text-white bg-opacity-80 w-96 shadow-xl"
          >
            <figure>
              <img src={toy?.toyPhoto} alt="Instructor" />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-xl font-bold mb-4">{toy?.name}</h2>
              <p className="text-gray-300">Seller Name: {toy?.sellerName}</p>
              <p className="text-gray-300">Sub-Category: {toy?.subCategory}</p>
              <p className="text-gray-300">Price: {toy?.price}</p>
              <p className="text-gray-300">
                Available Quantity: {toy?.availableQuantity}
              </p>
              <div className="card-actions flex justify-end mt-4">
                <button className="btn bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllToys;
