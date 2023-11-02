const BlogList = ({blogs, title,handleDelete}) => {

    return ( 
        <div className="blog-list">
            <h2>{title}</h2>
            {blogs.map((blogData) => (
            <div className="blog-preview" key={blogData.id}>
                <h2>{blogData.title}</h2>
              <p>Written by the great {blogData.author}</p>
              <button onClick = {() => handleDelete(blogData.id)} >Delete blog</button>
            </div>
        ))}
        </div>
     );
}
 
export default BlogList;