import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Login.css";
import { toast } from "react-toastify";

export default function LoginSignupLogout() {
  const [isSignup, setIsSignup] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [showResetForm, setShowResetForm] = useState(false);
  const [resetEmail, setResetEmail] = useState("");

  const API_URL = "http://localhost:5000/api/auth";

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setLoggedInUser(storedUser.name);
    }
  }, []);

  // Signup handler
  const handleSignup = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    try {
      await axios.post(`${API_URL}/register`, {
        name: username,
        email,
        password,
      });
      // alert("Signup successful! Please login.");
      toast.success("Signup successful! Please login.");
      setIsSignup(false);
      setUsername("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
    } catch (error) {
      alert(error.response?.data?.message || "Error signing up. Try again.");
    }
  };

  // Login handler
  const handleLogin = async (e) => {
    e.preventDefault();
    if (loggedInUser) {
      // alert("Already logged in. Please logout first.");
      toast.success("Already logged in. Please logout first.")
      return;
    }
    try {
      const res = await axios.post(`${API_URL}/login`, { email, password });
      const user = res.data;
      setLoggedInUser(user.name);
      localStorage.setItem("user", JSON.stringify(user));
      // alert("Login successful!");
      toast.success("Login successful!");
      setEmail("");
      setPassword("");
    } catch (error) {
      alert(error.response?.data?.message || "Invalid credentials");
    }
  };

  // Logout handler
  const handleLogout = () => {
    setLoggedInUser(null);
    localStorage.removeItem("user");
    setEmail("");
    setPassword("");
    // alert("Logged out successfully.");
    toast.success("Logged out successfully.");
  };

  // Forgot password handler
  const handleForgotPassword = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${API_URL}/forgot-password`, { email: resetEmail });
      alert("Password reset email sent. Please check your inbox.");
      setShowResetForm(false);
      setResetEmail("");
    } catch (error) {
      alert(error.response?.data?.message || "Failed to send reset email.");
    }
  };

  return (
    <div className="login-container">
      {loggedInUser ? (
        <div className="welcome-card">
          <h2>Welcome, {loggedInUser}!</h2>
          <button className="btn" onClick={handleLogout}>
            Logout
          </button>
        </div>
      ) : showResetForm ? (
        <form className="form-card" onSubmit={handleForgotPassword}>
          <h2>Forgot Password</h2>
          <input
            type="email"
            placeholder="Enter your registered email"
            value={resetEmail}
            onChange={(e) => setResetEmail(e.target.value)}
            required
          />
          <button type="submit" className="btn">
            Send Reset Link
          </button>
          <p>
            Back to{" "}
            <span
              className="toggle-link"
              onClick={() => setShowResetForm(false)}
              style={{ cursor: "pointer", color: "blue" }}
            >
              Login
            </span>
          </p>
        </form>
      ) : (
        <form
          className="form-card"
          onSubmit={isSignup ? handleSignup : handleLogin}
        >
          <h2>{isSignup ? "Signup" : "Login"}</h2>

          {isSignup && (
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          )}

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          {isSignup && (
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          )}

          <button className="btn" type="submit">
            {isSignup ? "Signup" : "Login"}
          </button>

          {!isSignup && (
            <p
              className="forgot-password"
              onClick={() => setShowResetForm(true)}
              style={{ cursor: "pointer", color: "blue" }}
            >
              Forgot Password?
            </p>
          )}

          <p>
            {isSignup ? "Already have an account?" : "Don't have an account?"}{" "}
            <span
              className="toggle-link"
              onClick={() => setIsSignup(!isSignup)}
              style={{ cursor: "pointer", color: "blue" }}
            >
              {isSignup ? "Login here" : "Signup here"}
            </span>
          </p>
        </form>
      )}
    </div>
  );
}
