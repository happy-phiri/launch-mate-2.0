import channelsImage from "../../assets/guide-images/channels.svg";
import { channelTypes, channelQuestions, channelPitfalls } from "../../data";
import CanvasBlocksCard from "../../components/CanvasBlocksCard";
import {
  FaExclamationTriangle,
  FaLightbulb,
  FaBullhorn,
  FaQuestionCircle,
} from "react-icons/fa";
import BackButton from "../../components/BackButton";
import NextButton from "../../components/NextButton";
import useDocumentTitle from "../../components/hooks/useDocumentTitle";
import useScrollToTop from "../../components/hooks/useScrollToTop";

const Channels = () => {
  useDocumentTitle(`Launch Mate | Guide - Channels`);
  useScrollToTop();

  return (
    <section className="font-montserrat px-6 space-y-8 pb-20">
      {/* ILLUSTRATION */}
      <div>
        <img
          src={channelsImage}
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
          How Will You Reach Your Customers?
        </h1>
        <p className="text-gray-700 font-quicksand tracking-wide text-base">
          Channels are how you{" "}
          <span className="font-bold italic">
            communicate, deliver, and sell
          </span>{" "}
          your product or service to customers. Choosing the right ones ensures
          you reach the right people efficiently and cost-effectively. Strong
          channels create awareness, build trust, and enable smooth adoption.
        </p>
      </div>

      {/* TYPES OF CHANNELS */}
      <div className="space-y-2 max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold text-prussian-blue">
          Types of Channels
        </h2>
        <p className="text-gray-700 font-quicksand">
          Each channel plays a specific role in helping customers discover,
          evaluate, purchase, and stay connected with your product or service.
        </p>

        <ul className="space-y-6">
          {channelTypes.map((section, idx) => (
            <li
              key={idx}
              className="bg-sky-blue/10 shadow-md p-6 rounded-md space-y-2">
              <div className="flex items-center gap-2">
                <FaBullhorn className="text-blue-green shrink-0" />
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

      {/* HOW TO CHOOSE CHANNELS */}
      <div className="space-y-6 max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold text-prussian-blue">
          🛠 How to Choose the Right Channels
        </h2>
        <p className="text-gray-700 font-quicksand">
          Ask yourself the following questions to identify the most effective
          channels for reaching your customers — without stretching your
          resources too thin.
        </p>

        <ul className="space-y-4">
          {channelQuestions.map((item, idx) => (
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
              Focus on 1–2 high-impact channels that align with your audience
              and resources. Expand based on what actually works.
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
          {channelPitfalls.map((pitfall) => (
            <CanvasBlocksCard item={pitfall} key={pitfall.label} />
          ))}
        </div>
      </div>

      {/* CTA / TRANSITION */}
      <div className="max-w-4xl mx-auto text-center space-y-4 mt-12">
        <p className="text-base font-quicksand text-gray-700 tracking-wide">
          Once you’ve chosen the best ways to reach your audience, the next step
          is to figure out how your{" "}
          <span className="font-semibold text-prussian-blue">solution</span>{" "}
          will generate{" "}
          <span className="font-semibold text-prussian-blue">revenue</span>.
          Let’s dive into your{" "}
          <span className="font-semibold text-prussian-blue">
            Revenue Streams
          </span>
          .
        </p>

        <div className="flex justify-center gap-4 mt-4">
          <BackButton path="../solution" />
          <NextButton path="../revenue" />
        </div>
      </div>
    </section>
  );
};

export default Channels;
