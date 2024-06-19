import { type Chain } from "viem";

export const fhenixfrontier: Chain = {
  id: 8008135,
  name: "Fhenix Helium",
  nativeCurrency: {
    decimals: 18,
    name: "Fhenix",
    symbol: "tFHE",
  },
  rpcUrls: {
    default: { http: ["https://api.helium.fhenix.zone/"] },
  },
  blockExplorers: {
    default: {
      name: "Fhenix Explorer",
      url: "https://explorer.helium.fhenix.zone",
    },
  },
  testnet: true,
};

export const evmNetworks = [
  {
    blockExplorerUrls: ["https://explorer.helium.fhenix.zone"],
    chainId: 8008135,
    chainName: "Fhenix Helium",
    iconUrls: ["https://app.dynamic.xyz/assets/networks/eth.svg"],
    name: "Fhenix Helium",
    nativeCurrency: {
      decimals: 18,
      name: "Fhenix",
      symbol: "tFHE",
    },
    networkId: 8008135,

    rpcUrls: ["https://api.helium.fhenix.zone/"],
    vanityName: "Fhenix Helium",
  },
];
