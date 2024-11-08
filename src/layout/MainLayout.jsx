import { Outlet } from "react-router-dom";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Heading from "../components/Heading";
import Navbar from "../components/Navbar";
import Tabs from "../components/Tabs";


const MainLayout = () => {
    return (
        <div>
            <div className="h-[108px] md:h-[64px]">
                {/* navbar */}
                <Navbar></Navbar>
            </div>
            <div className="min-h-[calc(100vh-288px)]">
                <Outlet></Outlet>
            </div>
            {/* footer */}
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;