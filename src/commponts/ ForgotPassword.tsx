import { useState } from "react";
import "../style/ForgotPassword.css";

interface ForgotPasswordProps {
  onCancel: () => void;
}

export function ForgotPassword({ onCancel }: ForgotPasswordProps) {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [showOtpPopup, setShowOtpPopup] = useState(false);
  const [showResetPopup, setShowResetPopup] = useState(false);
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [step, setStep] = useState("email"); // Track the current step

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:3000/api/users/forgot-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.text();
      setMessage(data);

      if (res.ok) { 
        setShowOtpPopup(true);
        setStep("otp"); // Move to OTP step
      }
    } catch (error) {
      setMessage("Error sending OTP.");
    }
  };

  const handleOtpSubmit = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/users/verify-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, otp }),
      });

      if (res.ok) {
        setShowOtpPopup(false); // Close OTP popup
        setShowResetPopup(true); // Open Reset Password popup
        setStep("reset-password"); // Move to Reset Password step
      } else {
        setMessage("Invalid OTP. Please try again.");
      }
    } catch (error) {
      setMessage("Error verifying OTP.");
    }
  };

  const handleResetPassword = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/users/reset-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, otp, newPassword }),
      });

      if (res.ok) {
        alert("Password reset successfully!");
        setShowResetPopup(false); // Close Reset Password popup
        setStep("email"); // Reset to initial step
      } else {
        setMessage("Error resetting password.");
      }
    } catch (error) {
      setMessage("Error resetting password.");
    }
  };

  return (
    <div className="forgot-password-wrapper">
      {step === "email" && (
        <>
          <h2 className="forgot-password-title">Forgot Password</h2>
          <form onSubmit={handleSubmit} className="forgot-password-form">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="forgot-password-input"
            />
            <button type="submit" className="forgot-password-button">Send OTP</button>
          </form>
          {message && <p className="forgot-password-message">{message}</p>}

          <button onClick={onCancel} className="forgot-password-cancel">Cancel</button>
        </>
      )}

      {/* OTP Popup - Close after Verify OTP */}
      {showOtpPopup && (
        <div className="otp-popup">
          <div className="otp-content">
            <h3>Enter OTP</h3>
            <input
              type="text"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              className="otp-input"
            />
            <button onClick={handleOtpSubmit} className="otp-submit-button">Verify OTP</button>
          </div>
        </div>
      )}

      {/* Reset Password Popup - Open when OTP is verified */}
      {showResetPopup && (
        <div className="reset-popup">
          <div className="reset-content">
            <h3>Reset Password</h3>
            <input
              type="password"
              placeholder="Enter new password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="reset-password-input"
            />
            <button onClick={handleResetPassword} className="reset-submit-button">Reset Password</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ForgotPassword;
