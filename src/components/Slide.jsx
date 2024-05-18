import { Link } from 'react-router-dom'
import { motion } from "framer-motion";


// eslint-disable-next-line react/prop-types
const Slide = ({ image, text }) => {
  return (
    <div
      className='w-full h-[38rem] rounded-xl'
    
    >
      <div >
        <img  src={image} alt="" />
        <div className=' -mt-96 flex items-center justify-center w-full h-full  '>
        <div className='text-center bg-gray-600/30 w-full h-full'>
          <h1 className='text-3xl font-semibold text-white lg:text-4xl'>
            {text}
          </h1>
          <br />
            <p className='mt-3 text-gray-300'>
                Buy your desired <span className='font-medium text-blue-500'>shoe</span> here</p>

                 <Link
            to='/shop'
            className='w-full px-5 py-4 my-7 mt-4 text-sm font-medium text-white  capitalize transition-colors duration-300 transform  rounded-md lg:w-auto focus:outline-none focus:bg-gray-500'
          >


            <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} >

                  <button className=' bg-blue-500/60 p-2 rounded-md font-extrabold text-xl'>Shop</button>
            </motion.div>
                 
          </Link>

                 
         
        </div>
      </div>
      </div>
      
      
    </div>
  )
}

export default Slide