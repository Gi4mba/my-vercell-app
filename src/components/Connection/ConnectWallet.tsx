import { useAppStore, fetchBalance } from '../../store/state';

export function ConnectWallet() {
    const setWalletAddress = useAppStore(state => state.setWalletAddress);
    const setBalance = useAppStore(state => state.setBalance);

    async function connect() {
        try {
            const accounts = await window.ethereum!.request({
                method: 'eth_requestAccounts'
            }) as string[];

            if (!Array.isArray(accounts)) {
                throw new Error('Invalid accounts response');
            }
            setWalletAddress(accounts[0]);

            const bal = await fetchBalance(accounts[0]);
            if (typeof bal !== "undefined") {
                setBalance(bal);
            } else {
                throw new Error('An error occured while fetching balance')
            }

        } catch (error) {
            console.error('Error connecting to wallet: ', error);
        }
    }
    return (
        <button onClick={connect}>
            Connetti Wallet
        </button>
    );
}