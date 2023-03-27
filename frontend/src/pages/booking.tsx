// src/pages/home.tsx

import React from "react";
import BookingPage from "../components/booking/bookingPage";
import Layout from "../layouts/Layout";

const Home: React.FC = () => {
  return (
    <Layout>
      <BookingPage />
    </Layout>
  );
};

export default Home;
