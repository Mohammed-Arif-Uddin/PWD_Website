import React, { useState } from "react";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
} from "firebase/auth";
// import { FacebookAuthProvider } from "firebase/auth";

import app from "../../firebase/firebase.init";
// import { GoogleAuthProvider } from "firebase/auth/web-extension";

const Login = () => {
  const auth = getAuth(app);
  //   const provider = new GoogleAuthProvider();
  const provider = new FacebookAuthProvider();


  const divStyle = {
    backgroundImage: "url('https://etimg.etb2bimg.com/thumb/msid-95966599,imgsize-99368,width-1200,height=765,overlay-ethr/workplace-4-0/diversity-and-inclusion/international-pwd-day-2022-lets-not-leave-anyone-behind.jpg')", // Replace with your image URL
    backgroundSize: 'cover', // Ensures the image covers the whole page
    backgroundPosition: 'center', // Centers the image
    height: '100vh', // Takes full viewport height
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white', // Adjust text color to contrast with background
};

 

  const [newUser, setNewUser] = useState(false)

  const [user, setUser] = useState({
    isSignedIn: false,
    name: '',
    email: '',
    password: '',
    error: '',
    success: false,
    photo: '',
  })

  const handleGoogleSignIn = () => {
    // signInWithPopup(auth, provider)
    //   .then((result) => {
    //     const user = result.user;
    //     console.log(user);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
    signInWithPopup(auth, provider)
      .then((result) => {
        // The signed-in user info.
        const user = result.user;

       
        const credential = FacebookAuthProvider.credentialFromResult(result);
        const accessToken = credential.accessToken;
        setUser(user);
        console.log(result.user)

      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = FacebookAuthProvider.credentialFromError(error);
        
      });
  };

  return (
    <div style={divStyle}>
      <div>
        <button onClick={handleGoogleSignIn}>Facebook Login</button>
      <h1 color="red">Name is: {user.displayName}</h1>
      <img src={user.photoURL} alt="" />
   

      <h1>Email is: {user.email}</h1>

      {user.emailVerified==false ? (
     <p style={{ color: 'green', fontSize: '50px' ,paddingLeft:'20'}}>
          Hello Good People Welcome to our Project
          <br></br>
          <button 
        style={{ fontSize: '20px' }} 
        onClick={() => window.location.href = 'https://docs.google.com/forms/d/1TjLl_MZdNBHoJd_9Vj16S5G2CJrrWbdDekTAmz_YlOs/edit '}>
        Go To Gform
      </button>        </p> 
      ) : (
        <p style={{ color: 'red', fontSize: '50px' }}>{user.error}</p>
      )} 
      
      </div>
      
    </div>
  );
};

export default Login;
