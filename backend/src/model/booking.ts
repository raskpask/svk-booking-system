import { CourtType } from "./enums/courtType";
import { BookingStatus } from "./enums/status";
import { User } from "./user";

export interface Booking {
  date: string;
  startTime: string;
  endTime: string;
  court: CourtType;
  price: number;
  status: BookingStatus;
  user: User;
}
