import { Link } from "react-router-dom";


export default function NotFound() {
    return (
        <>
        <p>You droped here while eather looking for something that we do not have<br></br> or you tried reaching a resource you are not authorized to access.</p>
        <Link to='/' className="postBtn">Go back to Home page</Link>
        </>
    )
}