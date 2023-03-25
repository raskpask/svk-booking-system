// src/pages/login.tsx

import React from "react";
import Layout from "../layouts/Layout";
import LoginForm from "../components/Authenticator/LoginForm";

const Login: React.FC = () => {
  const handleLogin = (email: string, password: string) => {
    // Handle login logic here, e.g., call your API to authenticate the user
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <Layout>
      <LoginForm onSubmit={handleLogin} />
    </Layout>
  );
};

export default Login;
