import React from 'react';
import { Link } from 'react-router';

class Header extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            isNavOpen: false
        }
    }

    buttonClicked = () => {
        this.setState({ 
           isNavOpen : !this.state.isNavOpen 
        });
    }

    render(){
        return (
            <header>
                <nav className = "container navbar navbar-expand-lg navbar-light justify-content-between">
                    <a className="navbar-brand" href="#">Tehsil</a>
                    <button className="navbar-toggler" type="button" onClick = {this.buttonClicked}>
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className = "navbar-collapse justify-content-end " style = {{ display: this.state.isNavOpen ? 'flex' : 'none'}}>
                        <ul className="navbar-nav d-flex align-items-center">
                            <li className="nav-item mx-3">
                                <Link to = "/" activeClassName = "active" className = "nav-link">Home</Link>
                            </li>
                            <li className="nav-item mx-3">
                                <Link to = "/aboutus" activeClassName = "active" className = "nav-link">About us</Link>
                            </li>
                            <li className="nav-item mx-3">
                                <Link to = "/contact" activeClassName = "active" className = "nav-link">Contact</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
        )
    }
}




export default Header;