import type { NetworkConfig } from "@raidguild/quiver";

export const DEFAULT_CHAIN_ID = "0x13881"; // Used to switch to if the user is on an unsupported network

export interface Chain {
	name: string;
	chainId: string;
  explorer: string;
  symbol: string;
  rpc: string;
}

export const chains: NetworkConfig = {
  NO: {
		name: 'No Network',
		chainId: '0',
		explorer: '',
    symbol: 'ETH',
    rpc: '',
	},
	UNKNOWN: {
		name: 'Unknown Network',
		chainId: '0',
		explorer: '',
    symbol: 'ETH',
    rpc: '',
	},
	'0x539': {
		chainId: '0x539',
		name: 'Hardhat',
		symbol: 'ETH',
		explorer: 'http://localhost:1234',
		rpc: 'http://localhost:8545',
	},
	'0x89': {
		chainId: '0x89',
		name: 'Polygon',
		symbol: 'MATIC',
		explorer: 'https://polygonscan.com',
		rpc: 'https://polygon-rpc.com/',
	},
	'0x13881': {
		chainId: '0x13881',
		name: 'Mumbai Testnet',
		symbol: 'MATIC',
		explorer: 'https://mumbai.polygonscan.com',
		rpc: 'https://matic-mumbai.chainstacklabs.com',
	},
};

export const getNetworkInfo = (id: string): Chain => {
	if (!id) {
		return chains.NO as Chain;
	}
	if (id in chains) {
		return chains[id] as Chain;
	}
	return {
		...chains.UNKNOWN,
		chainId: id,
		name: `${chains.UNKNOWN.name} #${id}`,
	} as Chain;
};