// src/components/GoogleLoginButton.tsx

import React, { useEffect } from "react";
import { Button } from "@mui/material";
import { useRouter } from "next/router";

declare const gapi: any;

const GoogleLoginButton: React.FC = () => {
  console.log("herrreee");
  const router = useRouter();
  const clientId = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID;

  useEffect(() => {
    gapi.load("auth2", () => {
      gapi.auth2.init({ client_id: clientId });
    });
  }, []);

  const handleLogin = async () => {
    try {
      const auth2 = gapi.auth2.getAuthInstance();
      const user = await auth2.signIn();
      const idToken = user.getAuthResponse().id_token;

      // Send the idToken to your server for further processing
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ idToken }),
      });

      if (res.ok) {
        router.push("/");
      } else {
        console.error("Login failed");
      }
    } catch (error) {
      console.error("Error during Google login:", error);
    }
  };

  return (
    <Button variant="contained" color="primary" onClick={handleLogin}>
      Login with Google
    </Button>
  );
};

export default GoogleLoginButton;
