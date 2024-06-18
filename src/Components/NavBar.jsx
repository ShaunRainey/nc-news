import { Link } from "react-router-dom";

const NavBar = () => {

    return(
        <nav className="NavBar">
            <ul>
                <Link to="/" className="nav-link">
                Home
                </Link>
                <Link to="/articles" className="nav-link">
                Articles
                </Link>
            </ul>
        </nav>
        )
}

export default NavBar;