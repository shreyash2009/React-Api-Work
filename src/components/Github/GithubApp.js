import React, { useState } from 'react'
import './Github.css'
const url = "https://api.github.com/users/"

const GithubApp = () => {
    const [loading, setLoading] = useState(false);
    const [username, setUserName] = useState("")
    const [user, setUser] = useState({})
    const [showInfo, setShowInfo] = useState(false);
    
    const fetchData = async (event)=>{
        event.preventDefault();
        const string = username;
        setUserName("");
        try {
            setLoading(true);
            const res = await fetch(url +string);
        const userdata = await res.json();
        setLoading(false);
        setUser(userdata);
        setShowInfo(true);
        // console.log(userdata)
        // console.log(user)
        } catch (error) {
            setLoading(false)
            return(
     
                <h1>404 ERROR</h1>
            )
        }
    }

    if(loading){
        return(
            <h1>Loading...</h1>
        )
    }
  return (
    <div className='body'>
    <section>
        
        <form onSubmit={fetchData}>
            <input type="text" onChange={(event)=>{setUserName(event.target.value)}} value={username} x-webkit-speech />
            <button type='submit'>Get User </button>
        </form>

        {showInfo && <div className='User-container'>
            <img src={user.avatar_url} className="image" alt='img'/>
            <div className='info'>
                <h3>Username:- <span>{user.login}</span> </h3>
                <h4>Public repositories:- <span>{user.public_repos}</span> </h4>
                <p><span>Bio:- </span> {user.bio}</p>
                <span>followers:- {user.followers} </span><span>Following:- {user.following}</span>
                <br/>
                <a href={user.url}>GitHub Link</a>
            </div>
        </div> }
    </section>
    </div>
  )
}

export default GithubApp