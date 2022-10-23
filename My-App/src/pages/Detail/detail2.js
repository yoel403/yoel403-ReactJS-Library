import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {AiOutlineArrowLeft} from "react-icons/ai"
import { Link, useParams } from 'react-router-dom';
import Modalcomp from '../../components/Modal';
import Checkedcomp from '../../components/Modal/checked';
import uburubur from "../../assets/uburubur.png"
import fotoubur from "../../assets/UburUbur.jpg"
import "../../styles/pages/detail2.css"

const Detail2tab = () => {
  return (
    <Container fluid className='detaill'>
        <Container fluid className="Upubur">
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
            <img src={fotoubur} alt="" />
        </div>

        <Container fluid className=" down px-5">
            <Row className='align-items-center'>
                <Col className="body ">
                    <p className="novel">Novel</p>
                    <p className="title">Ubur Ubur lembur</p>
                    <p>2021</p>
                </Col>
                <Col className="text-center pe-5 Available">
                    <p>Available</p>
                </Col>
            </Row>
        </Container>
        <Container fluid className=" px-5 d-flex">
            <Row className='align-items-center'>
                <Col md={9} className="description ">
                    <p>Ubur-Ubur Lembur adalah buku kumpulan cerita karya Raditya Dika atau Radit yang diluncurkan secara serentak pada tanggal 7 Februari 2018. Buku ini menceritakan pengalaman Raditya Dika hidup dari apa yang dicintainya.[1] Pada prakata buku tersebut, Radit menceritakan bahwa dari semua pekerjaan yang Ia jalani, menulis adalah pekerjaan yang paling Ia senangi</p>
                </Col>
                <Col md={3} className="borrow text-center">
                    <Checkedcomp button="Borrow" className="button" modalTitle="Borrowed"/> 
                </Col>
            </Row>
        </Container>
    </Container>
  )
}

export default Detail2tab