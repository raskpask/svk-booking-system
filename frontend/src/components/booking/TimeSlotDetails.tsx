// src/components/TimeSlotDetails.tsx
import React from "react";
import { Box, Button, Paper, Typography } from "@mui/material";

interface TimeSlotDetailsProps {
  startTime: string;
  endTime: string;
  available: boolean;
}

const TimeSlotDetails: React.FC<TimeSlotDetailsProps> = ({
  startTime,
  endTime,
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
      <Typography variant="h6">
        Time: {startTime} - {endTime}
      </Typography>
      <Typography>
        Status: {available ? "Available" : "Not Available"}
      </Typography>
      {available && (
        <Typography variant="h6">
          <Button
            variant="contained"
            color="primary"
            type="submit"
            sx={{
              width: "200px",
              height: "80px",
              margin: "10px",
              fontSize: "20px",
            }}
          >
            Boka
          </Button>
        </Typography>
      )}
    </Box>
  );
};

export default TimeSlotDetails;
