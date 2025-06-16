import { useCanvas } from "../../context/CanvasContext";
import CanvasBlockLayout from "../../components/CanvasBlockLayout";
import { FaPaperPlane } from "react-icons/fa";
import useDocumentTitle from "../../components/hooks/useDocumentTitle";
import useScrollToTop from "../../components/hooks/useScrollToTop";

const GenerateChannels = () => {
  const { canvasData, updateBlock } = useCanvas();
  useDocumentTitle(`Launch Mate | Channels - Create Your Canvas`);
  useScrollToTop();

  return (
    <CanvasBlockLayout
      icon={FaPaperPlane}
      title="Channels"
      description={
        <>
          Describe how you plan to reach your customers and deliver your value
          proposition.
        </>
      }
      subtext="List the platforms, tools, or strategies you'll use — like social media, direct sales, referrals, or newsletters."
      placeholder="How will you reach your audience?"
      blockName="channels"
      backPath="/generate-canvas/solution"
      nextPath="/generate-canvas/revenue"
      canvasData={canvasData}
      updateBlock={updateBlock}
    />
  );
};

export default GenerateChannels;
