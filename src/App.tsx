import './App.css'
import NavBar from './NavBar'
import First from './First page'
import About from './About'
import MyForm from './Form'
import Book from './Booking'
import Footer from './Footer'
import Service from './services'
import Corporate from './pages/corporate '

function App(){
    return(
        <>
        <div>
            <NavBar/>
            <First/>
            <About/>
            <Service/>
            <Corporate/>
            <MyForm/>
            <Book/>
            <Footer/>
        </div>
        </>
    )
}

export default App