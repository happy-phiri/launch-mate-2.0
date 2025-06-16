const ProgressBar = ({ currentStep, totalSteps }) => {
  const percentage = Math.round((currentStep / totalSteps) * 100);

  return (
    <div className="w-full bg-gray-200 h-3 rounded-full overflow-hidden mb-6">
      <div
        className="h-full bg-blue-green transition-all duration-300"
        style={{ width: `${percentage}%` }}></div>
    </div>
  );
};

export default ProgressBar;
