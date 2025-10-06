import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    bio: ''
  });
  
  const Nav =useNavigate()
  const url = 'https://daring-vitality-production-a0f4.up.railway.app/'
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ text: '', type: '' });

  // API Base URL - change this to your Railway URL
  const API_BASE = 'https://daring-vitality-production-a0f4.up.railway.app/';
      // const API_BASE='https://squi-d-lite-production.up.railway.app'

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
    if (!formData.name.trim() || !formData.email.trim() || !formData.password) {
      setMessage({ text: 'Please fill in all required fields.', type: 'error' });
      return;
    }

    if (formData.password.length < 6) {
      setMessage({ text: 'Password must be at least 6 characters long.', type: 'error' });
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(`${API_BASE}api/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          password: formData.password,
          bio: formData.bio.trim()
        })
      });

      const data = await response.json();

      if (response.ok) {
        setMessage({ 
          text: `Welcome ${data.user.name}! Your account has been created successfully.`, 
          type: 'success' 
        });
        setFormData({ name: '', email: '', password: '', bio: '' });
        
        // Auto-redirect after success (optional)
        setTimeout(() => {
          alert('Account created! You can now start uploading your art.');
          Nav('/upload')
        }, 2000);
      } else {
        setMessage({ 
          text: data.error || 'Registration failed. Please try again.', 
          type: 'error' 
        });
      }

    } catch (error) {
      console.error('Registration error:', error);
      setMessage({ 
        text: 'Network error. Please check if the server is running.', 
        type: 'error' 
      });
    } finally {
      setLoading(false);
      
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-5" 
         style={{ 
           background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
         }}>
      <div className="w-full max-w-md">
        <div className="bg-white rounded-3xl shadow-2xl p-8">
          
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-3" 
                style={{ 
                  background: 'linear-gradient(135deg, #667eea, #764ba2)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}>
              🎨 Join Our Community
            </h1>
            <p className="text-gray-600 text-lg">
              Create your artist account and start sharing your art with the world
            </p>
          </div>

          {/* Alert Message */}
          {message.text && (
            <div className={`p-4 mb-6 rounded-xl ${
              message.type === 'success' 
                ? 'bg-green-50 text-green-800 border border-green-200' 
                : 'bg-red-50 text-red-800 border border-red-200'
            }`}>
              <div className="flex items-center justify-between">
                <span>{message.text}</span>
                <button 
                  onClick={() => setMessage({ text: '', type: '' })}
                  className="text-gray-400 hover:text-gray-600 ml-4"
                >
                  ✕
                </button>
              </div>
            </div>
          )}

          {/* Registration Form */}
          <div onSubmit={handleSubmit}>
            
            {/* Name Field */}
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-semibold mb-2">
                Full Name *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Enter your full name"
                required
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-all duration-300 text-lg"
              />
            </div>

            {/* Email Field */}
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-semibold mb-2">
                Email Address *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter your email address"
                required
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-all duration-300 text-lg"
              />
            </div>

            {/* Password Field */}
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-semibold mb-2">
                Password *
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="Create a strong password"
                minLength="6"
                required
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-all duration-300 text-lg"
              />
              <p className="text-gray-500 text-sm mt-2">
                Password must be at least 6 characters long.
              </p>
            </div>

            {/* Bio Field */}
            <div className="mb-8">
              <label className="block text-gray-700 text-sm font-semibold mb-2">
                Artist Bio (Optional)
              </label>
              <textarea
                rows="3"
                name="bio"
                value={formData.bio}
                onChange={handleInputChange}
                placeholder="Tell us about yourself as an artist..."
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-all duration-300 text-lg resize-vertical"
              />
            </div>

            {/* Submit Button */}
            <button 
              type="submit" 
              disabled={loading}
              onClick={handleSubmit}
              className="w-full py-4 px-6 rounded-xl font-semibold text-white text-lg uppercase tracking-wider transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed hover:transform hover:-translate-y-1 hover:shadow-lg"
              style={{ 
                background: 'linear-gradient(135deg, #667eea, #764ba2)',
              }}
            >
              {loading ? (
                <span className="flex items-center justify-center">
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                  Creating Account...
                </span>
              ) : (
                'Create Account'
              )}
            </button>
          </div>

          {/* Login Link */}
          <div className="text-center mt-6">
            <p className="text-gray-600">
              Already have an account? {' '}
              <button 
                onClick={() => alert('Login page coming soon!')}
                className="text-blue-600 font-semibold hover:underline"
              >
                Sign in here
              </button>
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;