import React, { useEffect, useState } from 'react'
import fire from '../../../config/Fire';

function Profile() {
    const user = fire.auth().currentUser;

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')

    useEffect(() => {
        getProfile()
    })

    const getProfile = () => {
        if (user != null) {
            user.providerData.forEach(function(profile) {
                console.log(profile.displayName)
                setUsername(profile.displayName)
                setEmail(profile.email)
            })
        }
    }

    return (
        <div>
            Username: {username}
            <br></br>
            Email: {email}
        </div>
    )
}

export default Profile;
