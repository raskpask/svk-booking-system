// src/services/mockApi.ts
// ...

export async function fetchAvailableTimeSlots(date: Date): Promise<any> {
  const dummyData = [
    {
      courtName: "Court 1",
      UUID: "303d94e8-c628-43c5-a6a1-8407f0292b7e",
      timeSlots: [
        { time: "09:00", available: true, courtId: 1, id: 0 },
        { time: "10:00", available: false, courtId: 1, id: 1 },
        { time: "11:00", available: true, courtId: 1, id: 2 },
        { time: "12:00", available: true, courtId: 1, id: 3 },
        // More time slots if needed...
      ],
    },
    {
      courtName: "Court 2",
      UUID: "091ccd90-3c1e-44a1-bb98-99132dbb33a9",
      timeSlots: [
        { time: "09:00", available: true, courtId: 2, id: 0 },
        { time: "10:00", available: true, courtId: 2, id: 1 },
        { time: "11:00", available: false, courtId: 2, id: 2 },
        { time: "12:00", available: true, courtId: 2, id: 3 },
        // More time slots if needed...
      ],
    },
    // More court data if needed...
  ];

  // Simulate an API call with a 1 second delay
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(dummyData);
    }, 1000);
  });
}
