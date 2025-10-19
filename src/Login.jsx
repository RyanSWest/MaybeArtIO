// Login.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from './util/UserContextProvider';
import { Loader, AlertCircle } from 'lucide-react';

export default function Login() {
  const navigate = useNavigate();
  const { login, loading, error, setError } = useUser();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
 


    const formKey = Math.random();

  const handleSubmit = async (e) => {
  e.preventDefault();
  setError(null);

  const result = await login(email, password);
  if (result.success) {
    // Clear fields BEFORE navigating
    setEmail('');
    setPassword('');
    // Small delay to ensure state updates
    setTimeout(() => navigate('/home'), 100);
  }
};

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4" 
     style={{flexGrow:'1'}}
    ><div>  




    </div>
      <div className="bg-white rounded-xl shadow-lg p-8 max-w-md w-full">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Login</h1>
        <p className="text-gray-600 mb-6">Sign in to your account</p>

        {error && (
          <div className="mb-4 p-3 bg-red-100 border border-red-300 rounded-lg flex items-center gap-2 text-red-800 text-sm">
            <AlertCircle className="w-4 h-4" />
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} key ={formKey} autoComplete='off'className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              required
              autoComplete="off"

              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
                autoComplete="off"

              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="cyberpunk-button"
          >
            {loading ? (
              <>
                <Loader className="w-4 h-4 animate-spin" />
                Logging in...
              </>
            ) : (
              'Login'
            )}
          </button>
        </form>

        <p className="text-center text-sm text-gray-600 mt-4">
          Don't have an account?{' '}
          <button
            onClick={() => navigate('/register')}
            className="text-blue-600 hover:underline font-semibold"
          >
            Register here
          </button>
        </p>
      </div>
    </div>
  );
}
