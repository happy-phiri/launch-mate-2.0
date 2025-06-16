import { useCanvas } from "../../context/CanvasContext";
import CanvasBlockLayout from "../../components/CanvasBlockLayout";
import { FaDollarSign } from "react-icons/fa";
import useDocumentTitle from "../../components/hooks/UseDocumentTitle";
import useScrollToTop from "../../components/hooks/useScrollToTop";

const GenerateRevenueStreams = () => {
  const { canvasData, updateBlock } = useCanvas();
  useDocumentTitle(`Launch Mate | Revenue Streams - Create Your Canvas`);
  useScrollToTop();

  return (
    <CanvasBlockLayout
      icon={FaDollarSign}
      title="Revenue Streams"
      description={
        <>How will your startup make money from each customer segment?</>
      }
      subtext="Think about pricing models, one-time purchases, subscriptions, commissions, or any monetization strategies."
      placeholder="Where does your revenue come from?"
      blockName="revenue"
      backPath="/generate-canvas/channels"
      nextPath="/generate-canvas/costs"
      canvasData={canvasData}
      updateBlock={updateBlock}
    />
  );
};

export default GenerateRevenueStreams;
