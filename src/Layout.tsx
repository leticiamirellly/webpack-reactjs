import { Outlet } from "react-router-dom";
import Header from "./components/header";

function RootLayout() {
    return (
        <div className="p-12">
            <Header/>
            <Outlet />
        </div>
    );
  }
  export default RootLayout;
  