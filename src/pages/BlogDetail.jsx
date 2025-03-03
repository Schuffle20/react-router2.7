// import React from 'react'

import { useNavigate, useParams } from "react-router-dom"
import useFetch from "../hooks/useFetch";
import { useEffect } from "react";

const BlogDetail = () => {
    let params = useParams();
    let url = "http://localhost:3001/blogs/"+params.id;
    let {data: blog, loading, error} = useFetch(url);

    let navigate = useNavigate();

    useEffect(() => {
        if(error) {
            // redirect to Home page
            setTimeout(() => {
                navigate("/");
            }, 2000)
        }
    }, [error, navigate])

  return (
    <div>
        {error && <div>{error}</div>}
        {loading && <div>loading...</div>}
        {blog && (
            <div>
                <h2>{blog.title}</h2>
                <p>Posted by - {blog.author}</p>
                <p>{blog.body}</p>
            </div>
        )}
    </div>
  )
}

export default BlogDetail