// src/components/CourtList.tsx
import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import TimeSlot from "./TimeSlot";
import TimeSlotDetails from "./TimeSlotDetails";

type TimeSlotData = {
  time: string;
  available: boolean;
};

type CourtData = {
  courtName: string;
  timeSlots: TimeSlotData[];
};

interface CourtListProps {
  timeSlotsByCourt: CourtData[];
}

const CourtList: React.FC<CourtListProps> = ({ timeSlotsByCourt }) => {
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<TimeSlotData | null>(
    null
  );

  if (
    !timeSlotsByCourt ||
    timeSlotsByCourt.length === 0 ||
    !Array.isArray(timeSlotsByCourt)
  ) {
    return (
      <Box sx={{ marginTop: 4, textAlign: "center" }}>
        <Typography variant="h6">
          No courts available for the selected date.
        </Typography>
      </Box>
    );
  }

  const handleTimeSlotClick = (timeSlot: TimeSlotData) => {
    if (selectedTimeSlot === timeSlot) {
      setSelectedTimeSlot(null);
    } else {
      setSelectedTimeSlot(timeSlot);
    }
  };

  const courtList = timeSlotsByCourt.map((courtData) => {
    return (
      <Box key={courtData.courtName} sx={{ marginBottom: 4 }}>
        <Typography variant="h6" sx={{ marginBottom: 2 }}>
          {courtData.courtName}
        </Typography>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(120px, 1fr))",
            gap: 2,
          }}
        >
          {courtData.timeSlots.map((timeSlot) => (
            <TimeSlot
              key={timeSlot.time}
              time={timeSlot.time}
              available={timeSlot.available}
              onClick={() => handleTimeSlotClick(timeSlot)}
            />
          ))}
        </Box>
        {selectedTimeSlot && (
          <Box sx={{ marginTop: 2 }}>
            <TimeSlotDetails
              time={selectedTimeSlot.time}
              available={selectedTimeSlot.available}
            />
          </Box>
        )}
      </Box>
    );
  });

  return <Box sx={{ marginTop: 4, width: "100%" }}>{courtList}</Box>;
};

export default CourtList;
