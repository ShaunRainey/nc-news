import { getUsers } from "../Utilities/api";
import { useEffect, useState, useContext } from "react";
import { UserContext } from "../Contexts/UserContext";

const Users = ({setAccount}) => {

    const setUser = useContext(UserContext).setUser

    const [accounts, setAccounts] = useState({
        username: 'grumpy19',
        name: 'Paul Grump', 
        avatar_url: 'https://vignette.wikia.nocookie.net/mrmen/images/7…r-Grumpy-3A.PNG/revision/latest?cb=20170707233013'
    })
    const [isLoading, setIsLoading] = useState(true)
    
    useEffect(()=>{
        setIsLoading(true);
        getUsers()
        .then((AccountsFromApi)=>{
            setAccounts(AccountsFromApi)
            setIsLoading(false)
        })
    },[])

    if(isLoading) {
        return (
        <div className="WaitingForInfo">
            <h2>The information is on its way!</h2>
            <img src="https://images.squarespace-cdn.com/content/v1/5b65297275f9eecd1c7ad526/1540853174790-JUOB0AW2VT7XJIRUSW47/Baby-Wombat-running-down-hallway.gif?format=1000w" alt="A wombat with a mission" />
        </div>
    )}

    return(
        <main className="ArticleList">
            {accounts.map((person)=>{
                return(
                    <ul className="UserList" key={person.name}>
                        <li className="">
                            <button className="UserCard" onClick={()=>{setUser(person); alert(person.username + "is now logged in")}}>
                                <img src={person.avatar_url} alt={"Image showing " + person.username+ "'s avatar of choice"}/>
                                <p>Username: {person.username}</p>
                                <p>Name: {person.name}</p>
                            </button>
                        </li>
                    </ul>
                )
            })}
        </main>
    )
}

export default Users;