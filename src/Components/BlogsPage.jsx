import React from 'react';
import Blog from './Blog';

import "../Css/blog.css";
import { useParams } from 'react-router';
function BlogsPage() {
  let  {genre}= useParams();
  
    return (
        <div className="Card-Container" >
            {genre}
            <Blog></Blog>
        </div>
    );
}

export default BlogsPage;