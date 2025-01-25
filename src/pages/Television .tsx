import banner9 from './award-ceremony-500x500.webp'
import banner10 from './empty-runway-stage-neon-lights-d-rendering-338542442.webp'
import banner11 from './gameshow-7-1-66f2fa982de31.jpg'
function Television(){
    return(
        <>
        <div>
            <div className="television-Header">
                <h1>Television Events</h1>
            </div>
            <div className="te-event">
                <div>
                    <img src={banner9} />
                    <h3>Award Function</h3>
                    <p>Apex Event Design specializes in crafting sophisticated and unforgettable decorations for your Award functions. We bring recognition and celebration to life with elegant themes, stunning centerpieces, and tailored details.
                    </p>
                </div>
                <div>
                <img src={banner10} />
                    <h3>Fashion Shows</h3>
                    <p>Apex Event Design specializes in crafting sophisticated and unforgettable decorations for your Fashion Shows. We bring recognition and celebration to life with elegant themes, stunning centerpieces, and tailored details.
                    </p>
                </div>
                <div>
                <img src={banner11}/>
                    <h3>Game Shows</h3>
                    <p>Apex Event Design specializes in crafting sophisticated and unforgettable decorations for your Game Shows. We bring recognition and celebration to life with elegant themes, stunning centerpieces, and tailored details.
                    </p>
                </div>
            </div>
            <div className="television-button">
                <button>Book Now!</button>
            </div>

        </div>
        </>
    )
}
export default Television