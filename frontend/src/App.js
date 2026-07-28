import Login from "./components/Login";
import Profile from "./components/Profile";

function App() {
  const token = localStorage.getItem("token");

  return token ? <Profile /> : <Login />;
}

export default App;