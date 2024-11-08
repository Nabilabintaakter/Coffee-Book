import {NavLink } from "react-router-dom";


const Tabs = ({categories}) => {
    return (
        <div>
            <div role="tablist" className="tabs tabs-lifted tabs-xs sm:tabs-sm md:tabs-md lg:tabs-lg ">
                {
                    categories.map((category,idx)=> <NavLink to={`/category/${category.category}`} key={idx} role="tab" className={({isActive})=> `tab`}>{category.category}</NavLink>)
                }
            </div>
        </div>
    );
};

export default Tabs;