import { useLoaderData } from "react-router-dom";
import Banner from "../../Component/Banner/Banner";
import ALlEstateCard from "../../Component/ALlEstateCard/ALlEstateCard";
import { useEffect } from "react";


const Home = () => {
    useEffect(()=>{
        document.title= 'BizBazaar | Home'
    },[])
    const allData = useLoaderData()
    console.log(allData)
    return (
        <div>
            <Banner/>
            <ALlEstateCard allData ={allData}></ALlEstateCard>
        </div>
    );
};

export default Home;