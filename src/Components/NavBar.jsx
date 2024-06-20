import { Link } from "react-router-dom";

const NavBar = () => {

    return(
        <nav className="NavBar">
            <ul className="Nav ul">
                <li className="Nav li">
                <Link to="/" className="nav-link">
                Home 
                </Link>
                </li>

                <li className="Nav li">
                <Link to="/articles" className="nav-link">
                All Articles
                </Link>
                </li>

                <li className="Nav li">
                <Link to="/articles?topic=cooking" className="nav-link">
                Cooking Articles
                </Link>
                </li>

                <li className="Nav li">
                <Link to="/articles?topic=coding" className="nav-link">
                Coding Articles
                </Link>
                </li>

                <li className="Nav li">
                <Link to="/articles?topic=football" className="nav-link">
                Football Articles
                </Link>
                </li>
            </ul>
        </nav>
        )
}

export default NavBar;