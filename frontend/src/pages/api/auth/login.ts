// src/pages/api/auth/login.ts

import { OAuth2Client } from "google-auth-library";
import type { NextApiRequest, NextApiResponse } from "next";

const clientId = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID;
const client = new OAuth2Client(clientId);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { idToken } = req.body;

    // Verify the idToken and get user information from Google
    const ticket = await client.verifyIdToken({
      idToken,
      audience: clientId,
    });
    const payload = ticket.getPayload();
    const googleUser = {
      id: payload.sub,
      email: payload.email,
      name: payload.name,
      picture: payload.picture,
    };

    // Check if the user exists in your database or create a new user
    // ...

    // Create a session for the user and send a session cookie
    // ...

    return res.status(200).json({ success: true });
  }

  return res.status(405).json({ error: "Method not allowed" });
}
