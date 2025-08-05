import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "../ui/textarea";

type Props = {
  subject: string;
  footer: string;
  onRest: () => void;
};

function MoodOutput({ subject, footer, onRest }: Props) {
  return (
    <div className="space-y-4">
      <div>
        <label className="font-medium">Subject:</label>
        <Input value={subject} readOnly />
      </div>

      <div>
        <label className="font-medium">footeArea:</label>
        <Textarea value={footer} readOnly />
      </div>
      <Button variant={"destructive"} className="w-full" onClick={onRest}>
        reset
      </Button>
    </div>
  );
}

export default MoodOutput;
