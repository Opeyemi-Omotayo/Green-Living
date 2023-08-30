import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectSignedIn, setInput, setSignedIn } from "../../features/userSlice";
import { getAuth, signOut } from "firebase/auth";
import { app } from "../../firebase";
import { FaAudible } from "react-icons/fa";
import { AiOutlineUser } from "react-icons/ai";
import { CiMenuBurger } from "react-icons/ci";
import { TfiClose } from "react-icons/tfi";
import { toast } from "react-toastify";
import Search from "../search/Search";


const Navbar = () => {
    const [nav, setNav] = useState(false);
    const isSignedIn = useSelector(selectSignedIn);

    const dispatch = useDispatch();

    const logout = () => {
        const auth = getAuth(app);
        signOut(auth).then(() => {
            dispatch(setSignedIn(false));
        }).catch((error) => {
            toast(error);
        });

    };

    return (
        <nav className="font-mono bg-black ">
            <div className="lg:flex hidden items-center justify-between  text-white py-3 px-[3rem]">
                <h1 className="flex items-center">
                    <span>Green Living</span>
                    <span className="text-green-500 text-2xl ml-2"><FaAudible /></span>
                </h1>
                <Search />
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

            <div className="lg:hidden flex justify-between items-center py-4 px-[1rem] md:px-[2rem]">
                <h1 className="flex items-center">
                    <span className="text-white text-xl">Green Living</span>
                    <span className="text-green-500 text-2xl ml-2"><FaAudible /></span>
                </h1>
                <ul
                    onClick={() => setNav(!nav)}
                    className={`absolute top-[50px] z-20 bg-gray-50 items-center w-full left-0 py-10 text-sky h-full ${nav ? "block" : "hidden"
                        }`}
                >
                    <div className="flex flex-col h-[150px] text-lg items-center justify-between">
                        <li>
                            <a href="/#blogs">Blogs</a>
                        </li>
                        <li>
                            {isSignedIn ? (
                                <div className="flex items-center bg-gray-200 py-2 px-4 rounded-lg">
                                    <h1 className="mr-5" ><AiOutlineUser className="text-lg" /></h1>
                                    <button className="bg-gray-100 py-1 px-2 rounded-lg" onClick={logout} >
                                        Logout 😦
                                    </button>
                                </div>
                            ) : (
                                <h1 className="bg-gray-200 py-2 px-4 rounded-lg" >No User available 😞</h1>
                            )}
                        </li>
                    </div>
                </ul>
                <div
                    className="lg:hidden block text-3xl text-white"
                    onClick={() => setNav(!nav)}
                >
                    {!nav ? <CiMenuBurger /> : <TfiClose />}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
