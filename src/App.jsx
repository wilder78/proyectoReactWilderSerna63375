import './App.css'
import Navbar from './components/Header/Navbar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Contacts from './pages/Contacts';
import AboutUs from './pages/aboutUs';
import Home from './pages/Home/Home';
import Error from './pages/Error';
import Card from './pages/Card';
import Products from './pages/Products';
import Login from './pages/Login';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Products' element={<Products />} />
        <Route path='/AboutUs' element={<AboutUs />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/Contacts' element={<Contacts />} />
        <Route path='/Card' element={<Card />} />
        <Route path='*' element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
