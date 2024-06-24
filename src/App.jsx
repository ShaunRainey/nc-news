import Header from './Components/Header'
import NavBar from './Components/NavBar.jsx'
import HomePage from './Components/HomePage.jsx';
import ArticleList from './Components/ArticleList.jsx'
import CommentList from './Components/CommentList.jsx';
import Users from './Components/Users.jsx';
import { ErrorPage } from './Components/ErrorPage.jsx';
import { UserContext, ProvideUser } from './Contexts/UserContext.jsx';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'

function App() {

  const [account, setAccount] = useState({})

  return (
    <ProvideUser>
      <BrowserRouter>
        <Header />
        <NavBar />
        <Routes>
          <Route path="*" element = {<ErrorPage/>} />
          <Route path="/" element = {<HomePage/>} />

          <Route path="/articles" element = {
            <h2> Select an article to learn more!
              <ArticleList/>
            </h2>
          } />
          <Route path="/articles/:article_id" element = {<ArticleList/>} />

          <Route path="/articles/:article_id/comments" element = {
            <div>
              <ArticleList/>
              <CommentList account={account}/>
            </div>
            } />

            <Route path="/users" element = {<Users setAccount={setAccount}/>}/>

        </Routes>
      </BrowserRouter>
    </ProvideUser>
  )
}

export default App
