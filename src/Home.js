import { useState } from "react";

const Home = () => {
const [blogs, setBlogs] = useState([
    {title : "My new website", body: "lorem ipsum...", author: "mario",id : 1},
    {title : "Welcome party!", body: "lorem ipsum...", author: "yoshi", id :2},
    {title : "Web dev top tips", body: "lorem ipsum...", author: "mario", id: 3},
])

    return ( 
        <div className="home">
          {blogs.map((blogData) => (
              <div className="blog-preview" key={blogData.id}>
                  <h2>{blogData.title}</h2>
                <p>Written by {blogData.author}</p>
              </div>
          ))}
        </div>
     );
}
 
export default Home;