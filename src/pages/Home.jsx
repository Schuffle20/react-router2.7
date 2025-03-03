// import React from 'react'

import { Link } from "react-router";
import useFetch from "../hooks/useFetch"
import "./Home.css";
const Home = () => {
  let url = "http://localhost:3001/blogs/";
  let { data: blogs, loading, error } = useFetch(url);

  return (
    <div className="Home">
        {error && <div>{error}</div>}
        {loading && <div>loading...</div>}

        {blogs && blogs.map(blog => (
          <div key={blog.id} className="card">
            <h3>{blog.title}</h3>
            <p>Posted by - {blog.author}</p>
            <p>{blog.body.slice(0, 50)}{blog.body.length > 50 ? "...": ""}</p>
            <Link to={`/blogs/${blog.id}`}>Read More</Link>
          </div>
        ))}
        
      
    </div>
  )
}

export default Home