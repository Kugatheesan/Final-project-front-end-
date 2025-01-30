import './style/signin.css'
import { UseAuth } from './context/auathcontext'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
function Signin(){
    const { signin }= UseAuth()
            const [username,setusername]= useState<string>('')
            const [password,setpassword]= useState<string>('')
    const Navigate = useNavigate()
        const HandleSumbit=(e:React.FormEvent) =>{
            e.preventDefault()
            signin(username, password)
            setusername('');
            setpassword('');

            Navigate('/')
        }
    return(
        <>
         <div className="signin-shape">
            <div className='signin-box'>
            <h3>Sign in</h3>
            <form action="" onSubmit={HandleSumbit}>
                <input type="text" placeholder="Name" id='username' value={username} onChange={(e)=>setusername(e.target.value)}/> <br/> <br />
                <input type="text" placeholder="Password" id='password' value={password} onChange={(e)=>setpassword(e.target.value)}/> <br /> <br />
                <button>Register</button>
            </form>
            </div>
        </div>
        </>
    )
}
export default Signin