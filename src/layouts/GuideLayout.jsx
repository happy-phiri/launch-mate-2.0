import { NavLink, Outlet } from "react-router-dom";
import GuideNavigation from "../components/GuideNavigation";

const GuideLayout = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-[300px_1fr]">
      <div className="bg-white border-b border-gray-200 lg:border-b-0 lg:border-r lg:min-h-screen lg:sticky lg:top-0">
        <GuideNavigation />
      </div>
      <div className="bg-[#f9f9f9] px-6 py-10 overflow-auto">
        <Outlet />
      </div>
    </section>
  );
};

export default GuideLayout;
