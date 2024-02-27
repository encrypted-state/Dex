"use client";
import { Button } from "@/app/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";
import { Input } from "@/app/components/ui/input";
import { ArrowDown } from "lucide-react";
const Swap = () => {
  return (
    <div className="w-96">
      <Card>
        <CardHeader>
          <CardTitle className="text-base font-medium text-zinc-300">
            You pay
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Input placeholder="0" type="number" min={0} />
        </CardContent>
      </Card>
      <Button className="mx-auto " variant="outline" size="icon">
        <ArrowDown />
      </Button>
      <Card>
        <CardHeader>
          <CardTitle className="text-base font-medium text-zinc-300">
            You receive
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Input placeholder="0" type="number" min={0} />
        </CardContent>
      </Card>
      <Button className="w-full text-base mt-4" size={"lg"}>
        Swap
      </Button>
    </div>
  );
};
export default Swap;
