import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const MyToys = () => {
  const { user } = useAuth();
  const [toys, setToys] = useState([]);
  const [axiosSecure] = useAxiosSecure();

  const updateToy = () => {
    if (user)
      axiosSecure.get(`/my-toy/${user.email}`).then((res) => setToys(res.data));
  };
  useEffect(() => {
    if (user)
      axiosSecure.get(`/my-toy/${user.email}`).then((res) => setToys(res.data));
  }, [axiosSecure, user]);

  const handleDelete = (id) => {
    fetch(`http://localhost:5000/toy/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          alert("Deleted");
          updateToy();
        }
      });
  };

  return (
    <div className="my-40 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 p-8">
      <h2 className="text-4xl text-white font-bold mb-8">My Toys</h2>
      <div className="md:grid grid-cols-3 gap-4 justify-between">
        {toys.map((toy) => (
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
              <p className="text-gray-300">
                <small>Description: {toy?.detailDescription}</small>
              </p>
              <div className="card-actions flex justify-end mt-4">
                <Link to={`/toy/update/${toy._id}`}>
                  <button className="btn bg-gradient-to-r from-yellow-100 via-yellow-600 to-orange-600">
                    Update
                  </button>
                </Link>
                <button
                  onClick={() => handleDelete(toy._id)}
                  className="btn bg-gradient-to-r from-red-500 via-pink-500 to-purple-500"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyToys;
