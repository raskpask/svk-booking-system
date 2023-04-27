// src/components/CourtList.tsx
import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import TimeSlot from "./TimeSlot";
import TimeSlotDetails from "./TimeSlotDetails";
import { CourtData, TimeSlotData } from "./CourtList";

interface CourtProps {
  court: CourtData;
}

const Court: React.FC<CourtProps> = ({ court }) => {
  const [visibleTimeSlot, setVisibleTimeSlot] = useState<TimeSlotData | null>(
    null
  );

  if (court.timeSlots.length == 0) {
    return (
      <Box sx={{ marginTop: 4, textAlign: "center" }}>
        <Typography variant="h6">
          No courts available for the selected date.
        </Typography>
      </Box>
    );
  }

  return (
    <Box key={court.courtName} sx={{ marginBottom: 4 }}>
      <Typography variant="h6" sx={{ marginBottom: 2 }}>
        {court.courtName}
      </Typography>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(120px, 1fr))",
          gap: 2,
        }}
      >
        {court.timeSlots.map((timeSlot) => (
          <TimeSlot
            key={timeSlot.startTime}
            startTime={timeSlot.startTime}
            endTime={timeSlot.endTime}
            available={timeSlot.available}
            onClick={() => {
              if (visibleTimeSlot == timeSlot) {
                setVisibleTimeSlot(null);
              } else {
                setVisibleTimeSlot(timeSlot);
              }
            }}
          />
        ))}
      </Box>
      {visibleTimeSlot && (
        <Box sx={{ marginTop: 2 }}>
          <TimeSlotDetails
            startTime={visibleTimeSlot.startTime}
            endTime={visibleTimeSlot.endTime}
            available={visibleTimeSlot.available}
            courtId={visibleTimeSlot.courtId}
            timeSlotId={visibleTimeSlot.id}
          />
        </Box>
      )}
    </Box>
  );
};

export default Court;
