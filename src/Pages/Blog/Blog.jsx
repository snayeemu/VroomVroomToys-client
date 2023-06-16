import { FiArrowLeft } from "react-icons/fi";
import { GiPathDistance } from "react-icons/gi";
import { RiDatabaseLine } from "react-icons/ri";
import { AiOutlineApi } from "react-icons/ai";
import { FaDatabase } from "react-icons/fa";
import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <div className="bg-gradient-to-r from-yellow-300 via-red-500 to-pink-500 min-h-screen flex flex-col items-center justify-center">
      <header className="py-4 px-6 bg-white">
        <Link to={"/"}>
          <button className="text-lg text-gray-700 hover:text-gray-900">
            <FiArrowLeft className="inline-block -mt-1 mr-1" />
            Back to Home
          </button>
        </Link>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-white mb-8">
          Welcome to My Blog
        </h2>

        <div className="bg-white p-6 rounded-lg">
          <h3 className="text-xl font-bold mb-4">Questions and Answers:</h3>
          <ul className="list-disc list-inside">
            <li>
              <h4 className="text-blue-500 font-bold cursor-pointer hover:underline">
                What is an access token and refresh token? How do they work and
                where should we store them on the client-side?
              </h4>
              <p className="text-gray-700">
                Access tokens and refresh tokens are commonly used in
                authentication systems. An access token is a credential that is
                issued to a user after successful authentication. It is used to
                access protected resources on behalf of the user. A refresh
                token is a long-lived credential that can be used to obtain a
                new access token once the original token expires. Access tokens
                should be stored on the client-side, typically in memory or
                browser storage, while refresh tokens should be securely stored
                on the server-side.
              </p>
              <GiPathDistance className="text-6xl text-yellow-500 mx-auto mt-4" />
            </li>
            <li>
              <h4 className="text-blue-500 font-bold cursor-pointer hover:underline">
                Compare SQL and NoSQL databases.
              </h4>
              <p className="text-gray-700">
                SQL (Structured Query Language) and NoSQL (Not Only SQL) are two
                types of database management systems. SQL databases are
                relational databases that use structured schemas and tables to
                store data. They are suitable for complex transactions and
                maintaining data integrity. NoSQL databases, on the other hand,
                are non-relational databases that provide flexible schemas and
                scalability. They are suitable for handling large amounts of
                unstructured or semi-structured data and have high performance
                and scalability.
              </p>
              <RiDatabaseLine className="text-6xl text-red-500 mx-auto mt-4" />
            </li>
            <li>
              <h4 className="text-blue-500 font-bold cursor-pointer hover:underline">
                What is Express.js? What is NestJS?
              </h4>
              <p className="text-gray-700">
                Express.js is a popular web application framework for Node.js.
                It provides a simple and minimalist approach to building web
                servers and APIs. Express.js allows developers to handle HTTP
                requests and responses, define routes, and implement middleware
                for additional functionality. NestJS is a progressive Node.js
                framework for building scalable and efficient server-side
                applications. It is built on top of Express.js and provides a
                modular and structured architecture inspired by Angular. NestJS
                leverages {"TypeScript's"} features, dependency injection, and
                decorators to enhance developer productivity and
                maintainability.
              </p>
              <AiOutlineApi className="text-6xl text-blue-500 mx-auto mt-4" />
            </li>
            <li>
              <h4 className="text-blue-500 font-bold cursor-pointer hover:underline">
                What is MongoDB aggregate and how does it work?
              </h4>
              <p className="text-gray-700">
                MongoDB aggregate is a powerful feature of the MongoDB database
                that allows for advanced data aggregation and processing. It
                provides a way to perform complex data analysis operations, such
                as grouping, filtering, and transforming data, using a pipeline
                of stages. The aggregation pipeline consists of multiple stages,
                where each stage performs a specific operation on the input
                documents and passes the results to the next stage. These stages
                can include operations like $match (filtering documents), $group
                (grouping documents), $project (projecting specific fields),
                $sort (sorting documents), and many more. By chaining together
                multiple stages, developers can create sophisticated data
                processing pipelines to extract valuable insights from their
                MongoDB collections.
              </p>
              <FaDatabase className="text-6xl text-purple-500 mx-auto mt-4" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Blog;
