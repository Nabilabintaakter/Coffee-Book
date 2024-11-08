import { NavLink } from "react-router-dom";



const Navbar = () => {
    return (
        <div className="  bg-[#ffbf0062] fixed backdrop-blur-sm w-full z-50">
            <div className="navbar container mx-auto flex flex-col md:flex-row gap-4 md:gap-0 px-3 md:px-12">
                <div className="flex-1">
                    <div className="w-8 h-8 md:w-10 md:h-10"><img src='/icons8-coffee-96.png' alt="" /></div>
                    <NavLink to='/' className='ml-5 text-2xl'>COFFEE_BOOK</NavLink>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                        <NavLink className={({isActive})=> `${isActive && 'text-[#FFBE00]'} text-lg md:text-base mr-10 font-bold`} to='/'>Home</NavLink>
                        <NavLink className={({isActive})=> `${isActive && 'text-[#FFBE00]'} text-lg md:text-base  mr-10 font-bold`} to='/coffees'>Coffees</NavLink>
                        <NavLink className={({isActive})=> `${isActive && 'text-[#FFBE00]'} text-lg md:text-base font-bold`} to='/dashboard'>Dashboard</NavLink>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;