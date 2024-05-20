import { useContext, useEffect } from "react";
import { authContext } from "../../Context/AuthProvider";
import toast, { Toaster } from 'react-hot-toast';

const UpdateInfo = () => {
    useEffect(()=>{
        document.title= 'BizBazaar | Update Info'
    },[])
    const { user, setUser, updateUserProfile } = useContext(authContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        // console.log(user.displayName);
        // console.log(user.photoURL);
        let name = e.target.name.value || user.displayName
        let photourl = e.target.photourl.value || user.photoURL
        setUser({
            displayName: name,
            photoURL: photourl
        })
        updateUserProfile(name, photourl)
            .then(() => {
                console.log('profile updated')
                toast.success('profile updated');
            })
            .catch(error => {
                console.log(error.message)
                toast.error(error.message)
            })
    }
    return (
        <div className="border pt-14 pb-24">
            <h1 className="text-3xl md:text-4xl text-center mb-6 font-bold">Update Your Information!</h1>
            <div className="">
                <div className="w-[90%] lg:w-2/5 mx-auto shadow-xl border  card-body">
                    <form onSubmit={handleSubmit}>
                        <div className="  gap-x-5">
                            <div className="">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="name"  name="name" placeholder="name" className=" input input-bordered rounded-none w-full" />
                            </div>

                        </div>
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" name="photourl" placeholder="Photo URL" className="rounded-none input input-bordered" />
                        </div>
                        <div className="form-control mt-2">
                            <button className="btn bg-green-700 hover:bg-green-800 text-white rounded-none text-base">Update</button>
                        </div>
                    </form>
                </div>
            </div>
            <Toaster
                position="top-right"
                reverseOrder={false}
            />
        </div>
    );
};

export default UpdateInfo;