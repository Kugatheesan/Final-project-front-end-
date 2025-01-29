import './style/Bookin.css'
function Book(){
    return(
        <>
        <div className="booked">
        <div className='booking-box'>
            <h3>Booking</h3>
        <form action="">
                <input type="text" placeholder="Name" /> <br/> <br />
                <input type='' placeholder="Tel-Number"/> <br /> <br />
                <input type="text" placeholder="Event Type"/> <br /> <br />
                <input type="number" placeholder="Event Date"/> <br /> <br />
                <button>Book Now!</button>
            </form>
            </div>
        </div>
        </>
    )
}

export default Book