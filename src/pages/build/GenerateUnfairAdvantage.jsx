import { useCanvas } from "../../context/CanvasContext";
import CanvasBlockLayout from "../../components/CanvasBlockLayout";
import { FaShieldAlt } from "react-icons/fa";
import useDocumentTitle from "../../components/hooks/UseDocumentTitle";
import useScrollToTop from "../../components/hooks/useScrollToTop";

const GenerateUnfairAdvantage = () => {
  const { canvasData, updateBlock } = useCanvas();
  useDocumentTitle(`Launch Mate | Unfair Advantage - Create Your Canvas`);
  useScrollToTop();

  return (
    <CanvasBlockLayout
      icon={FaShieldAlt}
      title="Unfair Advantage"
      description={
        <>
          What gives you a unique edge that’s hard to replicate? Think about
          assets, relationships, or experiences others can’t easily copy.
        </>
      }
      subtext="For example: insider knowledge, personal brand, exclusive access, early traction, or proprietary tech."
      placeholder="What's your unfair advantage?"
      blockName="advantage"
      backPath="/generate-canvas/metrics"
      nextPath="/generate-canvas/summary"
      canvasData={canvasData}
      updateBlock={updateBlock}
    />
  );
};

export default GenerateUnfairAdvantage;
