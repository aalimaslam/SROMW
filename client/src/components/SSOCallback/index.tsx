import { useEffect } from "react"

function SSOCallback(){
    useEffect(()=>{
        localStorage.setItem('sso', 'true');
        window.location.href = '/dashboard';
    }, [])
    return (
        <div>
        <h1>SSO Callback</h1>
        </div>
    )
}

export default SSOCallback