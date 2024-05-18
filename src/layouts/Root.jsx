import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar";


const Root = () => {
    return (
        <div>
            <Navbar/>
            <div>
                <Outlet/>
            </div>
        </div>
    );
};

export default Root;