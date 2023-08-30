import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { selectUserInput, setBlogData } from "../../features/userSlice";
import { toast } from "react-toastify";
import Search from "../search/Search";

interface Blog {
    source: {
        name: string;
    };
    url: string;
    image: string;
    publishedAt: string;
    title: string;
    description: string;
}

const Blogs = () => {
    const searchInput = useSelector(selectUserInput);
    const dispatch = useDispatch();
    const [blogs, setBlogs] = useState<any>(null);;
    const blog_url = `https://gnews.io/api/v4/search?q=${searchInput}&country=ng&token=${process.env.REACT_APP_GNEWS_API_KEY}`;

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios
            .get(blog_url)
            .then((response) => {
                dispatch(setBlogData(response.data));
                setBlogs(response.data);
                setLoading(false);
            })
            .catch((error) => {
                toast(error);
            });
    }, [searchInput, blog_url]);

    return (
        <div className="font-mono px-[1rem] md:px-[2rem] lg:px-[3rem]">
            <div className="flex mt-[2rem] lg:hidden">
            <Search />
            </div>
            <h1 className="pt-[3rem] text-4xl underline">Blogs</h1>
            {loading ? <h1>Loading...</h1> : ""}
            <div className="  grid gap-10 pt-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 lg:place-content-center">
                {blogs?.articles?.map((blog: Blog) => (
                    <a className="shadow-lg bg-gray-50 border rounded-md pb-5" target="_blank" rel="noreferrer" key={blog.title} href={blog.url}>
                        <img src={blog.image} className="h-[180px] w-full" alt={blog.title} />
                        <div>
                            <h3 className="flex text-sm items-center justify-between p-3" >
                                <span >{blog.source.name}</span>
                                <p className="bg-gray-100 py-1 px-2 rounded-lg">{new Date(blog.publishedAt).toDateString()}</p>
                            </h3>
                            <h1 className="font-bold p-3">{blog.title}</h1>
                            <p className=" text-xs px-3">{blog.description}</p>
                        </div>
                    </a>
                ))}

                {blogs?.totalArticles === 0 && (
                    <h1 className="flex items-center justify-center">
                        No blogs available 😞. Search something else to read blogs on the
                        greatest platform.
                    </h1>
                )}
            </div>
        </div>
    );
};

export default Blogs;
