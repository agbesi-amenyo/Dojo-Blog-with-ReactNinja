import { Link } from "react-router-dom";

const NotFound = () => {
    return (  
        <div className="not-found">
            <h2>Sorry!</h2>
            <p>This page cannot be found!</p>
            <Link to ='/'>back to HomePage</Link>
        </div>
    );
}
 
export default NotFound;