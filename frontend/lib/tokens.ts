export type Token = {
  symbol: string;
  name: string;
  address: "NATIVE" | `0x${string}`;
  image?: string;
};

export const tokens: Array<Token> = [
  {
    symbol: "tFHE",
    name: "Fhenix Token",
    address: "NATIVE",
    image: "fhenix.png",
  },
  {
    symbol: "UNI",
    name: "Uniswap",
    address: "0x67C32b5dE05b2D805a4ff3E19DDFd886C4486004",
    image: "uni.svg",
  },
  {
    symbol: "DAI",
    name: "DAI",
    address: "0x8e29d0877D117479F120D7C5D0eC44e455E7e706",
    image: "dai.svg",
  },
  {
    symbol: "USDC",
    name: "USD Coin",
    address: "0xc631c1374721f28d075F896A3fC6c29066E2F0C8",
    image: "usdc.svg",
  },
  {
    symbol: "LINK",
    name: "Link",
    address: "0x86b0b98CBF9535eeA71025256b17E85864ac5eb4",
    image: "link.svg",
  },
  {
    symbol: "MATIC",
    name: "Polygon",
    address: "0xeCfE31b9965690E0e669a2e82669Bd7464a5E8Fc",
    image: "matic.svg",
  },
];
