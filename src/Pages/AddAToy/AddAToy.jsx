import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import useAuth from "../../hooks/useAuth";

const AddToy = () => {
  const navigate = useNavigate();
  const { user: loggedInUser } = useAuth();
  const [toyPhoto, setPictureURL] = useState("");
  const [name, setName] = useState("");
  const [sellerName, setSellerName] = useState("");
  const [sellerEmail, setSellerEmail] = useState("");
  const [subCategory, setSubCategory] = useState("");
  const [price, setPrice] = useState(0);
  const [rating, setRating] = useState(0);
  const [availableQuantity, setQuantity] = useState(0);
  const [detailDescription, setDescription] = useState("");

  useEffect(() => {
    if (loggedInUser) {
      setSellerName(loggedInUser?.displayName);
      setSellerEmail(loggedInUser?.email);
    }
  }, [loggedInUser]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const toy = {
      toyPhoto,
      name,
      sellerName,
      sellerEmail,
      subCategory,
      price,
      rating,
      availableQuantity,
      detailDescription,
    };

    fetch("http://localhost:5000/toy", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(toy),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          alert("Toy added successfully!");
          navigate("/");
        }
      });
  };

  return (
    <div className="flex justify-center my-8 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 py-8">
      <form className="max-w-md w-full" onSubmit={handleSubmit}>
        <h2 className="text-2xl font-bold mb-4 text-white">Add a Toy</h2>
        <div className="mb-4">
          <label htmlFor="pictureURL" className="block text-white">
            Picture URL
          </label>
          <input
            type="text"
            id="pictureURL"
            className="form-input mt-1 block w-full border rounded focus:border-blue-500 focus:outline-none"
            value={toyPhoto}
            onChange={(e) => setPictureURL(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="name" className="block text-white">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="form-input mt-1 block w-full border rounded focus:border-blue-500 focus:outline-none"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="sellerName" className="block text-white">
            Seller Name
          </label>
          <input
            type="text"
            id="sellerName"
            className="form-input mt-1 block w-full border rounded focus:border-blue-500 focus:outline-none"
            value={sellerName}
            onChange={(e) => setSellerName(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="sellerEmail" className="block text-white">
            Seller Email
          </label>
          <input
            type="email"
            id="sellerEmail"
            className="form-input mt-1 block w-full border rounded focus:border-blue-500 focus:outline-none"
            value={sellerEmail}
            onChange={(e) => setSellerEmail(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="subCategory" className="block text-white">
            Sub-Category
          </label>
          <select
            id="subCategory"
            className="form-select mt-1 block w-full border rounded focus:border-blue-500 focus:outline-none"
            value={subCategory}
            onChange={(e) => setSubCategory(e.target.value)}
            required
          >
            <option value="">Select a sub-category</option>
            <option value="Option 1">Remote Control Cars</option>
            <option value="Option 2">Pull-Back Cars</option>
            <option value="Option 3">Transforming Cars</option>
          </select>
        </div>
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
          <label htmlFor="rating" className="block text-white">
            Rating
          </label>
          <input
            type="number"
            id="rating"
            className="form-input mt-1 block w-full border rounded focus:border-blue-500 focus:outline-none"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
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
          Add Toy
        </button>
      </form>
    </div>
  );
};

export default AddToy;
