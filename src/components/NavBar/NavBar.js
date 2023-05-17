import { Link } from "react-router-dom";

export default function NavBar({user}){
    return(
        <nav className="sidenav">
            <h1>Welcome, {user}</h1>
            <ul class="main-buttons">
                <li>
                    <Link to="/">Home</Link>
                    &nbsp; | &nbsp;
                    <Link to ="/anime"> Anime List</Link>
                    &nbsp;&nbsp;
                    <Link to="">Log Out</Link>
                </li>
            </ul>
        </nav>
    );
}