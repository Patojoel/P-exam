import { Outlet } from "react-router";

const RootLayout = () => {
  return (
    <div className="transition-all">
      <Outlet />
    </div>
  );
};

export default RootLayout;
    