'use client'

import { useState, useEffect } from 'react';
import { getBlogs, delBlog } from './action'

export default function Blogs() {
  type BlogData = {
    id: number;
    name: string;
    content: string;
    likeCount: number;
  }

  const [blogs, setBlogs] = useState<Array<BlogData>>([]);

  async function handleGet() {
    // await fetch('http://localhost:3000/api/blogs')
    //   .then(res => res.json())
    //   .then(data => {
    //     console.log('data', data);
    //     setBlogs(data.list);
    //   })
    const data = await getBlogs()
    console.log('list', data);
    setBlogs(data.list);
  }

  async function handleDelete(id: number) {
    const res = await delBlog(id);
    console.log('delete', res);
    if (res.code === 0) {
      handleGet();
    }
  }

  useEffect(() => {
    handleGet();
  }, []);

  return <div>
    <h1 className="text-3xl">Blog List</h1>
    <div>
      {blogs.map(blog => (
        <div key={blog.id} className="border p-2 my-2 relative">
          <h2 className="text-xl">{blog.name}</h2>
          <p>{blog.content}</p>
          <button className="underline absolute top-4 right-3" onClick={() => handleDelete(blog.id)}>Delete</button>
        </div>
      ))}
    </div>
  </div>;
}