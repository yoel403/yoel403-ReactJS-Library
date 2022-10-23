import React from 'react'
import Cardcomp from '../../components/Card'
import Carousel from '../../components/Carousel'
import Carouseltab from '../../components/Carousel'
import Navbarnavigator from '../../components/Navbar'
import Sidebarcomp from '../../components/Sidebar'
import "../../styles/pages/home.css"
import imageCarousel from "../../assets/dilan.png"
import card from "../../assets/card2.png"
import bodoh from "../../assets/card3.png"

const Hometab = () => {
  const books = [
    {
      image: imageCarousel,
      title: "Dilan 1990",
      sinopsis: "Novel “Dilan : Dia Adalah Dilanku Tahun 1990” bercerita tentang kisah cinta dua remaja Bandung pada tahun 90an. Berawal dari seorang siswa bernama Dilan yang jatuh cinta dengan siswi pindahan dari SMA di Jakarta bernama Milea. Dilan memiliki beragam cara untuk mendekati dan mencuri perhatian Milea.",
      urlImage: "url buku1",
      bookId : "1",
      background : imageCarousel,
      bodynovel : "Novel",
      bodytitle : "DILAN 1990",
      dates : "30 juni 2019",
      description:"Novel “Dilan : Dia Adalah Dilanku Tahun 1990” bercerita tentang kisah cinta dua remaja Bandung pada tahun 90an. Berawal dari seorang siswa bernama Dilan yang jatuh cinta dengan siswi pindahan dari SMA di Jakarta bernama Milea. Dilan memiliki beragam cara untuk mendekati dan mencuri perhatian Milea. "
    },
    {
      image : card,
      title: "Bodo Amat",
      sinopsis: "Novel yang berjudul Sebuah Seni Untuk Bersikap Bodo Amat merupakan kisah nyata tentang seseorang yang bernama Charles Bukowski yang mempunyai masa lalu yang kelam, suka mabuk-mabukan, berjudi, mempermainkan wanita, tukang utang, kasar dan seorang penyair. yang di ciptakan untuk memotivasi manusia",
      urlImage: "url buku2",
      bookId : "2",
      background : card,
      bodynovel : "Novel",
      bodytitle : "DILAN 1990",
      dates : "30 juni 2019",
      description:"Novel “Dilan : Dia Adalah Dilanku Tahun 1990” bercerita tentang kisah cinta dua remaja Bandung pada tahun 90an. Berawal dari seorang siswa bernama Dilan yang jatuh cinta dengan siswi pindahan dari SMA di Jakarta bernama Milea. Dilan memiliki beragam cara untuk mendekati dan mencuri perhatian Milea. "
    },
    {
      image : bodoh,
      title: "Buku3",
      sinopsis: "Pada permainan sepak bola, rupanya setiap tim memiliki banyak strategi yang berbeda untuk meraih kemenangan. Ada tim dengan gaya menyerang, ada tim dengan gaya permainan cepat, bahkan ada yang bertahan. Uniknya, setiap strategi bermain, pernah menyumbangkan kemenangan dan membawa juara bagi tim yang menerapka",
      urlImage: "url buku3",
      bookId : "3"
    },
  ];
  return (
    
    <div className='Wrapper-body d-flex'>
      <Sidebarcomp/> 
      <div className="container-body w-100">
      <Navbarnavigator/>
      <Carousel/>
      <h2>List Book</h2>
      <div className="list-book justify-content-center">
          <div className='d-flex justify-content-center '>
            {books.map((book) => {
              return <Cardcomp 
              image = {book.image}
              title={book.title}
              subtitle={book.sinopsis}
              url={book.urlImage}
              bookId = {book.bookId}
            />;
            })}
          </div>
      </div>
      </div>
    </div>
    
  )
}

export default Hometab