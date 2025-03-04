import React from "react";
import "./Blog.css";
import img1 from './images/image1.jpg'; 
import img2 from './images/image2.jpg';

const Blog = () => {
  const posts = [
    {
      date: "Nov 9, 2023",
      title: "How UX works in web",
      tags: ["UI", "UX"],
      image: img1,
    },
    {
      date: "Aug 18, 2023",
      title: "Case study - Analysis Application.",
      tags: ["DESIGN", "PRINT"],
      image: img2,
    },
    {
      date: "Feb 5, 2023",
      title: "3 ways to develop your skill",
      tags: ["DEV", "LEARNING"],
      image: img1,
    },
  ];

  return (
    <div className="blog-container">
      <h1 className="blog-title">✶ Blog</h1>
      <div className="blog-list">
        {posts.map((post, index) => (
          <div key={index} className="blog-item">
            <img src={post.image} alt={post.title} className="blog-image" />
            <div className="blog-content">
              <p className="blog-date">{post.date}</p>
              <h2 className="blog-heading">{post.title}</h2>
              <div className="blog-tags">
                {post.tags.map((tag, i) => (
                  <span key={i} className="tag">{tag}</span>
                ))}
              </div>
            </div>
            <button className="read-btn">Read</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
