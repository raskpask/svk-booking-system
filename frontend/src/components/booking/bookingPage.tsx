// src/pages/booking.tsx
import React, { useState, useEffect } from "react";
import { Box, IconButton, TextField, Typography } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import CourtList from "./CourtList";
import { fetchAvailableTimeSlots } from "../../services/mockApi";
import "dayjs/locale/de";
import dayjs from "dayjs";

const BookingPage: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<any>(dayjs(Date.now()));
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
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="de">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "start",
          marginTop: 4,
        }}
      >
        <DatePicker
          label="Select Date"
          views={["year", "month", "day"]}
          value={selectedDate}
          onChange={handleDateChange}
        />
        <CourtList timeSlotsByCourt={availableTimeSlots} />
      </Box>
    </LocalizationProvider>
  );
};

export default BookingPage;
