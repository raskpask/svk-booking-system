import * as React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import BookingPage from "./components/booking/bookingPage";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="login" element={<Login />} />
        <Route path="login" element={<SignUp />} /> */}
      </Routes>
    </div>
  );
}
