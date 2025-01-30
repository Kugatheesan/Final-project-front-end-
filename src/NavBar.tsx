import banner from './assets/Design 2.png'
import './style/NavBar.css'
import { Link } from 'react-router-dom'
function NavBar(){
    return(
        <>
        <div className="nav-Page">
            <div>
                <img src={banner} width={80} />
                </div>

                <div>
                <ul className='nav-include'>
                    <li><Link to='/home'>Home</Link></li>
                     <li><Link to='/about'>About</Link></li>
                     <li><Link to='/service'>Services</Link></li>
                     <li><Link to='booking'>Booking</Link></li>
                     <li><Link to='login'>Login</Link></li>
                 </ul>
                </div>      
        </div>
        </>
    )
}

export default NavBar