// components/CourtBookingPage.js

// components/CourtBookingPage.js

import React from "react";
import BookingTable from "./bookingTable";
import { Container, Typography } from "@mui/material";

const CourtBookingPage = () => {
  // Sample data - replace this with your actual data
  const courts = [
    {
      id: 1,
      name: "Court A",
      time0: "Available",
      time1: "Available",
      time2: "Booked",
      // ... add data for all the time slots
    },
    {
      id: 2,
      name: "Court B",
      time0: "Booked",
      time1: "Available",
      time2: "Available",
      // ... add data for all the time slots
    },
    // ... add more rows for all the courts
  ];

  return (
    <Container maxWidth="lg">
      <Typography variant="h4" gutterBottom>
        Volleyball Court Booking
      </Typography>
      <BookingTable courts={courts} />
    </Container>
  );
};

export default CourtBookingPage;
