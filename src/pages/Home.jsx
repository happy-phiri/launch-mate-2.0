import { Link } from "react-router-dom";
import { IoRocketSharp } from "react-icons/io5";
import { SlDirections } from "react-icons/sl";
import launchingImg from "../assets/Launching-amico.svg";
import useDocumentTitle from "../components/hooks/useDocumentTitle";
import useScrollToTop from "../components/hooks/useScrollToTop";

const Home = () => {
  useDocumentTitle(`Launch Mate | Home`);
  useScrollToTop();

  return (
    <section className="min-h-screen min-xl:px-0 px-6 pt-12 pb-20 font-montserrat flex flex-col-reverse lg:flex-row items-center lg:items-center lg:gap-6 gap-12 max-w-[1440px] mx-auto">
      {/* TEXT SECTION */}
      <div className="flex-1 text-center lg:text-left">
        <p className="inline-block mb-4 text-xs font-medium text-blue-green bg-sky-blue/30 px-4 py-2 rounded-lg tracking-wider shadow-sm border-blue-green/20 border-[1px]">
          Free Lean Canvas Generator
        </p>

        <h1 className="font-bold text-prussian-blue text-4xl md:text-5xl text-shadow-sm tracking-wide leading-tight mb-4">
          Start Planning Your Startup{" "}
          <span className="block">
            — the <span className="text-blue-green">Right Way</span>
          </span>
        </h1>

        <h2 className="text-gray-500 text-lg md:text-xl mb-4">
          <span className="text-selective-yellow font-semibold">
            Plan smarter
          </span>
          . <span className="text-blue-green font-semibold">Launch faster</span>
          .
        </h2>

        <p className="text-gray-600 text-lg md:text-xl font-quicksand mb-8 max-w-xl lg:mx-0 mx-auto tracking-wide">
          No fluff. Just a{" "}
          <span className="text-prussian-blue font-bold">clear</span>,{" "}
          <span className="text-prussian-blue font-bold">structured</span> path
          to <span className="text-prussian-blue font-bold">organize</span> and{" "}
          <span className="text-prussian-blue font-bold">validate</span> your
          business ideas using the{" "}
          <span className="text-prussian-blue font-bold">Lean Canvas</span>{" "}
          model.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 font-montserrat text-md tracking-wider justify-center lg:justify-start w-full mt-4">
          <Link
            to="/guide"
            className="flex items-center justify-center gap-2 bg-blue-green border border-blue-green hover:opacity-90 text-amber-50 px-6 py-3 rounded-lg shadow-md transition hover:shadow-lg">
            <SlDirections className="text-amber-50 text-2xl" />
            Get Started Guide
          </Link>
          <Link
            to="/generate-canvas"
            className="flex items-center justify-center gap-2 border border-selective-yellow hover:opacity-90 hover:text-selective-yellow/80 text-prussian-blue px-6 py-3 rounded-lg shadow-md transition hover:shadow-lg">
            <IoRocketSharp className="text-inherit text-2xl" />
            Create Your Canvas
          </Link>
        </div>

        <p className="text-sm text-gray-500 tracking-wide mt-4">
          No signup required. Start now.
        </p>
      </div>

      {/* ILLUSTRATION SECTION */}
      <div className="flex-1 flex justify-center lg:justify-center w-full">
        <img
          src={launchingImg}
          alt="boy launching a rocket"
          className=" animate-fade-in"
        />
      </div>
    </section>
  );
};

export default Home;
