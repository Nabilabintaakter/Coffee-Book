import { useLoaderData } from "react-router-dom";
import Card from "../components/Card";


const Coffees = () => {
    const data = useLoaderData()
    return (
        <div className="container mx-auto px-3 md:px-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
                {
                    data.map((item, idx) => <Card key={idx} coffee={item}></Card>)
                }
            </div>
        </div>
    );
};

export default Coffees;