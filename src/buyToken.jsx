import React, { useState, useEffect } from 'react';
import { CreditCard, Wallet, CheckCircle, XCircle, Loader } from 'lucide-react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import WalletButton from './WalletButton';

const BuyToken = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [activeTab, setActiveTab] = useState('stripe');
  const [status, setStatus] = useState(null);
  const [message, setMessage] = useState('');
  const [amount, setAmount] = useState('10');
  const [tokensAmount, setTokensAmount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [walletAddress, setWalletAddress] = useState('');

  const TOKEN_PRICE_USD = 0.015;
  const TOKEN_SYMBOL = 'MaybeArt';
  const API_URL = 'https://squi-d-lite-production.up.railway.app'
  
//  
  // Listen for wallet connect event

  const [tokenBalance, setTokenBalance] = useState(null);

const getTokenBalance = async (wallet) => {
  try {
    const response = await fetch('https://api.mainnet.solana.com', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        jsonrpc: '2.0',
        id: 1,
        method: 'getTokenAccountsByOwner',
        params: [
          wallet,
          { mint: 'E5fqgV1UpossDXRND77XyzeJdg2Q8dkopT3poa1pHrS6'
            
            // '4zMMC9srt5Ri5X14GAgXhaHii3GnPAEERYPJgZJDncDU'
          
          
          },
          { encoding: 'jsonParsed' }
        ]
      })
    });
    
    const data = await response.json();
    if (data.result.value.length > 0) {
      const balance = data.result.value[0].account.data.parsed.info.tokenAmount.uiAmount;
      setTokenBalance(balance);
    }
  } catch (error) {
    console.error('Error fetching balance:', error);
  }
};
  useEffect(() => {
    const handleConnect = () => {
      if (window.solana && window.solana.publicKey) {
        setWalletAddress(window.solana.publicKey.toString());
      }
    };

    if (window.solana) {
      window.solana.on('connect', handleConnect);
      if (window.solana.isConnected && window.solana.publicKey) {
        setWalletAddress(window.solana.publicKey.toString());
      }
      return () => {
        if (window.solana.off) {
          window.solana.off('connect', handleConnect);
        }
      };
    }
  }, []);

  useEffect(() => {
    const tokens = Math.floor(amount / TOKEN_PRICE_USD);
    setTokensAmount(tokens);
  }, [amount]);
  

  const handleStripePayment = async (e) => {
    e.preventDefault();

    if (!walletAddress) {
      setStatus('error');
      setMessage('Connect wallet first');
      setTimeout(() => setStatus(null), 3000);
      return;
    }

    if (!stripe || !elements) {
      setStatus('error');
      setMessage('Stripe not loaded');
      return;
    }

    setLoading(true);

    try {
      const intentRes = await fetch(`${API_URL}/api/stripe/create-payment-intent`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          amount: parseFloat(amount),
          buyerWallet: walletAddress,
        }),
      });

      const { clientSecret } = await intentRes.json();

      const { paymentIntent, error } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
          billing_details: { name: 'Customer' }
        }
      });

      if (error) {
        throw new Error(error.message);
      }

      if (paymentIntent.status === 'succeeded') {
        const confirmRes = await fetch(`${API_URL}/api/stripe/confirm-payment`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ paymentIntentId: paymentIntent.id }),
        });

const result = await confirmRes.json();
console.log('Full confirm response:', JSON.stringify(result, null, 2));
        if (result.status === 'succeeded') {
          setStatus('success');
          setMessage(`Success! ${result.amount} tokens sent!`);
          setAmount('10');
          // getTokenBalance()
        } else {
          throw new Error(result.error || 'Payment verification failed');
        }
      }
    } catch (error) {
      setStatus('error');
      setMessage(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handlePayPalPayment = async () => {
    if (!walletAddress) {
      setStatus('error');
      setMessage('Connect wallet first');
      setTimeout(() => setStatus(null), 3000);
      return;
    }

    setLoading(true);

    try {
      const orderRes = await fetch(`${API_URL}/api/paypal/create-order`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          amount: parseFloat(amount),
          buyerWallet: walletAddress,
        }),
      });
      

      console.log("ADRESS", walletAddress)
      const { orderId } = await orderRes.json();
          
      await new Promise(resolve => setTimeout(resolve, 2000));
       console.log("CLICK LICK CLIK CLICK !!!!!!!!!!!!!!!!")
      const captureRes = await fetch(`${API_URL}/api/paypal/capture-order`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          orderId,
          amount: parseFloat(amount),
          buyerWallet: walletAddress,
        }),
      });

   const result = await confirmRes.json();
console.log('Confirm response:', result);

if (result.status === 'succeeded') {
  setStatus('success');
  setMessage(`Success! ${result.tokensTransferred} tokens sent!`);
  setAmount('10');
} else {
  console.log('Error - result status:', result.status);
  throw new Error(result.error || 'Payment failed');
}
    } catch (error) {
      setStatus('error');
      setMessage(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-100 p-8">
      <div className="max-w-md mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Buy {TOKEN_SYMBOL}</h1>
          <p className="text-gray-600">Exchange USD for {TOKEN_SYMBOL} tokens</p>
          <p className="text-sm text-gray-500 mt-2">${TOKEN_PRICE_USD} per token</p>
          <WalletButton/>
        </div>

        {status && (
          <div className={`mb-6 p-4 rounded-lg flex items-center gap-3 ${
            status === 'success'
              ? 'bg-green-100 border border-green-300 text-green-800'
              : 'bg-red-100 border border-red-300 text-red-800'
          }`}>
            {status === 'success' ? (
              <CheckCircle className="w-6 h-6" />
            ) : (
              <XCircle className="w-6 h-6" />
            )}
            <span className="text-sm">{message}</span>
          </div>
        )}

        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="p-6 border-b bg-purple-50">
            <p className="text-sm font-semibold text-gray-900">
              Wallet: {walletAddress ? '✓ ' + walletAddress.slice(0, 15) + '...' : '✗ Not Connected'}
             </p>
          </div>
          {tokenBalance && (
  <div className="bg-green-50 p-3 rounded-lg mt-4">
    <p className="text-sm text-gray-600">Your new balance:</p>
    <p className="text-xl font-bold text-green-600">{tokenBalance} {TOKEN_SYMBOL}</p>
  </div>
)}

          <div className="p-6 border-b space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Amount (USD)</label>
              <input
                type="number"
                step="0.01"
                min="0"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <div className="bg-purple-50 p-3 rounded-lg">
              <p className="text-sm text-gray-600">You will receive:</p>
              <p className="text-2xl font-bold text-purple-600">{tokensAmount.toLocaleString()} {TOKEN_SYMBOL}</p>
            </div>
          </div>

          <div className="flex border-b">
            <button
              onClick={() => setActiveTab('stripe')}
              className={`flex-1 py-3 px-4 font-semibold text-white ${
                activeTab === 'stripe'
                  ? 'bg-blue-600'
                  : 'bg-blue-400 hover:bg-blue-500'
              }`}
            >
              Stripe
            </button>
            <button
              onClick={() => setActiveTab('paypal')}
              className={`flex-1 py-3 px-4 font-semibold text-black ${
                activeTab === 'paypal'
                  ? 'bg-yellow-500'
                  : 'bg-yellow-400 hover:bg-yellow-500'
              }`}
            >
              PayPal
            </button>
          </div>

          <div className="p-6">
            {activeTab === 'stripe' && (
              <div className="space-y-4">
                <div className="border border-gray-300 rounded-lg p-4 bg-white">
                  <CardElement
                    options={{
                      style: {
                        base: {
                          fontSize: '16px',
                          color: '#424770',
                          '::placeholder': { color: '#aab7c4' },
                        },
                        invalid: { color: '#9e2146' },
                      },
                    }}
                  />
                </div>
                <button
                  onClick={handleStripePayment}
                  disabled={loading || !walletAddress}
                  className="w-full bg-blue-600 text-black py-3 rounded-lg font-semibold hover:bg-blue-700 disabled:bg-gray-400"
                >


                    PUSH!!!!
                  {loading ? 'Processing...' : `Pay $${amount*.015}`}
               
                </button>
              </div>
            )}

            {activeTab === 'paypal' && (
              <button
                onClick={handlePayPalPayment}
                disabled={loading || !walletAddress}
                className="w-full bg-yellow-500 text-black py-3 rounded-lg font-semibold hover:bg-yellow-600 disabled:bg-gray-400"
              >
                {loading ? 'Processing...' : `Pay $${amount} with PayPal`}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyToken;