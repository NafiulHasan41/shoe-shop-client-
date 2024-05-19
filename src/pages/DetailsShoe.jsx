import {  useParams } from "react-router-dom";
import useAxiosSecure from "../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import useCart from "../hooks/useCart";


const DetailsShoe = () => {

    const id = useParams().id;
   

    const { user } = useAuth();

    const axiosSecure = useAxiosSecure();

    const [shoe, setShoe] = useState({});
    const [, refetch] = useCart();


    

    useEffect( () =>
        {
            getData();
        } ,[])
      

    const getData = async () => {

        try {

            const data = await axiosSecure.get(`/shoeDetails/${id}`)

            console.log(data.data);
            setShoe(data.data);

           
          } catch (err) {
    
            Swal.fire(err.response.data)
           
           
          }

        
    }



    const handleAddToCart = async () => {

        const title = shoe[0]?.title;
        const price = shoe[0]?.price;
        const image_url = shoe[0]?.image_url;
        const category = shoe[0]?.category;
        const short_description = shoe[0]?.short_description;
        const size = shoe[0]?.size;
        const tag = shoe[0]?.tag;
        const cartEmail = user.email;
        const cartName = user?.displayName;


        const applyData = { title, price, image_url, category, short_description, size, tag , cartEmail, cartName};

        try {

          await axiosSecure.post(`/cart`, applyData)

        
            Swal.fire('Added to Cart Successfully!')

            refetch();


           
          } catch (err) {
    
            Swal.fire(err.response.data)
     
           
          }

          
    }


    





     
    return (
        <header className="bg-white dark:bg-gray-900  my-5 lg:my-10">
       
       <h1 className="text-3xl text-center font-semibold text-gray-800 dark:text-white lg:text-4xl">Shoe  <br/> details <span className="text-blue-500 ">Page</span></h1>
         
        <div className="container px-6 py-16 mx-auto">
          <div className="items-center lg:flex">
            <div className="w-full lg:w-1/2">
                <div className="lg:max-w-lg">
                    
                    
             <div className="w-56  overflow-hidden bg-white rounded-lg shadow-lg md:w-full space-y-5 dark:bg-gray-800">
                    <h3 className="py-2 text-xl font-bold tracking-wide text-center text-gray-800 uppercase">
                 { shoe[0]?.title}
                  </h3>
                  <p className=" text-[14px] text-blue-600"><span className=" text-xl font-bold text-gray-700">Category :</span> {shoe[0]?.category} </p>
                  <p className=" text-[14px] text-blue-600"><span className=" text-xl font-bold text-gray-700">Description :</span>{shoe[0]?.short_description}  </p>
                  <p className=" text-[14px] text-blue-600"><span className=" text-xl font-bold text-gray-700">Size :</span> {shoe[0]?.size}</p>
                  <p className=" text-[14px] text-blue-600"><span className=" text-xl font-bold text-gray-700">Tag :</span> {shoe[0]?.tag}  </p>

               <div className="flex items-center justify-between px-3 py-2 bg-gray-200 dark:bg-gray-700">
               <span className="font-bold text-gray-800 dark:text-gray-200">$ {shoe[0]?.price}</span>
              
              <button onClick={handleAddToCart}  className="px-2 py-1 text-xs font-semibold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded hover:bg-gray-700 dark:hover:bg-gray-600 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none">
                Add to cart
             </button>
             
            </div>
            </div>
                </div>
             </div>

             <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
                <img className="w-full h-full lg:max-w-3xl" src={shoe[0]?.image_url} alt="Catalogue-pana.svg"/>
             </div>
        </div>
    </div>
</header>
    );
};

export default DetailsShoe;