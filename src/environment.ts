import { AbiItem } from "web3-utils";
export interface Env {
  countdown: {
    year: number;
    month: number;
    day: number;
    hour: number;
    minute: number;
  };
  contractAddress: string;
  tokenSymbol: string;
  tokenExchange: number;
  minBNB: number;
  maxBNB: number;
  contractDecimals: number;
  getUpdateMessage?: string;
  referralPath: string;
  whitepaperDoc: string;
  faqDoc: string;
  allowBuy?: {
    allow: boolean;
    message: string;
  };
  buyMethod: string;
  abis: AbiItem[];
  tokenLogo: string;
  twitter: string;
  telegram: string;
}

export const ENV: Env = {
  countdown: {
    year: 2023,
    month: 12,
    day: 1,
    hour: 0,
    minute: 0,
  },
  contractAddress: "0x9ab6b9fa2adaf0af358c714386f4e13b3be1bb37",
  tokenSymbol: "",
  tokenExchange: 0,
  getUpdateMessage: "Thank you for subscribe to receive information from us",
  minBNB: 0.1,
  maxBNB: 100,
  contractDecimals: 18,
  referralPath: "",
  whitepaperDoc: "",
  faqDoc: "",
  buyMethod: "",
  abis: [],
  // eslint-disable-next-line no-restricted-globals
  tokenLogo: location.origin + "/logo4wallet.png",
  twitter: "https://twitter.com/Atus_Protocol",
  telegram: "https://t.me/atus_protocol",
};

export function loadEnv() {
  return fetch("/env.json")
    .then((t) => t.json())
    .then((value) => {
      Object.assign(ENV, value);
      fetch("/abis.json")
        .then((t) => t.json())
        .then((value) => (ENV.abis = value));
    });
}
