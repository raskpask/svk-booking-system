import { NextFunction, Request, Response, Router } from "express";
import { convertToEnum } from "../model/enums/courtType";
import { getBookings, makeBooking } from "../repos/bookingRepo";

const router = Router();

router.get(
  "",
  async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response> => {
    try {
      const query = JSON.parse(JSON.stringify(req.query));
      const resBooking = getBookings(convertToEnum(query.court), query.date);
      res.status(200).send(resBooking);
      return res;
    } catch (error) {
      next(error);
    }
    return res;
  }
);

router.post(
  "",
  async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response> => {
    try {
      const body = await JSON.parse(JSON.stringify(req.body));
      const bookingStatus = makeBooking(body);
      res.status(200).send(bookingStatus.status);
      return res;
    } catch (error) {
      next(error);
    }
    return res;
  }
);

export default router;
