import uvpImage from "../../assets/guide-images/unique-value-proposition.svg";
import { componentsOfUvp, uvpQuestions, uvpPitfalls } from "../../data";
import CanvasBlocksCard from "../../components/CanvasBlocksCard";
import { FaExclamationTriangle, FaQuestionCircle } from "react-icons/fa";
import BackButton from "../../components/BackButton";
import NextButton from "../../components/NextButton";
import useDocumentTitle from "../../components/hooks/UseDocumentTitle";
import useScrollToTop from "../../components/hooks/useScrollToTop";

const UniqueValueProposition = () => {
  useDocumentTitle(`Launch Mate | Guide - Unique Value Proposition`);
  useScrollToTop();

  return (
    <section className="font-montserrat px-6 space-y-8 pb-20">
      {/* ILLUSTRATION */}
      <div>
        <img
          src={uvpImage}
          alt="man faced with two choices"
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
          Unique Value Proposition - What Makes You Stand Out
        </h1>
        <p className="text-gray-700 font-quicksand tracking-wide text-base">
          The{" "}
          <span className="font-bold italic">
            Unique Value Proposition (UVP)
          </span>{" "}
          clearly communicates why your product or service is different — and
          better — than alternatives. It's the one compelling reason your ideal
          customer should choose you. A strong UVP helps drive conversions,
          guide branding, and unify product direction.
        </p>
      </div>

      {/* KEY COMPONENTS OF UVP */}
      <div className="space-y-6 max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold text-prussian-blue">
          Key Components of a Strong UVP
        </h2>

        <div className="grid md:grid-cols-2 gap-4">
          {componentsOfUvp.map((component) => (
            <CanvasBlocksCard item={component} key={component.label} />
          ))}
        </div>
      </div>

      {/* CRAFTING A UVP */}
      <div className="space-y-2 max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold text-prussian-blue">
          How to Craft Your UVP
        </h2>
        <p className="text-gray-700 font-quicksand">
          Ask yourself the following questions to clarify your Unique Value
          Proposition. Keep it simple, honest, and focused on your customer.
        </p>

        <ul className="space-y-4">
          {uvpQuestions.map((item, idx) => (
            <li
              key={idx}
              className="flex gap-3 items-center bg-sky-blue/10 shadow-md p-6 rounded-md">
              <FaQuestionCircle className="text-blue-green shrink-0" />
              <div>
                <p className="font-semibold text-prussian-blue">
                  {item.question}
                </p>
                <p className="text-gray-700 font-quicksand">{item.answer}</p>
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
          {uvpPitfalls.map((pitfall) => (
            <CanvasBlocksCard item={pitfall} key={pitfall.label} />
          ))}
        </div>
      </div>

      {/* CTA / TRANSITION */}
      <div className="max-w-4xl mx-auto text-center space-y-4 mt-12">
        <p className="text-base font-quicksand text-gray-700 tracking-wide">
          With your Unique Value Proposition in place, you're ready to define
          the solution that brings it to life. Let’s explore your{" "}
          <span className="font-semibold text-prussian-blue">Solution</span>.
        </p>

        <div className="flex justify-center gap-4 mt-4">
          <BackButton path="../customers" />
          <NextButton path="../solution" />
        </div>
      </div>
    </section>
  );
};

export default UniqueValueProposition;
