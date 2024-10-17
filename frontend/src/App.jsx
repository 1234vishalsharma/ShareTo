import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Reciever from "./pages/Reciever";

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
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
