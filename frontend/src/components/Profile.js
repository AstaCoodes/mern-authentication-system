import { useEffect, useState } from "react";
import API from "../api/axios";
import "./Profile.css";

function Profile() {
  const [user, setUser] = useState({});

  useEffect(() => {
    const getProfile = async () => {
      try {
        const res = await API.get("/users/profile");
        setUser(res.data);
      } catch (err) {
        localStorage.removeItem("token");
        window.location.reload();
      }
    };

    getProfile();
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  return (
    <div className="profile-container">
      <div className="profile-card">

        <div className="avatar">
          👤
        </div>

        <h1>Welcome, {user.name}</h1>

        <p className="email">{user.email}</p>

        <div className="status-box">

          <div className="status">
            <span className="dot"></span>
            React Connected
          </div>

          <div className="status">
            <span className="dot"></span>
            Express API Connected
          </div>

          <div className="status">
            <span className="dot"></span>
            MongoDB Connected
          </div>

          <div className="status">
            <span className="dot"></span>
            JWT Authenticated
          </div>

        </div>

        <button className="logout-btn" onClick={logout}>
          Logout
        </button>

      </div>
    </div>
  );
}

export default Profile;