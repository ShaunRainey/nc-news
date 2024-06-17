import { useState } from 'react'
import Header from './Components/Header'
import NavBar from './Components/NavBar.jsx'
import ArticleList from './Components/ArticleList.jsx'
import { BrowserRouter } from 'react-router-dom';
import './App.css'

function App() {

  return (
    <BrowserRouter>
    <Header /><br />
    <NavBar /><br />
    <ArticleList />
    </BrowserRouter>
  )
}

export default App
