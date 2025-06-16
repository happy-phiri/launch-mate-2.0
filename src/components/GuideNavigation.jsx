import { NavLink } from "react-router-dom";
import { navItems } from "../data";

const GuideNavigation = () => {
  return (
    <aside className="flex flex-wrap justify-center max-md:px-2.5 lg:flex-col lg:gap-4 py-10 font-montserrat text-prussian-blue text-sm">
      {navItems.map(({ to, label, number }) => (
        <NavLink
          key={to}
          to={to}
          {...(to === "." ? { end: true } : {})}
          className={({ isActive }) => {
            return `flex items-center gap-3 pl-0 pr-3 py-2 rounded-md transition-colors font-montserrat ${
              isActive
                ? "text-blue-green font-semibold"
                : "text-prussian-blue hover:bg-sky-blue/20"
            }`;
          }}>
          {({ isActive }) => (
            <>
              <span
                className={`h-9 w-9 min-w-[2.25rem] rounded-full flex items-center justify-center text-sm font-bold border-2 transition-colors ${
                  isActive
                    ? "border-blue-green text-blue-green bg-transparent"
                    : "bg-blue-green text-amber-50 border-blue-green"
                }`}>
                {number}
              </span>
              <span className="hidden lg:inline">{label}</span>
            </>
          )}
        </NavLink>
      ))}
    </aside>
  );
};

export default GuideNavigation;
