import './style/Form.css'
function MyForm(){
    
    return(
        <>
        <div className="form-shape">
            <div className='form-box'>
            <h3>Register Here</h3>
            <form action="">
                <input type="text" placeholder="Name" id='username'/> <br/> <br />
                <input type="text" placeholder="E-Mail" id='email'/> <br /> <br />
                <input type="text" placeholder="Password" id='password'/> <br /> <br />
                <button >Register</button>
            </form>
            </div>
        </div>
        </>
    )
}

export default MyForm