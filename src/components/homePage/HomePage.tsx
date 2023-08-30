import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectSignedIn, setSignedIn } from "../../features/userSlice";
import { app } from "../../firebase";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { toast } from "react-toastify";

const Homepage = () => {
  const isSignedIn = useSelector(selectSignedIn);

  const dispatch = useDispatch();

  const login = () => {
    const provider = new GoogleAuthProvider();
    const auth = getAuth(app);
    signInWithPopup(auth, provider)
      .then((result) => {
        dispatch(setSignedIn(true));
      }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        toast(errorCode, errorMessage);
      });
  };

  return (
    <div className={` ${isSignedIn ? 'hidden' : 'block'}`}>
      <div className="font-mono flex items-center justify-center h-[100vh]">
        {!isSignedIn ? (
          <div className=" flex flex-col items-center w-[60%] ">
            <h2 className="text-5xl">📗</h2>
            <h1 className="my-3">A Readers favourite place!</h1>
            <p className="mb-[2rem]">
              This is a platform where we share insightful articles, stories, and experiences on a wide range of topics. Whether you're interested in technology, lifestyle, travel, or personal growth, you'll find something engaging and thought-provoking here.
            </p>

            <button className="bg-green-600 p-4 rounded-lg shadow-md" onClick={login}>
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
