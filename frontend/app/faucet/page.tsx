"use client";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/app/components/ui/table";
import { tokens } from "@/lib/tokens";
import dynamic from "next/dynamic";

export default function FaucetPage() {
  const Token = dynamic(() => import("../components/token"), { ssr: false });
  console.log("render faucet");

  return (
    <>
      <h1 className="font-semibold text-2xl mb-2">Test Assets</h1>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[140px]">Asset</TableHead>{" "}
            <TableHead className="pl-2 w-[110px]">Balance</TableHead>{" "}
            <TableHead>Address</TableHead>
            <TableHead className="w-[100px] text-center"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {tokens.map((token, i) => (
            <Token token={token} key={i} />
          ))}
        </TableBody>
      </Table>
    </>
  );
}
