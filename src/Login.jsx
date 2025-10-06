import{useState} from 'react';
import{Link, useNavigate} from 'react-router-dom'
 import './index.css';
 import {Form} from 'react-bootstrap';
 import {createContext}  from 'react';
 import UserContext from './util/userContext';
const Login =()=> {
         const [loading, setLoading] = useState(false);
        const navigate =useNavigate()
          const user   = createContext(UserContext);
          console.log('YO MUTHA',user)
      const [formData, setFormData] = useState({
        email: '',
        password: '',
      });

    // Fix: Initialize as object consistently
    const [message,setMessage]= useState({ text: '', type: '' })

    // Fix: Add http://
    const API_BASE='https://daring-vitality-production-a0f4.up.railway.app'

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
    if (!formData.email.trim()  || !formData.password) {
      setMessage({ text: 'Please fill in all required fields.', type: 'error' });
      return;
    }

    if (formData.password.length < 6) {
      setMessage({ text: 'Password must be at least 6 characters long.', type: 'error' });
      return;
    }

    setLoading(true); // Fix: uncomment this

    try {
      const response = await fetch(`${API_BASE}/api/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: formData.email.trim(),
          password: formData.password,
        })
      });

      const data = await response.json();

      if (response.ok) {
        setMessage({ 
          text: `Welcome ${data.user.name}!`, 
          type: 'success' 
        });
        // Fix: Reset correct fields
        setFormData({ email: '', password: '' });
        
        // Auto-redirect after success (optional)
        setTimeout(() => {
          alert('Login successful!');
        }, 2000);
        localStorage.setItem('user',  (data.user));

             // Navigate to upload page after successful login
        setTimeout(() => {
          navigate('/upload'); // This replaces history.push('/upload')
        }, 1000);
      } else {
        setMessage({ 
          text: data.error || 'Login failed. Please try again.', 
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

  const V =localStorage.getItem('user')
  console.log("YOU FUCKA", V)

    return (
      
<div className="min-h-screen flex items-center justify-center p-5" 
         style={{ 
           background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
           
         }}>

          
       <div className="w-full max-w-md">
        <div className="bg-white rounded-3xl shadow-2xl p-8">
          
          {/* Header */}
          <div className="bg">
            <h1 className="text-4xl font-bold mb-3" 
                style={{ 
                  background: 'linear-gradient(135deg, #667eea, #764ba2)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}>
              unity
            </h1>
            <p className="text-gray-600 text-lg">
              Login
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

          {/* Fix: Change div to form */}
          <form onSubmit={handleSubmit}>
            
            {/* Name Field */}
          <div className="mb-6">
  <label className="block text-gray-700 text-sm font-semibold mb-2">
    Email *
  </label>
  <input
    type="email"
    name="email"  // Changed from "name" to "email"
    value={formData.email}  // Changed from formData.name to formData.email
    onChange={handleInputChange}
    placeholder="Enter your email"
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
                placeholder="Enter password"
                minLength="6"
                required
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-all duration-300 text-lg"
              />
              <p className="text-gray-500 text-sm mt-2">
                Password must be at least 6 characters long.
              </p>
            </div>

            {/* Submit Button */}
            <button 
              type="submit" 
              disabled={loading}
              className="w-full py-4 px-6 rounded-xl font-semibold text-white text-lg uppercase tracking-wider transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed hover:transform hover:-translate-y-1 hover:shadow-lg"
              style={{ 
                background: 'linear-gradient(135deg, #667eea, #764ba2)',
              }}
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
          <div className="text-center mt-6">
            <p className="text-gray-600">
              Don't have an account? {' '}
              <Link to ='/register'> 
                <button 
                onClick={() => alert('Register page coming soon!')}
                className="text-blue-600 font-semibold hover:underline"
              >
                Sign up here
              </button>
              
              
              </Link>
              
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};
export default Login