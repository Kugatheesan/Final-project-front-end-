import banner3 from './tech-brand-working-sustainability-goals_52683-145426.avif'
import banner4 from './Bangkok-1.webp'
import banner5 from './group-friends-making-barbecue-nature-260nw-1100824838.webp'
function Corporate(){
    return(
        <>
        <div>
            <div className="corporate-Header">
                <h1>Corporate Events</h1>
            </div>
            <div className="co-event">
                <div>
                    <img src={banner3} />
                    <h3>Meeting</h3>
                    <p>Apex Event Design provides beautiful and memorable decorations for your meetings. We bring your vision to life with table decor, lighting, and stage design. Let us transform your events into extraordinary experiences.
                    </p>
                </div>
                <div>
                    <img src={banner4} />
                    <h3>Get together</h3>
                    <p>Apex Event Design creates beautiful and unforgettable decorations for your get-togethers. We transform your ideas into reality with personalized decor, cozy seating arrangements, and ambient lighting. Let us make your gatherings memorable and enjoyable for everyone.               
                    </p>
                </div>
                <div>
                    <img src="" alt="" />
                    <h3>Batchelor Parties</h3>
                    <p>Apex Event Design creates beautiful and unforgettable decorations for your Batchelor Parties. We transform your ideas into reality with personalized decor, cozy seating arrangements, and ambient lighting. Let us make your gatherings memorable and enjoyable for everyone.               
                    </p>
                </div>
                <div>
                    <img src={banner5} />
                    <h3>Product Launches</h3>
                    <p>Apex Event Design creates beautiful and unforgettable decorations for your Product Launches. We transform your ideas into reality with personalized decor, cozy seating arrangements, and ambient lighting. Let us make your gatherings memorable and enjoyable for everyone.               
                    </p>
                </div>
            </div>
            <div className="coporate-button">
                <button>Book Now!</button>
            </div>

        </div>
        </>
    )
}
export default Corporate