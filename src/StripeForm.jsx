import React, { useState, useEffect } from 'react';
import { CreditCard, Wallet, CheckCircle, XCircle, Loader } from 'lucide-react';
import { PublicKey } from '@solana/web3.js';
import { useWallet } from '@solana/wallet-adapter-react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const stripePromise = loadStripe('pk_test_YOUR_ACTUAL_KEY_HERE');

const StripePaymentForm = ({ amount, walletAddress, TOKEN_SYMBOL }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);
  const [message, setMessage] = useState('');
  const API_URL = 'http://localhost:3001';

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setLoading(true);

    try {
      // 1. Create payment intent on your backend
      const intentRes = await fetch(`${API_URL}/api/stripe/create-payment-intent`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          amount: parseFloat(amount),
          buyerWallet: walletAddress,
        }),
      });

      const { clientSecret, paymentIntentId } = await intentRes.json();

      if (!clientSecret) {
        throw new Error('Failed to create payment intent');
      }

      // 2. Confirm payment with Stripe
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
        // 3. Verify payment on backend (transfers tokens)
        const confirmRes = await fetch(`${API_URL}/api/stripe/confirm-payment`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ paymentIntentId }),
        });

        const result = await confirmRes.json();

        if (result.status === 'success') {
          setStatus('success');
          setMessage(
            `Payment successful! ${result.tokensTransferred} ${TOKEN_SYMBOL} tokens sent to your wallet!`
          );
          setTimeout(() => {
            setStatus(null);
            setMessage('');
          }, 5000);
        } else {
          throw new Error('Payment verification failed');
        }
      }
    } catch (error) {
      setStatus('error');
      setMessage(error.message);
      setTimeout(() => {
        setStatus(null);
        setMessage('');
      }, 5000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-4">
      {status && (
        <div
          className={`p-4 rounded-lg flex items-center gap-3 ${
            status === 'success'
              ? 'bg-green-100 border border-green-300 text-green-800'
              : 'bg-red-100 border border-red-300 text-red-800'
          }`}
        >
          {status === 'success' ? (
            <CheckCircle className="w-6 h-6 flex-shrink-0" />
          ) : (
            <XCircle className="w-6 h-6 flex-shrink-0" />
          )}
          <span className="text-sm">{message}</span>
        </div>
      )}

      <div className="border border-gray-300 rounded-lg p-4 bg-white">
        <CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />
      </div>

      <button
        onClick={handleSubmit}
        disabled={!stripe || loading}
        className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center gap-2"
      >
        {loading ? (
          <>
            <Loader className="w-4 h-4 animate-spin" />
            Processing...
          </>
        ) : (
          `Pay $${amount} with Stripe`
        )}
      </button>
    </div>
  );
};

const BuyToken = () => {
  const { publicKey, connected } = useWallet();
  const [status, setStatus] = useState(null);
  const [message, setMessage] = useState('');
  const [amount, setAmount] = useState('10');
  const [walletAddress, setWalletAddress] = useState('');
  const [tokensAmount, setTokensAmount] = useState(0);

  // Token configuration
  const TOKEN_PRICE_USD = 0.015;
  const TOKEN_SYMBOL = 'UNITY';

  // Auto-populate wallet address when connected
  useEffect(() => {
    if (publicKey && connected) {
      setWalletAddress(publicKey.toString());
    }
  }, [publicKey, connected]);

  // Calculate tokens based on amount
  useEffect(() => {
    const tokens = Math.floor(amount / TOKEN_PRICE_USD);
    setTokensAmount(tokens);
  }, [amount]);

  // Validate Solana wallet
  const isValidWallet = (address) => {
    try {
      new PublicKey(address);
      return true;
    } catch {
      return false;
    }
  };

  const canProceed = connected && walletAddress && isValidWallet(walletAddress);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-100 p-8">
      <div className="max-w-md mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Buy {TOKEN_SYMBOL}</h1>
          <p className="text-gray-600">Exchange USD for {TOKEN_SYMBOL} tokens</p>
          <p className="text-sm text-gray-500 mt-2">${TOKEN_PRICE_USD} per token</p>
        </div>

        {!connected && (
          <div className="mb-6 p-4 bg-blue-100 border border-blue-300 rounded-lg text-blue-800 text-sm">
            ℹ️ Please <span className="font-semibold">connect your Solana wallet</span> to get started
          </div>
        )}

        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          {/* Wallet Info */}
          {connected && walletAddress ? (
            <div className="p-6 border-b bg-gradient-to-r from-purple-50 to-blue-50">
              <div className="flex items-center gap-2 mb-2">
                <Wallet className="w-4 h-4 text-purple-600" />
                <label className="block text-sm font-medium text-gray-700">
                  Connected Wallet
                </label>
              </div>
              <p className="text-sm font-mono text-gray-900 bg-white p-2 rounded border border-gray-200">
                {walletAddress.slice(0, 10)}...{walletAddress.slice(-10)}
              </p>
            </div>
          ) : (
            <div className="p-6 border-b bg-yellow-50">
              <p className="text-sm text-yellow-800">
                ⚠️ Please connect your wallet first
              </p>
            </div>
          )}

          {/* Amount & Tokens */}
          {canProceed && (
            <div className="p-6 border-b space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Amount (USD)
                </label>
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
                <p className="text-2xl font-bold text-purple-600">
                  {tokensAmount.toLocaleString()} {TOKEN_SYMBOL}
                </p>
              </div>
            </div>
          )}

          {/* Stripe Form */}
          {canProceed ? (
            <div className="p-6">
              <Elements stripe={stripePromise}>
                <StripePaymentForm amount={amount} walletAddress={walletAddress} TOKEN_SYMBOL={TOKEN_SYMBOL} />
              </Elements>
            </div>
          ) : (
            <div className="p-6 bg-gray-50">
              <p className="text-sm text-gray-600 text-center">
                Please connect your wallet to proceed
              </p>
            </div>
          )}
        </div>

        <div className="mt-4 text-xs text-gray-600 text-center">
          <p>✅ Tokens sent immediately after payment confirmation</p>
          <p className="text-gray-500 mt-1">Test card: 4242 4242 4242 4242 | Any future date | Any CVC</p>
        </div>
      </div>
    </div>
  );
};

export default BuyToken;