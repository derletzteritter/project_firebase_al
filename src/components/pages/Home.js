import React from 'react'
import fire from '../../config/Fire'



function Home(props) {
    const user = fire.auth().currentUser;

    console.log(user)
    
    const handleLogout = () => {
        fire.auth().signOut();
    }

    return (
        <div>
            <h1>Welcome {props.email}</h1>
            <button onClick={handleLogout}>Logout</button>
        </div>
    )
}

export default Home
