import { Link } from "react-router-dom";

const BlogList = ({blogs, title}) => {

    return ( 
        <div className="blog-list">
            <h2>{title}</h2>
            {blogs.map((blogData) => (
            <div className="blog-preview" key={blogData.id}>
               <Link to ={`/blogs/${blogData.id}`}>
               <h2>{blogData.title}</h2>
              <p>Written by the great {blogData.author}</p>
               </Link>
            </div>
        ))}
        </div>
     );
}
 
export default BlogList;