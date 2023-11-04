import { useState,useEffect} from "react";
import BlogList from "./BlogList";

const Home = () => {
const [blogs, setBlogs] = useState(null)
const [isLoading, setIsLoading] = useState(true)
const [error,setError]= useState(null)

const handleDelete = (id) => {
    const newBlogs = blogs.filter(blogData => blogData.id !== id)
    setBlogs(newBlogs)
}
useEffect(()=>{
  setTimeout(()=>{
        fetch(" http://localhost:8000/blogs")
        .then(res =>{
            if(!res.ok){
                throw Error("could not fetch the data for that resource")
            }
            return  res.json()
        })
        .then((data) => {
        setBlogs(data)
        setIsLoading(false)
        setError(null)
        })
        .catch(err => {
            setIsLoading(false)
            setError(err.message)
        })
  },1000)
}, [])

    return ( 
        <div className="home">
            {error && <div>{error}</div>}
        {isLoading && <div>Loding...</div>}
         {blogs && <BlogList blogs ={blogs}  title ="All Blogs!"  handleDelete={handleDelete}/>}
         {/* <BlogList blogs ={blogs.filter((blog) =>  blog.author === "mario")}  title ="Mario's Blogs"  handleDelete={handleDelete}/> */}
        </div>
     );
}
 
export default Home;