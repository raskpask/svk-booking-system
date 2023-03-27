import { AccessLevel } from "./enums/accessLevel";

export interface User {
    accessLevel: AccessLevel;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
  }