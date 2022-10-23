import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "../styles/layout/Buatdetail.css"
import dilan from "../assets/detail1.png"
import {AiOutlineArrowLeft} from "react-icons/ai"
import { Link, useParams } from 'react-router-dom';
import Modalcomp from '../components/Modal';
import Checkedcomp from '../components/Modal/checked';
import axios from "axios";
import card from "../assets/card2.png"
import dilann from "../assets/detail.png"


const Buatdetail = (props) => {
    
    const { bookId } = useParams();
    const {background,bodynovel,bodytitle,dates,description} = props;
    // const [book, setBook] = useState({
    //     background: {},
    //     bodynovel: "",
    //     bodytitle: "",
    //     dates: "",
    //     description: "",
    //   });

    // useEffect(() => {
    //     axios
    //       .get(`/Home${bookId}`)
    //       .then((responseAxios) => {
    //         console.log(responseAxios);
    //         const data = responseAxios.data;
    //         setBook({
    //           background: data.background,
    //           bodynovel: data.bodynovel,
    //           bodytitle: data.bodytitle,
    //           dates: data.dates,
    //           description: data.description,
    //         });
    //       });
    //   }, []);
  return (
    <Container fluid className='detaill'>
        <Container fluid className="Up">
            <Row>
                <div className="menu">
                    <Link to="/Home"><AiOutlineArrowLeft className="solid"/></Link>
                    <div className='float-md-end'>
                        <Modalcomp button="Edit" modalTitle="Edit"/>
                        <Checkedcomp button="Delete" modalTitle="Delete Succes"/>
                    </div>
                </div>
            </Row>
        </Container>
        <div className="right float-md-end">
            <img src={background} alt="" />
        </div>

        <Container fluid className=" down px-5">
            <Row className='align-items-center'>
                <Col className="body ">
                    <p className="novel">{bodynovel}</p>
                    <p className="title">{bodytitle}</p>
                    <p>{dates}</p>
                </Col>
                <Col className="text-center pe-5 Available">
                    <p>Available</p>
                </Col>
            </Row>
        </Container>
        <Container fluid className=" px-5 d-flex">
            <Row className='align-items-center'>
                <Col md={9} className="description ">
                    <p>{description}</p>
                </Col>
                <Col md={3} className="borrow text-center">
                    <Checkedcomp button="Borrow" className="button" modalTitle="Borrowed"/> 
                </Col>
            </Row>
        </Container>
    </Container>
  )
}

export default Buatdetail