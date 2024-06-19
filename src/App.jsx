import Header from './Components/Header'
import NavBar from './Components/NavBar.jsx'
import HomePage from './Components/HomePage.jsx';
import ArticleList from './Components/ArticleList.jsx'
import CommentList from './Components/CommentList.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'

function App() {

  return (
    <BrowserRouter>
      <Header /><br />
      <NavBar /><br />
      <Routes>
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
            <CommentList/>
          </div>
          } />
      </Routes>
    </BrowserRouter>
  )
}

export default App
