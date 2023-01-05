import { useEffect } from "react";
import { Outlet, useLocation } from "react-router";
import Footer from "./components/Global/Footer";
import Nav from "./components/Global/Nav";
import Cursor from "./components/Global/Cursor";

function App() {
  const location = useLocation();

  useEffect(() => {}, [location]);
  return (
    <div
      className={`flex flex-col w-screen h-fit overflow-x-hidden transition-all duration-700 relative`}
      style={{
        background: `${
          location.pathname != "/about" ? "#f5f5f5" : "rgb(10,8,58)"
        }`,
      }}
    >
      {/* <Cursor /> */}
      <Nav />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
