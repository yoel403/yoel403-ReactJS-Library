import React from 'react'
import Buatdetail from "../../layout/Buatdetail";
import jujutsu from "../../assets/jujutsu.jpg"

const Detail1Tab = () => {
    const books = [
        {
        background : jujutsu,
        bodynovel : "Novel",
        bodytitle : "JUJUTSU 0",
        dates : "2021",
        description:"is a Japanese manga series written and illustrated by Gege Akutami. It has been serialized in Shueisha's shōnen manga magazine Weekly Shōnen Jump since March 2018, with its chapters collected and published in 20 tankōbon volumes as of August 2022. Novel “Dilan : Dia Adalah Dilanku Tahun 1990” bercerita tentang kisah cinta dua remaja Bandung pada tahun 90an. Berawal dari seorang siswa bernama Dilan yang jatuh cinta dengan siswi pindahan dari SMA di Jakarta bernama Milea. Dilan memiliki beragam cara untuk mendekati dan mencuri perhatian Milea. "
    
        }
    ]
  return (
    <div>
            {books.map((book) => {
              return <Buatdetail
              background = {book.background}
              bodynovel={book.bodynovel}
              bodytitle={book.bodytitle}
              dates={book.dates}
              description = {book.description}
            />;
            })}
          </div>
  )
}

export default Detail1Tab