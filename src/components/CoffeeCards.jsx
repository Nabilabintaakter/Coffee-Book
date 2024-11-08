import { Link, useLoaderData, useParams } from "react-router-dom";
import Card from "./Card";
import { useEffect, useState } from "react";


const CoffeeCards = () => {
    const data = useLoaderData();
    const { category } = useParams();
    const [coffees, setCoffees] = useState([])
    useEffect(() => {
        if (category) {
            const filtered = [...data].filter(coffee => coffee.category === category);
            setCoffees(filtered);
        }
        else {
            setCoffees(data.slice(0, 6))
        }
    }, [data, category])
    return (
        <div className="container mx-auto px-3 md:px-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
                {
                    coffees.map((item, idx) => <Card key={idx} coffee={item}></Card>)
                }
            </div>
            <Link to='/coffees'>
                <button className="px-5 py-3 bg-[#FFBE00] text-black font-bold rounded-lg my-12">View All</button>
            </Link>
        </div>
    );
};

export default CoffeeCards;