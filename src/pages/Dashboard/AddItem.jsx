import { useState } from "react";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";


const AddItem = () => {


    const axiosSecure = useAxiosSecure();

    const [ category , setCategory] = useState('');
    const [ size , setSize]= useState('');
    const [ tag , setTag] = useState('');


     const handleAddItem = async (e) => {
        e.preventDefault();
        const title = e.target.title.value;
        const image_url = e.target.image_url.value;
        const short_description = e.target.description.value;
        const price = parseInt(e.target.price.value);
        const data ={title, image_url, short_description, price, category, size, tag};
        console.log(data);

        try
        {
            const res = await axiosSecure.post('/shoes', data);
            console.log(res.data)
            if(res.data.insertedId){
                // show success popup
               e.target.reset();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${data.title} is added to the menu.`,
                    showConfirmButton: false,
                    timer: 1500
                  });
        }
       }
        catch(err){
            Swal.fire(err.message)
        }

        
     }
    return (
        <div className=" my-5 md:my-5 m-5">
        <div className=" flex-1 card shrink-0 w-full max-w-sm md:max-w-full shadow-2xl bg-[#a0c5c4]">
            <form onSubmit={handleAddItem} className="card-body">
   
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-[#86664b] text-xl font-bold">Shoe Title</span>
                    </label>
                    <input type="text" name="title" placeholder="Title" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-[#86664b] text-xl font-bold">Shoe Image URL</span>
                    </label>
                    <input type="url" name="image_url" placeholder="image_url" className="input input-bordered" required />
                </div>
                <div className="flex flex-col lg:flex-row gap-5">
                <div className=" flex-1">
                        <select onChange={e=> {
                            setCategory(e.target.value)
   
                            }}
                            value={category}
                            name='sort'
                            id='sort'
                            className='border p-4 rounded-md text-white bg-blue-400 border-blue-400 w-full'
                            >
                            <option value=''>Shoe Category</option>
                            <option value='Men'>Men</option>
                            <option value='Women'>Women</option>
                            <option value='Sports'>Sports</option>
                            <option value='Children'>Children</option>
                            <option value='Formal'>Formal</option>
                        </select>
   
                    </div>
                    <div className=" flex-1">
                        <select onChange={e=> {
                            setSize(e.target.value)
   
                            }}
                            value={size}
                            name='sort'
                            id='sort'
                            className='border p-4 rounded-md text-white bg-blue-400 border-blue-400 w-full'
                            >
                            <option value=''>Shoe Size</option>
                            <option value='8'>8</option>
                            <option value='9'>9</option>
                            <option value='10'>10</option>
                            <option value='11'>11</option>
                            <option value='12'>12</option>
                            <option value='13'>13</option>
                            <option value='14'>14</option>
                            
                            
                        </select>
   
                    </div>
                </div>
                <div className=" flex flex-col lg:flex-row gap-5 items-end">
   
                    <div className=" flex-1">
                        <select onChange={e=> {
                            setTag(e.target.value)
   
                            }}
                            value={tag}
                            name='sort'
                            id='sort'
                            className='border p-4 rounded-md text-white bg-blue-400 border-blue-400 w-full'
                            >
                            <option value=''>Shoe Tag</option>
                            <option value='topSelling'>topSelling</option>
                            <option value='topRated'>topRated</option>
                            <option value='newArrival'>newArrival</option>
                        </select>
   
                    </div>
   
                    <div className="form-control flex-1">
                        <label className="label">
                            <span className="label-text text-[#86664b] text-xl font-bold">Price(Us Dollar)</span>
                        </label>
                        <input type="number" name="price" placeholder="100$"
                            className="input input-bordered" required />
                    </div>
                </div>
   
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-[#86664b] text-xl font-bold">Short Description</span>
                    </label>
                    <input type="text" name="description" placeholder="Short description" className="input input-bordered"
                        required />
                </div>
   
                
                <div className="form-control mt-6">
                    <button className="btn   text-[#86664b] border-none text-xs md:text-xl">Add Shoe</button>
                </div>
            </form>
   
        </div>
    
    </div>
    );
};

export default AddItem;