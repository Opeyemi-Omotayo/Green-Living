import React, { useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectSignedIn, setInput } from '../../features/userSlice';
import { BiSearchAlt2 } from "react-icons/bi";


const Search = () => {
    const [inputValue, setInputValue] = useState("tech");
    const isSignedIn = useSelector(selectSignedIn);
    const dispatch = useDispatch();

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        dispatch(setInput(inputValue));
    };

  return (
    <div className='flex flex-1'>
        {isSignedIn ? (
                    <form onSubmit={handleSubmit} className="flex flex-1" >
                        <div className="flex flex-1">
                            <input
                                placeholder="Search for a blog"
                                className="p-2 flex-1 text-black outline-none bg-gray-100"
                                value={inputValue}
                                onChange={(event) => setInputValue(event.target.value)}
                            />
                            <button className="bg-green-600 text-white py-2 px-3" type="submit">
                                <BiSearchAlt2 className="text-2xl" />
                            </button>
                        </div>

                    </form>
                ) : ("")}
    </div>
  )
}

export default Search;