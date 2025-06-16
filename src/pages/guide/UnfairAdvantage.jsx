import unfairAdvantageImage from "../../assets/guide-images/success-factors-bro.svg";
import { unfairAdvantages, unfairAdvantagePitfalls } from "../../data";
import CanvasBlocksCard from "../../components/CanvasBlocksCard";
import { FaExclamationTriangle, FaQuestionCircle } from "react-icons/fa";
import BackButton from "../../components/BackButton";
import NextButton from "../../components/NextButton";
import useDocumentTitle from "../../components/hooks/useDocumentTitle";
import useScrollToTop from "../../components/hooks/useScrollToTop";

const UnfairAdvantage = () => {
  useDocumentTitle(`Launch Mate | Guide - Unfair Advantage`);
  useScrollToTop();

  return (
    <section className="font-montserrat px-6 space-y-8 pb-20">
      {/* ILLUSTRATION */}
      <div>
        <img
          src={unfairAdvantageImage}
          alt="man climbing steps with advantages"
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
      <div className="space-y-2 max-w-4xl mx-auto">
        <h1 className="text-3xl lg:text-3xl font-bold text-prussian-blue">
          What Is an Unfair Advantage?
        </h1>
        <p className="text-gray-700 font-quicksand tracking-wide text-base">
          An unfair advantage is something that{" "}
          <span className="font-bold italic">
            can’t easily be copied or bought
          </span>
          . It gives your business a long-term edge — the thing that sets you
          apart in a meaningful, lasting way.
        </p>
        <p className="text-gray-700 font-quicksand tracking-wide text-base">
          This block answers: <br />{" "}
          <span className="font-bold italic">Why you?</span> Why are you in a
          better position to succeed compared to someone else with the same
          idea?
        </p>
      </div>

      {/* TYPES OF UNFAIR ADVANTAGES */}
      <div className="space-y-6 max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold text-prussian-blue">
          Types of Unfair Advantages
        </h2>
        <p className="text-gray-700 font-quicksand">
          You don't need all of these. Just one strong, genuine advantage can
          make all the difference.
        </p>

        <div className="grid md:grid-cols-2 gap-4">
          {unfairAdvantages.map((item, idx) => (
            <div
              key={idx}
              className="bg-white shadow-md rounded-xl p-6 flex flex-col gap-3 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-sky-blue/20 rounded-full flex items-center justify-center text-2xl text-blue-green">
                {<item.icon className="text-blue-green mt-1" />}
              </div>
              <p className="text-prussian-blue font-semibold text-lg">
                {item.type}
              </p>
              <p className="text-sm text-gray-600 font-quicksand">
                Example: <span className="italic">{item.example}</span>
              </p>
              <p className="text-gray-700 font-quicksand text-sm">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* TESTING ASSUMPTIONS */}
      <div className="max-w-4xl mx-auto space-y-6">
        <h2 className="text-2xl font-semibold text-prussian-blue">
          Quick Test: Is It Really “Unfair”?
        </h2>

        <p className="text-gray-700 font-quicksand">
          Use this simple check to see if your advantage is truly hard to copy.
        </p>

        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-md flex items-start gap-3 shadow-sm">
          <FaQuestionCircle className="text-yellow-500 text-xl mt-1 shrink-0" />
          <div>
            <p className="font-semibold text-yellow-900">
              Can a competitor buy or build this within a few months?
            </p>
            <p className="text-yellow-800 font-quicksand">
              If not, you likely have something worth protecting.
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
          {unfairAdvantagePitfalls.map((pitfall) => (
            <CanvasBlocksCard item={pitfall} key={pitfall.label} />
          ))}
        </div>
      </div>

      {/* CTA / TRANSITION */}
      <div className="max-w-4xl mx-auto text-center space-y-4 mt-12">
        <p className="text-base font-quicksand text-gray-700 tracking-wide">
          You’ve now walked through all the key building blocks of your Lean
          Canvas. It’s time to review and refine it all in the{" "}
          <span className="font-semibold text-prussian-blue">Summary</span>{" "}
          section.
        </p>

        <div className="flex justify-center gap-4 mt-4">
          <BackButton path="../keymetrics" />
          <NextButton path="../summary" />
        </div>
      </div>
    </section>
  );
};

export default UnfairAdvantage;
