import React from "react";
import "./login.css";
import google from "../../images/google.png";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from "../../firebase";
import { useNavigate } from "react-router-dom";


export default function Login() {
  const provider = new GoogleAuthProvider();
  const auth = getAuth(app);

  const navigate = useNavigate();
  async function handleSignIn() {

    signInWithPopup(auth, provider)
  .then((result) => {
    
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    
    const user = result.user;
    console.log(user)
    navigate("/dashboard")
    
  }).catch((error) => {
   
    const errorCode = error.code;
    const errorMessage = error.message;
    
    const email = error.customData.email;
    
    const credential = GoogleAuthProvider.credentialFromError(error);
   
  });



  }





  return (
    <div className="login">
      <div className="login-cont">
        <div className="login-head">
          <h1>Welcome To Spark</h1>
          <p>
          Platform where community activities meets <br></br>Newer Posibilities!
          </p>
         
        </div>
        <div className="login-button">
          <button
          
          onClick={handleSignIn}
          className="login-btn">
            
            <img src={google} alt=""></img>
            <p> Sign in with Google</p>
          </button>
        </div>
      </div>
    </div>
  );
}