import { Outlet } from "react-router-dom";
import Topbar from "../components/shared/Topbar";
import Bottombar from "../components/shared/Bottombar";
import LeftSidebar from "../components/shared/LeftSidebar";

const RootLayout = () => {
  return (
    <div className="flex flex-col md:flex-row w-full h-full">
      <Topbar />
      <LeftSidebar />

      <main className="flex-1 flex h-full">
        <Outlet />
      </main>

      <Bottombar />
    </div>
  );
};

export default RootLayout;
