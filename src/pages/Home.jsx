import { Outlet, useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import Heading from "../components/Heading";
import Tabs from "../components/Tabs";


const Home = () => {
    const categories = useLoaderData();

    return (
        <div>
            {/* banner */}
            <Banner></Banner>
            {/* heading */}
            <Heading title='Browse Coffees by Category' subTitle='Choose your desired coffee category to browse through specific coffees that fit in your taste.'></Heading>
            {/* tabs */}
            <Tabs categories={categories}></Tabs>
            {/* dynamic section */}
            <Outlet></Outlet>
        </div>
    );
};

export default Home;