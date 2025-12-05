import { create } from 'zustand';
import { ethers } from 'ethers'
import { getProvider } from '../utils/getProvider';

interface AppStore {
    walletAddress: string;
    balance: string;
    setWalletAddress: (addr: string) => void;
    setBalance: (bal: string) => void;
}

export const useAppStore = create<AppStore>(set => ({
    walletAddress: '',
    balance: '',
    setBalance: (bal: string) => set({ balance: bal }),
    setWalletAddress: (addr: string) => set({ walletAddress: addr }),
}));

export async function fetchBalance(address: string) {
    const provider = getProvider();
    try {
        const bal = await provider.getBalance(address);
        console.log({ address })
        const balanceInEth = ethers.formatEther(bal);
        return balanceInEth.toString();
    } catch (error) {
        console.error('Error fetching balance: ', error);
    }
}