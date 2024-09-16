import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Logout(){
    const navigate = useNavigate();
    useEffect(()=>{
        if(localStorage.getItem('sso')){
            localStorage.clear();
            navigate('/signin');
        }else{
            navigate('/signin');
        }
    }, [navigate]);

    return <div></div>
}


export default Logout;