import { NextFunction, Request, Response, Router } from "express";

const router = Router();

router.get(
  "",
  async (
    _req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response> => {
    try {
      res.setHeader("Content-Type", "text/plain");
      res.status(200).send("This is a booking");
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
        res.setHeader("Content-Type", "text/plain");
        res.status(200).send("Booking");
        return res;
      } catch (error) {
        next(error);
      }
      return res;
    }
  );

  export default router;
