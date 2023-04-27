import React, { useState, useEffect } from "react";
import { Box, TextField, Typography } from "@mui/material";
import CourtList from "./CourtList";
import { fetchAvailableTimeSlots } from "../../services/mockApi";

const BookingPage: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [availableTimeSlots, setAvailableTimeSlots] = useState([]);

  useEffect(() => {
    async function fetchTimeSlots() {
      const timeSlots = await fetchAvailableTimeSlots(selectedDate);
      setAvailableTimeSlots(timeSlots);
    }

    fetchTimeSlots();
  }, [selectedDate]);

  const handleDateChange = (date: Date | null) => {
    if (date) {
      setSelectedDate(date);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "start",
        marginTop: 4,
      }}
    >
      <TextField
        label="Select Date"
        type="date"
        value={selectedDate.toISOString().split("T")[0]}
        onChange={(e) => handleDateChange(new Date(e.target.value))}
        InputLabelProps={{
          shrink: true,
        }}
      />
      <CourtList timeSlotsByCourt={availableTimeSlots} />
    </Box>
  );
};

export default BookingPage;
