import './style/services.css'
import cor from './assets/ser-cor.jpg'
import fam from './assets/ser-family.jpg'
import tele from './assets/ser-television.webp'
import { Link } from 'react-router-dom'

function Service(){
    return(
        <>
        
        <div className="all-service">
            <div className="ser-head">
                <h1>OUR SERVICES</h1>
            </div>
            <div className="All-event">

                <div className="cop-event">
                    <Link to="/service/corporate" >
                <img src={cor} />
                <h3>Corporate Events</h3>
                </Link>
                </div>
                
                <div className="fam-event">
                    <Link to="/service/family">
                <img src={fam} />
                <h3>Family Events</h3>
                </Link>
                </div>

                
                <div className="tele-event">
                    <Link to="/service/television">
                <img src={tele} height={165} />
                <h3>Television Events</h3>
                </Link>
                </div>
            </div>
        </div>
       
        </>
    )
}

export default Service