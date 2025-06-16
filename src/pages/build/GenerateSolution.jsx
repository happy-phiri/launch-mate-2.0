import { useCanvas } from "../../context/CanvasContext";
import CanvasBlockLayout from "../../components/CanvasBlockLayout";
import { FaLightbulb } from "react-icons/fa";
import useDocumentTitle from "../../components/hooks/useDocumentTitle";
import useScrollToTop from "../../components/hooks/useScrollToTop";

const GenerateSolution = () => {
  const { canvasData, updateBlock } = useCanvas();
  useDocumentTitle(`Launch Mate | Solution - Create Your Canvas`);
  useScrollToTop();

  return (
    <CanvasBlockLayout
      icon={FaLightbulb}
      title="Solution"
      description={
        <>
          Outline potential ways to solve the problems you identified. These
          don’t need to be final products — just ideas that show promise.
        </>
      }
      subtext="Keep it simple. You’ll refine your solution over time. Highlight 1–3 ideas or features that directly address your target audience’s pain points.'"
      placeholder="Describe your solution here..."
      blockName="solution"
      backPath="/generate-canvas/uvp"
      nextPath="/generate-canvas/channels"
      canvasData={canvasData}
      updateBlock={updateBlock}
    />
  );
};

export default GenerateSolution;
