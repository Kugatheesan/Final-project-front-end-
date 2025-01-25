function Book(){
    return(
        <>
        <div className="booked">
            <h3>Booking</h3>
        <form action="">
                <input type="text" placeholder="Name" /> <br/>
                <input type="number" placeholder="Tel-Number"/> <br />
                <input type="text" placeholder="Event Type"/> <br />
                <input type="number" placeholder="Event Date"/> <br />
                <button>Book Now!</button>
            </form>
        </div>
        </>
    )
}

export default Book