
const Banner = () => {
    return (
        <div className="carousel w-full ">
            <div id="slide1" className="carousel-item relative w-full ">
                <div className="hero min-h-[480px]" style={{ backgroundImage: 'url(https://i.ibb.co/SJh3xyD/showing-good-results-group-young-freelancers-office-have-conversation-smiling.jpg)' }}>
                    <div className="hero-overlay bg-black bg-opacity-80"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-2xl">
                            <h1 className="mb-5 text-4xl md:text-5xl font-bold">Modern Office Spaces in Business District</h1>
                            <p className="mb-5">Explore modern office spaces in bustling business districts. Designed for productivity and collaboration, these spaces feature contemporary amenities and stunning city views.</p>
                            <button className="px-8 rounded-none btn border-2 border-green-600 text-white bg-transparent ">Get Started</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>

            <div id="slide2" className="carousel-item relative w-full">
                <div className="hero min-h-[480px]" style={{ backgroundImage: 'url(https://i.ibb.co/tDMt0YX/group-people-working-out-business-plan-office.jpg)' }}>
                    <div className="hero-overlay bg-black bg-opacity-80"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-2xl">
                            <h1 className="mb-5 text-4xl md:text-5xl font-bold">Prime Retail Locations in High-Traffic Areas</h1>
                            <p className="mb-5">Discover prime retail locations in vibrant, high-traffic areas. Perfect for retailers seeking visibility and foot traffic, these spaces offer optimal exposure and unforgettable shopping experiences</p>
                            <button className="px-8 rounded-none btn border-2 border-green-600 text-white bg-transparent">Get Started</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>

            <div id="slide3" className="carousel-item relative w-full">
                <div className="hero min-h-[480px]" style={{ backgroundImage: 'url(https://i.ibb.co/R9rGpC0/guy-shows-document-girl-group-young-freelancers-office-have-conversation-working.jpg)' }}>
                    <div className="hero-overlay bg-black bg-opacity-80"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-2xl">
                            <h1 className="mb-5 text-4xl md:text-5xl font-bold">Industrial Warehouses with State-of-the-Art Facilities</h1>
                            <p className="mb-5">Uncover industrial warehouses with cutting-edge facilities. From storage to manufacturing, these spaces are equipped to support diverse business operations and facilitate growth.</p>
                            <button className="px-8 rounded-none btn border-2 border-green-600 text-white bg-transparent">Get Started</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>

            <div id="slide4" className="carousel-item relative w-full">
                <div className="hero min-h-[480px]" style={{ backgroundImage: 'url(https://i.ibb.co/k4dw5gp/modern-equipped-computer-lab-1.jpg)' }}>
                    <div className="hero-overlay bg-black bg-opacity-80"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-2xl">
                            <h1 className="mb-5 text-4xl md:text-5xl font-bold">Flexible Co-working Spaces for Entrepreneurs</h1>
                            <p className="mb-5">Find flexible co-working spaces designed for entrepreneurs. Offering convenience, community, and affordability, these spaces empower individuals and small teams to work, connect, and grow together in dynamic shared environments.</p>
                            <button className="px-8 rounded-none btn border-2 border-green-600 text-white bg-transparent">Get Started</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;