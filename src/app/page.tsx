import Image from "next/image";
import Delay from "./dm-delay/page";

export default function Home() {
  return (
    <div className="items-center justify-center min-h-screen flex">
      <Delay />
    </div>
  );
}
