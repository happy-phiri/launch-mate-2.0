import { useCanvas } from "../../context/CanvasContext";
import CanvasBlockLayout from "../../components/CanvasBlockLayout";
import { FaChartLine } from "react-icons/fa";
import useDocumentTitle from "../../components/hooks/UseDocumentTitle";
import useScrollToTop from "../../components/hooks/useScrollToTop";

const GenerateKeyMetrics = () => {
  const { canvasData, updateBlock } = useCanvas();
  useDocumentTitle(`Launch Mate | Key Metrics - Create Your Canvas`);
  useScrollToTop();

  return (
    <CanvasBlockLayout
      icon={FaChartLine}
      title="Key Metrics"
      description={
        <>
          Identify the key numbers that tell you how your business is
          performing.
        </>
      }
      subtext="What measurable activities help you track progress? For example: daily active users, conversion rate, churn, etc."
      placeholder="What are your most important metrics?"
      blockName="metrics"
      backPath="/generate-canvas/costs"
      nextPath="/generate-canvas/advantage"
      canvasData={canvasData}
      updateBlock={updateBlock}
    />
  );
};

export default GenerateKeyMetrics;
