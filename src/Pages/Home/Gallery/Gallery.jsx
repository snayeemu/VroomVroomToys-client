import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";
import { useState } from "react";
import { useEffect } from "react";

const Gallery = () => {
  const [toys, setToys] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/toys")
      .then((res) => res.json())
      .then((toys) => setToys(toys));
  }, []);

  return (
    <section className="bg-gradient-to-b from-blue-500 to-blue-600 py-12 mt-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-white mb-6">Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {toys.map((toy) => (
            <Link
              key={toy?._id}
              to={`/toys/${toy?._id}`}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg"
            >
              <img
                src={toy.toyPhoto}
                alt={toy.name}
                className="h-48 w-full object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {toy.name}
                </h3>
                <p className="text-gray-600 mb-4">{toy.category}</p>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">View Details</span>
                  <FaChevronRight className="text-gray-600" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
