import PropTypes from 'prop-types';
import { FaFileAlt } from 'react-icons/fa';
import { FaLocationDot } from "react-icons/fa6";
import { Link } from 'react-router-dom';


const Estate = ({ card }) => {
    // const status = card.status
    const { image, estate_title, location, status, description, area, price, id, segment_name, facilities } = card
    return (
        <div className="  ">
            <div className=" bg-base-100 border border-gray-300 shadow-md rounded-md ">
                <figure ><img src={image} alt="iamge" className='h-[260px] w-full' /></figure>

                <div className=" ">
                    <div className='flex justify-between items-center  px-5 py-3'>
                        <div>
                            <h2 className="text-xl font-semibold text-gray-800 mb-2">{estate_title}</h2>
                        </div>
                        <div className='w-1/4 '>
                            <button className={`btn btn-sm rounded-3xl  uppercase ${status === 'sale' ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'
                                }`}>{status}</button>
                        </div>
                    </div>

                    <div className="flex items-center gap-x-4 px-5 mb-3">
                        <h3 className='text-sm flex items-center text-gray-600'><FaLocationDot className='text-sm text-gray-400  mr-2' />  {location}</h3>
                        <h3 className='text-base flex items-center text-gray-600'>
                            <FaFileAlt className='text-base text-gray-400  mr-2' />{area}</h3>
                    </div>
                    <div className=" px-5 mb-3">
                        <h3 className='text-xl flex items-center text-green-600'>
                            <FaFileAlt className='text-base text-green-600  mr-2' />{segment_name}</h3>
                    </div>
                    <div className='pl-5 mb-5 flex flex-col md:flex-row'>
                        {
                            facilities.map((f, i)=> <span key={i}>
                            <p className=' bg-green-100 font-semibold mb-3 mr-2 p-2 rounded-3xl text-xs' >{f}</p>
                            </span>)
                        }
                    </div>
                    <div className=''>
                        <div className='	'>
                            <p className='px-5'>
                                {description.slice(0, 80)}</p>
                        </div>
                        <div className="border-t-2 my-4"></div>
                        <div className='flex justify-between items-center mb-4 px-5 '>
                            <div>
                                <h3 className='text-lg font-bold'> {price}</h3>
                            </div>
                            <div className='  card-actions'>
                                <Link to={`/estate/${id}`} className="btn  bg-green-700 rounded text-white hover:bg-green-800">View Property</Link>
                            </div>
                        </div>
                    </div>



                </div>
            </div>
        </div>
    );
};
Estate.propTypes = {
    card: PropTypes.object
}
export default Estate;