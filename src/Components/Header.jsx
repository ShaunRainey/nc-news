const Header = () =>{

    const user = 'grumpy19'
    return (
        <header className="header">
            <h1>NC News</h1>
            <p>Logged in as: {user}</p>
        </header>
    )
}

export default Header;