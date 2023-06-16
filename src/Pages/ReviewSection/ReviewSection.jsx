import { FaStar } from "react-icons/fa";

const ReviewSection = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-yellow-300 via-red-500 to-pink-500">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-white mb-8">Customer Reviews</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center mb-4">
              <FaStar className="text-yellow-400 mr-1" />
              <FaStar className="text-yellow-400 mr-1" />
              <FaStar className="text-yellow-400 mr-1" />
              <FaStar className="text-yellow-400 mr-1" />
              <FaStar className="text-yellow-400" />
            </div>
            <p className="text-gray-800 mb-4">
              {`"The toys from VroomVroomToys are amazing! My kids love them and
              can't get enough. Highly recommended!"`}
            </p>
            <p className="text-gray-600 font-medium">
              - Emily Johnson, New York
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center mb-4">
              <FaStar className="text-yellow-400 mr-1" />
              <FaStar className="text-yellow-400 mr-1" />
              <FaStar className="text-yellow-400 mr-1" />
              <FaStar className="text-yellow-400" />
              <FaStar className="text-yellow-400" />
            </div>
            <p className="text-gray-800 mb-4">
              {`"Great quality toys with fast shipping. My kids are having a blast
              playing with them. Thank you, VroomVroomToys!"`}
            </p>
            <p className="text-gray-600 font-medium">
              - Michael Davis, Los Angeles
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewSection;
