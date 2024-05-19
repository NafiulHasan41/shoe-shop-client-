import { useLoaderData } from "react-router-dom";


const UserQuery = () => {

    const query = useLoaderData();
   
    
  
    return (
        <div>
       
        <div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                #
                            </th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Message</th>
                           
                        </tr>
                    </thead>
                    <tbody>
                        {
                            query.map((item, index) => <tr key={item._id}>
                                <td>
                                    {index + 1}
                                </td>
                                <td>
                                   {item.name}
                                </td>
                                <td>
                                    {item.email}
                                </td>
                                <td className=" text-center ">{item.message}</td>
                             
                              
                            </tr>)
                        }
                    </tbody>


                </table>
            </div>
        </div>
    </div>
    );
};

export default UserQuery;