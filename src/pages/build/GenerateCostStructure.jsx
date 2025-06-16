import { useCanvas } from "../../context/CanvasContext";
import CanvasBlockLayout from "../../components/CanvasBlockLayout";
import { FaReceipt } from "react-icons/fa";
import useDocumentTitle from "../../components/hooks/UseDocumentTitle";
import useScrollToTop from "../../components/hooks/useScrollToTop";

const GenerateCostStructure = () => {
  const { canvasData, updateBlock } = useCanvas();
  useDocumentTitle(`Launch Mate | Cost Structure - Create Your Canvas`);
  useScrollToTop();

  return (
    <CanvasBlockLayout
      icon={FaReceipt}
      title="Cost Structure"
      description={
        <>
          Outline the key costs associated with operating your business model.
        </>
      }
      subtext="Consider fixed vs. variable costs, product development, marketing, infrastructure, tools, and team expenses."
      placeholder="What are your biggest costs?"
      blockName="costs"
      backPath="/generate-canvas/revenue"
      nextPath="/generate-canvas/metrics"
      canvasData={canvasData}
      updateBlock={updateBlock}
    />
  );
};

export default GenerateCostStructure;
