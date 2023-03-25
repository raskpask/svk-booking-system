// src/pages/signup.tsx

import React from "react";
import Layout from "../layouts/Layout";
import SignUpForm from "../components/Authenticator/SignUpForm";

const SignUp: React.FC = () => {
  const handleSignUp = (email: string, password: string) => {
    // Handle sign-up logic here, e.g., call your API to register the user
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <Layout>
      <SignUpForm onSubmit={handleSignUp} />
    </Layout>
  );
};

export default SignUp;
