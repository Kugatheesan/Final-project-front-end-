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
               <a href="">
                <img src={whatsapp} className='whatsapp-img'/>
               </a> 
            </div>
            <div className='front-para'>
                <h2>What is Event Planning?</h2>
                <div className='front-para-one'>
                <p>Event planning is the process of planning a festival, ceremony, competition, party, concert, or convention. Event planning can include budgeting, establishing dates and alternate dates, selecting and reserving the event site, acquiring permits (alcohol permits, insurance licenses, etc.), coordinating transportation and parking, developing a theme or motif for the event, arranging for speakers and alternate speakers, coordinating location support (such as electricity and other utilities), and arranging decor, event support and security, catering, emergency plans, aid stations, and cleanup. Event management is the application of project management to this process.
                   The industry now includes events of all sizes from the Olympics down to a breakfast meeting for ten business people. Many industries, charitable organizations, and interest groups will hold events of some size to market themselves, build business relationships, raise money or celebrate something.
                   There are a large number of event planners & event management companies in Sri lanka today. But the companies who are delivering a premium quality result to their clients are just less than the fingers of your hand. So don't make your dream event a risk, choose only a well-reputed company across the globe. 
                 </p>
                 <img src={para1} width={200} height={220} />
                 </div>

                <h2>What is time management?</h2>
                <div className='front-para-one'>
                <p>Time management is the act or process of planning and exercising conscious control over the amount of time spent on specific activities, especially to increase effectiveness, efficiency or productivity.
                   It is a meta-activity with the goal to maximize the overall benefit of a set of other activities within the boundary condition of a limited amount of time.
                   Time management may be aided by a range of skills, tools, and techniques used to manage time when accomplishing specific tasks, projects, and goals complying with a due date. Initially, time management referred to just business or work activities, but eventually the term broadened to include personal activities as well. A time management system is a designed combination of processes, tools, techniques, and methods. Time management is usually a necessity in any project development as it determines the project completion time and scope.
                 </p>
                 <img src={para2} width={200} height={220} />
                 </div>
            </div>
            <div className='extera-add'>
                <div className='front-page'>
                    <img src={dest} height={150} />
                    <h3>Destination Weddings</h3>
                    <p>Apex Event is the best company who is available in Sri Lanka to offer the destination wedding packages to the foreigners as well as locals to the foreign destinations.</p>
                    <Link to="/service">Read More</Link>
                </div>
                <div  className='front-page'>
                    <img src={unique} />
                    <h3>Unique Scenarios</h3>
                    <p>You will experience uniqueness throughout your event management process. As a company who think "out of the box." clients will start to experience the difference</p>
                    <Link to="/service">Read More</Link>
                </div>
                <div  className='front-page'>
                    <img src={stress}/>
                    <h3>Stress Free</h3>
                    <p>Stress is not of your business when Apex Event manage your event. You can keep the stressful part to us and deal with other things in your life.</p>
                    <Link to="/service" >Read More</Link>
                </div>
            </div>
        </>
    )
}
export default First