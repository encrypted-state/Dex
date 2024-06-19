"use client";
import { ConnectKitButton } from "connectkit";
import { Button } from "./ui/button";
import {
  DynamicContextProvider,
  DynamicWidget,
} from "@dynamic-labs/sdk-react-core";

export const ConnectButton = ({
  className,
  size,
}: {
  className?: string;
  size?: "default" | "sm" | "lg" | "icon" | null | undefined;
}) => {
  return (
    // <ConnectKitButton.Custom>
    //   {({
    //     isConnected,
    //     isConnecting,
    //     show,
    //     hide,
    //     address,
    //     ensName,
    //     chain,
    //     truncatedAddress,
    //   }) => {
    //     return (
    //       <Button
    //         size={size}
    //         className={className}
    //         onClick={show}
    //         variant={!isConnected ? "default" : "outline"}
    //       >
    //         {isConnected ? ensName ?? truncatedAddress : "Connect Wallet"}
    //       </Button>
    //     );
    //   }}
    // </ConnectKitButton.Custom>
    <DynamicWidget variant="modal" />
  );
};
