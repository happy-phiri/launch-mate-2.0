import { useCanvas } from "../../context/CanvasContext";
import { Link } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";
import SummaryActions from "./SummaryActions";
import useDocumentTitle from "../../components/hooks/UseDocumentTitle";
import useScrollToTop from "../../components/hooks/useScrollToTop";

const SummaryPage = () => {
  const { canvasData } = useCanvas();
  useDocumentTitle(`Launch Mate | Summary - Create Your Canvas`);
  useScrollToTop();

  return (
    <section className="min-h-screen bg-magnolia px-4 py-6">
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Header */}
        <div className="text-center space-y-3">
          <FaCheckCircle className="mx-auto text-blue-green text-4xl" />
          <h1 className="text-3xl md:text-4xl font-bold font-montserrat text-prussian-blue">
            You're All Set!
          </h1>
          <p className="text-lg text-gray-700 font-montserrat md:w-2/3 mx-auto">
            You've completed the guide and outlined all key parts of your lean
            canvas. Here's a summary of your business model so far.
          </p>
        </div>

        {/* CONTAINER FOR LEAN CANVAS */}
        <div className="grid md:grid-cols-[1fr,1fr,0.5fr,0.5fr,1fr,1fr] md:grid-rows-[1fr,1fr,1fr] gap-2 md:gap-[1px]">
          {/* PROBLEM */}
          <div className="md:row-start-1 md:row-end-3 md:col-start-1 md:col-end-2 border-[0.5px] border-blue-green/30 p-2 h-full rounded-sm flex flex-col justify-start">
            <>
              <h3 className="font-semibold font-montserrat text-[14px]">
                Problem
              </h3>
              <p className=" whitespace-pre-wrap font-quicksand text-[12px]">
                {canvasData["problem"]}
              </p>
            </>

            <Link
              to="/generate-canvas/"
              className="text-blue-green hover:underline text-[10px] font-semibold font-montserrat mt-auto">
              Edit
            </Link>
          </div>

          {/* CUSTOMER SEGMENTS */}
          <div className="md:row-start-1 md:row-end-3 md:col-start-6 md:col-end-7 border-[0.5px] border-blue-green/30 p-2 h-full rounded-sm flex flex-col justify-start">
            <>
              <h3 className="font-semibold font-montserrat text-[14px]">
                Customer Segments
              </h3>
              <p className=" whitespace-pre-wrap font-quicksand text-[12px]">
                {canvasData["customers"]}
              </p>
            </>

            <Link
              to="/generate-canvas/customers"
              className="text-blue-green hover:underline text-[10px] font-semibold font-montserrat mt-auto">
              Edit
            </Link>
          </div>

          {/* UNIQUE VALUE PROPOSITION */}
          <div className="md:row-start-1 md:row-end-3 md:col-start-3 md:col-end-5 border-[0.5px] border-blue-green/30 p-2 h-full rounded-sm flex flex-col justify-start">
            <>
              <h3 className="font-semibold font-montserrat text-[14px]">
                Unique Value Proposition
              </h3>
              <p className=" whitespace-pre-wrap font-quicksand text-[12px]">
                {canvasData["uvp"]}
              </p>
            </>

            <Link
              to="/generate-canvas/uvp"
              className="text-blue-green hover:underline text-[10px] font-semibold font-montserrat mt-auto">
              Edit
            </Link>
          </div>

          {/* SOLUTION */}
          <div className="md:row-start-1 md:row-end-2 md:col-start-2 md:col-end-3 border-[0.5px] border-blue-green/30 p-2 h-full rounded-sm flex flex-col justify-start">
            <>
              <h3 className="font-semibold font-montserrat text-[14px]">
                Solution
              </h3>
              <p className=" whitespace-pre-wrap font-quicksand text-[12px]">
                {canvasData["solution"]}
              </p>
            </>

            <Link
              to="/generate-canvas/solution"
              className="text-blue-green hover:underline text-[10px] font-semibold font-montserrat mt-auto">
              Edit
            </Link>
          </div>

          {/* CHANNELS */}
          <div className="md:row-start-2 md:row-end-3 md:col-start-5 md:col-end-6 border-[0.5px] border-blue-green/30 p-2 h-full rounded-sm flex flex-col justify-start">
            <>
              <h3 className="font-semibold font-montserrat text-[14px]">
                Channels
              </h3>
              <p className=" whitespace-pre-wrap font-quicksand text-[12px]">
                {canvasData["channels"]}
              </p>
            </>

            <Link
              to="/generate-canvas/channels"
              className="text-blue-green hover:underline text-[10px] font-semibold font-montserrat mt-auto">
              Edit
            </Link>
          </div>

          {/* REVENUE STREAMS */}
          <div className="md:row-start-3 md:row-end-4 md:col-start-4 md:col-end-7 border-[0.5px] border-blue-green/30 p-2 h-full rounded-sm flex flex-col justify-start">
            <>
              <h3 className="font-semibold font-montserrat text-[14px]">
                Revenue Streams
              </h3>
              <p className=" whitespace-pre-wrap font-quicksand text-[12px]">
                {canvasData["revenue"]}
              </p>
            </>

            <Link
              to="/generate-canvas/revenue"
              className="text-blue-green hover:underline text-[10px] font-semibold font-montserrat mt-auto">
              Edit
            </Link>
          </div>

          {/* COST STRUCTURE */}
          <div className="md:row-start-3 md:row-end-4 md:col-start-1 md:col-end-4 border-[0.5px] border-blue-green/30 p-2 h-full rounded-sm flex flex-col justify-start">
            <>
              <h3 className="font-semibold font-montserrat text-[14px]">
                Cost Structure
              </h3>
              <p className=" whitespace-pre-wrap font-quicksand text-[12px]">
                {canvasData["costs"]}
              </p>
            </>

            <Link
              to="/generate-canvas/costs"
              className="text-blue-green hover:underline text-[10px] font-semibold font-montserrat mt-auto">
              Edit
            </Link>
          </div>

          {/* KEY METRICS */}
          <div className="md:row-start-2 md:row-end-3 md:col-start-2 md:col-end-3 border-[0.5px] border-blue-green/30 p-2 h-full rounded-sm flex flex-col justify-start">
            <>
              <h3 className="font-semibold font-montserrat text-[14px]">
                Key Metrics
              </h3>
              <p className=" whitespace-pre-wrap font-quicksand text-[12px]">
                {canvasData["metrics"]}
              </p>
            </>

            <Link
              to="/generate-canvas/metrics"
              className="text-blue-green hover:underline text-[10px] font-semibold font-montserrat mt-auto">
              Edit
            </Link>
          </div>

          {/* UNFAIR ADVANTAGE */}
          <div className="md:row-start-1 md:row-end-2 md:col-start-5 md:col-end-6 border-[0.5px] border-blue-green/30 p-2 h-full rounded-sm flex flex-col justify-start">
            <>
              <h3 className="font-semibold font-montserrat text-[14px]">
                Unfair Advantage
              </h3>
              <p className=" whitespace-pre-wrap font-quicksand text-[12px]">
                {canvasData["advantage"]}
              </p>
            </>

            <Link
              to="/generate-canvas/advantage"
              className="text-blue-green hover:underline text-[10px] font-semibold font-montserrat mt-auto">
              Edit
            </Link>
          </div>
        </div>

        {/* Summary Actions */}
        <SummaryActions />
      </div>
    </section>
  );
};

export default SummaryPage;
