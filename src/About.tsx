import banner2 from './assets/bunch-flowers-leaves-table.webp'
import './style/About.css'
function About(){
    return(
        <>
        <div className="sec-page">
            <div className='image'>
                <img src={banner2} />
                </div>
                <div className='para'>
                <p>
                Apex Event Design specializes in creating unforgettable events tailored to your needs. We manage both personal and corporate events with excellence. We work with you to transform your special moments into remarkable experiences.
                </p>
                </div>
            </div>
        </>
    )
}
export default About