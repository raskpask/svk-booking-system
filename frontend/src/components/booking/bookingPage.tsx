// src/pages/booking.tsx
import React, { useState, useEffect } from "react";
import { Box, IconButton, TextField, Typography } from "@mui/material";
import { DatePicker } from "@mui/lab";
import { LocalizationProvider } from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import CourtList from "./CourtList";
import { fetchAvailableTimeSlots } from "../../services/mockApi";

const BookingPage: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [availableTimeSlots, setAvailableTimeSlots] = useState({});

  useEffect(() => {
    async function fetchTimeSlots() {
      const timeSlots = await fetchAvailableTimeSlots(selectedDate);
      console.log("timeSlots", timeSlots);
      setAvailableTimeSlots(timeSlots);
    }

    fetchTimeSlots();
  }, [selectedDate]);

  const handleDateChange = (date: Date | null) => {
    if (date) {
      setSelectedDate(date);
    }
  };

  const changeDateBy = (days: number) => {
    const newDate = new Date(selectedDate);
    newDate.setDate(selectedDate.getDate() + days);
    setSelectedDate(newDate);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: 4,
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography variant="h6">
            {selectedDate.toLocaleDateString()}
          </Typography>
          <IconButton onClick={() => changeDateBy(-1)}>
            <ArrowBackIos />
          </IconButton>
          <DatePicker
            label="Select Date"
            value={selectedDate}
            onChange={handleDateChange}
            renderInput={(params) => (
              <TextField {...params} sx={{ marginLeft: 1, marginRight: 1 }} />
            )}
          />
          <IconButton onClick={() => changeDateBy(1)}>
            <ArrowForwardIos />
          </IconButton>
        </Box>
        <CourtList timeSlotsByCourt={availableTimeSlots} />
      </Box>
    </LocalizationProvider>
  );
};

export default BookingPage;
