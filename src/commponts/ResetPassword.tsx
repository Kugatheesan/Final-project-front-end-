import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export function ResetPassword() {
  const location = useLocation();
  const { email, otp: receivedOtp } = location.state || {}; // Get OTP from navigation state
  const [newPassword, setNewPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handlePasswordSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:3000/api/users/reset-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ email, otp: receivedOtp, newPassword }),
      });
      const data = await res.text();
      setMessage(data);
    } catch (error) {
      setMessage("Error resetting password.");
      navigate('/signin');
    }
  };

  return (
    <div>
      <h2>Reset Password</h2>
      <form onSubmit={handlePasswordSubmit}>
        <input
          type="password"
          placeholder="Enter new password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          required
        />
        <button type="submit">Reset Password</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default ResetPassword;
