import { Booking } from "../model/booking";
import { CourtType } from "../model/enums/courtType";
import { BookingStatus } from "../model/enums/status";
import { PostBookingResponse } from "../model/response/postBookingResponse";

const bookedTimes: Booking[] = [
  {
    date: "2023-06-01",
    startTime: "10:00",
    endTime: "11:30",
    court: CourtType.CenterCourt,
    price: 350,
    status: BookingStatus.Booked,
  },
  {
    date: "2023-06-01",
    startTime: "12:00",
    endTime: "13:30",
    court: CourtType.CenterCourt,
    price: 350,
    status: BookingStatus.Booked,
  },
  {
    date: "2023-06-01",
    startTime: "14:00",
    endTime: "15:30",
    court: CourtType.Court1,
    price: 350,
    status: BookingStatus.Booked,
  },
  {
    date: "2023-06-01",
    startTime: "14:00",
    endTime: "15:30",
    court: CourtType.Court2,
    price: 350,
    status: BookingStatus.Booked,
  },
];

export function getBookings(
  court: CourtType | undefined,
  date: string | undefined
): Booking[] {
  let bookings: Booking[] = [];
  bookedTimes.forEach((booking) => {
    if (
      court === undefined ||
      (booking.court == court && date === undefined) ||
      booking.date == date
    ) {
      bookings.push(booking);
    }
  });
  return bookings;
}

export function makeBooking(booking: Booking): PostBookingResponse {
  return { status: "OK" };
}
