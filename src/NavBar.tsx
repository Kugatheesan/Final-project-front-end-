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
                     <li><Link to='/'>Home</Link></li>
                     <li><Link to='/about'>About</Link></li>
                     <li><Link to='/service'>Services</Link></li>
                     <li><Link to='booking'>Booking</Link></li>
                     <li><Link to='login'>Register</Link></li>
                     </ul>  
                     </div>    
                     <div className='nav-center'>
                    <button> <li><Link to='signin'>Sign in</Link></li> </button>
                 
                    </div>
                 
        </div>
        </>
    )
};

export default NavBar