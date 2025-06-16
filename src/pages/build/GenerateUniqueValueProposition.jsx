import { useCanvas } from "../../context/CanvasContext";
import CanvasBlockLayout from "../../components/CanvasBlockLayout";
import { FaBullseye } from "react-icons/fa";
import useDocumentTitle from "../../components/hooks/UseDocumentTitle";
import useScrollToTop from "../../components/hooks/useScrollToTop";

const GenerateUniqueValueProposition = () => {
  const { canvasData, updateBlock } = useCanvas();
  useDocumentTitle(
    `Launch Mate | Unique Value Proposition - Create Your Canvas`
  );
  useScrollToTop();

  return (
    <CanvasBlockLayout
      icon={FaBullseye}
      title="Unique Value Proposition"
      description={
        <>What’s the one clear benefit that makes your solution stand out?</>
      }
      subtext="This should capture attention and explain why you're different. For example: 'Instant, zero-code dashboards for startups.'"
      placeholder="Write your Unique Value Proposition here..."
      blockName="uvp"
      backPath="/generate-canvas/customers"
      nextPath="/generate-canvas/solution"
      canvasData={canvasData}
      updateBlock={updateBlock}
    />
  );
};

export default GenerateUniqueValueProposition;
