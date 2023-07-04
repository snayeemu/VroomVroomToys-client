import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AllToys = () => {
  const [toys, setToys] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetch("https://toy-server-xi.vercel.app/toys")
      .then((res) => res.json())
      .then((toys) => setToys(toys.slice(0, 20)));
  }, []);

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredToys = toys.filter((toy) =>
    toy.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="my-40 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 p-8">
      <h2 className="text-4xl text-white font-bold mb-8">All Toys</h2>
      <div className="flex justify-center mb-4">
        <input
          type="text"
          className="bg-white border-2 border-gray-300 focus:outline-none focus:border-purple-500 rounded-lg py-2 px-4"
          placeholder="Search by Toy Name"
          value={searchQuery}
          onChange={handleSearchInputChange}
        />
        <button className="ml-4 bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded">
          Search
        </button>
      </div>
      <div className="flex flex-wrap gap-4 justify-center">
        {filteredToys.map((toy) => (
          <div
            key={toy?._id}
            className="card bg-black text-white bg-opacity-80 w-96 shadow-xl"
          >
            <figure>
              <img src={toy?.toyPhoto} alt="Toy" />
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
                <Link to={`/toy/${toy._id}`}>
                  <button className="btn bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">
                    View Details
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllToys;
