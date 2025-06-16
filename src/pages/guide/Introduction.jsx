import { Link } from "react-router-dom";
import { blocks } from "../../data";
import CanvasBlocksCard from "../../components/CanvasBlocksCard";
import leanCanvasImage from "../../assets/guide-images/leancanvas_page.jpg";
import useDocumentTitle from "../../components/hooks/UseDocumentTitle";
import useScrollToTop from "../../components/hooks/useScrollToTop";

const Introduction = () => {
  useDocumentTitle("Launch Mate | Guide - Introduction");
  useScrollToTop();

  return (
    <section className="font-montserrat px-6 py-5 space-y-5">
      <img
        src={leanCanvasImage}
        alt="lean canvas template"
        className="w-[90%] rounded-2xl shadow-lg"
      />
      {/* INTRO SECTION */}
      <div className="space-y-4 max-w-4xl mt-8">
        <h1 className="text-3xl lg:text-4xl font-bold text-prussian-blue">
          Introduction to the Lean Canvas
        </h1>
        <p className=" text-gray-700 font-quicksand">
          The Lean Canvas is a one-page business planning tool designed to help
          entrepreneurs map out their ideas quickly and clearly. Developed by{" "}
          <a
            href="https://leanfoundry.com/about"
            target="_blank"
            className="text-blue-green underline font-semibold">
            Ash Maurya
          </a>
          , it adapts the traditional Business Model Canvas specifically for
          lean startups. Instead of lengthy business plans, the Lean Canvas
          gives you a concise snapshot of your idea—focusing on the essentials:
          problems, customers, solutions, and traction.
        </p>
      </div>

      {/* PURPOSE */}
      <div className="space-y-4 max-w-4xl">
        <h2 className="text-2xl font-semibold text-prussian-blue">
          Why Use the Lean Canvas?
        </h2>
        <p className="text-gray-700 text-md font-quicksand">
          Unlike traditional business plans, which can be lengthy and complex,
          the Lean Canvas emphasizes speed, clarity, and adaptability.
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-700 font-quicksand">
          <li>Ideal for early-stage startups</li>
          <li>Simple and easy to update</li>
          <li>Encourages evidence-based thinking</li>
          <li>Helps communicate your idea clearly</li>
          <li>Focuses on customer problems and solutions</li>
          <li>Enables fast iteration based on feedback</li>
        </ul>
      </div>

      {/* BREAKDOWN */}
      <div className="my-12">
        <h2 className="text-2xl font-semibold text-prussian-blue mb-6 font-montserrat">
          The 9 Building Blocks
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {blocks.map((block) => (
            <CanvasBlocksCard item={block} key={block.label} />
          ))}
        </div>
      </div>

      {/* CTA SECTION */}
      <div className="text-center max-w-2xl mx-auto space-y-4">
        <h2 className="text-2xl font-semibold text-prussian-blue">
          Built for Founders Like You
        </h2>
        <p className="text-gray-700 font-quicksand">
          Whether you're validating your idea or pitching to investors, the Lean
          Canvas helps you get clarity—fast. Ideal for solo founders, small
          teams, and anyone building something new.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center font-montserrat">
          <Link
            to="problem"
            className="bg-blue-green border-[1px] hover:opacity-90 text-amber-50 px-6 py-3 rounded-lg hover:bg-sky-blue">
            Explore the Guide
          </Link>
          <Link
            to="/generate-canvas"
            className="border-blue-green border-[1px] hover:text-blue-green text-prussian-blue px-6 py-3 rounded-lg">
            Create Your Canvas
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
