import banner12 from './assets/icons8-instagram-48.png'
import banner13 from './assets/icons8-facebook-48.png'
import banner14 from './assets/icons8-youtube-48.png'
import banner from './assets/Design 2.png'
import './style/Footer.css'
function Footer(){
    return(
        <>
        <div className='footer'>
            <div className='footer-logo'>
                <img src={banner} />
                <div>
                <h1 id='footer-h1'>Apex</h1>
                <h2 id='footer-h2'> Event Design</h2>
                </div>
            </div>
            
            <div className="fo-link">
            <ul>
            <h2>Links:</h2>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Booking</a></li>
        <li><a href="#">Login</a></li>
      </ul>
            </div>
            <div className="fo-connect">
                <h2>Connect Us:</h2>
                <h3>+94 76 046 2103</h3>
                <h3><a href="">vkugatheesan@gmail.com</a></h3>
                <h3>Chunnakam south Chunnakam ,Jaffna</h3>
            </div>
            <div className="fo-socialmedia">
                <a href="" target="_blank" ><img src={banner12} /></a>
                <a href="" target="_blank"><img src={banner13} /></a>
                <a href="" target="_blank"><img src={banner14} /></a>

            </div>
        </div>
        </>
    )
}

export default Footer