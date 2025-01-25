import './style/Form.css'
function MyForm(){
    return(
        <>
        <div className="form-shape">
            <div className='form-box'>
            <h3>Register Here</h3>
            <form action="">
                <input type="text" placeholder="Name" /> <br/> <br />
                <input type="text" placeholder="E-Mail"/> <br /> <br />
                <input type="text" placeholder="Password"/> <br /> <br />
                <button>Register</button>
            </form>
            </div>
        </div>
        </>
    )
}

export default MyForm