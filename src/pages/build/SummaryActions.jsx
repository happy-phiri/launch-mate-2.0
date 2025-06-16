import { useCanvas } from "../../context/CanvasContext";
import { useNavigate } from "react-router-dom";

const SummaryActions = () => {
  const { updateBlock } = useCanvas();
  const navigate = useNavigate();

  // Clears localStorage and in-memory canvas data
  const handleStartNewCanvas = () => {
    localStorage.removeItem("leanCanvas");
    // Reset all blocks to empty
    const blocks = [
      "problem",
      "customers",
      "uvp",
      "solution",
      "channels",
      "revenue",
      "costs",
      "metrics",
      "advantage",
    ];
    blocks.forEach((block) => updateBlock(block, ""));
    navigate("/generate-canvas"); // redirect to the first step
  };

  const handleDownloadPDF = () => {
    navigate("/generate-canvas/download-pdf");
  };

  return (
    <div className="mt-10 flex flex-col md:flex-row items-center justify-center gap-4">
      <button
        onClick={handleDownloadPDF}
        className="px-6 py-3 rounded-lg bg-selective-yellow text-white hover:opacity-90 cursor-pointer font-montserrat tracking-wide">
        Download PDF
      </button>

      <button
        onClick={handleStartNewCanvas}
        className="px-6 py-3 rounded-lg border border-prussian-blue text-prussian-blue hover:bg-prussian-blue cursor-pointer hover:text-white font-montserrat tracking-wide">
        Start Blank Canvas
      </button>
    </div>
  );
};

export default SummaryActions;
