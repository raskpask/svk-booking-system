// src/components/TimeSlot.tsx
import React from "react";
import { Paper } from "@mui/material";

interface TimeSlotProps {
  startTime: string;
  endTime: string;
  available: boolean;
  onClick: () => void;
}

const TimeSlot: React.FC<TimeSlotProps> = ({ startTime, endTime, available, onClick }) => {
  return (
    <Paper
      elevation={available ? 3 : 0}
      onClick={onClick}
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: available ? "primary.main" : "grey.300",
        color: available ? "white" : "black",
        cursor: available ? "pointer" : "default",
      }}
    >
      {startTime} - {endTime}
    </Paper>
  );
};

export default TimeSlot;
