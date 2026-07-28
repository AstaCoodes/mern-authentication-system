import { useState } from "react";
import API from "../api/axios";
import "./Login.css";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleLogin = async (e) => {
  e.preventDefault();

  setLoading(true);

  try {
    const res = await API.post("/users/login", {
      email,
      password,
    });

    localStorage.setItem("token", res.data.token);

     setSuccess(true);

    setTimeout(() => {
    window.location.reload();
   }, 1800);
  } catch (err) {
    alert(err.response?.data?.message || "Login Failed");
    setLoading(false);
  }
};

 return (
  <div className="login-container">
    <div className="login-card">

      {!success ? (
        <>
          <h1>MERN Auth</h1>

          <p className="subtitle">
            Welcome back! Sign in to continue.
          </p>

          <form onSubmit={handleLogin}>

            <input
              type="email"
              placeholder="Email Address"
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

            <button type="submit" disabled={loading}>
              {loading ? "Signing In..." : "Login"}
            </button>

          </form>
        </>
      ) : (
        <div className="success-box">

          <div className="success-icon">✅</div>

          <h2>Login Successful</h2>

          <p>
            Welcome back!
          </p>

          <p className="loading-text">
            Preparing your profile...
          </p>

        </div>
      )}

    </div>
  </div>
);
}

export default Login;