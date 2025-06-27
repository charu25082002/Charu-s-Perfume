import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Login.css";

export default function LoginSignupLogout() {
  const [isSignup, setIsSignup] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [showResetForm, setShowResetForm] = useState(false);
  const [newPassword, setNewPassword] = useState("");

  const API_URL = "https://67ece6494387d9117bbb6411.mockapi.io/products";

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setLoggedInUser(storedUser.username);
    }
  }, []);

  const handleSignup = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      await axios.post(API_URL, {
        username,
        email,
        password,
      });

      alert("Signup successful! Please login.");
      setIsSignup(false);
      setUsername("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
    } catch (error) {
      console.error("Signup error:", error);
      alert("Error signing up. Try again.");
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    if (loggedInUser) {
      alert("Already logged in. Please logout first.");
      return;
    }

    try {
      const res = await axios.get(`${API_URL}?email=${email}`);
      const user = res.data.find((u) => u.password === password);

      if (user) {
        setLoggedInUser(user.username);
        localStorage.setItem("user", JSON.stringify(user));
        alert("Login successful!");
      } else {
        alert("Invalid credentials");
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("Error logging in. Try again.");
    }
  };

  const handleLogout = () => {
    setLoggedInUser(null);
    localStorage.removeItem("user");
    setEmail("");
    setPassword("");
    alert("Logged out successfully.");
  };

  const handlePasswordReset = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.get(`${API_URL}?email=${email}`);
      const user = res.data[0];

      if (!user) {
        alert("Email not found.");
        return;
      }

      await axios.put(`${API_URL}/${user.id}`, {
        ...user,
        password: newPassword,
      });

      alert("Password reset successful. Please login.");
      setShowResetForm(false);
      setNewPassword("");
      setEmail("");
    } catch (error) {
      console.error("Reset error:", error);
      alert("Failed to reset password.");
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
        <form className="form-card" onSubmit={handlePasswordReset}>
          <h2>Reset Password</h2>
          <input
            type="email"
            placeholder="Enter your registered email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Enter new password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
          />
          <button type="submit" className="btn">
            Reset Password
          </button>
          <p>
            Back to{" "}
            <span
              className="toggle-link"
              onClick={() => setShowResetForm(false)}
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
            >
              Forgot Password?
            </p>
          )}

          <p>
            {isSignup ? "Already have an account?" : "Don't have an account?"}{" "}
            <span
              className="toggle-link"
              onClick={() => setIsSignup(!isSignup)}
            >
              {isSignup ? "Login here" : "Signup here"}
            </span>
          </p>
        </form>
      )}
    </div>
  );
}
