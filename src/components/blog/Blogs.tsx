import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { selectUserInput, setBlogData } from "../../features/userSlice";

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
  const blog_url = `https://gnews.io/api/v4/search?q=${searchInput}&token=${process.env.REACT_APP_GNEWS_API_KEY}`;
  const dispatch = useDispatch();
  const [blogs, setBlogs] = useState<any>(null);;

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
        console.log(error);
      });
  }, [searchInput]);

  return (
    <div >
      <h1 >Blogs</h1>
      {loading ? <h1 >Loading...</h1> : ""}
      <div >
        {blogs?.articles?.map((blog: Blog) => (
          <a  target="_blank" href={blog.url}>
            <img src={blog.image} />
            <div> 
              <h3 >
                <span>{blog.source.name}</span>
                <p>{blog.publishedAt}</p>
              </h3>
              <h1>{blog.title}</h1>
              <p>{blog.description}</p>
            </div>
          </a>
        ))}

        {blogs?.totalArticles == 0 && (
          <h1>
            No blogs available 😞. Search something else to read blogs on the
            greatest platform.
          </h1>
        )}
      </div>
    </div>
  );
};

export default Blogs;
