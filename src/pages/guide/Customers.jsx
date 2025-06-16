import customerImage from "../../assets/guide-images/segments.svg";
import { customerSegments, customerSegmentsPitfalls } from "../../data";
import CanvasBlocksCard from "../../components/CanvasBlocksCard";
import { FaExclamationTriangle } from "react-icons/fa";
import BackButton from "../../components/BackButton";
import NextButton from "../../components/NextButton";
import useDocumentTitle from "../../components/hooks/useDocumentTitle";
import useScrollToTop from "../../components/hooks/useScrollToTop";

const Customers = () => {
  useDocumentTitle(`Launch Mate | Guide - Customer Segements`);
  useScrollToTop();

  return (
    <section className="font-montserrat px-6 space-y-8 pb-20">
      {/* ILLUSTRATION */}
      <div>
        <img
          src={customerImage}
          alt="defining customer personas"
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
          Customer Segments
        </h1>
        <p className="text-gray-700 font-quicksand tracking-wide text-base">
          Customer Segments define the specific groups of people or
          organizations you're building your solution for.{" "}
          <span className="font-bold italic">
            Not everyone is your customer
          </span>{" "}
          — this block helps you focus on those who matter most.
        </p>
      </div>

      {/* PURPOSE */}
      <div className="space-y-6 max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold text-prussian-blue">
          Why it Matters
        </h2>
        <p className="text-gray-700 font-quicksand tracking-wide text-base">
          Understanding your customer segments ensures you’re solving a{" "}
          <span className="font-bold italic">real problem</span> for a{" "}
          <span className="font-bold italic">real audience</span>. It guides:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-700 font-quicksand tracking-wide text-base">
          <li>Product features</li>
          <li>Marketing messages</li>
          <li>Distribution channels</li>
          <li>Pricing and business strategy</li>
        </ul>
      </div>

      {/* TYPES OF CUSTOMER SEGMENTS */}
      <div className="space-y-6 max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold text-prussian-blue">
          Types of Customer Segments
        </h2>

        <div className="grid md:grid-cols-2 gap-4">
          {customerSegments.map((segment) => (
            <CanvasBlocksCard item={segment} key={segment.label} />
          ))}
        </div>
      </div>

      {/* EXISTING ALTERNATIVES */}
      <div className="space-y-2 max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold text-prussian-blue">
          How to Define Your Segments
        </h2>
        <p className="text-gray-700 font-quicksand tracking-wide text-base">
          To build something people truly want, you need to know who they are.
          Start by identifying the specific groups that face the problem you’re
          solving and are most eager for a solution.
        </p>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mt-6">
          {/* Left Column: Questions */}
          <div className="bg-white border-l-4 border-blue-green p-4 rounded shadow-sm space-y-2">
            <h3 className="text-lg font-semibold text-prussian-blue mb-2">
              Ask yourself these questions:
            </h3>
            <ul className="list-disc list-inside text-gray-700 font-quicksand space-y-1">
              <li>Who experiences the problem you’re solving?</li>
              <li>Who is actively looking for a solution?</li>
              <li>Who would be most impacted by your solution?</li>
              <li>Who are the buyers, users, and influencers?</li>
            </ul>
          </div>

          {/* Right Column: Segmentation */}
          <div className="bg-white border-l-4 border-selective-yellow p-4 rounded shadow-sm space-y-2">
            <h3 className="text-lg font-semibold text-prussian-blue mb-2">
              Segment based on:
            </h3>
            <ul className="list-disc list-inside text-gray-700 font-quicksand space-y-1">
              <li>
                <strong>Demographics:</strong> age, gender, income
              </li>
              <li>
                <strong>Psychographics:</strong> values, interests, behavior
              </li>
              <li>
                <strong>Geography:</strong> location-specific problems
              </li>
              <li>
                <strong>Industry/Job Role:</strong> especially for B2B
              </li>
            </ul>
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
          {customerSegmentsPitfalls.map((pitfall) => (
            <CanvasBlocksCard item={pitfall} key={pitfall.label} />
          ))}
        </div>
      </div>

      {/* CTA / TRANSITION */}
      <div className="max-w-4xl mx-auto text-center space-y-4 mt-12">
        <p className="text-base font-quicksand text-gray-700 tracking-wide">
          Now that you understand who your target customers are, it's time to
          clarify what makes your product or service stand out — your{" "}
          <span className="font-semibold text-prussian-blue">
            Unique Value Proposition
          </span>
          .
        </p>

        <div className="flex justify-center gap-4 mt-4">
          <BackButton path="../problem" />
          <NextButton path="../uvp" />
        </div>
      </div>
    </section>
  );
};

export default Customers;
