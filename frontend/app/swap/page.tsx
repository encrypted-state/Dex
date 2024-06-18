"use client";
// import Swap from "../components/views/swap";
import dynamic from "next/dynamic";
export default function SwapPage() {
  const Swap = dynamic(() => import("../components/views/swap"), {
    ssr: false,
  });
  return (
    <div className="mt-20">
      <Swap />
    </div>
  );
}
