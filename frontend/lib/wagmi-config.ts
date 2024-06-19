import { http, createConfig } from "wagmi";
import { mainnet } from "wagmi/chains";
import { fhenixfrontier } from "@/lib/custom-chains";

export const config = createConfig({
  chains: [fhenixfrontier],
  multiInjectedProviderDiscovery: false,
  ssr: true,
  transports: {
    [fhenixfrontier.id]: http(),
  },
});

declare module "wagmi" {
  interface Register {
    config: typeof config;
  }
}
