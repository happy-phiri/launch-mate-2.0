import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen min-lg:px-5 overflow-x-hidden">
      <Header />
      <main className="flex-1 w-full max-w-[1440px]  mx-auto">
        <Outlet />
      </main>
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
