import solutionImage from "../../assets/guide-images/solution.svg";
import { solutionStructure, solutionPitfalls } from "../../data";
import CanvasBlocksCard from "../../components/CanvasBlocksCard";
import { FaExclamationTriangle, FaLightbulb } from "react-icons/fa";
import BackButton from "../../components/BackButton";
import NextButton from "../../components/NextButton";
import useDocumentTitle from "../../components/hooks/useDocumentTitle";
import useScrollToTop from "../../components/hooks/useScrollToTop";

const Solution = () => {
  useDocumentTitle(`Launch Mate | Guide - Solution`);
  useScrollToTop();

  return (
    <section className="font-montserrat px-6 space-y-8 pb-20">
      {/* ILLUSTRATION */}
      <div>
        <img
          src={solutionImage}
          alt="man faced with a question"
          className="w-[60%] max-w-md mx-auto"
        />
        <a
          href="https://storyset.com/business"
          target="_blank"
          className="text-gray-400 text-[10px] block text-center mt-2">
          Business illustrations by Storyset
        </a>
      </div>

      {/* INTRO SECTION */}
      <div className="space-y-6 max-w-4xl mx-auto">
        <h1 className="text-3xl lg:text-3xl font-bold text-prussian-blue">
          Understanding the Solution
        </h1>
        <p className="text-gray-700 font-quicksand tracking-wide text-base">
          The Solution block describes how you intend to solve the problems
          you've identified — not in full technical detail, but as a high-level
          overview of your approach. It’s not a full product roadmap — just the
          minimum set of features or methods that solve the problem clearly and
          effectively.
        </p>
      </div>

      {/* SOLUTION SECTION */}
      <div className="space-y-2 max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold text-prussian-blue">
          Structuring Your Solution
        </h2>
        <p className="text-gray-700 font-quicksand">
          A well-structured solution directly addresses each problem, keeps
          things lean, and is easy to understand. Use this section to sketch the
          simplest version of your product or service.
        </p>

        <ul className="space-y-4">
          {solutionStructure.map((item, idx) => (
            <li
              key={idx}
              className="flex gap-3 items-start bg-sky-blue/10 shadow-md p-6 rounded-md">
              <FaLightbulb className="text-blue-green mt-1 shrink-0" />
              <div>
                <p className="font-semibold text-prussian-blue">{item.title}</p>
                <p className="text-gray-700 font-quicksand mb-2">
                  {item.description}
                </p>
                <pre className="bg-white border border-blue-green/30 rounded px-4 py-2 text-sm text-gray-800 font-mono whitespace-pre-wrap">
                  {item.example}
                </pre>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* PITFALLS TO AVOID */}
      <div className="space-y-4 max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold text-prussian-blue flex flex-row items-center gap-2.5">
          <FaExclamationTriangle />
          Pitfalls to Avoid
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          {solutionPitfalls.map((pitfall) => (
            <CanvasBlocksCard item={pitfall} key={pitfall.label} />
          ))}
        </div>
      </div>

      {/* CTA / TRANSITION */}
      <div className="max-w-4xl mx-auto text-center space-y-4 mt-12">
        <p className="text-base font-quicksand text-gray-700 tracking-wide">
          Now that you've mapped out the core features of your{" "}
          <span className="font-semibold text-prussian-blue">Solution</span>,
          it's time to decide how you'll reach the people who need it most.
          Let’s move on to your{" "}
          <span className="font-semibold text-prussian-blue">Channels</span>.
        </p>

        <div className="flex justify-center gap-4 mt-4">
          <BackButton path="../uvp" />
          <NextButton path="../channels" />
        </div>
      </div>
    </section>
  );
};

export default Solution;
