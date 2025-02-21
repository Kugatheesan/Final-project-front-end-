import "../style/Signin.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import ForgotPassword from "../commponts/ ForgotPassword"; // Import the ForgotPassword component

function Signin() {
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [showForgotPassword, setShowForgotPassword] = useState(false);    // State for modal
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const response = await axios.post("http://localhost:3000/api/users/login", 
                { username, password }, 
                { withCredentials: true }
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
                        onSuccess={(CredentialResponse) => {
                            console.log(CredentialResponse);
                            navigate("/");
                        }}
                        onError={() => console.log("Login Failed")}
                    />
                </div>

                {/* Clickable Forgot Password */}
                <p className="forgot-password">
                    <a href="#" onClick={() => setShowForgotPassword(true)}>Forgot Password?</a>
                </p>
            </div>

            {/* Modal for Forgot Password */}
            {showForgotPassword  && (
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
