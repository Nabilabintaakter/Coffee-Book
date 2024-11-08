import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Heading from "../components/Heading";
import Navbar from "../components/Navbar";


const MainLayout = () => {
    return (
        <div>
            <div className="h-[108px] md:h-[64px]">
                {/* navbar */}
                <Navbar></Navbar>
            </div>
            <div className="min-h-[calc(100vh-288px)]">
                {/* banner */}
                <Banner></Banner>
                {/* heading */}
                <Heading title='Browse Coffees by Category' subTitle='Choose your desired coffee category to browse through specific coffees that fit in your taste.'></Heading>
                {/* dynamic section */}
            </div>
            {/* footer */}
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;