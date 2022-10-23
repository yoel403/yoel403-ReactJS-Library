import React from 'react'
import "../../styles/pages/register.css"
import logoImage from "../../assets/bookshelf.png"
import Signupcomp from '../../components/Forms/signup'
import Copyright from '../../components/Copyright'

const Registertab = () => {
  return (
    <div className="Wrapper">
        <div className="leftside">
            <h2>Study is harder <br /> than you know</h2>
        </div>
        <div className="rightside">
            <img src={logoImage} alt="" />
            <div className="formss">
            <h2>Register</h2>
            <p>Welcome back, please register to create your account</p>
            <Signupcomp/>
            <Copyright className="copyright"/>
            </div>
        </div>
    </div>
  )
}

export default Registertab