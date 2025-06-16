import { useEffect, useState } from "react";
import BackButton from "./BackButton";
import NextButton from "./NextButton";

const CanvasBlockLayout = ({
  icon: Icon,
  title,
  description,
  subtext,
  placeholder,
  blockName,
  backPath,
  nextPath,
  canvasData,
  updateBlock,
}) => {
  const [input, setInput] = useState(canvasData[blockName] || "");

  // CHARACTER LIMITS
  const charLimits = {
    problem: 250,
    customers: 200,
    uvp: 150,
    solution: 250,
    channels: 200,
    revenue: 200,
    costs: 200,
    metrics: 200,
    advantage: 200,
  };

  useEffect(() => {
    updateBlock(blockName, input);
  }, [input]);

  return (
    <div className="space-y-8">
      {/* Header Card */}
      <div className="flex items-start gap-4 bg-sky-blue/10 p-5 rounded-lg shadow-sm border-l-4 border-blue-green">
        <div className="w-12 h-12 bg-blue-green/20 rounded-full flex items-center justify-center text-2xl text-blue-green shrink-0">
          <Icon />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-prussian-blue">{title}</h1>
          <p className="text-lg text-gray-700 font-quicksand mt-1">
            {description}
          </p>
        </div>
      </div>

      {/* Input Area */}
      <div>
        <p className="text-base tracking-wide text-gray-600 font-quicksand mb-2">
          {subtext}
        </p>
        <textarea
          rows={6}
          maxLength={charLimits[blockName] || 250}
          className={`w-full p-4 rounded-lg border border-gray-300 shadow-sm font-quicksand tracking-wide  focus:outline-blue-green`}
          placeholder={placeholder}
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        {/* Characters/ character limits */}
        <div className="flex flex-row justify-between items-center font-quicksand text-xs  mt-1 tracking-wide">
          <p
            className={`${
              charLimits[blockName] - input.length <= 15
                ? "text-red-500"
                : "hidden"
            }`}>
            {charLimits[blockName] - input.length} characters remaining
          </p>
          <p className=" text-gray-500 text-right ml-auto">
            {input.length}/{charLimits[blockName]} characters
          </p>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex justify-between pt-6">
        <BackButton path={backPath} />
        <NextButton path={nextPath} />
      </div>
    </div>
  );
};

export default CanvasBlockLayout;
