import './style/Form.css'
import { UseAuth } from '../src/context/auathcontext'
import { useState } from 'react'
import {  useNavigate } from 'react-router-dom'
function MyForm(){
    const { register }= UseAuth()
        const [username,setusername]= useState<string>('')
        const [password,setpassword]= useState<string>('')
        const [email,setemail]= useState<string>('')
        const Navigate = useNavigate()

    const HandleSumbit=(e:React.FormEvent) =>{
        e.preventDefault()
        register(username,email, password)
        setusername('');
        setpassword('');
        setemail('');

        Navigate('/')
    }

    return(
        <>
        <div className="form-shape">
            <div className='form-box'>
            <h3>Register Here</h3>
            <form action="" onSubmit={HandleSumbit}>
                <input type="text" placeholder="Name" id='username' value={username} onChange={(e)=>setusername(e.target.value)}/> <br/> <br />
                <input type="text" placeholder="E-Mail" id='email' value={email} onChange={(e)=>setemail(e.target.value)}/> <br /> <br />
                <input type="text" placeholder="Password" id='password' value={password} onChange={(e)=>setpassword(e.target.value)}/> <br /> <br />
                <button>Register</button>
            </form>
            </div>
        </div>
        </>
    )
}

export default MyForm