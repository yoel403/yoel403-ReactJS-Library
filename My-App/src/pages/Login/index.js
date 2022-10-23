import React from 'react'
import Formscomp from '../../components/Forms/login';
import "../../styles/pages/login.css"
import logoImage from "../../assets/bookshelf.png"
import Copyright from '../../components/Copyright';

const Logintab = () => {
  return (
    <div className="Wrapper">
        <div className="leftside">
            <h2>Study is harder <br /> than you know</h2>
        </div>
        <div className="rightside">
            <img src={logoImage} alt="" />
            <div className="formss">
            <h2>Login</h2>
            <p>Welcome back please login to your account</p>
            <Formscomp/>
            </div>

            <div className="rights">
              <Copyright/>
            </div>
            
        </div>
    </div>
  )
}

export default Logintab;