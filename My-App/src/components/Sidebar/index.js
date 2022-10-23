import React, { Children, useState } from 'react'
import {FaBars} from "react-icons/fa"
import { Link, NavLink } from 'react-router-dom'
import imageProfile from "../../assets/niki.png"
import "../../styles/components/sidebar.css"
import logout from "../../assets/logout.png"
import Button from 'react-bootstrap/Button';
import Modalcomp from '../Modal'


const Sidebarcomp = ({children}) => {
    const [isOpen, setisOpen] = useState(false);
    const toggle = () => setisOpen (!isOpen);
    const menuItem=[
        {
            path:"",
            name:"Explore",
            icon:""
        },
        {
            path:"",
            name:"History",
            icon:""
        }
    ]
  return (
    <div>
        <div style={{width: isOpen ? "250px" : "50px"}} className="sidebar">
        <div style={{marginLeft: isOpen ? "220px" : "14px"}} className="bars">
                    <FaBars onClick={toggle}/>
                </div>
            <div className="top-section text-center justify-content-center">
                <div style={{display: isOpen ? "block" : "none"}} className="profile">
                    <img src={imageProfile} alt="" />
                    <p>Niki Minach</p>
                    <Link to="/Login"> <button className='mt-2'> <img src={logout} alt="" /> Logout</button> </Link>
                </div>
                
            </div>
            {
                menuItem.map((item,index) =>(
                    <NavLink to={item.path} key={index} className="link" activeclassName="active">
                        <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                    </NavLink>
                ))
                
                
            }
            <div style={{display: isOpen ? "block" : "none"}}>
            <Modalcomp className=".add" button="Add Book" modalTitle="Add Book"/>
            </div>
            
        </div>
        <main>{children}</main>
    </div>
  )
}

export default Sidebarcomp