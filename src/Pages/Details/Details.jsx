import { useLoaderData } from "react-router-dom";

const Details = () => {
  const toy = useLoaderData();

  return (
    <div className="flex justify-center bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 py-1">
      <div className="card   bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 p-8 w-1/2  shadow-xl">
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
            {/* <Link to={`/toy/${toy._id}`}>
            <button className="btn bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">
              View Details
            </button>
          </Link> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
