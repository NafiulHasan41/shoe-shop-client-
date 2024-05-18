import Banner from "../components/Banner";
import BestSelling from "../components/BestSelling";
import Hero from "../components/Hero";
import Highlight from "../components/Highlight";
import NewArrival from "../components/NewArrival";
import Questions from "../components/Questions";
import TopRated from "../components/TopRated";


const Home = () => {
    return (
        <div className=" -mt-20">
            <Banner/>

            <div className=" my-5 md:my-10 lg:my-20">
               <Highlight/> 
             </div>

            <div className=" my-5 md:my-10 lg:my-20">
               <NewArrival/> 
             </div>

            <div className=" my-5 md:my-10 lg:my-20">
              <Hero/>
             </div>
            <div className=" my-5 md:my-10 lg:my-20">
               <BestSelling/>
             </div>
            <div className=" my-5 md:my-10 lg:my-20">
               <Questions/>
             </div>
            <div className=" my-5 md:my-10 lg:my-20">
               <TopRated/>
             </div>
        </div>
        
    );
};

export default Home;