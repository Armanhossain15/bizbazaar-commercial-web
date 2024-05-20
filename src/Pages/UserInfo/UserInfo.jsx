import { useContext, useEffect } from "react";
import { authContext } from "../../Context/AuthProvider";
import { Link } from "react-router-dom";
import { MdOutlineArrowOutward } from "react-icons/md";


const UserInfo = () => {
    useEffect(()=>{
        document.title= 'BizBazaar | User Info'
    },[])
    const { user } = useContext(authContext)
    return <>
        <h1 className=" pt-14 text-3xl md:text-4xl text-center mb-6 font-bold">User Profile Information</h1>
        <div className=" flex justify-center pt-5 pb-20">

            <div className="card w-96 bg-base-100 shadow-lg border border-gray-500">
                <figure className="px-10 pt-6">
                    <img src={user.photoURL} />
                </figure>
                <div className="card-body items-center text-center">
                    <input type="text" value={user.displayName} className="input input-bordered input-success w-full max-w-xs" />
                    <input type="email" value={user.email} className="input input-bordered input-success w-full max-w-xs" />

                    {/* <h2 className="card-title text-3xl font-bold">{user.displayName}</h2>
                    <p className="py-1">{user.email}</p> */}
                    <div className="card-actions">
                        <Link to='/updateinfo' className="btn bg-green-700 hover:bg-green-800 text-white rounded-none px-4">Edit Information <MdOutlineArrowOutward className="text-lg" />
                        </Link >
                    </div>
                </div>
            </div>
        </div>
    </>;
};

export default UserInfo;