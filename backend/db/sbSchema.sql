USE 3000313-booking

CREATE OR REPLACE TABLE User (
    accessLevel INT,
    firstName VARCHAR(255),
    lastName VARCHAR(255),
    email VARCHAR(255),
    phone VARCHAR(255),
)

CREATE TABLE IF NOT EXISTS Booking (
    date: varchar(255),
  startTime: varchar(255),
  endTime: varchar(255),
  court: varchar(255),
  price: int,
  status: varchar(255),
  user: User,
);