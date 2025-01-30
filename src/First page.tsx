import './style/First page.css'
import whatsapp from "./assets/icons8-whatsapp-48.png"
import dest from './assets/perfect-destination-wedding-venues-sri-lanka.webp'
import unique from './assets/weddings-photos-in-sri-lanka.webp'
import stress from './assets/lassana-flora-weddings-sri-lanka.webp'
import para1 from './assets/Planning-1.webp'
import para2 from './assets/time-management-dreamstime.jpg'
import { Link } from 'react-router-dom'

function First(){
    return(
        <>
            <div className="Header">
                <h1>Apex</h1>
                <h2 className='outline'>Event Designs</h2>
                <h2 className='tagline'>Turning Moments into Memories.</h2>

                <div className='whatsapp'>
            <a href="">
                <img src={whatsapp} className='whatsapp-img'/>
               </a> 
            </div>
               </div>
               
               <div className="front-para">
    <h2>What is Event Planning?</h2>
    <div className="front-para-one">
        <p>
            Event planning involves organizing festivals, ceremonies, competitions, parties, and conventions, covering budgeting, venue selection, permits, logistics, decor, security, and more. 
            The industry ranges from global events like the Olympics to small business meetings, helping organizations build relationships, raise funds, and celebrate. 
            In Sri Lanka, many event planners exist, but only a few deliver premium results—choose a well-reputed company to make your dream event a success.
        </p>
        <img src={para1} alt="Event Planning" />
    </div>

    <h3>What is Time Management?</h3>
    <div className="front-para-two">
        <p>
            Time management is the process of planning and controlling how time is spent on tasks to enhance efficiency, productivity, and effectiveness. 
            It involves using various skills, tools, and techniques to prioritize tasks, meet deadlines, and balance work and personal activities. 
            Essential in project development, time management ensures timely completion and optimal resource utilization for better outcomes.
        </p>
        <img src={para2} alt="Time Management" />
    </div>
</div>


            <div className="extera-add">
    <div className="front-page">
        <img src={dest} alt="Destination Weddings" />
        <h3>Destination Weddings</h3>
        <p>Apex Event offers the best destination wedding packages for both foreigners and locals in Sri Lanka and beyond.</p>
        <Link to="/service">Read More</Link>
    </div>
    <div className="front-page">
        <img src={unique} alt="Unique Scenarios" />
        <h3>Unique Scenarios</h3>
        <p>Experience uniqueness throughout your event management process with our innovative "out of the box" approach.</p>
        <Link to="/service">Read More</Link>
    </div>
    <div className="front-page">
        <img src={stress} alt="Stress Free" />
        <h3>Stress-Free</h3>
        <p>Let Apex Event handle your event stress while you focus on other important things in life.</p>
        <Link to="/service">Read More</Link>
    </div>
</div>

        </>
    )
}
export default First