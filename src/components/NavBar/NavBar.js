import { Link } from "react-router-dom";

export default function NavBar({user}){
    return(
        <nav className="sidenav">
            <h1>Welcome, {user}</h1>
            <ul class="main-buttons">
                <li>
                    <Link to="/" className="links">Home</Link>
                </li>
                <li>
                    <Link to ="/anime" className="links"> Anime List</Link>
                </li>
                <li>
                    <Link to="" className="links">Log Out</Link>
                </li>
            </ul>
        </nav>
    );
}