// src/components/CourtList.tsx
import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import TimeSlot from "./TimeSlot";
import { UUID } from "crypto";
import { log } from "console";
import Court from "./Court";

export type TimeSlotData = {
  startTime: string;
  endTime: string;
  available: boolean;
  courtId: number;
  id: number;
};

export type CourtData = {
  id: UUID;
  courtName: string;
  timeSlots: TimeSlotData[];
};

interface CourtListProps {
  timeSlotsByCourt: CourtData[];
}

const CourtList: React.FC<CourtListProps> = ({ timeSlotsByCourt }) => {
  const courtList = timeSlotsByCourt.map((courtData) => {
    // eslint-disable-next-line react/jsx-key
    return <Court court={courtData} />;
  });

  return <Box sx={{ marginTop: 4, width: "100%" }}>{courtList}</Box>;
};

export default CourtList;
