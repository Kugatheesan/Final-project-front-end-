import '../style/Services.css'
import cor from '../assets/ser-cor.jpg'
import fam from '../assets/ser-family.jpg'
import tele from '../assets/ser-television.webp'
import { Link } from 'react-router-dom'

function Service() {
    return (
        <>
            <div className="all-service">
                <div className="ser-head">
                    <h1>OUR SERVICES</h1>
                </div>
                <div className="All-event">
                    <div className="event-container">
                        <div className="event-card">
                            <Link to="/service/corporate" >
                                <img src={cor} alt="Corporate Events" />
                                <h3>Corporate Events</h3>
                            </Link>
                        </div>
                        <div className="event-card">
                            <Link to="/service/family">
                                <img src={fam} alt="Family Events" />
                                <h3>Family Events</h3>
                            </Link>
                        </div>
                        <div className="event-card">
                            <Link to="/service/television">
                                <img src={tele} alt="Television Events" />
                                <h3>Television Events</h3>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Service;