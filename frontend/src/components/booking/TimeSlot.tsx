// src/components/TimeSlot.tsx
import React from "react";
import { Paper } from "@mui/material";

interface TimeSlotProps {
  time: string;
  available: boolean;
  onClick: () => void;
}

const TimeSlot: React.FC<TimeSlotProps> = ({ time, available, onClick }) => {
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
      {time}
    </Paper>
  );
};

export default TimeSlot;
