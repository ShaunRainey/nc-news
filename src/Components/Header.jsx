import { useContext } from "react";
import { UserContext } from "../Contexts/UserContext";

const Header = () =>{

    const user = useContext(UserContext).user.username

    return (
        <header className="header">
            <h1>NC News</h1>
            <p>Logged in as: {user} </p>
        </header>
    )
}

export default Header;