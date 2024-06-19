"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { type ReactNode } from "react";
import { WagmiProvider } from "wagmi";
import { EthersExtension } from "@dynamic-labs/ethers-v6";
import { config } from "@/lib/wagmi-config";
import {
  DynamicContextProvider,
  EthereumWalletConnectors,
  DynamicWagmiConnector,
} from "@/lib/dynamic";
import { evmNetworks } from "@/lib/custom-chains";

const queryClient = new QueryClient();

export function Providers(props: { children: ReactNode }) {
  console.log("render layout");

  return (
    <DynamicContextProvider
      settings={{
        environmentId: "8d8f8a64-f8be-4355-8ac6-c21472ac7b37",
        walletConnectors: [EthereumWalletConnectors],
        overrides: { evmNetworks },
        walletConnectorExtensions: [EthersExtension],
      }}
    >
      <WagmiProvider config={config}>
        <QueryClientProvider client={queryClient}>
          <DynamicWagmiConnector>{props.children}</DynamicWagmiConnector>
        </QueryClientProvider>
      </WagmiProvider>
    </DynamicContextProvider>
  );
}
