import { NextFunction, Request, Response, Router } from 'express';

const router = Router();

export const getHealthCheckBody = () => {
    const date = new Date();

    return `${date.toLocaleString('sv-SE')}: much healthy 👨🏼‍🩺 - Version: ${process.env.APP_VERSION}`;
};

router.get('', async (_req: Request, res: Response, next: NextFunction): Promise<Response> => {
    try {
        res.setHeader('Content-Type', 'text/plain');
        res.status(200).send(getHealthCheckBody());
        return res;
    } catch (error) {
        next(error);
    }
    return res;
});

export default router;