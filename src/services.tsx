import './style/services.css'
import cor from './assets/ser-cor.jpg'
import fam from './assets/ser-family.jpg'
import tele from './assets/ser-television.webp'

function Service(){
    return(
        <>
        <div className="all-service">
            <div className="ser-head">
                <h1>OUR SERVICES</h1>
            </div>
            <div className="All-event">

                <div className="cop-event">
                    <a href="">
                <img src={cor} />
                <h3>Corporate Events</h3>
                </a>
                </div>
                
                <div className="fam-event">
                    <a href="">
                <img src={fam} />
                <h3>Family Events</h3>
                </a>
                </div>

                
                <div className="tele-event">
                    <a href="">
                <img src={tele} height={165} />
                <h3>Television Events</h3>
                </a>
                </div>
            </div>
        </div>
        </>
    )
}

export default Service