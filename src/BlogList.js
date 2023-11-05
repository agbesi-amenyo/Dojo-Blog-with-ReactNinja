const BlogList = ({blogs, title}) => {

    return ( 
        <div className="blog-list">
            <h2>{title}</h2>
            {blogs.map((blogData) => (
            <div className="blog-preview" key={blogData.id}>
                <h2>{blogData.title}</h2>
              <p>Written by the great {blogData.author}</p>
            </div>
        ))}
        </div>
     );
}
 
export default BlogList;