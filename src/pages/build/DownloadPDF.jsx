import { useRef } from "react";
import html2pdf from "html2pdf.js";
import { useCanvas } from "../../context/CanvasContext";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/launchmate-logo1.png";

const DownloadPDF = () => {
  const { canvasData, updateBlock } = useCanvas();
  const navigate = useNavigate();
  const pdfRef = useRef();

  const handleDownload = async () => {
    if (!pdfRef.current) return;
    try {
      await html2pdf()
        .set({
          margin: 0.5,
          filename: `${canvasData?.companyName} lean-canvas.pdf`,
          image: { type: "jpeg", quality: 0.98 },
          html2canvas: { scale: 2 },
          jsPDF: { unit: "in", format: "a4", orientation: "landscape" },
        })
        .from(pdfRef.current)
        .save();
    } catch (err) {
      console.error("PDF generation failed:", err);
    }
  };

  const handleReset = () => {
    localStorage.removeItem("leanCanvas");
    Object.keys(canvasData).forEach((key) => updateBlock(key, ""));
    navigate("/generate-canvas");
  };

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-prussian-blue">Canvas Summary</h1>

      {/* BUTTONS */}
      <div className="flex flex-wrap gap-4 print:hidden">
        <button
          onClick={handleDownload}
          className="bg-blue-green text-white px-6 py-2 rounded-lg hover:opacity-90 z-50 relative cursor-pointer">
          Download PDF
        </button>
        <button
          onClick={handleReset}
          className="text-selective-yellow border border-selective-yellow px-6 py-2 rounded-lg cursor-pointer hover:bg-selective-yellow hover:text-white">
          Start New Canvas
        </button>
      </div>

      {/* PDF LAYOUT */}
      <div className="overflow-x-auto shadow-md">
        <div
          ref={pdfRef}
          className="p-6 rounded-lg space-y-4 text-sm flex flex-col justify-start min-w-[900px]">
          {/* HEADER */}
          <div className="flex justify-between items-center pb-2">
            {/* Logo */}
            <img src={logo} alt="Launch Mate Logo" className="h-15 w-auto" />
            {/* Title */}
            <h1 className="text-3xl text-prussian-blue font-bold font-montserrat tracking-wide">
              Lean Canvas
            </h1>
          </div>

          {/* MAIN GRID */}
          <div className="grid grid-cols-[1fr,1fr,0.5fr,0.5fr,1fr,1fr] grid-rows-[1fr,1fr,1fr] gap-[0.75px]">
            <div className="row-start-1 row-end-3 col-start-1 col-end-2">
              <CanvasBox title="Problem" content={canvasData.problem} />
            </div>

            <div className="row-start-1 row-end-2 col-start-2 col-end-3">
              <CanvasBox title="Solution" content={canvasData.solution} />
            </div>

            <div className="row-start-2 row-end-3 col-start-2 col-end-3">
              <CanvasBox title="Key Metrics" content={canvasData.metrics} />
            </div>

            <div className="row-start-1 row-end-3 col-start-3 col-end-5">
              <CanvasBox
                title="Unique Value Proposition"
                content={canvasData.uvp}
              />
            </div>

            <div className="row-start-1 row-end-2 col-start-5 col-end-6">
              <CanvasBox
                title="Unfair Advantage"
                content={canvasData.advantage}
              />
            </div>

            <div className="row-start-1 row-end-3 col-start-6 col-end-7">
              <CanvasBox
                title="Customer Segments"
                content={canvasData.customers}
              />
            </div>

            <div className="row-start-2 row-end-3 col-start-5 col-end-6">
              <CanvasBox title="Channels" content={canvasData.channels} />
            </div>

            <div className="row-start-3 row-end-4 col-start-1 col-end-4">
              <CanvasBox title="Cost Structure" content={canvasData.costs} />
            </div>

            <div className="row-start-3 row-end-4 col-start-4 col-end-7">
              <CanvasBox title="Revenue Streams" content={canvasData.revenue} />
            </div>
          </div>

          {/* FOOTER */}
          <div className="pt-2 flex justify-between items-center font-montserrat mt-auto">
            <p className="text-[10px] text-prussian-blue">
              Completed on {new Date().toLocaleString()}
            </p>
            {/* Company Name */}
            {canvasData.companyName && (
              <p className="text-right text-sm text-prussian-blue w-[30%]">
                {canvasData.companyName}
              </p>
            )}
          </div>
          <p className="text-center font-montserrat text-prussian-blue-transparent text-xs">
            Start Planning Your Startup — the Right Way
          </p>
        </div>
      </div>
    </div>
  );
};

// Box layout component
const CanvasBox = ({ title, content }) => (
  <div
    style={{ pageBreakInside: "avoid" }}
    className="border border-prussian-blue-transparent px-2 pt-2 pb-4 h-full rounded-sm">
    <h3 className="font-semibold font-montserrat text-[13px] md:text-[14px] leading-tight mb-1">
      {title}
    </h3>
    <p className="whitespace-pre-wrap font-quicksand text-dark-gray text-xs">
      {content || "—"}
    </p>
  </div>
);

export default DownloadPDF;
