import { leanCanvasBlocks } from "../../data";
import BackButton from "../../components/BackButton";
import NextButton from "../../components/NextButton";
import useDocumentTitle from "../../components/hooks/UseDocumentTitle";
import useScrollToTop from "../../components/hooks/useScrollToTop";

const Summary = () => {
  useDocumentTitle(`Launch Mate | Guide - Summary`);
  useScrollToTop();

  return (
    <section>
      <h2 className="text-2xl font-semibold text-prussian-blue text-center">
        Your Lean Canvas Summary
      </h2>
      <p className="text-gray-700 font-quicksand text-center max-w-2xl mx-auto">
        Here’s a quick overview of the nine key building blocks of the Lean
        Canvas. Use this as a one-page snapshot to validate, share, or refine
        your business model.
      </p>

      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mt-6">
        {leanCanvasBlocks.map((block, idx) => (
          <div
            key={idx}
            className="bg-white shadow-md rounded-xl p-5 hover:shadow-lg transition-shadow space-y-2">
            <div className="flex items-center gap-2">
              <block.icon className="text-blue-green text-xl" />
              <h3 className="text-lg font-semibold text-prussian-blue font-montserrat">
                {block.title}
              </h3>
            </div>
            <p className="text-gray-700 font-quicksand text-sm">
              {block.summary}
            </p>
          </div>
        ))}
      </div>

      <div className="max-w-4xl mx-auto text-center space-y-4 mt-12">
        <p className="text-base font-quicksand text-gray-700 tracking-wide">
          You've now completed the guide and are ready to fill out your own Lean
          Canvas. Use this summary as a reference while mapping out your
          business model.
        </p>

        <div className="flex justify-center gap-4 mt-4">
          <BackButton path="../unfairadvantage" />
          <NextButton
            label="Create Your Canvas"
            path="../../generate-canvas"
            // relative="path"
          />
        </div>
      </div>
    </section>
  );
};

export default Summary;
