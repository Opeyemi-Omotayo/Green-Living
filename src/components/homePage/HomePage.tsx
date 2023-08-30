import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectSignedIn, setSignedIn } from "../../features/userSlice";
import { app } from "../../firebase";
import { getAuth, signInWithPopup, GoogleAuthProvider, signInWithRedirect, getRedirectResult } from "firebase/auth";
import { toast } from "react-toastify";
import { FaAudible } from "react-icons/fa";

const Homepage = () => {
  const isSignedIn = useSelector(selectSignedIn);

  const dispatch = useDispatch();
  const provider = new GoogleAuthProvider();
  const auth = getAuth(app);

  const loginWithPopup = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        dispatch(setSignedIn(true));
      }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        toast(errorCode, errorMessage);
      });
  };

  const loginWithRedirect = () => {
    signInWithRedirect(auth, provider);
    getRedirectResult(auth)
      .then((result) => {
        dispatch(setSignedIn(true));
      }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        toast(errorCode, errorMessage);
      });
  }

  const handleLoginClick = () => {
    if (window.innerWidth >= 1024) {
      loginWithPopup();
    } else {
      loginWithRedirect();
    }
  };

  return (
    <div className={` ${isSignedIn ? 'hidden' : 'block'}`}>
      <div className="font-mono flex items-center justify-center h-[85vh]">
        {!isSignedIn ? (
          <div className=" flex flex-col items-center w-[90%] md:[80%] lg:w-[60%] ">
            <h2 className="text-5xl text-green-500"><FaAudible /></h2>
            <h1 className="my-3 text-xl">Welcome to Green Living!</h1>
            <p className="mb-[2rem] text-sm md:text-lg">
              This is a platform where we share insightful articles, stories, and experiences on a wide range of topics. Whether you're interested in technology, lifestyle, travel, or personal growth, you'll find something engaging and thought-provoking here.
            </p>

            <button className="bg-green-600 p-4 rounded-lg shadow-md" onClick={handleLoginClick}>
              Login with Google
            </button>
          </div>
        ) : (
          ""
        )}
      </div>

    </div>
  );
};

export default Homepage;
