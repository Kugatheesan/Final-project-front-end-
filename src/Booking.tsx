import './style/Bookin.css';

function Book() {
    
    return (
        <>
            <div className="booked">
                <div className='booking-box'>
                    <h3>Booking</h3>
                    <form action="">
                        <input type="text" placeholder="Name" /> <br /> <br />
                        <input type="text" placeholder="Tel-Number" /> <br /> <br />
                        
                
                        <select>
                            <option value="">Select Event Type</option>
                            <option value="Wedding">Wedding</option>
                            <option value="Conference">Conference</option>
                            <option value="Party">Party</option>
                            <option value="Meeting">Meeting</option>
                        </select> <br /> <br />
                        
                        <input  placeholder="Event Date (YYYY-MM-DD)" /> <br /> <br />
                        <button type="submit">Book Now!</button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Book;
