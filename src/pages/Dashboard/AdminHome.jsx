import useAuth from "../../hooks/useAuth";


const AdminHome = () => {
    const {user} = useAuth();
    
    return (
        <div>
             <h2 className=" text-2xl md:text-4xl text-blue-500">
                <span>Hi, Welcome Admin  </span>
                {
                    user?.displayName ? user.displayName : 'Back'
                }

               
            </h2>
        </div>
    );
};

export default AdminHome;