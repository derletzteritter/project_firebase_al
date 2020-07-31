import React, { useState } from 'react';
import fire from '../config/Fire';
import './Auth.css';

import { FormScreen } from './AuthForm/AuthForm';

function Auth() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMsg, setErrorMsg] = useState('');

    const handleLogin = () => {
        fire.auth().signInWithEmailAndPassword(email, password)
            .then((u) => {
                console.log(u)
                console.log(`User created. Email: ${email}, Password: ${password}`)
            }).catch((error) => {
                console.log(error)
                setErrorMsg(error.message)
            })
        console.log(email, password)
    }


    const handleSignup = () => {
        fire.auth().createUserWithEmailAndPassword(email, password)
            .then((u) => {
                console.log(u)
                const user = fire.auth().currentUser;
                user.updateProfile({
                    displayName: username
                })
                console.log('User created')
            }).catch((error) => {
                console.log(error)
                setErrorMsg(error.message)
            })

        console.log(email, password)
    }

    return (
        <div>
            <FormScreen title='Login / Signup'>
                <p className="error-message">{errorMsg}</p>
                <div className='auth-form'>
                    <input 
                        className="auth-input"
                        placeholder='Username'
                        value={username}
                        type='text'
                        onChange={e => setUsername(e.target.value)}
                    />
                    <input 
                    className="auth-input"
                        placeholder='Email'
                        value={email}
                        type='email'
                        onChange={e => setEmail(e.target.value)}
                    />
                    <input 
                        className="auth-input"
                        placeholder='Passord'
                        value={password}
                        type='password'
                        onChange={e => setPassword(e.target.value)}
                    />
                    <button className='auth-button' onClick={handleLogin}>Login</button>
                    <button className='auth-button' onClick={handleSignup}>Signup</button>
                </div>
            </FormScreen>
        </div>
    )
}

export default Auth
