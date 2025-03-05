import "../style/Signin.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import ForgotPassword from "../commponts/ ForgotPassword"; // Import the ForgotPassword component
import Cookies from 'js-cookie';

import {jwtDecode} from "jwt-decode"; 


function Signin() {
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [showForgotPassword, setShowForgotPassword] = useState(false);    // State for modal
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault(); //default refresh cancel

        try {
            const response = await axios.post("http://localhost:3000/api/users/login", //API request sent the backend login
                { username, password },
                { withCredentials: true } //cookies save in browser
            );

            if (response.status === 200) {
                toast.success("Sign in successful!", { theme: "dark", autoClose: 2000 });

                setTimeout(() => {
                    setUsername("");
                    setPassword("");
                    navigate("/");
                    window.location.reload();
                }, 2000);
            }
        } catch (error) {
            toast.error("Invalid username or password!", { theme: "dark", autoClose: 2000 });
            setTimeout(() => {
                setUsername("");
                setPassword("");
                navigate("/signin");
                window.location.reload(); //page reload then update the page
            }, 2000);
        }
    };

    const handleGoogleLoginSuccess = async (credentialResponse: any) => {
        try {
            const decoded = jwtDecode(credentialResponse.credential);
            console.log('Google User Info:', decoded);

            // Send the token to your backend for authentication
            const response = await axios.post('http://localhost:3000/api/google-login', {
                token: credentialResponse.credential,
            });
            console.log('Login Successful:', response.data);
            toast.success('Google Login Successful');

            // Store token and navigate
            Cookies.set('token', response.data.token, { expires: 1 });
            setToken(response.data.token);
            setIsAuthenticated(true);
            onclose();
        } catch (error) {
            console.error('Google Login Error:', error);
            toast.error('Google Login Failed');
        }
    };

    return (
        <div className="signin-shape">
            <div className="signin-box">
                <h3>Sign in</h3>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <br /><br />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <br /><br />
                    <button type="submit" className="signin-btn">Sign in</button>
                </form>

                <br />
                <div className="google-login">
                    <GoogleLogin
                        onSuccess={handleGoogleLoginSuccess}
                        onError={() => toast.error('Google Sign-In Failed')}
                    />
                </div>

                {/* Clickable Forgot Password */}
                <p className="forgot-password">
                    <a href="#" onClick={() => setShowForgotPassword(true)}>Forgot Password?</a>
                </p>
            </div>

            {/* Modal for Forgot Password */}
            {showForgotPassword && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <button className="close-btn" onClick={() => setShowForgotPassword(false)}>✖</button>
                        <ForgotPassword onCancel={() => setShowForgotPassword(false)} />
                    </div>
                </div>
            )}

            <ToastContainer />
        </div>
    );
}

export default Signin;
function setToken(token: any) {
    throw new Error("Function not implemented.");
}

function setIsAuthenticated(arg0: boolean) {
    throw new Error("Function not implemented.");
}

function jwtDecode(credential: void) {
    throw new Error("Function not implemented.");
}
