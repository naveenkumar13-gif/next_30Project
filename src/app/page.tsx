"use client";
import Image from "next/image";
import Delay from "./dm-delay/page";
import MoodMail from "./moodMail/page";
import { useState } from "react";

export default function Home() {
  return (
    <div className="">
      {/* <Delay /> */}
      <MoodMail />
    </div>
  );
}
