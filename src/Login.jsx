import { useState,useEffect} from 'react';
import { Link, Navigate } from 'react-router-dom'
import './Login.css';
import { Form } from 'react-bootstrap';
import { useUser } from './util/UserContextProvider';

const Login = () => {
  const { login } = useUser();
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  useEffect(() => {
  setFormData({ email: '', password: '' });
}, []);

  // Fix: Initialize as object consistently
  const [message, setMessage] = useState({ text: '', type: '' })

  // Fix: Add http://
  // const API_BASE = 'https://squi-d-lite-production.up.railway.app'

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear message when user starts typing
    if (message.text) {
      setMessage({ text: '', type: '' });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.email.trim() || !formData.password) {
      setMessage({ text: 'Please fill in all required fields.', type: 'error' });
      return;
    }

    if (formData.password.length < 6) {
      setMessage({ text: 'Password must be at least 6 characters long.', type: 'error' });
      return;
    }

    setLoading(true); // Fix: uncomment this

    try {
      const result = await login(formData.email.trim(), formData.password);

      if (result.success) {
        setMessage({
          text: `Welcome ${result.user.name}!`,
          type: 'success'
        });
        // Fix: Reset correct fields
        setFormData({ email: '', password: '' });

        // Auto-redirect after success (optional)
        setTimeout(() => {
          alert('Login successful!');

        }, 2000);
        localStorage.setItem('user', JSON.stringify(result.user));

        // Navigate to upload page after successful login
        setTimeout(() => {
          window.location.href = '/upload'; // Use window.location for navigation
        }, 1000);
      } else {
        setMessage({
          text: result.error || 'Login failed. Please try again.',
          type: 'error'
        });
      }

    } catch (error) {
      console.error('Login error:', error);
      setMessage({
        text: 'Network error. Please check if the server is running.',
        type: 'error'
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-page">
      <div className="login-wrapper">
        {/* Header */}
        <div>
          <h1 className="login-title">Maybe Art</h1>
          <p className="login-subtitle">Login</p>
        </div>

        {/* Alert Message */}
        {message.text && (
          <div className="login-error">
            <span>{message.text}</span>
            <button
              onClick={() => setMessage({ text: '', type: '' })}
              className="text-gray-400 hover:text-gray-600 ml-4"
            >
              ✕
            </button>
          </div>
        )}

        {/* Fix: Change div to form */}
        <form onSubmit={handleSubmit} className="login-form">
          {/* Email Field */}
          <div className="input-group">
            <label>Email *</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Enter your email"
              required
              autoComplete='email'
            />
          </div>

          {/* Password Field */}
          <div className="input-group">
            <label>Password *</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="Enter password"
              minLength="6"
              required
              autoComplete='password'
            />
            <p className="text-gray-500 text-sm mt-2">
              Password must be at least 6 characters long.
            </p>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="cyberpunk-button"
          >
            {loading ? (
              <span className="flex items-center justify-center">
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                Logging in...
              </span>
            ) : (
              'Login'
            )}
          </button>
        </form>

        {/* Register Link */}
        <div className="login-footer">
          <p>
            Don't have an account? {' '}
            <Link to='/register'>
              <button className="register-link">
                Sign up here
              </button>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login