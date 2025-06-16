import { Link } from "react-router-dom";
import { GrLinkNext } from "react-icons/gr";

const NextButton = ({ path, label }) => {
  return (
    <Link
      to={path}
      className="flex flex-row items-center gap-2.5 font-montserrat border-selective-yellow border-[1px] hover:text-selective-yellow text-prussian-blue px-6 py-3 rounded-lg">
      {label || "Next"}
      {!label && (
        <span role="img" aria-label="back">
          <GrLinkNext />
        </span>
      )}
    </Link>
  );
};

export default NextButton;
