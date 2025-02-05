import './App.css'
import NavBar from './NavBar'
import First from './First page'
import About from './About'
import MyForm from './Form'
import Book from './Booking'
import Footer from './Footer'
import Service from './services'
import { Route, Routes } from "react-router-dom";
import Corporate from './pages/corporate '
import Family from './pages/Family'
import Television from './pages/Television '
import Signin from './Signin'

function App() {
    return (
        <>
            <NavBar />
            <Routes>
                <Route path='/' element={<First />} />
                <Route path='/about' element={<About />} />
                <Route path='/service' element={<Service />} />
                <Route path='/booking' element={<Book />} />
                <Route path='/login' element={<MyForm />} />
                <Route path='/service/corporate' element={<Corporate />} />
                <Route path='/service/family' element={<Family />} />
                <Route path='/service/television' element={<Television />} />
                <Route path='signin' element={<Signin />}></Route>
            </Routes>

            <Footer />
        </>

    
    )
}

export default App