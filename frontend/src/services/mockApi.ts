// src/services/mockApi.ts
// ...

export async function fetchAvailableTimeSlots(date: Date): Promise<any> {
  const dummyData = [
    {
      courtName: "Court 1",
      timeSlots: [
        { time: "09:00", available: true, courtId: 1 },
        { time: "10:00", available: false, courtId: 1 },
        { time: "11:00", available: true, courtId: 1 },
        { time: "12:00", available: true, courtId: 1 },
        // More time slots if needed...
      ],
    },
    {
      courtName: "Court 2",
      timeSlots: [
        { time: "09:00", available: true, courtId: 2 },
        { time: "10:00", available: true, courtId: 2 },
        { time: "11:00", available: false, courtId: 2 },
        { time: "12:00", available: true, courtId: 2 },
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
