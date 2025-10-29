import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { X } from 'lucide-react';
import { loginStart, loginSuccess, loginFailure, signup, login } from '../store/slices/authSlice';

const AuthModal = ({ isOpen, onClose, mode = 'signin' }) => {
  const [formMode, setFormMode] = useState(mode);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    fullname: '',
    confirmPassword: ''
  });
  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    // console.log("->"+name, value);
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    if (formMode === 'signup') {
      if (!formData.name) {
        newErrors.name = 'Name is required';
      }
      if (!formData.confirmPassword) {
        newErrors.confirmPassword = 'Please confirm your password';
      } else if (formData.password !== formData.confirmPassword) {
        newErrors.confirmPassword = 'Passwords do not match';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    dispatch(loginStart());

    try {
      // await new Promise(resolve => setTimeout(resolve, 1000));
      
      // const userData = {
      //   id: Math.random().toString(36).substr(2, 9),
      //   name: formData.name || formData.email.split('@')[0],
      //   email: formData.email
      // };

      // dispatch(loginSuccess(userData));
      // onClose();
      
      // setFormData({
      //   email: '',
      //   password: '',
      //   name: '',
      //   confirmPassword: ''
      // });

      if(formMode === "signin")
      {
        console.log("pk")
       dispatch(login({email: formData.email, password: formData.password}));
        // console.log("val", val);
        // dispatch(loginSuccess(response.data));
      }
      else
      if(formMode === "signup")
      {
        console.log("kk", formData.email, formData.password, formData.name);
        dispatch(signup({fullname: formData.name, email: formData.email, password: formData.password}));
      }

      setFormData({
        email: '',
        password: '',
        name: '',
        confirmPassword: ''
      });
      onClose();
      
    } catch (error) {
      dispatch(loginFailure('Authentication failed. Please try again.'));
    }
  };

  const switchMode = () => {
    setFormMode(formMode === 'signin' ? 'signup' : 'signin');
    setErrors({});
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <h2 className="modal-title">
            {formMode === 'signin' ? 'Sign In' : 'Sign Up'}
          </h2>
          <button 
            onClick={onClose}
            className="btn-icon absolute top-4 right-4"
          >
            <X size={20} />
          </button>
        </div>

        <div className="modal-body">
          <form onSubmit={handleSubmit} className="space-y-4">
            {formMode === 'signup' && (
              <div className="form-group">
                <label htmlFor="name" className="form-label">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`form-input ${errors.name ? 'border-red-500' : ''}`}
                  placeholder="Enter your full name"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                )}
              </div>
            )}

            <div className="form-group">
              <label htmlFor="email" className="form-label">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`form-input ${errors.email ? 'border-red-500' : ''}`}
                placeholder="Enter your email"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className={`form-input ${errors.password ? 'border-red-500' : ''}`}
                placeholder="Enter your password"
              />
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">{errors.password}</p>
              )}
            </div>

            {formMode === 'signup' && (
              <div className="form-group">
                <label htmlFor="confirmPassword" className="form-label">
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className={`form-input ${errors.confirmPassword ? 'border-red-500' : ''}`}
                  placeholder="Confirm your password"
                />
                {errors.confirmPassword && (
                  <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>
                )}
              </div>
            )}

            <button
              type="submit"
              className="btn btn-primary w-full"
            >
              {formMode === 'signin' ? 'Sign In' : 'Create Account'}
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-gray-600 dark:text-gray-400">
              {formMode === 'signin' 
                ? "Don't have an account? " 
                : "Already have an account? "
              }
              <button
                onClick={switchMode}
                className="text-blue-600 hover:text-blue-700 font-medium"
              >
                {formMode === 'signin' ? 'Sign Up' : 'Sign In'}
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;
