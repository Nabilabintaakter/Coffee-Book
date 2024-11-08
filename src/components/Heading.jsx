

const Heading = ({title, subTitle}) => {
    return (
        <div className="container mx-auto my-12">
            <h1 className="text-4xl text-black text-center mb-3">{title}</h1>
            <p className="text-base text-gray-600 text-center">{subTitle}</p>
        </div>
    );
};

export default Heading;