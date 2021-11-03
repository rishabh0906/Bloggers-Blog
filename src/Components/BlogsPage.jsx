import React from 'react';
import Blog from './Blog';
import "../Css/blog.css";
function BlogsPage(props) {
    return (
        <div className="Card-Container" >
            <Blog></Blog>
        </div>
    );
}

export default BlogsPage;