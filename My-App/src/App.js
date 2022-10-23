import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Logintab from './pages/Login';
import Registertab from './pages/Register';
import Hometab from './pages/Home';
import Detailtab from './pages/Detail';
import Modalcomp from './components/Modal';
import Buatdetail from './layout/Buatdetail';
import Detail1Tab from './pages/Detail/detail1';
import Detail2tab from './pages/Detail/detail2';

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Logintab/>}/>
    <Route path="/Register" element={<Registertab/>}/>
    <Route path="/Home" element={<Hometab/>}/>
    <Route path="/Detail/:bookId" element={<Detailtab/>}/>
    <Route path="/Detail"element={<Detailtab/>}/>
    <Route path="/Detail1"element={<Detail1Tab/>}/>
    <Route path="/Detail2"element={<Detail2tab/>}/>
    <Route path="/Login" element={<Logintab/>}/>
    <Route path="/Modal" element={<Modalcomp/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
