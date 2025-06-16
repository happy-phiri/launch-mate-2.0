import { Link } from "react-router-dom";
import { TbError404 } from "react-icons/tb";
import notFoundImage from "../assets/404-error.svg"; // 👈 download & save the SVG locally

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white font-montserrat text-prussian-blue px-4 text-center">
      <img
        src={notFoundImage}
        alt="Page Not Found"
        className="w-full max-w-md mb-6"
      />
      <TbError404 className="text-[60px] text-blue-green mb-2" />
      <h1 className="text-3xl font-bold mb-1">Oops! Page Not Found</h1>
      <p className="text-gray-600 mb-6 max-w-md">
        The page you’re looking for doesn’t exist or might have been moved.
      </p>
      <Link
        to="/"
        relative="path"
        className="inline-block bg-blue-green text-white px-6 py-3 rounded-md hover:opacity-90 transition font-montserrat tracking-wide">
        Go Back
      </Link>
    </div>
  );
};

export default NotFound;
