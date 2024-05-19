import { FcGoogle } from "react-icons/fc";
import useAuth from "../../hooks/useAuth";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";



const SocialLogin = () => {
    const { signInWithGoogle } = useAuth();
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();
    const location = useLocation();

    const handleGoogleSignIn = () =>{
        signInWithGoogle()
        .then(result =>{
         
            const userInfo = {
                email: result.user?.email,
                name: result.user?.displayName
            }
            axiosPublic.post('/users', userInfo)
            .then( async (res) =>{
                console.log(res.data);

              Swal.fire("Login Successful")
              
              navigate(location?.state ? location.state.from : "/");
            })
            .catch(err => Swal.fire(err));
        })
    }

    return (
        <div className=" text-center my-3">
         
            <div>
                <button onClick={handleGoogleSignIn} className="btn">
                    <FcGoogle className="mr-2"></FcGoogle>
                    Google
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;