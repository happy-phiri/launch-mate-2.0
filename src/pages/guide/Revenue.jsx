import revenueImage from "../../assets/guide-images/revenue.svg";
import { revenueTypes, revenueQuestions, revenuePitfalls } from "../../data";
import CanvasBlocksCard from "../../components/CanvasBlocksCard";
import {
  FaExclamationTriangle,
  FaLightbulb,
  FaMoneyBillWave,
  FaQuestionCircle,
} from "react-icons/fa";
import BackButton from "../../components/BackButton";
import NextButton from "../../components/NextButton";
import useDocumentTitle from "../../components/hooks/useDocumentTitle";
import useScrollToTop from "../../components/hooks/useScrollToTop";

const Revenue = () => {
  useDocumentTitle(`Launch Mate | Guide - Revenue Streams`);
  useScrollToTop();

  return (
    <section className="font-montserrat px-6 space-y-8 pb-20">
      {/* ILLUSTRATION */}
      <div>
        <img
          src={revenueImage}
          alt="woman on a call in front of store"
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
          How Will You Make Money?
        </h1>
        <p className="text-gray-700 font-quicksand tracking-wide text-base">
          This section forces you to think about your{" "}
          <span className="font-bold italic">business model</span>. A great idea
          needs a way to sustain itself financially. Whether it's a one-time
          sale, subscription, or freemium — clearly defining your revenue
          streams helps you stay focused and plan realistically.
        </p>
      </div>

      {/* TYPES OF REVENUE STREAMS */}
      <div className="space-y-2 max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold text-prussian-blue">
          Types of Revenue Streams
        </h2>
        <p className="text-gray-700 font-quicksand">
          Understanding the different ways to generate revenue helps you align
          your business model with how your customers prefer to pay.
        </p>

        <ul className="space-y-6">
          {revenueTypes.map((section, idx) => (
            <li
              key={idx}
              className="bg-sky-blue/10 shadow-md p-6 rounded-md space-y-2">
              <div className="flex items-center gap-2">
                <FaMoneyBillWave className="text-blue-green shrink-0" />
                <h3 className="text-lg font-semibold text-prussian-blue">
                  {section.title}
                </h3>
              </div>
              <p className="text-gray-700 font-quicksand mb-1">
                {section.description}
              </p>
              <ul className="list-disc list-inside text-gray-800 font-quicksand">
                {section.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>

      {/* HOW TO CHOOSE REVENUE MODEL */}
      <div className="space-y-6 max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold text-prussian-blue">
          🛠 How to Choose Your Revenue Model
        </h2>
        <p className="text-gray-700 font-quicksand">
          Ask yourself the following questions to select a revenue model that
          fits your product, market, and stage of growth.
        </p>

        <ul className="space-y-4">
          {revenueQuestions.map((item, idx) => (
            <li
              key={idx}
              className="flex gap-3 items-start bg-sky-blue/10 shadow-md p-5 rounded-md">
              <FaQuestionCircle className="text-blue-green mt-1 shrink-0" />
              <div>
                <p className="font-semibold text-prussian-blue">
                  {item.question}
                </p>
                <p className="text-gray-700 font-quicksand">
                  {item.description}
                </p>
              </div>
            </li>
          ))}
        </ul>

        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-md flex items-start gap-3 shadow-sm">
          <FaLightbulb className="text-yellow-500 text-xl mt-1 shrink-0" />
          <div>
            <p className="font-semibold text-yellow-900">Tip: Start small</p>
            <p className="text-yellow-800 font-quicksand">
              Begin with one strong revenue stream. Keep it simple and test what
              resonates with your users. You can always diversify later.
            </p>
          </div>
        </div>
      </div>

      {/* PITFALLS TO AVOID */}
      <div className="space-y-4 max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold text-prussian-blue flex flex-row items-center gap-2.5">
          <FaExclamationTriangle />
          Pitfalls to Avoid
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          {revenuePitfalls.map((pitfall) => (
            <CanvasBlocksCard item={pitfall} key={pitfall.label} />
          ))}
        </div>
      </div>

      {/* CTA / TRANSITION */}
      <div className="max-w-4xl mx-auto text-center space-y-4 mt-12">
        <p className="text-base font-quicksand text-gray-700 tracking-wide">
          You’ve now explored how your business will earn revenue. The next step
          is just as important: understanding the{" "}
          <span className="font-semibold text-prussian-blue">costs</span>{" "}
          involved in delivering your solution. Let’s break down your{" "}
          <span className="font-semibold text-prussian-blue">
            Cost Structure
          </span>
          .
        </p>

        <div className="flex justify-center gap-4 mt-4">
          <BackButton path="../channels" />
          <NextButton path="../costs" />
        </div>
      </div>
    </section>
  );
};

export default Revenue;
