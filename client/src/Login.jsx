import {GoogleLogin} from "@react-oauth/google";

function Login(){
    const handleGoogleLogin = (credentialResponse)=>{
        console.log(credentialResponse);
    };
    return(
        <div>
            <h1>SMART HOSPITAL APPOINTMENT SYSTEM</h1>
            <GoogleLogin
            onSuccess={handleGoogleLogin}
            onError={()=>{
                console.error("google login failed");
            }}
            />
        </div>
    );
}
export default Login;