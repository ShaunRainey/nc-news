import { useState } from "react";

const DropDownList = () =>{
   
    const [userChoice, setUserChoice] = useState("")

    const handleSubmit= (event) => {
        event.preventDefault();
        console.log(event.target.value)
    }
   
    return (
        <form onChange={handleSubmit}>
            <label htmlFor="Sort articles">Sort articles:</label>
                <select name="Sort articles" id="Sort articles" onChange={(choice) => setUserChoice(choice)}>
                    <option value="unsorted"></option>
                    <option value="comment_count(desc)">Number of comments (most)</option>
                    <option value="comment_count(asc)">Number of comments (least)</option>
                    <option value="votes(desc)">Number of votes (most)</option>
                    <option value="votes(asc)">Number of votes (least)</option>
                    <option value="created_at(desc)">Date created (newest)</option>
                    <option value="created_at(asc)">Date created (oldest)</option>
                </select>
        </form>
    )



}

export default DropDownList;