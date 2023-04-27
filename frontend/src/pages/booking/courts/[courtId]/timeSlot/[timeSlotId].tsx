import React from "react";
import { useRouter } from "next/router";
import Layout from "../../../../../layouts/Layout";

const TimeSlot: React.FC = () => {
  const router = useRouter();
  const { courtId, timeSlotId } = router.query;

  if (!router.isReady) {
    return <div>Loading...</div>;
  }
  // You can use the courtId and timeSlotId here as needed

  return (
    <Layout>
      <div>
        <h1>Time Slot</h1>
        <p>Court ID: {courtId}</p>
        <p>Time Slot ID: {timeSlotId}</p>
      </div>
    </Layout>
  );
};

export default TimeSlot;
