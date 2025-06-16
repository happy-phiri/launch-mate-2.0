import costsImage from "../../assets/guide-images/costs.svg";
import { costStructure, costPitfalls } from "../../data";
import CanvasBlocksCard from "../../components/CanvasBlocksCard";
import {
  FaExclamationTriangle,
  FaLightbulb,
  FaMoneyBillWave,
  FaQuestionCircle,
} from "react-icons/fa";
import BackButton from "../../components/BackButton";
import NextButton from "../../components/NextButton";
import useDocumentTitle from "../../components/hooks/UseDocumentTitle";
import useScrollToTop from "../../components/hooks/useScrollToTop";

const Costs = () => {
  useDocumentTitle(`Launch Mate | Guide - Cost Structure`);
  useScrollToTop();

  return (
    <section className="font-montserrat px-6 space-y-8 pb-20">
      {/* ILLUSTRATION */}
      <div>
        <img
          src={costsImage}
          alt="man faced with a question"
          className="w-[60%] max-w-md mx-auto"
        />
        <a
          href="https://storyset.com/people"
          target="_blank"
          className="text-gray-400 text-[10px] block text-center mt-2">
          People illustrations by Storyset
        </a>
      </div>

      {/* INTRO SECTION */}
      <div className="space-y-6 max-w-4xl mx-auto">
        <h1 className="text-3xl lg:text-3xl font-bold text-prussian-blue">
          What Will It Cost to Build and Run This?
        </h1>
        <p className="text-gray-700 font-quicksand tracking-wide text-base">
          Understanding your Cost Structure helps you plan for sustainability.
          It answers:{" "}
          <span className="font-bold italic">
            What will it cost to build, deliver, and support your solution?
          </span>{" "}
          Without knowing your costs, it’s hard to price effectively or measure
          profitability.
        </p>
      </div>

      {/* STRUCTURING COST PLAN */}
      <div className="space-y-2 max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold text-prussian-blue">
          Structuring Your Cost Plan
        </h2>
        <p className="text-gray-700 font-quicksand">
          Understanding your core costs early helps you make smarter decisions
          and spot what it’ll take to stay sustainable.
        </p>

        <ul className="space-y-4">
          {costStructure.map((item, idx) => (
            <li
              key={idx}
              className="flex gap-3 items-start bg-sky-blue/10 shadow-md p-6 rounded-md">
              <FaMoneyBillWave className="text-blue-green mt-1 shrink-0" />
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
          {costPitfalls.map((pitfall) => (
            <CanvasBlocksCard item={pitfall} key={pitfall.label} />
          ))}
        </div>
      </div>

      {/* CTA / TRANSITION */}
      <div className="max-w-4xl mx-auto text-center space-y-4 mt-12">
        <p className="text-base font-quicksand text-gray-700 tracking-wide">
          Now that you've mapped out your main costs, it's time to figure out
          what really matters. What numbers will help you track progress and
          spot problems early? Let’s move on to your{" "}
          <span className="font-semibold text-prussian-blue">Key Metrics</span>.
        </p>

        <div className="flex justify-center gap-4 mt-4">
          <BackButton path="../revenue" />
          <NextButton path="../keymetrics" />
        </div>
      </div>
    </section>
  );
};

export default Costs;
