import { Link } from "react-router-dom";

export default function NavBar({user, setUser}){

    function logout(){
        setUser(null)
    }
    return(
        <nav className="sidenav">
            <h1>Welcome, {user}</h1>
            <ul className="main-buttons">
                <li>
                    <Link to="/home" className="links">Home</Link>
                </li>
                <li>
                    <Link to ="/anime" className="links"> Anime</Link>
                </li>
                <li>
                    <Link to="/manga" className="links">Manga</Link>
                </li>
                <li>
                    <Link to="" onClick={logout} className="links">Log Out</Link>
                </li>
            </ul>
        </nav>
    );
}