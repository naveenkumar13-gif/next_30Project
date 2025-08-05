import TimeChart from "@/components/timeChart";
import TimeForm from "@/components/timeForm";
import React, { useState } from "react";

const TimeTacker = () => {
  const [data, setData] = useState<{ activity: string; hours: number }[]>([]);
  const handleAdd = (activity: string, hours: number) => {
    console.log(data);
    setData((prev) => [...prev, { activity, hours }]);
  };
  return (
    <div className=" p-6 rounded-lg space-y-4 bg-white shadow">
      <h1 className="text-2xl font-bold">TimeTracker</h1>
      <TimeForm onAdd={handleAdd} />
      <TimeChart data={data} />
    </div>
  );
};

export default TimeTacker;
