import { formatUnits, parseEther } from "@ethersproject/units";

export const addresses = {
  UNIPEER_ADDRESS: {
    100: "",
    10200: "0xEF2689DB6A7b3AB383Fb14Ff7d9C2254C248103f",
  },
};
export const constants = {
  DAI_ADDRESS: "",
};

export function shortenHex(hex, length = 4) {
  return `${hex.substring(0, length + 2)}…${hex.substring(
    hex.length - length,
  )}`;
}

const ETHERSCAN_URL = {
  1: "https://etherscan.io",
  100: "https://gnosisscan.io",
  10200: "https://blockscout.chiadochain.net",
};

export const RPC_URL: { [key: number]: string } = {
  1: "mainnet",
  100: "https://rpc.gnosischain.com.",
  10200: "https://rpc.chiadochain.net",
};

/**
 *
 * @param {("Account"|"Transaction")} type
 * @param {[number, string]} data
 */
export function formatEtherscanLink(type, data) {
  switch (type) {
    case "Account": {
      const [chainId, address] = data;
      return `https://${ETHERSCAN_URL[chainId]}/address/${address}`;
    }
    case "Transaction": {
      const [chainId, hash] = data;
      return `https://${ETHERSCAN_URL[chainId]}/tx/${hash}`;
    }
  }
}

/**
 * @name parseBalance
 *
 * @param {import("@ethersproject/bignumber").BigNumberish} balance
 * @param {number} decimals
 * @param {number} decimalsToDisplay
 *
 * @returns {string}
 */
export const parseBalance = (balance, decimals = 18, decimalsToDisplay = 3) =>
  Number(formatUnits(balance, decimals)).toFixed(decimalsToDisplay);
