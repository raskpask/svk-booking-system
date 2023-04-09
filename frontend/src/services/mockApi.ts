// src/services/mockApi.ts
// ...

export async function fetchAvailableTimeSlots(date: Date): Promise<any> {
  const res = await fetch(
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vQr_dyUhB-9BmKiLPfxX2ykzewlquMewwWmbpNH7tPUO4Hb5oL3mnpr4HK-p9xnZxCXonXwrf3R1A5A/pub?output=csv"
  );

  if (res.ok) {
    const data = await res.body;

    console.log(data);
  }
  const dummyData = [
    {
      courtName: "Court 1",
      UUID: "303d94e8-c628-43c5-a6a1-8407f0292b7e",
      timeSlots: [
        {
          startTime: "09:00",
          endTime: "10:30",
          available: true,
          courtId: 1,
          id: 0,
        },
        {
          startTime: "10:30",
          endTime: "12:00",
          available: false,
          courtId: 1,
          id: 1,
        },
        {
          startTime: "12:00",
          endTime: "13:30",
          available: true,
          courtId: 1,
          id: 2,
        },
        {
          startTime: "13:30",
          endTime: "15:30",
          available: true,
          courtId: 1,
          id: 3,
        },
        // More time slots if needed...
      ],
    },
    {
      courtName: "Court 2",
      UUID: "091ccd90-3c1e-44a1-bb98-99132dbb33a9",
      timeSlots: [
        {
          startTime: "09:00",
          endTime: "10:30",
          available: true,
          courtId: 2,
          id: 0,
        },
        {
          startTime: "10:30",
          endTime: "12:00",
          available: true,
          courtId: 2,
          id: 1,
        },
        {
          startTime: "12:00",
          endTime: "13:30",
          available: false,
          courtId: 2,
          id: 2,
        },
        {
          startTime: "13:30",
          endTime: "15:30",
          available: true,
          courtId: 2,
          id: 3,
        },
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
