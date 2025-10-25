import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from './util/UserContextProvider';
import { Loader, AlertCircle, CheckCircle } from 'lucide-react';
import './Login.css'; // reuse same cyberpunk CSS

export default function Register() {
  const navigate = useNavigate();
  const { register, loading, error, setError } = useUser();
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters');
      return;
    }

    const result = await register(email, password, name);
    if (result.success) {
      setSuccess(true);
      setTimeout(() => navigate('/home'), 1500);
    }
  };

  return (
    <div className="login-page">
      <div className="login-wrapper">
        <h1 className="login-title">Create Account</h1>
        <p className="login-subtitle">Sign up to get started</p>

        {success && (
          <div className="login-success">
            <CheckCircle className="icon" />
            Account created successfully! Redirecting...
          </div>
        )}

        {error && (
          <div className="login-error">
            <AlertCircle className="icon" />
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="login-form">
          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              required
              autoComplete="new-email"
            />
          </div>

          <div className="input-group">
            <label>Full Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your full name"
              required
              autoComplete="off"
            />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
              autoComplete="new-password"
            />
          </div>

          <div className="input-group">
            <label>Confirm Password</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="••••••••"
              required
              autoComplete="new-password"
            />
          </div>

          <button type="submit" className="cyberpunk-button" disabled={loading}>
            {loading ? (
              <>
                <Loader className="w-4 h-4 animate-spin" />
                Creating account...
              </>
            ) : (
              'Register'
            )}
          </button>
        </form>

        <p className="login-footer">
          Already have an account?{' '}
          <button onClick={() => navigate('/login')} className="register-link">
            Login here
          </button>
        </p>
      </div>
    </div>
  );
}