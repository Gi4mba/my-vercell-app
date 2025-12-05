import type { Eip1193Provider } from "ethers";
import { BrowserProvider } from "ethers";

export {};
declare global {
    interface Window {
        ethereum?: Eip1193Provider
    }
}

export function getProvider(): BrowserProvider {
    const eth = window.ethereum as Eip1193Provider | undefined;

    if (!eth) {
        throw new Error('MetaMask is not installed');
    }
    return new BrowserProvider(eth);
}