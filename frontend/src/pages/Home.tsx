// src/pages/home.tsx

import React from "react";
import QuickNav from "../components/Home/QuickNav";
import Layout from "../layouts/Layout";

const Home: React.FC = () => {
  return (
    <Layout>
      <QuickNav />
    </Layout>
  );
};

export default Home;
