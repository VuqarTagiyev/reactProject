import React from 'react'

const PasswordReset = ({changeView}) => {
    return (
            <div>
                <form className ="form-inline">
                    <div className ="form-group mb-2">
                    <input style = {{width: '400px'}} type="text" className ="form-control" id="staticEmail2" value="E-mail"/>
                    </div>
                    <button type="submit" className ="btn btn-primary mb-2">Sifreni Yenile</button> <br/>
                </form>
                <p>
                    Giris ucun <a href = "#" onClick = {(e) => {
                        e.preventDefault();
                        changeView(1);
                    }} ><b><u>buraya </u></b> </a> daxil olun
                </p>
            </div>
    )
}


export default PasswordReset;