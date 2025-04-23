import { Outlet } from "react-router-dom";
import { Header } from "@/widgets/Header";

export const Layout = () => {
  return (
    <div className="layout">
      <Header />
      <Outlet />
    </div>
  );
};
