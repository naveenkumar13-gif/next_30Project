"use client";

import TimeTacker from "./timeTracker/page";

export default function Home() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center ">
      {/* <Delay /> */}
      {/* <MoodMail /> */}
      <TimeTacker />
    </div>
  );
}
