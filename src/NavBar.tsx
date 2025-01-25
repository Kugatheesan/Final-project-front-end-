import banner from './assets/Design 2.png'
import './style/NavBar.css'
function NavBar(){
    return(
        <>
        <div className="nav-Page">
            <div>
                <img src={banner} width={80} />
                </div>

                <div>
                <ul className='nav-include'>
                    <li><a href="#">Home</a></li>
                     <li><a href="#">About</a></li>
                     <li><a href="#">Services</a></li>
                     <li><a href="#">Booking</a></li>
                     <li><a href="#">Login</a></li>
                 </ul>
                </div>   
        </div>
        </>
    )
}

export default NavBar