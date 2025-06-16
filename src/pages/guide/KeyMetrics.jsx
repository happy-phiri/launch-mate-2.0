import metricsImage from "../../assets/guide-images/metrics.svg";
import { keyMetrics, keyMetricsPitfalls, metricComparisons } from "../../data";
import CanvasBlocksCard from "../../components/CanvasBlocksCard";
import {
  FaExclamationTriangle,
  FaLightbulb,
  FaChartLine,
} from "react-icons/fa";
import BackButton from "../../components/BackButton";
import NextButton from "../../components/NextButton";
import useDocumentTitle from "../../components/hooks/UseDocumentTitle";
import useScrollToTop from "../../components/hooks/useScrollToTop";

const KeyMetrics = () => {
  useDocumentTitle(`Launch Mate | Guide - Key Metrics`);
  useScrollToTop();

  return (
    <section className="font-montserrat px-6 space-y-8 pb-20">
      {/* ILLUSTRATION */}
      <div>
        <img
          src={metricsImage}
          alt="two people analyzing data"
          className="w-[60%] max-w-md mx-auto"
        />
        <a
          href="https://storyset.com/work"
          target="_blank"
          className="text-gray-400 text-[10px] block text-center mt-2">
          Work illustrations by Storyset
        </a>
      </div>

      {/* INTRO SECTION */}
      <div className="space-y-6 max-w-4xl mx-auto">
        <h1 className="text-3xl lg:text-3xl font-bold text-prussian-blue">
          Key Metrics – What to Track and Why It Matters{" "}
        </h1>
        <p className="text-gray-700 font-quicksand tracking-wide text-base">
          Your Key Metrics are the specific numbers that show how well your
          business is doing. These help you monitor progress, make better
          decisions, and spot problems before they get too big.
        </p>
      </div>

      {/* IDENTIFYING IMPORTANT METRICS */}
      <div className="space-y-6 max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold text-prussian-blue">
          Identify Your Most Important Metrics
        </h2>
        <p className="text-gray-700 font-quicksand">
          Choose metrics that reflect the health and growth of your business
          model. Think of these as signals that show whether you're solving a
          real problem and growing sustainably.
        </p>

        <ul className="space-y-4">
          {keyMetrics.map((item, idx) => (
            <li
              key={idx}
              className="flex gap-3 items-start bg-sky-blue/10 shadow-md p-5 rounded-md">
              <FaChartLine className="text-blue-green mt-1 shrink-0" />
              <div>
                <p className="font-semibold text-prussian-blue">{item.label}</p>
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
              Tip: Start with what matters
            </p>
            <p className="text-yellow-800 font-quicksand">
              Focus on just a few high-impact metrics that relate to your
              current stage and model. You can always expand as you grow.
            </p>
          </div>
        </div>
      </div>

      {/* METRICS COMPARISON */}
      <div className="space-y-6 max-w-4xl mx-auto mt-12">
        <h2 className="text-2xl font-semibold text-prussian-blue">
          🎯 Focus on What Really Helps You Improve
        </h2>
        <p className="text-gray-700 font-quicksand">
          Some numbers feel good but don’t actually help you make decisions.
          Here’s how to tell the difference:
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {metricComparisons.map((pair, idx) => (
            <div
              key={idx}
              className="bg-sky-blue/10 p-5 rounded-md shadow-md space-y-3">
              <div className="flex gap-3 items-start">
                {<pair.vanity.icon className="text-red-500 text-lg" />}
                <div>
                  <p className="font-medium text-red-500">
                    {pair.vanity.label} (Looks Good)
                  </p>
                  <p className="text-gray-700 font-quicksand">
                    {pair.vanity.reason}
                  </p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                {<pair.actionable.icon className="text-green-600 text-lg" />}
                <div>
                  <p className="font-medium text-green-700">
                    {pair.actionable.label} (Helpful)
                  </p>
                  <p className="text-gray-700 font-quicksand">
                    {pair.actionable.reason}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* PITFALLS TO AVOID */}
      <div className="space-y-4 max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold text-prussian-blue flex flex-row items-center gap-2.5">
          <FaExclamationTriangle />
          Pitfalls to Avoid
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          {keyMetricsPitfalls.map((pitfall) => (
            <CanvasBlocksCard item={pitfall} key={pitfall.label} />
          ))}
        </div>
      </div>

      {/* CTA / TRANSITION */}
      <div className="max-w-4xl mx-auto text-center space-y-4 mt-12">
        <p className="text-base font-quicksand text-gray-700 tracking-wide">
          Now that you’ve identified the{" "}
          <span className="font-semibold text-prussian-blue">Key Metrics</span>{" "}
          that matter most, it’s time to highlight what gives your startup a
          lasting edge. Let’s move on to your{" "}
          <span className="font-semibold text-prussian-blue">
            Unfair Advantage
          </span>
          .
        </p>

        <div className="flex justify-center gap-4 mt-4">
          <BackButton path="../costs" />
          <NextButton path="../unfairadvantage" />
        </div>
      </div>
    </section>
  );
};

export default KeyMetrics;
