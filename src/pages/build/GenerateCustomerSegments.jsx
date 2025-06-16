import { useCanvas } from "../../context/CanvasContext";
import CanvasBlockLayout from "../../components/CanvasBlockLayout";
import { FaUsers } from "react-icons/fa";
import BackButton from "../../components/BackButton";
import NextButton from "../../components/NextButton";
import useDocumentTitle from "../../components/hooks/UseDocumentTitle";
import useScrollToTop from "../../components/hooks/useScrollToTop";

const GenerateCustomerSegments = () => {
  const { canvasData, updateBlock } = useCanvas();
  useDocumentTitle(`Launch Mate | Customer Segments - Create Your Canvas`);
  useScrollToTop();

  return (
    <CanvasBlockLayout
      icon={FaUsers}
      title="Customer Segments"
      description={
        <>
          Identify the specific groups of people or organizations you’re trying
          to serve.
        </>
      }
      subtext="Describe your key audience. For example: early-stage founders, high
          school teachers, remote developers."
      placeholder="Who are your customers?"
      blockName="customers"
      backPath="../"
      nextPath="/generate-canvas/uvp"
      canvasData={canvasData}
      updateBlock={updateBlock}
    />
  );
};

export default GenerateCustomerSegments;
