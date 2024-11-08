import { Link } from "react-router-dom";


const Card = ({coffee}) => {
    const {id,name,image,category,type, origin,rating,popularity}= coffee || {}
    return (
        <div className="flex relative mb-12 md:mb-24">
            <Link to={`/coffee/${id}`} className='transition hover:scale-105 shadow-xl rounded-xl overflow-hidden'>
                <figure className="w-full h-48 overflow-hidden">
                    <img src={image} alt="" />
                </figure>
                <div className="p-4">
                    <h1 className="text-xl">Name: {name}</h1>
                    <p>Category: {category}</p>
                    <p>Type: {type}</p>
                    <p>Origin: {origin}</p>
                    <p>Rating: {rating}</p>
                    <p>Popularity: {popularity}</p>
                </div>
            </Link>
        </div>
    );
};

export default Card;