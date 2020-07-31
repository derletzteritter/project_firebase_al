import React, { useEffect,  useState} from 'react'
import fire from '../../../config/Fire'



function Home(props) {
    const user = fire.auth().currentUser;

    const [username, setUsername] = useState('')

    useEffect(() => {
        getProfile()
    })

    const getProfile = () => {
        if (user != null) {
            user.providerData.forEach(function(profile) {
                console.log(profile.displayName)
                setUsername(profile.displayName)
            })
        }
    };

    console.log(user)
    
    const handleLogout = () => {
        fire.auth().signOut();
    }

    return (
        <div>
            <h1>Welcome {username}</h1>
            <button onClick={handleLogout}>Logout</button>
        </div>
    )
}

export default Home
