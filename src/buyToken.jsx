import React, { useState } from 'react';
import { CreditCard, DollarSign, CheckCircle, XCircle } from 'lucide-react';



// const {units, setUnits} =useState(0);

// Mock payment processing functions (replace with actual API calls)
const processStripePayment = async (amount, cardDetails) => {
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 2000));
  
  // Simulate 90% success rate
  if (Math.random() > 0.1) {
    return { success: true, transactionId: 'stripe_' + Date.now() };
  } else {
    throw new Error('Payment declined');
  }
};

const processPayPalPayment = async (amount) => {
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 2000));
  
  // Simulate 95% success rate
  if (Math.random() > 0.05) {
    return { success: true, transactionId: 'paypal_' + Date.now() };
  } else {
    throw new Error('PayPal payment failed');
  }
};

function StripeForm({ onSuccess, onError }) {
  const [loading, setLoading] = useState(false);
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvc, setCvc] = useState('');
  const [amount, setAmount] = useState('10.00');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const result = await processStripePayment(amount, {
        cardNumber,
        expiry,
        cvc
      });
      onSuccess(result);
    } catch (error) {
      onError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Amount (USD)
        </label>
        <input
          type="number"
          step="0.01"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Card Number
        </label>
        <input
          type="text"
          placeholder="4242 4242 4242 4242"
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Expiry (MM/YY)
          </label>
          <input
            type="text"
            placeholder="12/25"
            value={expiry}
            onChange={(e) => setExpiry(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            CVC
          </label>
          <input
            type="text"
            placeholder="123"
            value={cvc}
            onChange={(e) => setCvc(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
      >
        {loading ? 'Processing...' : 'Pay with Stripe'}
      </button>
    </form>
  );
}

function PayPalForm({ onSuccess, onError }) {
  const [loading, setLoading] = useState(false);
  const [amount, setAmount] = useState('10.00');

  const handlePayPalClick = async () => {
    setLoading(true);

    try {
      const result = await processPayPalPayment(amount);
      onSuccess(result);
    } catch (error) {
      onError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Amount (USD)
        </label>
        <input
          type="number"
          step="0.01"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
          required
        />
      </div>

      <button
        onClick={handlePayPalClick}
        disabled={loading}
        className="w-full bg-yellow-500 text-gray-900 py-3 rounded-lg font-semibold hover:bg-yellow-600 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
      >
        {loading ? 'Processing...' : 'Pay with PayPal'}
      </button>
    </div>
  );
}

export default function PaymentIntegration() {
  const [activeTab, setActiveTab] = useState('stripe');
  const [status, setStatus] = useState(null);
  const [message, setMessage] = useState('');

  const handleSuccess = (result) => {
    setStatus('success');
    setMessage(`Payment successful! Transaction ID: ${result.transactionId}`);
    setTimeout(() => {
      setStatus(null);
      setMessage('');
    }, 5000);
  };

  const handleError = (error) => {
    setStatus('error');
    setMessage(error);
    setTimeout(() => {
      setStatus(null);
      setMessage('');
    }, 5000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Payment Integration Demo
          </h1>
          <p className="text-gray-600">
            Complete payment integration with Stripe and PayPal
          </p>
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
            <span className="font-medium">{message}</span>
          </div>
        )}

        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="flex border-b">
            <button
              onClick={() => setActiveTab('stripe')}
              className={`flex-1 py-4 px-6 font-semibold flex items-center justify-center gap-2 transition-colors ${
                activeTab === 'stripe'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
              }`}
            >
              <CreditCard className="w-5 h-5" />
              Stripe
            </button>
            <button
              onClick={() => setActiveTab('paypal')}
              className={`flex-1 py-4 px-6 font-semibold flex items-center justify-center gap-2 transition-colors ${
                activeTab === 'paypal'
                  ? 'bg-yellow-500 text-gray-900'
                  : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
              }`}
            >
              <DollarSign className="w-5 h-5" />
              PayPal
            </button>
          </div>

          <div className="p-6">
            {activeTab === 'stripe' ? (
              <StripeForm onSuccess={handleSuccess} onError={handleError} />
            ) : (
              <PayPalForm onSuccess={handleSuccess} onError={handleError} />
            )}
          </div>
        </div>

        <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
          <h3 className="font-semibold text-blue-900 mb-2">Demo Mode</h3>
          <p className="text-sm text-blue-800">
            This is a demonstration with simulated payments. In production, you'll need:
          </p>
          <ul className="text-sm text-blue-800 mt-2 space-y-1 list-disc list-inside">
            <li>Backend API endpoints for secure payment processing</li>
            <li>Real API keys from Stripe and PayPal developer dashboards</li>
            <li>Proper error handling and validation</li>
            <li>PCI compliance for handling card data</li>
          </ul>
        </div>
      </div>
    </div>
  );
}