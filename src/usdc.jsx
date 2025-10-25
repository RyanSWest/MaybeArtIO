import { useState } from 'react';
import { ArrowDownUp, Wallet } from 'lucide-react';
import'./Login.css'

export default function TokenExchange() {
  const [newAmount, setNewAmount] = useState('');
  const [usdcAmount, setUsdcAmount] = useState('');
  const [exchangeRate] = useState(1.5); // 1 NEW = 1.5 USDC
  const [walletBalance] = useState({ NEW: 1000, USDC: 500 });
  const [showSuccess, setShowSuccess] = useState(false);

  const handleNewAmountChange = (value) => {
    setNewAmount(value);
    if (value && !isNaN(value)) {
      setUsdcAmount((parseFloat(value) * exchangeRate).toFixed(2));
    } else {
      setUsdcAmount('');
    }
  };

  const handleUsdcAmountChange = (value) => {
    setUsdcAmount(value);
    if (value && !isNaN(value)) {
      setNewAmount((parseFloat(value) / exchangeRate).toFixed(6));
    } else {
      setNewAmount('');
    }
  };

  const handleExchange = () => {
    if (!newAmount || parseFloat(newAmount) <= 0) {
      alert('Please enter a valid amount');
      return;
    }
    if (parseFloat(newAmount) > walletBalance.NEW) {
      alert('Insufficient NEW token balance');
      return;
    }
    
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
      setNewAmount('');
      setUsdcAmount('');
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 flex items-center justify-center p-4">
      <div className="login-form">
        {/* Wallet Balance Card */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 mb-6 border border-white/20">
          <div className="flex items-center gap-2 mb-4 text-white">
            <Wallet className="w-5 h-5" />
            <h2 className="text-lg font-semibold">Your Wallet</h2>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white/5 rounded-lg p-3">
              <p className="text-white/60 text-sm">NEW Token</p>
              <p className="text-white text-xl font-bold">{walletBalance.NEW.toLocaleString()}</p>
            </div>
            <div className="bg-white/5 rounded-lg p-3">
              <p className="text-white/60 text-sm">USDC</p>
              <p className="text-white text-xl font-bold">{walletBalance.USDC.toLocaleString()}</p>
            </div>
          </div>
        </div>

        {/* Exchange Card */}
        <div className="bg-white rounded-2xl shadow-2xl p-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-6">Token Exchange</h1>
          
          {/* From Token */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              From
            </label>
            <div className="bg-gray-50 rounded-xl p-4 border-2 border-gray-200 focus-within:border-blue-500 transition-colors">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-gray-500">You pay</span>
                <span className="text-sm text-gray-500">Balance: {walletBalance.NEW}</span>
              </div>
              <div className="flex items-center gap-3">
                <input
                  type="number"
                  value={newAmount}
                  onChange={(e) => handleNewAmountChange(e.target.value)}
                  placeholder="0.00"
                  className="flex-1 bg-transparent text-2xl font-semibold outline-none"
                />
                <div className="flex items-center gap-2 bg-blue-100 px-3 py-2 rounded-lg">
                  <div className="w-6 h-6 bg-blue-500 rounded-full"></div>
                  <span className="font-semibold text-gray-800">NEW</span>
                </div>
              </div>
            </div>
          </div>

          {/* Exchange Icon */}
          <div className="flex justify-center my-4">
            <div className="bg-blue-500 p-2 rounded-full">
              <ArrowDownUp className="w-5 h-5 text-white" />
            </div>
          </div>

          {/* To Token */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              To
            </label>
            <div className="bg-gray-50 rounded-xl p-4 border-2 border-gray-200 focus-within:border-green-500 transition-colors">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-gray-500">You receive</span>
                <span className="text-sm text-gray-500">Balance: {walletBalance.USDC}</span>
              </div>
              <div className="flex items-center gap-3">
                <input
                  type="number"
                  value={usdcAmount}
                  onChange={(e) => handleUsdcAmountChange(e.target.value)}
                  placeholder="0.00"
                  className="flex-1 bg-transparent text-2xl font-semibold outline-none"
                />
                <div className="flex items-center gap-2 bg-green-100 px-3 py-2 rounded-lg">
                  <div className="w-6 h-6 bg-green-500 rounded-full"></div>
                  <span className="font-semibold text-gray-800">USDC</span>
                </div>
              </div>
            </div>
          </div>

          {/* Exchange Rate Info */}
          <div className="bg-blue-50 rounded-lg p-3 mb-6">
            <div className="flex justify-between items-center text-sm">
              <span className="text-gray-600">Exchange Rate</span>
              <span className="font-semibold text-gray-800">1 NEW = {exchangeRate} USDC</span>
            </div>
          </div>

          {/* Exchange Button */}
          <button
            onClick={handleExchange}
            className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-4 rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-lg"
          >
            Exchange Now
          </button>

          {/* Success Message */}
          {showSuccess && (
            <div className="mt-4 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg">
              <p className="font-semibold">Exchange Successful!</p>
              <p className="text-sm">Your tokens have been exchanged.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}