// import React, { useState, useEffect } from 'react';
// import { CreditCard, Wallet, CheckCircle, XCircle, Loader, LogOut } from 'lucide-react';
// import { PublicKey } from '@solana/web3.js';
// import { useWallet } from '@solana/wallet-adapter-react';
// import { useUser } from './UserContextProvider';

// const BuyToken = () => {
//   const { publicKey, connected } = useWallet();
//   const { user, isAuthenticated, logout } = useUser();
//   const [activeTab, setActiveTab] = useState('stripe');
//   const [status, setStatus] = useState(null);
//   const [message, setMessage] = useState('');
//   const [amount, setAmount] = useState('10');
//   const [walletAddress, setWalletAddress] = useState('');
//   const [tokensAmount, setTokensAmount] = useState(0);
//   const [loading, setLoading] = useState(false);

//   // Token configuration
//   const TOKEN_PRICE_USD = 0.015;
//   const TOKEN_SYMBOL = 'UNITY';
//   const API_URL = 'http://localhost:3001';

//   // Auto-populate wallet address when connected
//   useEffect(() => {
//     if (publicKey && connected) {
//       setWalletAddress(publicKey.toString());
//       console.log('Wallet connected:', publicKey.toString());
//     } else {
//       console.log('Wallet not connected. connected:', connected, 'publicKey:', publicKey);
//     }
//   }, [publicKey, connected]);

//   // Calculate tokens based on amount
//   useEffect(() => {
//     const tokens = Math.floor(amount / TOKEN_PRICE_USD);
//     setTokensAmount(tokens);
//   }, [amount]);

//   // Validate Solana wallet
//   const isValidWallet = (address) => {
//     try {
//       new PublicKey(address);
//       return true;
//     } catch {
//       return false;
//     }
//   };

//   // Stripe Payment
//   const handleStripePayment = async (e) => {
//     e.preventDefault();

//     if (!connected) {
//       setStatus('error');
//       setMessage('Please connect your wallet first');
//       return;
//     }

//     if (!walletAddress) {
//       setStatus('error');
//       setMessage('Please connect your wallet');
//       return;
//     }

//     if (!isValidWallet(walletAddress)) {
//       setStatus('error');
//       setMessage('Invalid Solana wallet address');
//       return;
//     }

//     setLoading(true);

//     try {
//       // Create payment intent
//       const intentRes = await fetch(`${API_URL}/api/stripe/create-payment-intent`, {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({
//           amount: parseFloat(amount),
//           buyerWallet: walletAddress,
//         }),
//       });

//       const { clientSecret, paymentIntentId } = await intentRes.json();

//       if (!clientSecret) {
//         throw new Error('Failed to create payment intent');
//       }

//       // In production, use Stripe.js to confirm payment
//       // For now, simulate successful payment
//       await new Promise(resolve => setTimeout(resolve, 2000));

//       // Confirm payment (which also transfers tokens)
//       const confirmRes = await fetch(`${API_URL}/api/stripe/confirm-payment`, {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ paymentIntentId }),
//       });

//       const result = await confirmRes.json();

//       if (result.status === 'success') {
//         setStatus('success');
//         setMessage(
//           `Payment successful! ${result.tokensTransferred} ${TOKEN_SYMBOL} tokens sent to your wallet. Tx: ${result.solanaTransaction.substring(0, 20)}...`
//         );
//         setAmount('10');
//       } else {
//         throw new Error('Payment failed');
//       }
//     } catch (error) {
//       setStatus('error');
//       setMessage(error.message);
//     } finally {
//       setLoading(false);
//       setTimeout(() => {
//         setStatus(null);
//         setMessage('');
//       }, 5000);
//     }
//   };

//   // PayPal Payment
//   const handlePayPalPayment = async () => {
//     if (!connected) {
//       setStatus('error');
//       setMessage('Please connect your wallet first');
//       return;
//     }

//     if (!walletAddress) {
//       setStatus('error');
//       setMessage('Please connect your wallet');
//       return;
//     }

//     if (!isValidWallet(walletAddress)) {
//       setStatus('error');
//       setMessage('Invalid Solana wallet address');
//       return;
//     }

//     setLoading(true);

//     try {
//       // Create PayPal order
//       const orderRes = await fetch(`${API_URL}/api/paypal/create-order`, {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({
//           amount: parseFloat(amount),
//           buyerWallet: walletAddress,
//         }),
//       });

//       const { orderId } = await orderRes.json();

//       // Simulate PayPal flow
//       await new Promise(resolve => setTimeout(resolve, 2000));

//       // Capture order (which also transfers tokens)
//       const captureRes = await fetch(`${API_URL}/api/paypal/capture-order`, {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({
//           orderId,
//           amount: parseFloat(amount),
//           buyerWallet: walletAddress,
//         }),
//       });

//       const result = await captureRes.json();

//       if (result.status === 'completed') {
//         setStatus('success');
//         setMessage(
//           `Payment successful! ${result.tokensTransferred} ${TOKEN_SYMBOL} tokens sent to your wallet. Tx: ${result.solanaTransaction.substring(0, 20)}...`
//         );
//         setAmount('10');
//       } else {
//         throw new Error('Payment failed');
//       }
//     } catch (error) {
//       setStatus('error');
//       setMessage(error.message);
//     } finally {
//       setLoading(false);
//       setTimeout(() => {
//         setStatus(null);
//         setMessage('');
//       }, 5000);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-100 p-8">
//       <div className="max-w-md mx-auto">
//         <div className="text-center mb-8">
//           <h1 className="text-3xl font-bold text-gray-900 mb-2">Buy {TOKEN_SYMBOL}</h1>
//           <p className="text-gray-600">Exchange USD for {TOKEN_SYMBOL} tokens</p>
//           <p className="text-sm text-gray-500 mt-2">${TOKEN_PRICE_USD} per token</p>
//         </div>
//           <div
//             className={`mb-6 p-4 rounded-lg flex items-center gap-3 ${
//               status === 'success'
//                 ? 'bg-green-100 border border-green-300 text-green-800'
//                 : 'bg-red-100 border border-red-300 text-red-800'
//             }`}
//           >
//             {status === 'success' ? (
//               <CheckCircle className="w-6 h-6 flex-shrink-0" />
//             ) : (
//               <XCircle className="w-6 h-6 flex-shrink-0" />
//             )}
//             <span className="text-sm">{message}</span>
//           </div>
//         )}

//         <div className="bg-white rounded-xl shadow-lg overflow-hidden">
//           {/* Wallet Info */}
//           {connected && walletAddress ? (
//             <div className="p-6 border-b bg-gradient-to-r from-purple-50 to-blue-50">
//               <div className="flex items-center gap-2 mb-2">
//                 <Wallet className="w-4 h-4 text-purple-600" />
//                 <label className="block text-sm font-medium text-gray-700">
//                   Connected Wallet
//                 </label>
//               </div>
//               <p className="text-sm font-mono text-gray-900 bg-white p-2 rounded border border-gray-200">
//                 {walletAddress}
//               </p>
//             </div>
//           ) : (
//             <div className="p-6 border-b bg-yellow-50">
//               <p className="text-sm text-yellow-800">
//                 ⚠️ Please connect your wallet first using the wallet button in the header
//               </p>
//             </div>
//           )}
//           <div className="p-6 border-b space-y-4">
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-2">
//                 Amount (USD)
//               </label>
//               <input
//                 type="number"
//                 step="0.01"
//                 min="0"
//                 value={amount}
//                 onChange={(e) => setAmount(e.target.value)}
//                 className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
//               />
//             </div>

//             <div className="bg-purple-50 p-3 rounded-lg">
//               <p className="text-sm text-gray-600">You will receive:</p>
//               <p className="text-2xl font-bold text-purple-600">
//                 {tokensAmount.toLocaleString()} {TOKEN_SYMBOL}
//               </p>
//             </div>
//           </div>

//           {/* Payment Methods */}
//           <div className="flex border-b">
//             <button
//               onClick={() => setActiveTab('stripe')}
//               className={`flex-1 py-3 px-4 font-semibold flex items-center justify-center gap-2 transition-colors ${
//                 activeTab === 'stripe'
//                   ? 'bg-blue-600 text-white'
//                   : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
//               }`}
//             >
//               <CreditCard className="w-4 h-4" />
//               Stripe
//             </button>
//             <button
//               onClick={() => setActiveTab('paypal')}
//               className={`flex-1 py-3 px-4 font-semibold flex items-center justify-center gap-2 transition-colors ${
//                 activeTab === 'paypal'
//                   ? 'bg-yellow-500 text-gray-900'
//                   : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
//               }`}
//             >
//               💳 PayPal
//             </button>
//           </div>

//           {/* Payment Button */}
//           <div className="p-6">
//             <button
//               onClick={activeTab === 'stripe' ? handleStripePayment : handlePayPalPayment}
//               disabled={loading || !connected || !isAuthenticated}
//               className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 disabled:from-gray-400 disabled:to-gray-400 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2"
//             >
//               {loading ? (
//                 <>
//                   <Loader className="w-4 h-4 animate-spin" />
//                   Processing...
//                 </>
//               ) : (
//                 `Pay ${activeTab === 'stripe' ? 'with Stripe' : 'with PayPal'}`
//               )}
//             </button>
//           </div>
//         </div>

//         <div className="mt-4 text-xs text-gray-600 text-center">
//           <p>Tokens will be sent to your wallet immediately after payment confirmation</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BuyToken;