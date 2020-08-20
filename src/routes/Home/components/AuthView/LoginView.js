import React, { Component } from 'react'

const LoginView = ({changeView}) => {
        return (
            <div>
                <form className ="form-inline">
                    <div className ="form-group mb-2">
                    <input type="text" className ="form-control" id="staticEmail2" value="E-mail"/>
                    </div>
                    <div className ="form-group mx-sm-3 mb-2">
                    <input type="password" className ="form-control" id="inputPassword2" placeholder="Password"/>
                    </div>
                    <button type="submit" className ="btn btn-primary mb-2">Daxol ol</button>
                    <a href ="#" onClick = {(e) => {
                        e.preventDefault();
                        changeView(3);
                    }}>Sifreimi unutdum!</a>
                </form>
                <p>
                    Helede Istifadecimiz deilsiniz? <br/>
                    Pulsuz qeydiyyatdan kecmek ucun  <a href = "#" onClick = {(e) => {
                        e.preventDefault();
                        changeView(2);
                    }} ><b><u>buraya </u></b> </a> daxil olun
                </p>
            </div>
        )
}

export default LoginView;