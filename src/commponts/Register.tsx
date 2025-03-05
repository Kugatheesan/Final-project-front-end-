import '../style/Register.css';
import { UseAuth } from '../context/auathcontext';
import { useState } from 'react';    //input feild state decide
import { useNavigate } from 'react-router-dom'; //change the page
// import { GoogleLogin } from '@react-oauth/google'
// import { jwtDecode } from 'jwt-decode';
// import axios from 'axios';
// import Cookies from 'js-cookie';
// import { toast } from 'react-toastify';

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

    // const handleGoogleLoginSuccess = async (credentialResponse: any) => {
    //     try {
    //         const decoded = jwtDecode(credentialResponse.credential);
    //         console.log('Google User Info:', decoded);

    //         // Send the token to your backend for authentication
    //         const response = await axios.post('/auth/google-login', {
    //             token: credentialResponse.credential,
    //         });
    //         console.log('Login Successful:', response.data);
    //         toast.success('Google Login Successful');

    //         // Store token and navigate
    //         Cookies.set('token', response.data.token, { expires: 1 });
    //         setToken(response.data.token);
    //         setIsAuthenticated(true);
    //         onclose();
    //     } catch (error) {
    //         console.error('Google Login Error:', error);
    //         toast.error('Google Login Failed');
    //     }
    // };


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
                    {/* <GoogleLogin
                        onSuccess={handleGoogleLoginSuccess}
                        onError={() => toast.error('Google Sign-In Failed')}
                    /> */}
                </div>
                <p className="login-text">Already a member? <a href="/signin">Sign in</a></p>
            </div>
        </div>
    );
}

export default MyForm;
function setToken(token: any) {
    throw new Error('Function not implemented.');
}

function setIsAuthenticated(arg0: boolean) {
    throw new Error('Function not implemented.');
}

