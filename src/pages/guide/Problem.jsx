import problemImage from "../../assets/guide-images/problem.svg";
import { startWithProblem, problemTips, problemPitfalls } from "../../data";
import CanvasBlocksCard from "../../components/CanvasBlocksCard";
import {
  FaExclamationTriangle,
  FaUserCheck,
  FaLightbulb,
} from "react-icons/fa";
import BackButton from "../../components/BackButton";
import NextButton from "../../components/NextButton";
import useDocumentTitle from "../../components/hooks/UseDocumentTitle";
import useScrollToTop from "../../components/hooks/useScrollToTop";

const Problem = () => {
  useDocumentTitle(`Launch Mate | Guide - Problem`);
  useScrollToTop();

  return (
    <section className="font-montserrat px-6 space-y-8 pb-20">
      {/* ILLUSTRATION */}
      <div>
        <img
          src={problemImage}
          alt="man offering helping hand"
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
      <div className="space-y-4 max-w-4xl mx-auto">
        <h1 className="text-3xl lg:text-3xl font-bold text-prussian-blue">
          Understanding the Problem
        </h1>
        <p className="text-gray-700 font-quicksand tracking-wide text-base">
          Before building a product or service, it’s crucial to clearly identify
          the problems your target customers face. The Problem block ensures
          you’re solving{" "}
          <span className="font-bold italic">real, meaningful issues</span> —
          not assumptions.
        </p>
      </div>

      {/* PURPOSE */}
      <div className="space-y-4 max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold text-prussian-blue">
          Why Start with the Problem?
        </h2>
        <p className="text-gray-700 font-quicksand tracking-wide text-base">
          Focusing on the problem first helps ensure your startup is addressing
          a <span className="font-bold italic">real pain point</span>. Solving a
          problem that doesn’t exist wastes time and resources.
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-700 font-quicksand tracking-wide text-base">
          {startWithProblem.map((point, idx) => (
            <li key={idx}>{point}</li>
          ))}
        </ul>
      </div>

      {/* IDENTIFYING THE RIGHT PROBLEM */}
      <div className="space-y-6 max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold text-prussian-blue">
          🛠 How to Identify the Right Problems
        </h2>
        <p className="text-gray-700 font-quicksand">
          These simple practices can help you avoid guessing. Use them to
          uncover real, meaningful problems that people are actively trying to
          solve.
        </p>

        <ul className="space-y-4">
          {problemTips.map((item, idx) => (
            <li
              key={idx}
              className="flex gap-3 items-start bg-sky-blue/10 shadow-md p-5 rounded-md">
              <FaUserCheck className="text-blue-green mt-1 shrink-0" />
              <div>
                <p className="font-semibold text-prussian-blue">{item.tip}</p>
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
            <p className="font-semibold text-yellow-900">
              Tip: Start with curiosity
            </p>
            <p className="text-yellow-800 font-quicksand">
              Talk to people without trying to pitch. You’ll learn more by
              listening than assuming.
            </p>
          </div>
        </div>
      </div>

      {/* EXISTING ALTERNATIVES */}
      <div className="space-y-2 max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold text-prussian-blue">
          Existing Alternatives
        </h2>
        <p className="text-gray-700 font-quicksand tracking-wide text-base">
          Even when a problem exists, people often find makeshift ways to cope.
          These workarounds — whether manual processes, competitor tools, or
          internal hacks — are called existing alternatives. They highlight what
          customers are willing to tolerate and provide insight into what your
          solution must improve or replace.
        </p>
        <h3 className="text-prussian-blue text-lg font-semibold">
          Identifying these alternatives helps in several ways:
        </h3>
        <ul className="list-disc list-inside space-y-2 font-quicksand text-gray-700 tracking-wide text-base">
          <li>
            <span className="font-medium text-prussian-blue">
              Reveals competition:
            </span>{" "}
            Your idea might not be the only one — for example, users may already
            be using Excel, pen-and-paper, or another service for accounting.
          </li>
          <li>
            <span className="font-medium text-prussian-blue">
              Clarifies expectations:
            </span>{" "}
            You learn what users like or dislike about their current options.
          </li>
          <li>
            <span className="font-medium text-prussian-blue">
              Informs positioning:
            </span>{" "}
            Knowing existing tools lets you emphasize what’s better or unique
            about your offer.
          </li>
          <li>
            <span className="font-medium text-prussian-blue">
              Supports validation:
            </span>{" "}
            If people are already hacking together solutions, it’s a strong sign
            that the problem is real and painful.
          </li>
        </ul>
      </div>

      {/* PITFALLS TO AVOID */}
      <div className="space-y-4 max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold text-prussian-blue flex flex-row items-center gap-2.5">
          <FaExclamationTriangle />
          Pitfalls to Avoid
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          {problemPitfalls.map((pitfall) => (
            <CanvasBlocksCard item={pitfall} key={pitfall.label} />
          ))}
        </div>
      </div>

      {/* CTA / TRANSITION */}
      <div className="max-w-4xl mx-auto text-center space-y-4 mt-12">
        <p className="text-base font-quicksand text-gray-700 tracking-wide">
          Now that you’ve identified the core problems, the next step is to
          understand who experiences them — your{" "}
          <span className="font-semibold text-prussian-blue">
            Customer Segments
          </span>
          .
        </p>

        <div className="flex justify-center gap-4 mt-4">
          <BackButton path=".." />
          <NextButton path="../customers" />
        </div>
      </div>
    </section>
  );
};

export default Problem;
