import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type Props = {
  mood: string;
  setMood: (val: string) => void;
  onGenarate: () => void;
  disabled: boolean;
};
function MoodInput({ mood, setMood, disabled, onGenarate }: Props) {
  return (
    <div className="space-y-4">
      <Input
        placeholder="how are you feeling today"
        value={mood}
        onChange={(e) => setMood(e.target.value)}
        disabled={disabled}
      />
      <Button className="w-full" onClick={onGenarate} disabled={disabled}>
        Generate Email template
      </Button>
    </div>
  );
}

export default MoodInput;
