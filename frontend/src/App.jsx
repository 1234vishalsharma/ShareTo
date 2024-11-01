import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Reciever from "./pages/Reciever";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Sender from "./pages/Sender";
import Profile from "./pages/Profile";

function App() {
  return (
    <>
      <BrowserRouter>

        <Routes>
          <Route
            path="/"
            element={

              <Dashboard />
            }
          />
          <Route
            path="/Dashboard"
            element={
              <Dashboard />
            }
          />
          <Route
            path="/Reciever"
            element={
              <Reciever />
            }
          />
          <Route
            path="/Sender"
            element={
              <Sender />
            }
          />
          <Route
            path="/Login"
            element={
              <Login />
            }
          />
          <Route
            path="/Signup"
            element={
              <Signup />
            }
          />
          <Route
            path="/Profile"
            element={
              <Profile />
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
