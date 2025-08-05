import MoodInput from "@/components/moodInput";
import MoodOutput from "@/components/moodOutput";
import React, { useState } from "react";

function MoodMail() {
  const [mood, setMood] = useState("");
  const [subject, setSubject] = useState("");
  const [footer, setFooter] = useState("");
  const [generatated, setGenerated] = useState(false);

  const handleGenerate = () => {
    const lowerCase = mood.toLowerCase();

    if (
      lowerCase.includes("happy") ||
      lowerCase.includes("joy") ||
      lowerCase.includes("excited")
    ) {
      setSubject("Feeling Great!");
      setFooter("Wishing you continued happiness and success!");
    } else if (
      lowerCase.includes("sad") ||
      lowerCase.includes("down") ||
      lowerCase.includes("depressed")
    ) {
      setSubject("Hope You're Doing Okay");
      setFooter("Remember, brighter days are ahead. Take care of yourself!");
    } else if (
      lowerCase.includes("angry") ||
      lowerCase.includes("frustrated") ||
      lowerCase.includes("mad")
    ) {
      setSubject("Let's Talk This Through");
      setFooter("Sometimes a fresh perspective helps. I'm here to listen.");
    } else if (
      lowerCase.includes("tired") ||
      lowerCase.includes("exhausted") ||
      lowerCase.includes("sleepy")
    ) {
      setSubject("Time for Some Rest");
      setFooter("Don't forget to take breaks and recharge. You deserve it!");
    } else if (
      lowerCase.includes("anxious") ||
      lowerCase.includes("worried") ||
      lowerCase.includes("nervous")
    ) {
      setSubject("Everything Will Be Alright");
      setFooter(
        "Take deep breaths and remember that you're stronger than you think."
      );
    } else if (
      lowerCase.includes("confident") ||
      lowerCase.includes("proud") ||
      lowerCase.includes("accomplished")
    ) {
      setSubject("You're Amazing!");
      setFooter("Keep up the fantastic work! You're doing great things.");
    } else if (
      lowerCase.includes("grateful") ||
      lowerCase.includes("thankful") ||
      lowerCase.includes("blessed")
    ) {
      setSubject("Gratitude Makes Everything Better");
      setFooter(
        "Your positive attitude is inspiring. Thank you for sharing your light!"
      );
    } else if (
      lowerCase.includes("confused") ||
      lowerCase.includes("unsure") ||
      lowerCase.includes("lost")
    ) {
      setSubject("Let's Figure This Out Together");
      setFooter(
        "Sometimes the best solutions come from collaboration. We'll find the way forward."
      );
    } else if (
      lowerCase.includes("motivated") ||
      lowerCase.includes("inspired") ||
      lowerCase.includes("energized")
    ) {
      setSubject("Ready to Take on the World!");
      setFooter(
        "Your enthusiasm is contagious! Let's make amazing things happen."
      );
    } else if (
      lowerCase.includes("calm") ||
      lowerCase.includes("peaceful") ||
      lowerCase.includes("relaxed")
    ) {
      setSubject("Enjoying the Moment");
      setFooter("Peace and tranquility are precious. Savor this feeling.");
    } else {
      setSubject("How Are You Feeling?");
      setFooter(
        "Whatever you're going through, remember that your feelings are valid."
      );
    }

    setGenerated(true);
  };
  const handleReset = () => {
    setMood("");
    setFooter("");
    setSubject("");
    setGenerated(false);
  };
  return (
    <div className="max-w-xl   mx-auto  p-6 rounded-lg space-y-4 bg-white shadow">
      <h2 className="font-bold ">MoodMail Generator</h2>
      <MoodInput
        mood={mood}
        setMood={setMood}
        disabled={generatated}
        onGenarate={handleGenerate}
      />
      <MoodOutput subject={subject} footer={footer} onRest={handleReset} />
    </div>
  );
}

export default MoodMail;
