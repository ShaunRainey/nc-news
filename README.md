Link to deployed site: https://scintillating-lebkuchen-ab3e47.netlify.app/

Description:

This project has been an exercise in creating a front end app that interacts with backend project previously undertaken. It has the following functionalities:

- Get request: View all news articles
- Get request: View an individual article
- Get request: View all comments associated with an article
- Patch request: Allow a user to increase the vote count of an article
- Post request: Allow a user to post a comment to an article
- Delete request: Allow a user to delete a comment registered to their username
- Get request: View articles by a topic query
- Get request: Sort articles based on creation date, number of votes & number of comments
- Respond to any errors that may appear

Link to back end repo: https://github.com/ShaunRainey/Backend-Project

Node version: v21.7.3

How to run locally:

Git clone the following link: https://github.com/ShaunRainey/nc-news.git

cd into the repo

Open up the code and create a new terminal

Run the following commands:

- npm install
- npm i react-router-dom
- npm install react-bootstrap bootstrap
- npm install axios
- npm install jest -D   //required if wanting to test the utils functions//
- npm run dev

(NOTE TO SELF: If links are responding with a 400 error, server may have gone inactive. Refresh via supabase)

This portfolio project was created as part of a Digital Skills Bootcamp in Software Engineering provided by [Northcoders](https://northcoders.com/)