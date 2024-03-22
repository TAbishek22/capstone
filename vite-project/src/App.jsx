import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./Components/LandingPage/LandingPage";
import "./App.css";
import Register from "./Components/Register/Register";
import Login from "./Components/Login/Login";
import Navbar from "./Components/Navbar/Navbar";
import CreateEvent from "./Components/CreateEvent/CreateEvent";
import EventList from "./Components/Event-list/EvenList";
import Event from "./Components/Events/Event";
function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/CreateEvent" element={<CreateEvent />} />
                <Route path="/EventList" element={<EventList />} />
                <Route path="/Events" element={<Event />} />
                {/* <Route path="/" element={<Register />} /> */}
            </Routes>
        </BrowserRouter>
    );
}

export default App;
