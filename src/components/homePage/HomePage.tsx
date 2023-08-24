import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectSignedIn,
    setSignedIn,
    setUserData,} from "../../features/userSlice";


const Homepage = () => {
  const isSignedIn = useSelector(selectSignedIn);

  const dispatch = useDispatch();
  const login = (response: any) => {
    console.log(response);
    dispatch(setSignedIn(true));
    dispatch(setUserData(response.profileObj));
  };

  return (
    <div className={` ${isSignedIn ? 'hidden' : 'block'}`}>
      {!isSignedIn ? (
        <div>
          <h2>📗</h2>
          <h1>A Readers favourite place!</h1>
          <p>
          This is a platform where we share insightful articles, stories, and experiences on a wide range of topics. Whether you're interested in technology, lifestyle, travel, or personal growth, you'll find something engaging and thought-provoking here.
          </p>

              <button
              >
                Login with Google
              </button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Homepage;
