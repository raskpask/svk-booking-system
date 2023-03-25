// components/CourtsTable.js

// components/CourtsTable.js

import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Paper } from "@mui/material";

const timeSlots = [
  "8:00 AM",
  "8:30 AM",
  "9:00 AM",
  "9:30 AM",
  "10:00 AM",
  "10:30 AM",
  "11:00 AM",
  "11:30 AM",
  "12:00 PM",
  "12:30 PM",
  "1:00 PM",
  "1:30 PM",
  "2:00 PM",
  "2:30 PM",
  "3:00 PM",
  "3:30 PM",
  "4:00 PM",
  "4:30 PM",
  "5:00 PM",
  "5:30 PM",
  "6:00 PM",
  "6:30 PM",
  "7:00 PM",
  "7:30 PM",
  // ... add more time slots if needed
];

const columns = [
  { field: "name", headerName: "Court Name", width: 150 },
  ...timeSlots.map((time, index) => ({
    field: `time${index}`,
    headerName: time,
    width: 120,
  })),
];

const CourtsTable = ({ courts }) => {
  return (
    <Paper style={{ width: "100%", height: 400 }}>
      <DataGrid
        rows={courts}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        disableSelectionOnClick
        disableColumnMenu
      />
    </Paper>
  );
};

export default CourtsTable;
