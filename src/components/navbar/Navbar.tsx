import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectSignedIn } from "../../features/userSlice";

const Navbar = () => {
  const isSignedIn = useSelector(selectSignedIn);

  return (
    <div className="flex">
      <h1 >Green Living</h1>
      {isSignedIn ? (
        <div >
          <input
            placeholder="Search for a blog"
          />
          <button>
            Search
          </button>
        </div>
      ): ("")}

      {isSignedIn ? (
        <div >
          
          <h1 >user</h1>
         
              <button>
                Logout 😦
              </button>
        </div>
      ) : (
        <h1 >No User available 😞</h1>
      )}
    </div>
  );
};

export default Navbar;
