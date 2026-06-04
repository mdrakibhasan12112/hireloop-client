'use client';

import React, { useState } from 'react';
import { Link, Button } from '@heroui/react';
import { authClient } from '@/lib/auth-client'; // ক্লায়েন্ট ইমপোর্ট
import {
  Eye,
  EyeSlash,
  At,
  ShieldCheck,
  ArrowLeft,
  TriangleExclamation,
  CircleCheck,
} from '@gravity-ui/icons';

export default function SignInPage() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleInputChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setIsLoading(true);

    // ফ্রন্টএন্ড ভ্যালিডেশন
    if (!formData.email || !formData.password) {
      setError('সবগুলো ঘর পূরণ করা বাধ্যতামূলক।');
      setIsLoading(false);
      return;
    }

    try {
      // --- Better Auth সাইনইন ইন্টিগ্রেশন ---
      const { data, error: authError } = await authClient.signIn.email({
        email: formData.email,
        password: formData.password,
      });

      if (authError) {
        setError(
          authError.message ||
            'লগইন করতে সমস্যা হয়েছে। ইমেইল বা পাসওয়ার্ড চেক করুন।',
        );
        return;
      }

      setSuccess('সফলভাবে লগইন হয়েছে! রিডাইরেক্ট করা হচ্ছে...');
      setFormData({ email: '', password: '' });

      // সফল হলে ড্যাশবোর্ড বা হোম পেজে রিডাইরেক্ট
      setTimeout(() => {
        window.location.href = '/';
      }, 2000);
    } catch (err) {
      setError('সার্ভারে সমস্যা হয়েছে। দয়া করে কিছুক্ষণ পর চেষ্টা করুন।');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col justify-center items-center px-4 relative overflow-hidden">
      {/* ব্যাকগ্রাউন্ড গ্লো ইফেক্ট */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-indigo-600/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 w-full max-w-md">
        {/* পেছনে যাওয়ার লিঙ্ক */}
        <div className="mb-6">
          <Link
            href="/"
            className="text-neutral-500 hover:text-white text-xs font-medium flex items-center gap-2 transition-colors group"
          >
            <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform" />
            Back to Home
          </Link>
        </div>

        {/* ফর্ম কার্ড */}
        <div className="bg-[#0c0c0e]/90 border border-neutral-800 rounded-2xl p-8 shadow-2xl shadow-black/80 backdrop-blur-xl">
          <div className="flex flex-col gap-1.5 mb-8">
            <h1 className="text-2xl font-bold tracking-tight text-white">
              Welcome back
            </h1>
            <p className="text-neutral-500 text-sm">
              Enter your details to access your Hireloop account.
            </p>
          </div>

          {/* এরর মেসেজ باکس */}
          {error && (
            <div className="mb-5 flex items-start gap-3 bg-red-950/30 border border-red-900/50 p-3.5 rounded-xl text-red-400 text-xs leading-relaxed animate-in fade-in slide-in-from-top-1">
              <TriangleExclamation className="w-4 h-4 shrink-0 mt-0.5" />
              <span>{error}</span>
            </div>
          )}

          {/* সাকসেস মেসেজ বক্স */}
          {success && (
            <div className="mb-5 flex items-start gap-3 bg-emerald-950/30 border border-emerald-900/50 p-3.5 rounded-xl text-emerald-400 text-xs leading-relaxed animate-in fade-in slide-in-from-top-1">
              <CircleCheck className="w-4 h-4 shrink-0 mt-0.5" />
              <span>{success}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            {/* ইমেইল ইনপুট */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="email"
                className="text-neutral-400 text-xs font-semibold tracking-wide"
              >
                Email Address
              </label>
              <div className="w-full flex items-center gap-3 px-3.5 h-11 bg-[#141416] border border-neutral-800 rounded-xl focus-within:border-indigo-600 transition-all">
                <At className="text-neutral-600 w-4 h-4 shrink-0" />
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="name@example.com"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full bg-transparent text-white text-sm outline-none placeholder-neutral-600"
                  disabled={isLoading}
                />
              </div>
            </div>

            {/* পাসওয়ার্ড ইনপুট টগল সহ (Forgot Password লিঙ্ক ছাড়া) */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="password"
                className="text-neutral-400 text-xs font-semibold tracking-wide"
              >
                Password
              </label>
              <div className="w-full flex items-center gap-3 px-3.5 h-11 bg-[#141416] border border-neutral-800 rounded-xl focus-within:border-indigo-600 transition-all">
                <ShieldCheck className="text-neutral-600 w-4 h-4 shrink-0" />
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full bg-transparent text-white text-sm outline-none placeholder-neutral-600"
                  disabled={isLoading}
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="text-neutral-500 hover:text-neutral-300 p-1 outline-none shrink-0"
                  tabIndex="-1"
                >
                  {showPassword ? (
                    <EyeSlash className="w-4 h-4" />
                  ) : (
                    <Eye className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            {/* সাবমিট বাটন */}
            <Button
              type="submit"
              isLoading={isLoading}
              className="w-full h-11 mt-2 bg-[#5850ec] hover:bg-[#453e98] text-white font-medium rounded-xl transition-all shadow-lg shadow-indigo-600/10"
            >
              Sign In
            </Button>
          </form>

          {/* সাইন আপ পেজে যাওয়ার অপশন */}
          <div className="mt-6 text-center text-xs text-neutral-500 font-medium">
            Don't have an account?{' '}
            <Link
              href="/signup"
              className="text-[#6366f1] hover:text-[#4f46e5] font-semibold transition-colors ml-1"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
