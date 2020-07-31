import React from 'react'
import fire from './config/Fire';
import Auth from './Auth/Auth';
import Home from './components/pages/Home';
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
                {this.state.user ? (<Home email={this.state.user.displayName}/>) : (<Auth />)}
            </div>
        )
    }

}

export default App
