import { Outlet } from "react-router-dom";


const Root = () => {
    return (
        <div>
            this root
            <div>
                <Outlet/>
            </div>
        </div>
    );
};

export default Root;