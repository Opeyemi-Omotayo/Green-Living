import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectSignedIn } from "../../features/userSlice";

const Navbar = () => {
  const isSignedIn = useSelector(selectSignedIn);

  return (
    <div className="flex items-center justify-between bg-black text-white py-3 px-[3rem]">
      <h1 >Green Living</h1>
      {isSignedIn ? (
        <div className="flex flex-1 mx-[3rem]">
          <input
            placeholder="Search for a blog"
            className="p-2 flex-1 text-black outline-none"
          />
          <button className="bg-green-500 p-2">
            Search
          </button>
        </div>
      ): ("")}

      {isSignedIn ? (
        <div className="flex bg-gray-900 py-2 px-4 rounded-lg">
          <h1 className="mr-5" >User</h1>
              <button className="bg-gray-800 py-1 px-2 rounded-lg" >
                Logout 😦
              </button>
        </div>
      ) : (
        <h1 className="bg-gray-900 py-2 px-4 rounded-lg" >No User available 😞</h1>
      )}
    </div>
  );
};

export default Navbar;
