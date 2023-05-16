import { Link } from "react-router-dom";

export default function NavBar({user}){
    return(
        <nav>
            <h1>Welcome, {user}</h1>
            <Link to="/">Home</Link>
            &nbsp; | &nbsp;
            <Link to ="/anime"> Anime List</Link>
            &nbsp;&nbsp;
            <Link to="">Log Out</Link>
        </nav>
    );
}