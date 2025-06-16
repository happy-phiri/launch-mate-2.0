import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import GuideLayout from "./layouts/GuideLayout";
import Introduction from "./pages/guide/Introduction";
import Problem from "./pages/guide/Problem";
import Customers from "./pages/guide/Customers";
import Solution from "./pages/guide/Solution";
import UniqueValueProposition from "./pages/guide/UniqueValueProposition";
import UnfairAdvantage from "./pages/guide/UnfairAdvantage";
import Channels from "./pages/guide/Channels";
import Costs from "./pages/guide/Costs";
import Revenue from "./pages/guide/Revenue";
import KeyMetrics from "./pages/guide/KeyMetrics";
import Summary from "./pages/guide/Summary";
import CanvasLayout from "./layouts/CanvasLayout";
import GenerateProblem from "./pages/build/GenerateProblem";
import GenerateCustomerSegments from "./pages/build/GenerateCustomerSegments";
import GenerateUniqueValueProposition from "./pages/build/GenerateUniqueValueProposition";
import GenerateSolution from "./pages/build/GenerateSolution";
import GenerateChannels from "./pages/build/GenerateChannels";
import GenerateRevenueStreams from "./pages/build/GenerateRevenueStreams";
import GenerateCostStructure from "./pages/build/GenerateCostStructure";
import GenerateUnfairAdvantage from "./pages/build/GenerateUnfairAdvantage";
import GenerateKeyMetrics from "./pages/build/GenerateKeyMetrics";
import SummaryPage from "./pages/build/SummaryPage";
import DownloadPDF from "./pages/build/DownloadPDF";
import { CanvasContextProvider } from "./context/CanvasContext";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="guide" element={<GuideLayout />}>
            <Route index element={<Introduction />} />
            <Route path="problem" element={<Problem />} />
            <Route path="customers" element={<Customers />} />
            <Route path="solution" element={<Solution />} />
            <Route path="uvp" element={<UniqueValueProposition />} />
            <Route path="unfairadvantage" element={<UnfairAdvantage />} />
            <Route path="channels" element={<Channels />} />
            <Route path="costs" element={<Costs />} />
            <Route path="revenue" element={<Revenue />} />
            <Route path="keymetrics" element={<KeyMetrics />} />
            <Route path="summary" element={<Summary />} />
          </Route>
          <Route
            path="generate-canvas"
            element={
              <CanvasContextProvider>
                <CanvasLayout />
              </CanvasContextProvider>
            }>
            <Route index element={<GenerateProblem />} />
            <Route path="customers" element={<GenerateCustomerSegments />} />
            <Route path="uvp" element={<GenerateUniqueValueProposition />} />
            <Route path="solution" element={<GenerateSolution />} />
            <Route path="channels" element={<GenerateChannels />} />
            <Route path="revenue" element={<GenerateRevenueStreams />} />
            <Route path="costs" element={<GenerateCostStructure />} />
            <Route path="metrics" element={<GenerateKeyMetrics />} />
            <Route path="advantage" element={<GenerateUnfairAdvantage />} />
            <Route path="summary" element={<SummaryPage />} />
            <Route path="download-pdf" element={<DownloadPDF />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
