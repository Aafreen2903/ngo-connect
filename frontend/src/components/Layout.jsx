import { Outlet } from "react-router-dom";
import Header from "./Header"
import Footer from "./Footer" 

function Layout() {

  return (
    <div className="app-background d-flex flex-column">
        <Header />
        <main className="flex-grow-1">
          <Outlet />
        </main>
        <Footer />
    </div>
  );
}

export default Layout;