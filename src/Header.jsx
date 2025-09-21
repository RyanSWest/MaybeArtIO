import WalletButton  from './WalletButton';
import { useWalletTransactionSignAndSend } from './useTransactionSignandSend';  
import './Header.css';
export default function  Header() {
  return (
    <div style={{
      display: 'flex',
      flexDirection:'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '10px 20px',
      backgroundColor: '#6c97cfff',
      borderBottom: '1px solid cyan'
    }}>
     

      
      
      <WalletButton style={{
        fontSize: '.25rem',
        padding: '2rem',
        height: '3rem'
      }} />

      
      {/* <button className='cyberpunk-button'
      onClick= {useTransactionSignAndSend}> 

      Transaction
      </button> */}
    </div>
  )
}