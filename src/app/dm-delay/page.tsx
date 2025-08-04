"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import React, { useState } from "react";
import { toast } from "sonner";

function Delay() {
  const [textArea, setTextArea] = useState<string>("");
  const [inputDelay, setInputDealy] = useState<number>(0);
  const [sending, setSending] = useState<boolean>(false);
  const [timerId, setTimerId] = useState<NodeJS.Timeout | null>(null);
  const [sendMessage, setSendMessage] = useState<string>("");

  const handleSending = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    const time = setTimeout(() => {
      setSendMessage(textArea);
      setSending(false);
      if (textArea) {
        toast.success("Message sent successfully!");
      }
    }, inputDelay * 1000);
    setTimerId(time);
    setInputDealy(0);
    setTextArea("");
  };
  const handleCancel = () => {
    if (timerId) {
      clearTimeout(timerId);
      setTimerId(null);
    }
    setSending(false);
    setInputDealy(0);
    setTextArea("");
    toast.error("Message cancelled!");
  };
  return (
    <div className="max-w-md  mx-auto p-6 rounded-lg space-y-4 bg-white shadow">
      <h1 className="text-2xl font-bold">Delay message</h1>
      <Textarea
        value={textArea}
        onChange={(e) => setTextArea(e.target.value)}
        placeholder="Enter your message"
        disabled={sending}
      />
      <Input
        type={"number"}
        placeholder="Enter delay time in seconds"
        value={inputDelay}
        onChange={(e) => setInputDealy(Number(e.target.value))}
        disabled={sending}
      />

      {!sending ? (
        <Button className="w-full" onClick={handleSending}>
          CLICK ME
        </Button>
      ) : (
        <Button
          className="w-full"
          onClick={handleCancel}
          variant={"destructive"}
        >
          CANCEL
        </Button>
      )}
      {sendMessage && (
        <div className="mt-4 p-4 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-lg shadow-sm">
          <div className="flex gap-2 items-center">
            <p className="text-green-800 font-medium">Message Sent:</p>
            <p className="text-green-700 mt-1 leading-relaxed">{sendMessage}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Delay;
