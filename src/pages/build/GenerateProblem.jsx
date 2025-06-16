import { useCanvas } from "../../context/CanvasContext";
import CanvasBlockLayout from "../../components/CanvasBlockLayout";
import { FaExclamationTriangle } from "react-icons/fa";
import useDocumentTitle from "../../components/hooks/useDocumentTitle";
import useScrollToTop from "../../components/hooks/useScrollToTop";

const GenerateProblem = () => {
  const { canvasData, updateBlock } = useCanvas();
  useDocumentTitle(`Launch Mate | Problem - Create Your Canvas`);
  useScrollToTop();

  return (
    <div className="space-y-6 px-4">
      {/* Company Name Input */}
      <div className="space-y-2 font-montserrat">
        <label htmlFor="companyName" className="block text-prussian-blue">
          Company or Personal Name
        </label>
        <input
          id="companyName"
          type="text"
          value={canvasData.companyName || ""}
          onChange={(e) => updateBlock("companyName", e.target.value)}
          className="w-full rounded-md border border-slate-300 px-3 py-3 text-sm tracking-wide shadow-sm focus:border-transparent focus:ring-1 focus:ring-blue-green/10"
          placeholder="e.g. Acme Innovations or John Doe"
        />
      </div>

      {/* Main Canvas Block Input */}
      <CanvasBlockLayout
        icon={FaExclamationTriangle}
        title="Problem"
        description={
          <>
            What are the pain points your audience faces? List the top{" "}
            <span className="text-blue-green font-semibold">1–3 problems</span>{" "}
            you’ve identified.
          </>
        }
        subtext="Be specific. What’s frustrating, inefficient, or broken for your customers?"
        placeholder="e.g. People struggle to manage personal finances with traditional spreadsheets"
        blockName="problem"
        backPath="/"
        nextPath="/generate-canvas/customers"
        canvasData={canvasData}
        updateBlock={updateBlock}
      />
    </div>
  );
};

export default GenerateProblem;
