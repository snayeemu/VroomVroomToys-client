import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const UpdateToy = () => {
  const id = useParams();
  const navigate = useNavigate();
  const [price, setPrice] = useState(0);
  const [availableQuantity, setQuantity] = useState(0);
  const [detailDescription, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const toy = {
      id: id.id,
      price,
      availableQuantity,
      detailDescription,
    };

    fetch("https://toy-server-xi.vercel.app/update-toy", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(toy),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          alert("Toy updated successfully!");
          navigate("/");
        }
      });
  };

  return (
    <div className="flex justify-center my-8 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 py-8">
      <form className="max-w-md w-full" onSubmit={handleSubmit}>
        <h2 className="text-2xl font-bold mb-4 text-white">Add a Toy</h2>

        <div className="mb-4">
          <label htmlFor="price" className="block text-white">
            Price
          </label>
          <input
            type="number"
            id="price"
            className="form-input mt-1 block w-full border rounded focus:border-blue-500 focus:outline-none"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="quantity" className="block text-white">
            Available Quantity
          </label>
          <input
            type="number"
            id="quantity"
            className="form-input mt-1 block w-full border rounded focus:border-blue-500 focus:outline-none"
            value={availableQuantity}
            onChange={(e) => setQuantity(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block text-white">
            Detail Description
          </label>
          <textarea
            id="description"
            className="form-textarea mt-1 block w-full border rounded focus:border-blue-500 focus:outline-none"
            value={detailDescription}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Update
        </button>
      </form>
    </div>
  );
};

export default UpdateToy;
