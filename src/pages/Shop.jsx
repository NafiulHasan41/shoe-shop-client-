import { useEffect, useState } from "react";

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import axios from "axios";
import ShoeCard from "../components/ShoeCard";

const Shop = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };


    // For handling all sideBar action

    const [itemsPerPage, setItemsPerPage] = useState(9)
  const [currentPage, setCurrentPage] = useState(1)
  const [count, setCount] = useState(0)
  const [filter, setFilter] = useState('')
  const [shoeSize, setShoeSize] = useState('')
  const [sort, setSort] = useState('')
  const [search, setSearch] = useState('')
  const [searchText, setSearchText] = useState('')
  const [shoes, setShoes] = useState([])


  useEffect(() => {
    const getData = async () => {
      const { data } = await axios(
        `${
          import.meta.env.VITE_API_URL
        }/shoes?page=${currentPage}&size=${itemsPerPage}&filter=${filter}&sort=${sort}&search=${search}&shoeSize=${shoeSize}`
      )
      setShoes(data)
     
    }
    getData()
  }, [currentPage, filter, itemsPerPage, search, sort,shoeSize])


  useEffect(() => {
    const getCount = async () => {
      const { data } = await axios(
        `${
          import.meta.env.VITE_API_URL
        }/shoesCount?filter=${filter}&search=${search}&shoeSize=${shoeSize}`
      )

      setCount(data.count)
    }
    getCount()
  }, [filter, search,shoeSize])

 
  const numberOfPages = Math.ceil(count / itemsPerPage)
  const pages = [...Array(numberOfPages).keys()].map(element => element + 1)

  //  handle pagination button
  const handlePaginationButton = value => {
   
    setCurrentPage(value)
  }
  const handleReset = () => {
    setFilter('')
    setSort('')
    setSearch('')
    setSearchText('')
    setItemsPerPage(9);
    setShoeSize('');
  }

  const handleSearch = e => {
    e.preventDefault()

    setSearch(searchText)
  }




console.log(pages);
console.log(count);




    return (
        <div className=" flex flex-col lg:flex-row m-3 lg:m-10 lg:gap-8 ">
        <div className=" lg:w-1/4 border-none sm:border-2 rounded-xl ">
            <div className=" border-black border-2 rounded-xl">
                <nav className="  relative bg-[#a0c5c4] rounded-xl  shadow-xl ">
                    <div className="container px-3 py-3 mx-auto">
                        <div className="lg:flex lg:flex-col lg:items-center lg:justify-between">
                            <div className="flex flex-col items-end lg:items-center  lg:justify-between">
                                <form onSubmit={handleSearch}>
                                    <div className="flex m-2 flex-row justify-center">
                                        <input id="search" type="text"
                                            className="px-1 py-1 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300"
                                            onChange={e=> setSearchText(e.target.value)}
                                        value={searchText}
                                        name='search'
                                        placeholder='Enter Shoe Title'
                                        aria-label='Enter Shoe Title' />
 
                                        <button
                                            className=" px-2 py-2 text-sm tracking-wider text-white uppercase transition-colors duration-300 transform bg-blue-400 font-bold rounded-lg lg:w-auto lg:mx-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                                            Search
                                        </button>
                                    </div>
                                </form>
 
                                {/* Mobile menu button */}
                                <div className="flex lg:hidden">
                                    <p className=" font-semibold text-blue-500">Filter</p>
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
                                <div
                                    className="flex flex-col my-5 ml-2 space-y-2 lg:space-y-8  min-h-[calc(100vh-50px)]">
 
                                    <div>
                                        <button onClick={handleReset}
                                            className='btn hover:scale-[1.1] bg-blue-400 border-blue-400 text-white w-full'>
                                            Reset
                                        </button>
                                    </div>
 
                                    <div>
                                        <select onChange={e=> {
                                            setSort(e.target.value)
                                            setCurrentPage(1)
                                            }}
                                            value={sort}
                                            name='sort'
                                            id='sort'
                                            className='border p-4 rounded-md text-white bg-blue-400 border-blue-400 w-full'
                                            >
                                            <option value=''>Sort By Price</option>
                                            <option value='asc'>Low to High</option>
                                            <option value='dsc'>High to Low</option>
                                        </select>
 
                                    </div>
                                    <div> 
                                         <p className="text-black text-bold text-xl my-2 ">Items Per Page</p>
                                        <select onChange={e=> {
                                            setItemsPerPage(e.target.value)
                                            setCurrentPage(1)
                                            }}
                                            value={itemsPerPage}
                                            name='page'
                                            id='page'
                                            className='border p-4 rounded-md text-white bg-blue-400 border-blue-400 w-full'
                                            >
                                            <option value='9'>9</option>
                                            <option value='12'>12</option>
                                            <option value='18'>18</option>
                                        </select>
 
                                    </div>
 
                                    <div className=" text-white">
                                        {/* if problem happen for this class in MUI then I will change it */}
                                        <FormControl>
                                            <FormLabel id="demo-radio-buttons-group-label">Filter By Category</FormLabel>
                                            <RadioGroup value={filter} onChange={e=> {
                                                setFilter(e.target.value)
                                                setCurrentPage(1)
                                                }}
                                                aria-labelledby="demo-radio-buttons-group-label"
                                                name="radio-buttons-group" class=" grid grid-cols-2 ">
                                                <FormControlLabel value='' control={<Radio />} label="None" />
                                                <FormControlLabel value='Men' control={<Radio />} label="Men" />
                                                <FormControlLabel value='Women' control={<Radio />} label="Women" />
                                                <FormControlLabel value='Sports' control={<Radio />} label="Sports" />
                                                <FormControlLabel value='Children' control={<Radio />} label="Children"/>
                                                <FormControlLabel value='Formal' control={<Radio />} label="Formal"/>
                                            </RadioGroup>
                                        </FormControl>
                                    </div>

                                    <div className=" text-white">
                                        {/* if problem happen for this class in MUI then I will change it */}
                                        <FormControl>
                                            <FormLabel id="demo-radio-buttons-group-label">Filter By Size(US)</FormLabel>
                                            <RadioGroup value={shoeSize} onChange={e=> {
                                                setShoeSize(e.target.value)
                                                setCurrentPage(1)
                                                }}
                                                aria-labelledby="demo-radio-buttons-group-label"
                                                name="radio-buttons-group" class=" grid grid-cols-2 ">
                                                <FormControlLabel value='' control={<Radio />} label="None" />
                                                <FormControlLabel value='8' control={<Radio />} label="8" />
                                                <FormControlLabel value='9' control={<Radio />} label="9" />
                                                <FormControlLabel value='10' control={<Radio />} label="10" />
                                                <FormControlLabel value='11' control={<Radio />} label="11" />
                                                <FormControlLabel value='12' control={<Radio />} label="12" />
                                                <FormControlLabel value='13' control={<Radio />} label="13" />
                                                <FormControlLabel value='14' control={<Radio />} label="14" />
                                                
                                              
                                               
                                            </RadioGroup>
                                        </FormControl>
                                    </div>
 
                                </div>
 
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
        <div className="lg:w-3/4">
 
 
 
 
           
 
  {/* for shoe all cart showing  */}
             <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">

                {
                    shoes.map(shoe => <ShoeCard key={shoe._id} shoe={shoe} />)
                }
               
             </div>
 
            {/* pagination */}
            <div className='flex justify-center mt-12 overflow-x-auto w-full' >
         {/* Previous Button */}
         <button
           disabled={currentPage === 1}
           onClick={() => handlePaginationButton(currentPage - 1)}
           className='px-4 py-2 mx-1 text-gray-700 disabled:text-gray-500 capitalize bg-gray-200 rounded-md disabled:cursor-not-allowed disabled:hover:bg-gray-200 disabled:hover:text-gray-500 hover:bg-blue-500  hover:text-white'
         >
           <div className='flex items-center -mx-1'>
             <svg
               xmlns='http://www.w3.org/2000/svg'
               className='w-6 h-6 mx-1 rtl:-scale-x-100'
               fill='none'
               viewBox='0 0 24 24'
               stroke='currentColor'
             >
               <path
                 strokeLinecap='round'
                 strokeLinejoin='round'
                 strokeWidth='2'
                 d='M7 16l-4-4m0 0l4-4m-4 4h18'
               />
             </svg>
 
             <span className='mx-1'>previous</span>
           </div>
         </button>
         {/* Numbers */}
         {pages.map(btnNum => (
           <button
             onClick={() => handlePaginationButton(btnNum)}
             key={btnNum}
             className={`hidden ${
               currentPage === btnNum ? 'bg-[#a0c5c4] text-white' : ''
             } px-4 py-2 mx-1 transition-colors duration-300 transform  rounded-md sm:inline hover:bg-blue-500  hover:text-white`}
           >
             {btnNum}
           </button>
         ))}
         {/* Next Button */}
         <button
           disabled={currentPage === numberOfPages}
           onClick={() => handlePaginationButton(currentPage + 1)}
           className='px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-gray-200 rounded-md hover:bg-blue-500 disabled:hover:bg-gray-200 disabled:hover:text-gray-500 hover:text-white disabled:cursor-not-allowed disabled:text-gray-500'
         >
           <div className='flex items-center -mx-1'>
             <span className='mx-1'>Next</span>
 
             <svg
               xmlns='http://www.w3.org/2000/svg'
               className='w-6 h-6 mx-1 rtl:-scale-x-100'
               fill='none'
               viewBox='0 0 24 24'
               stroke='currentColor'
             >
               <path
                 strokeLinecap='round'
                 strokeLinejoin='round'
                 strokeWidth='2'
                 d='M17 8l4 4m0 0l-4 4m4-4H3'
               />
             </svg>
           </div>
         </button>
            </div>
        </div>
    </div>
     );
};

export default Shop;