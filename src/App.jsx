import Header from './Components/Header'
import NavBar from './Components/NavBar.jsx'
import ArticleList from './Components/ArticleList.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'

function App() {

  return (
    <BrowserRouter>
      <Header /><br />
      <NavBar /><br />
      <Routes>
        <Route path="/" element = {<ArticleList/>} />
        <Route path="/articles" element = {<ArticleList/>} />
        <Route path="/articles/:article_id" element = {<ArticleList/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
