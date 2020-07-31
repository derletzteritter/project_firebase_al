import React from 'react'
import fire from './config/Fire';
import Auth from './Auth/Auth';
import Routes from './Routes/Routes';

import './App.css'



class App extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            user: {},
        }
    }

    componentDidMount() {
        this.authListener()
    }

    authListener = () => {
        fire.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ user })
            } else {
                this.setState({ user: null })
            }
        })
    }

    render() {
        return (
            <div>
                {this.state.user ? (<Routes />) : (<Auth />)}
            </div>
        )
    }

}

export default App
