import { useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateShoe = () => {

    const { title , image_url , price , short_description , _id , category , tag , size } = useLoaderData();

    const axiosSecure = useAxiosSecure();

    const [ category1, setCategory] = useState('');
    const [ size1 , setSize]= useState('');
    const [ tag1 , setTag] = useState('');

    useEffect(()=>
        {
            setCategory(category);
            setSize(size);
            setTag(tag);
        },[])


    const handleUpdateShoe = async (e) => {

        e.preventDefault();
        const title = e.target.title.value;
        const image_url = e.target.image_url.value;
        const price = parseFloat(e.target.price.value);
        const description = e.target.description.value; 

        const newData = { title , image_url , price , description , category: category1 , size: size1 , tag: tag1 }

    

        try{

            const res = await axiosSecure.patch(`/shoesUpdate/${_id}`, newData);
            console.log(res.data)
            if(res.data.modifiedCount > 0){
                // show success popup
                // reset();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${newData.title} is updated to the menu.`,
                    showConfirmButton: false,
                    timer: 1500
                  });
            }

        }
        catch(err){
            Swal.fire(err.message);
        }

        

    }


    return (
        <div className=" my-5 md:my-5 m-5">
        <div className=" flex-1 card shrink-0 w-full max-w-sm md:max-w-full shadow-2xl bg-[#a0c5c4]">
            <form  onSubmit={handleUpdateShoe} className="card-body">
   
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-[#86664b] text-xl font-bold">Shoe Title</span>
                    </label>
                    <input type="text" name="title" placeholder="Title" className="input input-bordered"  defaultValue={title} required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-[#86664b] text-xl font-bold">Shoe Image URL</span>
                    </label>
                    <input type="url" name="image_url" placeholder="image_url" className="input input-bordered" defaultValue={image_url} required />
                </div>
                <div className="flex flex-col lg:flex-row gap-5">
                <div className=" flex-1">
                        <select onChange={e=> {
                            setCategory(e.target.value)
   
                            }}
                            value={category1}
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
                            value={size1}
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
                            value={tag1}
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
                            className="input input-bordered" defaultValue={price} required />
                    </div>
                </div>
   
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-[#86664b] text-xl font-bold">Short Description</span>
                    </label>
                    <input type="text" name="description" placeholder="Short description" className="input input-bordered"
                     defaultValue={short_description}    required />
                </div>
   
                
                <div className="form-control mt-6">
                    <button className="btn   text-[#86664b] border-none text-xs md:text-xl">Update Shoe</button>
                </div>
            </form>
   
        </div>
    
    </div>
    );
};

export default UpdateShoe;