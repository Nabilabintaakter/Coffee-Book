import Footer from "../components/Footer";
import Navbar from "../components/Navbar";


const MainLayout = () => {
    return (
        <div>
            {/* navbar */}
            <Navbar></Navbar>
            <div className="min-h-[calc(100vh-288px)]">
                {/* dynamic section */}
            </div>
            {/* footer */}
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;