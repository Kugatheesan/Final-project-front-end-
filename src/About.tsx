import banner2 from './assets/bunch-flowers-leaves-table.webp'
import './style/About.css'
function About(){
    return(
        <>
       
<div className="container">
<div className="image-container">
    <img src={banner2} alt="Award Winning Team"/>
</div>
<div className="text-container">
    <h2>Abou Us</h2>
    <p>
    Apex Event Design specializes in creating unforgettable events tailored to your needs. We manage both personal and corporate events with excellence. We work with you to transform your special moments into remarkable experiences.
    </p>
    <a href="#" className="button">Read More</a>
</div>
</div>
        </>
    )
}
export default About

