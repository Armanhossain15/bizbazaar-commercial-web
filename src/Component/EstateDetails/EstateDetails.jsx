import { FaLocationDot } from "react-icons/fa6";
import { Link, useLoaderData, useParams } from "react-router-dom";
import { FaFileAlt } from "react-icons/fa";


const EstateDetails = () => {
    const { id } = useParams()
    const allData = useLoaderData()
    const currentData = allData.filter(data => data.id === parseInt(id))
    const { estate_title, segment_name, description, price, status, area, location, facilities, image, } = (currentData[0])

    return (
        <div className="max-w-[1250px] mx-auto py-10">
            <div className="  ">
                <div className=" bg-base-100 border border-gray-300 shadow-md rounded-md flex flex-col md:flex-row md:mx-7 lg:mx-3 gap-x-5 items-center">
                    <div className="w-2/4">
                        <figure ><img src={image} alt="iamge" className=' w-full' /></figure>
                    </div>

                    <div className=" w-2/4 pr-6">
                        <div className='flex justify-between items-center   py-3'>
                            <div>
                                <h2 className="text-xl font-semibold text-gray-800 mb-2">{estate_title}</h2>
                            </div>
                            <div className='w-1/4 '>
                                <button className={`btn btn-sm rounded-3xl  uppercase ${status === 'sale' ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'
                                    }`}>{status}</button>
                            </div>
                        </div>

                        <div className="flex items-center gap-x-4 mb-3">
                            <h3 className='text-base flex items-center text-gray-600'><FaLocationDot className='text-base text-gray-400  mr-2' />  {location}</h3>
                            <h3 className='text-base flex items-center text-gray-600'>
                                <FaFileAlt className='text-base text-gray-400  mr-2' />{area}</h3>
                        </div>
                        <div className="  mb-3">
                            <h3 className='text-xl flex items-center text-green-600'>
                                <FaFileAlt className='text-base text-green-600  mr-2' />{segment_name}</h3>
                        </div>
                        <div className=' mb-5'>
                            {
                                facilities.map((f, i) => <span key={i}>
                                    <span className=' bg-green-200 font-semibold mr-2 p-2 rounded-3xl text-xs' >{f}</span>
                                </span>)
                            }
                        </div>
                        <div className=''>
                            <div className='	'>
                                <p className=''>{description}</p>
                            </div>
                            <div className="border-t-2 my-4"></div>
                            <div className='flex justify-between items-center mb-4  '>
                                <div>
                                    <h3 className='text-2xl font-bold'> {price}</h3>
                                </div>
                                <div className='  card-actions'>
                                    <Link to='/' className="btn  bg-green-700 rounded text-white hover:bg-green-800">GO Back</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EstateDetails;