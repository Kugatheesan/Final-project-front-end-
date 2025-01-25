import './App.css'
import NavBar from './NavBar'
import First from './First page'
import About from './about'
import MyForm from './Form'
import Book from './Booking'
import Footer from './Footer'
import Service from './services'

function App(){
    return(
        <>
        <div>
            <NavBar/>
            <First/>
            <About/>
            <Service/>
            <MyForm/>
            <Book/>
            <Footer/>
        </div>
        </>
    )
}

export default App