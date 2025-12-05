import { ConnectWallet } from './components/Connection/ConnectWallet'
import { useAppStore } from './store/state';

function App() {
    const { walletAddress, balance } = useAppStore();
    
  return (
    <>
      <div style={{ textAlign: 'center', marginTop: '2rem' }}>
        <h1>Your ETH balance:</h1>
        < ConnectWallet />
        {walletAddress && (
          <div style={{ marginTop: '1rem' }}>
            <p><strong>Wallet:</strong> {walletAddress}</p>
            <p><strong>Balance:</strong> {balance} ETH</p>
          </div>
        )}
      </div>
    </>
  )
}

export default App
