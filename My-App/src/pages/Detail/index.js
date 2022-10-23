import React from "react";
import Buatdetail from "../../layout/Buatdetail";
import card from "../../assets/card2.png"
import dilan from "../../assets/detail1.png"
const Detailtab = () => {
  const books = [
    {
    bookId : "1",
    background : dilan,
    bodynovel : "Novel",
    bodytitle : "DILAN 1990",
    dates : "30 juni 2019",
    description:"Novel “Dilan : Dia Adalah Dilanku Tahun 1990” bercerita tentang kisah cinta dua remaja Bandung pada tahun 90an. Berawal dari seorang siswa bernama Dilan yang jatuh cinta dengan siswi pindahan dari SMA di Jakarta bernama Milea. Dilan memiliki beragam cara untuk mendekati dan mencuri perhatian Milea. "

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
    );
  };

  export default Detailtab