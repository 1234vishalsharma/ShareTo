import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Reciever from "./pages/Reciever";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Sender from "./pages/Sender";
import Profile from "./pages/Profile";
import ProtectedAuth from "./ProtectedRoute/ProtectAuth"
import Support from "./pages/Support";
function App() {
  return (
    <>
      <BrowserRouter>

        
        <Routes>
          <Route
            path="/"
            element={

              <ProtectedAuth>
                <Dashboard />
              </ProtectedAuth>
              
                <ProtectedAuth>
                  <Dashboard />
                </ProtectedAuth>
            }
          />
          <Route
            path="/Dashboard"
            element={
              <ProtectedAuth>
                <Dashboard />
              </ProtectedAuth>
              <Dashboard />
            </ProtectedAuth>
            }
          />
          <Route
            path="/Reciever"
            element={
              <ProtectedAuth>
                <Reciever />
              </ProtectedAuth>
              <Reciever />
            </ProtectedAuth>
            }
          />
          <Route
            path="/Sender"
            element={
              <ProtectedAuth>
                <Sender />
              </ProtectedAuth>
              <Sender />
            </ProtectedAuth>
            }
          />
          <Route
            path="/Login"
            element={
              <Login />
                <Login />
            }
          />
          <Route
            path="/Signup"
            element={
              <Signup />
            }
          />

                <Signup />
            }
          />
          <Route
            path="/Profile"
            element={
              <ProtectedAuth>
                <Profile />
              </ProtectedAuth>
            }

          />
             <Route
            path="/Support"
            element={
              <Support />
              <Profile />
            </ProtectedAuth>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
