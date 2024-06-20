import { useState } from "react";

const DropDownList = ({handleSubmit, setUserChoice}) =>{
   
   
    return (
        <form onChange={handleSubmit}>
            <label htmlFor="Sort articles">Sort articles:</label>
                <select id="Sort articles" onChange={(choice) => setUserChoice(choice)}>
                    <option value="unsorted" name="default"></option>
                    <option value="Number of comments (most)" name="Number of comments (most)">Number of comments (most)</option>
                    <option value="Number of comments (least)" name="Number of comments (least)">Number of comments (least)</option>
                    <option value="Number of votes (most)" name="Number of votes (most)">Number of votes (most)</option>
                    <option value="Number of votes (least)" name="Number of votes (least)">Number of votes (least)</option>
                    <option value="Date created (newest)" name="Date created (newest)">Date created (newest)</option>
                    <option value="Date created (oldest)" name="Date created (oldest)">Date created (oldest)</option>
                </select>
        </form>
    )



}

export default DropDownList;