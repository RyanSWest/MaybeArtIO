import React, { useState } from 'react';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { PublicKey, Transaction } from '@solana/web3.js';
import { getAssociatedTokenAddress, createTransferInstruction, TOKEN_PROGRAM_ID } from '@solana/spl-token';

const TokenTransfer = () => {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  const [recipient, setRecipient] = useState('');
  const [amount, setAmount] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  // Replace with your token mint address
  const TOKEN_MINT = new PublicKey ('E5fqgV1UpossDXRND77XyzeJdg2Q8dkopT3poa1pHrS6')
  
  
  // ('NQ2N2fdG2xUmBbLyUdUd5hL9MSUcKgjTMBCN41p4tnk');

   const handleAmountChange = (e) => {
    const value = e.target.value;
    if (value === '' || (value >= 0 && !isNaN(value))) {
      setAmount(value); // Update only if valid
    }
  };


   const handleRecipientChange = (e) => {
    setRecipient(e.target.value); // Update state with input value
  };

  console.log( "WALLET", publicKey )
  const handleTransfer = async () => {
    if (!publicKey) {
      setMessage('Please connect your wallet');
      return;
    }

    // if(publicKey){
    //   setRecipient(publicKey);
    //   console.log("READY TO BUY", recipient, publicKey)
    // }

    if (!recipient || !amount) {
      setMessage('Please fill in all fields');
      return;
    }

    setLoading(true);
    setMessage('');
   console.log("YO", publicKey)
    try {
      const recipientPubkey = new PublicKey(recipient);
      const transferAmount = parseFloat(amount) * Math.pow(10, 9); // Assuming 9 decimals

      // Get token accounts
      const senderTokenAccount = await getAssociatedTokenAddress(
        TOKEN_MINT,
        publicKey
      );

      const recipientTokenAccount = await getAssociatedTokenAddress(
        TOKEN_MINT,
        recipientPubkey
      );

      // Create transfer instruction
      const transaction = new Transaction().add(
        createTransferInstruction(
          senderTokenAccount,
          recipientTokenAccount,
          publicKey,
          transferAmount,
          [],
          TOKEN_PROGRAM_ID
        )
      );

      // Send transaction
      const signature = await sendTransaction(transaction, connection);
      
      await connection.confirmTransaction(signature, 'confirmed');

      setMessage(`✅ Transfer successful! Signature: ${signature.slice(0, 8)}...`);
      setRecipient('');
      setAmount('');

    } catch (error) {
      console.error('Transfer error:', error);
      setMessage(`❌ Error: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-pink-900 py-8">
      <div className="max-w-md mx-auto p-6">
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/20">
          
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-white mb-4">
              💰 Transfer Tokens
            </h1>
            <p className="text-gray-300">
              Send your custom SPL tokens
            </p>
          </div>

          <div className="mb-8 flex justify-center">
            <WalletMultiButton className="!bg-gradient-to-r !from-purple-600 !to-pink-600 !rounded-xl !font-semibold" />
          </div>
{/* 
          {!publicKey ? (
            <div className="text-center text-gray-300">
              Please connect your Solana wallet to continue
            </div>
          ) : ( */}
            <div className="space-y-6">
              
              <div>
                <label className="block text-white font-semibold mb-2">
                  Recipient Address
                </label>
                {/* <input
                  type="text"
                  value={recipient}
                  onChange={ handleRecipientChange}
                  placeholder="Enter wallet address"
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/30 text-white placeholder-gray-400 focus:outline-none focus:border-purple-400"
                /> */}
              </div>

              <div>
                <label className="block text-white font-semibold mb-2">
                  Amount
                </label>
                <input
                  type="number"
                  value={amount}
                  onChange={handleAmountChange}
                  placeholder="0.00"
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/30 text-white placeholder-gray-400 focus:outline-none focus:border-purple-400"
                />
              </div>

              {message && (
                <div className={`p-4 rounded-xl ${
                  message.includes('Error') || message.includes('❌')
                    ? 'bg-red-500/20 border border-red-500/50 text-red-200'
                    : 'bg-green-500/20 border border-green-500/50 text-green-200'
                }`}>
                  {message}
                </div>
              )}

              <button
                onClick={handleTransfer}
                disabled={loading || !recipient || !amount}
                className="w-full py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-xl hover:from-purple-700 hover:to-pink-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-105"
              >
                {loading ? (
                  <span className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                    Sending...
                  </span>
                ) : (
                  '🚀 Send Tokens'
                )}
              </button>

              <div className="text-center text-sm text-gray-400 mt-4">
                Token Mint: {TOKEN_MINT.toString().slice(0, 8)}...
              </div>

            </div>
          
        </div>
      </div>
    </div>
  );
};

export default TokenTransfer;