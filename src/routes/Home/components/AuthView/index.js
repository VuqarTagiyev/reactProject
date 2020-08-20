import React, { Component } from 'react'
import LoginView from "./LoginView";
import SignUpView from "./SignUpView";
import PasswordReset from "./PasswordReset";

class AuthView extends Component {
    constructor(props){
        super(props);
        //  1 Giris
        //  2 Qeydiyyat.
        //  3 Sifre reset
        this.state = {
            currentView : 1
        }
    }

    changeView = (newView) => {
        this.setState({ 
            currentView: newView
        });
    }

    render() {

        const view = this.state.currentView === 1 
        ? <LoginView changeView = {this.changeView}/> 
        : this.state.currentView === 2
        ? <SignUpView changeView = {this.changeView}/>
        : <PasswordReset changeView = {this.changeView}/>

        return view
        
    }
}

export default AuthView;