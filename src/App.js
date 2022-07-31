import React, { useEffect } from 'react'
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import ScrollReveal from 'scrollreveal'

import Home from './components/Home/Home';
import GithubApp from './components/Github/GithubApp';
import UnsplashApp from './components/Unsplash/UnsplashApp';
import Covid from './components/Covid/Covid';
const App = () => {
  useEffect(()=>{
    const sr = ScrollReveal({
      origin: "top",
      duration: 2000,
      distance: "80px",
      reset: true
    })
    sr.reveal(
      `#img_container,.projects-container,.card-body,footer,.social`,{opacity: 0, interval: 300}
    )
  },[])
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home/>}></Route>
        <Route exact path='/github' element={<GithubApp/>}></Route>
        <Route exact path='/unsplash' element={<UnsplashApp/>}></Route>
        <Route exact path='/covid' element={<Covid/>}></Route>
      </Routes>
    </Router> 
  )
}

export default App