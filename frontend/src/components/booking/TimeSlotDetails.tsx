// src/components/TimeSlotDetails.tsx
import React from "react";
import { Box, Paper, Typography } from "@mui/material";

interface TimeSlotDetailsProps {
  time: string;
  available: boolean;
}

const TimeSlotDetails: React.FC<TimeSlotDetailsProps> = ({
  time,
  available,
}) => {
  return (
    <Box
      component={Paper}
      sx={{
        gridColumn: "1 / -1",
        backgroundColor: "primary.main",
        padding: 2,
        marginTop: 1,
        marginBottom: 1,
        color: "white",
        transition: "height 0.3s",
      }}
    >
      <Typography variant="h6">Time: {time}</Typography>
      <Typography>
        Status: {available ? "Available" : "Not Available"}
      </Typography>
      {/* Add more details here */}
    </Box>
  );
};

export default TimeSlotDetails;
