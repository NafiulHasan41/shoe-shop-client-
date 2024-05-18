import { Link } from "react-router-dom";
import Carousel from "./Carousel";





const Banner = () => {
    return (
        <header className=" bg-bannerImg   w-full min-h-[calc(100vh-330px)] shadow-2xl ">

         <div className=" px-6 mx-auto w-full rounded-b-3xl bg-gray-900/30  shadow-xl  pt-40 md:pt-10 ">
        <div className="items-center  lg:flex w-full">
            <div className="flex-1 w-full ">
                <div className="  lg:max-w-lg lg:w-[90%] mx-auto text-center">
                    <h1 className="text-3xl font-bold text-white lg:text-4xl">We are the best <span className="text-blue-400"> Shoe providers</span></h1>

                    <p className="mt-3 font-bold text-gray-200 ">Find your desired   <span className="font-medium text-blue-400">Shoes</span> here </p>

                    <div className="flex flex-col mt-6 space-y-3 lg:space-y-0 lg:flex-row justify-center">
                        <Link to='/shop'>
                        
                        <button className="w-full px-5 py-2 text-sm tracking-wider text-white uppercase transition-colors duration-300 transform bg-blue-400 font-bold rounded-lg lg:w-auto lg:mx-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                            Shop Now
                        </button>
                        </Link>
                    </div>
                </div>
            </div>

            <div className="flex-1 items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2 rounded-xl">
              <Carousel/>
            </div>
        </div>
    </div>
</header>
    );
};

export default Banner;