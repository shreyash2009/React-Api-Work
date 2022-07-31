import React from 'react'
import { Link } from 'react-router-dom'
import dev_img from '../../assets/dev.png'
import github from '../../assets/github.png'
import unsplash from '../../assets/unsplash.jpg'
import covid from '../../assets/covid2.jpg'
import Footer from '../Footer'
import './Home.css'
const Home = () => {
  
  return (
    <>
    <header><h1>React Projects</h1></header>
    <div id='img_container'><img src={dev_img} alt='img'/></div>
    <div className='projects-container'>
      <div className="card-body" >
        <img src={github} alt='project-img' height="240px"/>
        <Link exact to="/github"><h4>Github User Api</h4></Link>
      </div>
      <div className="card-body" >
        <img src={unsplash} alt='project-img' height="240px"/>
        <Link exact to="/unsplash"><h4>Unsplash Clone</h4></Link>
      </div>
      <div className="card-body" >
        <img src={covid} alt='project-img' height="240px"/>
        <Link exact to="/covid"><h4>Covid</h4></Link>
      </div>
      
    </div>
    <Footer/>
    </>
  )
}

export default Home