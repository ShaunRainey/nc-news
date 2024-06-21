import { Link } from "react-router-dom";

const NavBar = () => {

    return(
        <nav className="NavBar">
            <ul className="Nav ul">
                <li className="Nav li">
                    <Link to="/" className="LinkText">
                    Home 
                    </Link>
                </li>

                <li className="Nav li">
                    <Link to="/articles" className="LinkText">
                    All Articles
                    </Link>
                </li>

                <li className="Nav li">
                    <Link to="/articles?topic=cooking" className="LinkText">
                    Cooking Articles
                    </Link>
                </li>

                <li className="Nav li">
                    <Link to="/articles?topic=coding" className="LinkText">
                    Coding Articles
                    </Link>
                </li>

                <li className="Nav li">
                    <Link to="/articles?topic=football" className="LinkText">
                    Football Articles
                    </Link>
                </li>

                <li className="Nav li">
                    <Link to="/users" className="LinkText">
                    Users
                    </Link>
                </li>
            </ul>
        </nav>
        )
}

export default NavBar;