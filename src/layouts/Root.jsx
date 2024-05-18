import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar";
import Footer from "../pages/Footet";


const Root = () => {
    return (
        <div>
            <Navbar/>
            <div className='min-h-[calc(100vh-250px)]'>
                <Outlet/>
            </div>
            <div className=" mt-5">
                <Footer/>
            </div>
        </div>
    );
};

export default Root;