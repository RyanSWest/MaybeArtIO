import React, { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    // Simulate login logic
    setTimeout(() => {
      if (email && password) {
        console.log("Login successful");
      } else {
        setError("Please enter both email and password");
      }
      setIsLoading(false);
    }, 1000);
  };

  const loginPageStyle = {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    paddingTop: "2rem",
    background: "linear-gradient(to bottom, #0c0018, #110121)",
    fontFamily: "'Arial', sans-serif",
  };

  const loginWrapperStyle = {
    background: "rgba(0,0,0,0.85)",
    padding: "2.5rem",
    borderRadius: "1rem",
    boxShadow: "0 0 30px rgba(255,0,200,0.5)",
    maxWidth: "400px",
    width: "100%",
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

  const loginTitleStyle = {
    fontFamily: "'Anton', sans-serif",
    fontSize: "3rem",
    color: "transparent",
    WebkitTextStroke: "2px #ff00c8",
    textShadow: "0 0 8px #ff00c8, 0 0 16px #ff00c8, 0 0 32px #ff00c8",
    marginBottom: "0.5rem",
    textAlign: "center",
  };

  const loginSubtitleStyle = {
    fontSize: "1rem",
    color: "#ffffffaa",
    marginBottom: "1.5rem",
    textAlign: "center",
  };

  const loginErrorStyle = {
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
    padding: "0.75rem 1rem",
    marginBottom: "1rem",
    background: "rgba(255,0,0,0.1)",
    border: "1px solid #ff0000",
    borderRadius: "0.5rem",
    color: "#ff6666",
    width: "100%",
  };

  const loginFormStyle = {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  };

  const inputGroupStyle = {
    width: "100%",
  };

  const labelStyle = {
    display: "block",
    marginBottom: "0.25rem",
    fontWeight: 600,
    color: "#ffffffcc",
  };

  const inputStyle = {
    width: "100%",
    padding: "0.75rem 1rem",
    borderRadius: "0.75rem",
    border: "1px solid #ff00c8",
    background: "rgba(0,0,0,0.5)",
    color: "#fff",
    outline: "none",
    fontSize: "1rem",
    transition: "all 0.2s ease",
    boxSizing: "border-box",
  };

  const cyberpunkButtonStyle = {
    marginTop: "1rem",
    padding: "0.75rem 1.5rem",
    fontSize: "1.1rem",
    fontWeight: 700,
    color: "#fff",
    background: "linear-gradient(90deg, #ff00c8, #ff69b4)",
    border: "2px solid #ff00c8",
    borderRadius: "1rem",
    cursor: "pointer",
    textTransform: "uppercase",
    transition: "all 0.2s ease",
    boxShadow: "0 0 10px #ff00c8, 0 0 20px #ff69b4",
    width: "100%",
  };

  const loginFooterStyle = {
    marginTop: "1.5rem",
    fontSize: "0.9rem",
    color: "#aaa",
    textAlign: "center",
  };

  const registerLinkStyle = {
    color: "#00eaff",
    fontWeight: 600,
    cursor: "pointer",
    background: "none",
    border: "2px solid cyan",
    borderRadius: "25px",
    padding: "0.5rem 1rem",
    marginLeft: "0.5rem",
  };

  return (
    <div style={loginPageStyle}>
      <div style={loginWrapperStyle}>
        <h1 style={loginTitleStyle}>LOGIN</h1>
        <p style={loginSubtitleStyle}>Welcome back to MAY BE ART</p>

        {error && (
          <div style={loginErrorStyle}>
            <span>⚠️</span>
            <span>{error}</span>
          </div>
        )}

        <div style={loginFormStyle}>
          <div style={inputGroupStyle}>
            <label htmlFor="email" style={labelStyle}>
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={inputStyle}
              placeholder="Enter your email"
              onFocus={(e) => {
                e.target.style.borderColor = "#00eaff";
                e.target.style.boxShadow = "0 0 10px #00eaff";
              }}
              onBlur={(e) => {
                e.target.style.borderColor = "#ff00c8";
                e.target.style.boxShadow = "none";
              }}
            />
          </div>

          <div style={inputGroupStyle}>
            <label htmlFor="password" style={labelStyle}>
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={inputStyle}
              placeholder="Enter your password"
              onFocus={(e) => {
                e.target.style.borderColor = "#00eaff";
                e.target.style.boxShadow = "0 0 10px #00eaff";
              }}
              onBlur={(e) => {
                e.target.style.borderColor = "#ff00c8";
                e.target.style.boxShadow = "none";
              }}
            />
          </div>

          <button
            onClick={handleSubmit}
            disabled={isLoading}
            style={{
              ...cyberpunkButtonStyle,
              opacity: isLoading ? 0.6 : 1,
            }}
            onMouseOver={(e) => {
              if (!isLoading) {
                e.target.style.boxShadow = "0 0 20px #ff00c8, 0 0 40px #ff69b4";
                e.target.style.transform = "scale(1.02)";
              }
            }}
            onMouseOut={(e) => {
              e.target.style.boxShadow = "0 0 10px #ff00c8, 0 0 20px #ff69b4";
              e.target.style.transform = "scale(1)";
            }}
          >
            {isLoading ? "Logging in..." : "Login"}
          </button>
        </div>

        <div style={loginFooterStyle}>
          <span>Don't have an account?</span>
          <button
            style={registerLinkStyle}
            onClick={() => console.log("Navigate to register")}
            onMouseOver={(e) => (e.target.style.textDecoration = "underline")}
            onMouseOut={(e) => (e.target.style.textDecoration = "none")}
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
}