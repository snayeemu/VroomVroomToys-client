import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="ps-8 bg-gradient-to-r from-purple-500 to-pink-500 text-white mt-40">
        <div className="container mx-auto py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold mb-4">VroomVroomToys</h3>
              <p className="text-gray-300">
                Your one-stop destination for car toys.
              </p>
            </div>
            <div className="md:col-span-1">
              <h3 className="text-xl font-bold mb-4">Explore</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/products">Products</Link>
                </li>
                <li>
                  <Link to="/about">About Us</Link>
                </li>
                <li>
                  <Link to="/contact">Contact Us</Link>
                </li>
              </ul>
            </div>
            <div className="md:col-span-1">
              <h3 className="text-xl font-bold mb-4">Connect with Us</h3>
              <ul className="flex space-x-4">
                <li>
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaFacebook></FaFacebook>
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaTwitter></FaTwitter>
                  </a>
                </li>
                <li>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaInstagram></FaInstagram>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      <div className="bg-gray-800 text-white py-4 text-center text-sm">
        &copy; {new Date().getFullYear()} VroomVroomToys. All rights reserved.
      </div>
    </>
  );
};

export default Footer;
