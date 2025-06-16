import { NavLink, Outlet, useLocation } from "react-router-dom";
// import { CanvasContextProvider } from "../context/CanvasContext";
import ProgressBar from "../components/ProgressBar";

const CanvasLayout = () => {
  const location = useLocation();

  const stepPaths = [
    "problem",
    "customers",
    "uvp",
    "solution",
    "channels",
    "revenue",
    "costs",
    "metrics",
    "advantage",
    "summary",
  ];

  // Normalize current path
  const currentPath = location.pathname.split("/").filter(Boolean).pop();

  // Find step index
  const currentStep = stepPaths.findIndex((step) => step === currentPath);

  // If no match (e.g. landing on /generate-canvas), default to 0
  const progressStep = currentStep !== -1 ? currentStep + 1 : 1;

  return (
    <main className="min-h-screen bg-magnolia px-4 py-8">
      <div className="max-w-5xl mx-auto space-y-8">
        <div className="px-4 lg:px-0">
          <ProgressBar
            currentStep={progressStep}
            totalSteps={stepPaths.length}
          />
        </div>

        {/* NAVIGATION */}
        <aside className="flex flex-row justify-center flex-wrap gap-2 font-montserrat mt-8">
          {stepPaths.map((step, index) => (
            <div key={step} className="relative group">
              <NavLink
                to={step === "problem" ? "." : step}
                end={step === "problem"}
                className={({ isActive }) =>
                  `h-9 w-9 min-w-[2.25rem] rounded-full flex items-center justify-center text-sm font-bold border-2 transition-colors ${
                    isActive
                      ? "border-blue-green text-blue-green bg-transparent"
                      : "bg-blue-green text-amber-50 border-blue-green"
                  }`
                }>
                {String(index + 1).padStart(2, "0")}
              </NavLink>

              <div className="absolute bottom-full mb-1 left-1/2 -translate-x-1/2 w-max max-w-[8rem] px-2 py-1 text-xs bg-dark-bg text-white rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10 whitespace-nowrap">
                {step.toLocaleUpperCase().replace("-", " ")}
              </div>
            </div>
          ))}
        </aside>

        <Outlet />
      </div>
    </main>
  );
};
export default CanvasLayout;
