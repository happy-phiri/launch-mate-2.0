import { Link } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";

const BackButton = ({ path }) => {
  return (
    <Link
      to={path}
      relative="path"
      className="bg-blue-green font-montserrat flex flex-row items-center gap-2.5 border-[1px] hover:opacity-90 text-amber-50 px-6 py-3 rounded-lg hover:bg-sky-blue">
      <span role="img" aria-label="back">
        <IoArrowBack />
      </span>
      Back
    </Link>
  );
};

export default BackButton;
