import '../style/Register.css';
import { UseAuth } from '../context/auathcontext';
import { useState } from 'react';    //input feild state decide
import { useNavigate } from 'react-router-dom'; //change the page
import { GoogleLogin } from '@react-oauth/google'

function MyForm() {
    const { register } = UseAuth(); // call register function in authcontext.tsx
    const [username, setUsername] = useState<string>(''); //username -username store ,setUsername-state update, ('')-start input feild empty value
    const [password, setPassword] = useState<string>(''); // ''
    const [email, setEmail] = useState<string>(''); //''
    const navigate = useNavigate(); //change the page

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault(); // default form reload to prevent
        register(username, email, password); //user insert the data
        alert("Register in successful!"); //alert message
        setUsername(''); //form field emty(reset)
        setPassword(''); // ''
        setEmail(''); // ''
        navigate('/'); // navigate in home page
    };

    return (
        <div className="form-container">
            <div>
                <h3 className='form-header'>Sign up to </h3>
                <h3 className='form-header'>Get your</h3>
                <h3 className='form-header'>Happiness</h3>
            </div>
            <div className="form-box">
                <h2>Welcome to Website</h2>
                <p>Creating Experiences, Crafting Memories</p>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Name" value={username}
                        onChange={(e) => setUsername(e.target.value)} required />
                    <input type="email" placeholder="Email" value={email}
                        onChange={(e) => setEmail(e.target.value)} required />
                    <input type="password" placeholder="Password" value={password}
                        onChange={(e) => setPassword(e.target.value)} required />  <br /> <br />
                    <button type="submit" className="register-btn">Register</button>
                </form>
                <div className="or-divider">OR</div>
                <div className="google-btn">
                    <GoogleLogin onSuccess={CredentialResponse => {
                        console.log("goolge login sucesss",CredentialResponse);
                    }}
                        onError={() => {
                            console.log('Login Failed');
                        }}
                    />
                </div>
                <p className="login-text">Already a member? <a href="/signin">Sign in</a></p>
            </div>
        </div>
    );
}

export default MyForm;
