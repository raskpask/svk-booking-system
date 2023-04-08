// src/components/DatePicker.tsx
import React from "react";
import { TextField } from "@mui/material";

interface DatePickerProps {
  date: Date;
  setDate: (date: Date) => void;
}

const DatePicker: React.FC<DatePickerProps> = ({ date, setDate }) => {
  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDate(new Date(event.target.value));
  };

  return (
    <TextField
      label="Choose date"
      type="date"
      value={date.toISOString().split("T")[0]}
      onChange={handleDateChange}
      InputLabelProps={{
        shrink: true,
      }}
    />
  );
};

export default DatePicker;
