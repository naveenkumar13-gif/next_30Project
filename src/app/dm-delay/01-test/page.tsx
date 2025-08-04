"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { useState } from "react";

function Test() {
  const [message, setMessage] = useState<string>("");
  const [delay, setDelay] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [timerId, setTimerId] = useState<NodeJS.Timeout | null>(null);
  const [sendMessage, setSendMessage] = useState<string>("");

  const handleSendMessage = () => {
    setIsLoading(true);
    const id = setTimeout(() => {
      setSendMessage(message);
      setIsLoading(false);
    }, delay * 1000);
    setTimerId(id);
    setDelay(0);
    setMessage("");
  };
  const handleCancel = () => {
    if (timerId) {
      clearTimeout(timerId);
    }
    setIsLoading(false);
  };
  return (
    <div className="max-w-md  mx-auto p-6 rounded-lg space-y-4 bg-white shadow">
      <h2 className="text-2xl font-bold"> DM Delay Button</h2>
      <Textarea
        placeholder="Enter your message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <Input
        placeholder="Enter the delay time"
        type="number"
        value={delay}
        onChange={(e) => setDelay(Number(e.target.value))}
        disabled={isLoading}
      />
      {!isLoading ? (
        <Button className="w-full" onClick={handleSendMessage}>
          Delay
        </Button>
      ) : (
        <Button
          className="w-full"
          variant={"destructive"}
          onClick={handleCancel}
        >
          Delay
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

export default Test;
