import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectSignedIn, setInput, setSignedIn } from "../../features/userSlice";
import { getAuth, signOut } from "firebase/auth";
import { app } from "../../firebase";
import { FaAudible } from "react-icons/fa";
import { AiOutlineUser } from "react-icons/ai";
import { BiSearchAlt2 } from "react-icons/bi";
import { toast } from "react-toastify";


const Navbar = () => {
    const [inputValue, setInputValue] = useState("tech");
    const isSignedIn = useSelector(selectSignedIn);

    const dispatch = useDispatch();

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        dispatch(setInput(inputValue));
    };

    const logout = () => {
        const auth = getAuth(app);
        signOut(auth).then(() => {
            dispatch(setSignedIn(false));
        }).catch((error) => {
            toast(error);
        });

    };

    return (
        <div className=" font-mono flex items-center justify-between bg-black text-white py-3 px-[3rem]">
            <h1 className="flex items-center">
                <span>Green Living</span>
                <span className="text-green-500 text-2xl ml-2"><FaAudible /></span>
            </h1>
            {isSignedIn ? (
                    <form onSubmit={handleSubmit} className="flex flex-1" >
                         <div className="flex flex-1 mx-[3rem]">
                         <input
                            placeholder="Search for a blog"
                            className="p-2 flex-1 text-black outline-none"
                            value={inputValue}
                            onChange={(event) => setInputValue(event.target.value)}
                        />
                        <button className="bg-green-600 py-2 px-3" type="submit">
                            <BiSearchAlt2 className="text-2xl" />
                        </button>
                         </div>
                       
                    </form>
            ) : ("")}

            {isSignedIn ? (
                <div className="flex items-center bg-gray-900 py-2 px-4 rounded-lg">
                    <h1 className="mr-5" ><AiOutlineUser className="text-lg" /></h1>
                    <button className="bg-gray-800 py-1 px-2 rounded-lg" onClick={logout} >
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
