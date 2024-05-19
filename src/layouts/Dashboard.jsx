import {  FaCalendar, FaHome, FaList, FaSearch, FaShoppingCart, FaUsers } from "react-icons/fa";
import { IoMdAddCircleOutline } from "react-icons/io";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../hooks/useCart";
import useAdmin from "../hooks/useAdmin";
import { useState } from "react";



const Dashboard = () => {
      
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const [cart] = useCart();

    // TODO: get isAdmin value from the database
    const [isAdmin] = useAdmin();

    return (
        <div className=" flex flex-col lg:flex-row m-3 lg:m-10 lg:gap-8 ">
        <div className=" lg:w-1/4 border-none sm:border-2 rounded-xl ">
            <div className=" border-black border-2 rounded-xl">
                <nav className="  relative bg-[#a0c5c4] rounded-xl  shadow-xl ">
                    <div className="container px-3 py-3 mx-auto">
                        <div className="lg:flex lg:flex-col lg:items-center lg:justify-between">
                            <div className="flex flex-col items-end lg:items-center  lg:justify-between">
                               
                                {/* Mobile menu button */}
                                <div className="flex lg:hidden">
                                    <p className=" font-semibold text-blue-500 mx-2">Bar </p>
                                    <button onClick={toggleMenu} type="button"
                                        className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
                                        aria-label="toggle menu">
                                        {!isOpen ? (
 
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none"
                                            viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
                                        </svg>
                                        ) : (
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none"
                                            viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                            <path strokeLinecap="round" strokeLinejoin="round"
                                                d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                        )}
                                    </button>
                                </div>
                            </div>
 
                            {/* Mobile Menu open: "block", Menu closed: "hidden" */}
                            <div className={`absolute  inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300
                                ease-in-out bg-[#a0c5c4] lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:bg-transparent lg:w-full
                                lg:opacity-100 lg:translate-x-0 flex flex-col-reverse lg:flex lg:flex-row lg:items-start
                                ${isOpen ? 'translate-x-0 opacity-100 ' : 'opacity-0 -translate-x-full' }`}>
                                <div className="flex flex-col my-5 ml-2 space-y-2 lg:space-y-8  min-h-[calc(100vh-50px)]">


                                     {/* dashboard side bar */}
                 <div className="w-64">
                      <ul className="menu p-4">
                    {
                        isAdmin ? <>
                            <li>
                                <NavLink to="/dashboard/adminHome">
                                    <FaHome></FaHome>
                                    Admin Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/addItems">
                                    <IoMdAddCircleOutline/>
                                    Add Items</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/manageItems">
                                    <FaList></FaList>
                                    Manage Shoes</NavLink>
                            </li>
                           
                            <li>
                                <NavLink to="/dashboard/users">
                                    <FaUsers></FaUsers>
                                    All Users</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/usersQuery">
                                    <FaUsers></FaUsers>
                                    Users Query </NavLink>
                            </li>

                        </>
                            :
                            <>
                                <li>
                                    <NavLink to="/dashboard/userHome">
                                        <FaHome></FaHome>
                                        User Home</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/orderHistory">
                                        <FaCalendar></FaCalendar>
                                        Order History</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/cart">
                                        <FaShoppingCart></FaShoppingCart>
                                        My Cart ({cart.length})</NavLink>
                                </li>
                               
                                <li>
                                    <NavLink to="/dashboard/payment">
                                        <FaList></FaList>
                                        Payment</NavLink>
                                </li>
                            </>
                    }
                    {/* shared nav links */}
                    <div className="divider"></div>
                    <li>
                        <NavLink to="/">
                            <FaHome></FaHome>
                            Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/shop">
                            <FaSearch></FaSearch>
                            shop</NavLink>
                    </li>
                
                </ul>
            </div>
 
                                   
                                    
 

 
                                </div>
 
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
        <div className="lg:w-3/4 m-5 md:m-5">
        <Outlet></Outlet>
        </div>
    </div>
    );
};

export default Dashboard;