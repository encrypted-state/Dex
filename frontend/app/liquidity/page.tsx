"use client";
// import TokenPair from "../components/token-pair";
import dynamic from "next/dynamic";

export default function LiquidityPage() {
  const TokenPair = dynamic(() => import("../components/token-pair"), {
    ssr: false,
  });

  return (
    <div className="mt-20">
      <div className="flex flex-col items-center">
        <h1 className="font-semibold text-2xl mb-2">Provide Liquidity</h1>
        <TokenPair type={"liquidity"} />
      </div>
    </div>
  );
}
