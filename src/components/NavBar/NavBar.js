import { Link } from "react-router-dom";

export default function NavBar({setUser}){
    return(
        <nav>
            <h1>Welcome</h1>
            <Link to="/">Home</Link>
            &nbsp; | &nbsp;
            <Link to ="/anime"> Anime List</Link>
            &nbsp;&nbsp;
            <Link to="">Log Out</Link>
        </nav>
    );
}