import React, { useState } from 'react'
import fire from '../config/Fire';

import { FormScreen } from './AuthForm/AuthForm';

function Auth() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        console.log(email, password)
    }

    const handleSignup = () => {
        fire.auth().createUserWithEmailAndPassword(email, password)
            .then((u) => {
                const user = fire.auth().currentUser;
                user.updateProfile({
                    displayName: name
                })
                console.log('User created')
            }).catch((error) => {
                console.log(error)
            })

        console.log(email, password)
    }

    return (
        <div>
            <FormScreen>
                <div>
                    <input 
                        placeholder='Name'
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                    <input 
                        placeholder='Email'
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <input 
                        placeholder='Passord'
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                    <button onClick={handleLogin}>Login</button>
                    <button onClick={handleSignup}>Signup</button>
                </div>
            </FormScreen>
        </div>
    )
}

export default Auth
