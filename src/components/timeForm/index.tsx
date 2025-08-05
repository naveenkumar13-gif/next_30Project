"use client";
import React, { useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

interface Props {
  onAdd: (activity: string, hours: number) => void;
}

export default function TimeForm({ onAdd }: Props) {
  const [activity, setActivity] = useState<string>("");
  const [hours, setHours] = useState<number>(0);
  const handleSubmit = () => {
    if (!activity.trim() || !hours) alert(" Please fill this");
    onAdd(activity, hours);
    setActivity("");
    setHours(0);
  };
  return (
    <div className="space-y-4">
      <Input
        value={activity}
        onChange={(e) => setActivity(e.target.value)}
        placeholder="Activity (e.g sleep)"
      />
      <Input
        type="number"
        value={hours}
        onChange={(e) => setHours(Number(e.target.value))}
        placeholder="Hours (e.g 8)"
      />
      <Button className="w-full" onClick={handleSubmit}>
        Add Activity
      </Button>
    </div>
  );
}
