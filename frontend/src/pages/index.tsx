// src/pages/index.tsx

import React from "react";
import QuickNav from "../components/Home/QuickNav";
import Layout from "../layouts/Layout"; // Update the import path here

const Index: React.FC = () => {
  return (
    <Layout>
      <QuickNav />
    </Layout>
  );
};

export default Index;
