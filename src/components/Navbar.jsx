'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Link, Button } from '@heroui/react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 max-w-7xl mx-auto my-4 px-4 w-full">
      {/* Outer Floating Box */}
      <div className="bg-[#121212] border border-neutral-800 rounded-2xl shadow-xl backdrop-blur-md transition-all duration-300">
        {/* Header Main Bar */}
        <header className="flex h-16 items-center justify-between px-6">
          {/* LEFT SIDE: Hamburger & Logo */}
          <div className="flex items-center gap-4">
            {/* Mobile Hamburger Button */}
            <button
              className="md:hidden text-neutral-400 hover:text-white transition-colors p-1"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>

            {/* Logo Image */}
            <div className="flex items-center">
              <Link href="/" className="flex items-center">
                <Image
                  src="/images/logo.png"
                  alt="Hireloop Logo"
                  width={125}
                  height={30}
                  priority
                  className="object-contain"
                />
              </Link>
            </div>
          </div>

          {/* RIGHT SIDE: Menu Links + Divider + Actions */}
          <div className="flex items-center gap-8">
            {/* Desktop Navigation Links (Pushed Right) */}
            <ul className="hidden items-center gap-8 md:flex">
              <li>
                <Link
                  href="#"
                  className="text-neutral-400 hover:text-white text-sm font-medium transition-colors"
                >
                  Browse Jobs
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-neutral-400 hover:text-white text-sm font-medium transition-colors"
                >
                  Company
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-neutral-400 hover:text-white text-sm font-medium transition-colors"
                >
                  Pricing
                </Link>
              </li>
            </ul>

            {/* True Vertical Divider Line (Desktop only - Before Sign In) */}
            <div className="hidden md:block h-5 w-[1px] bg-neutral-800" />

            {/* Auth Actions Group */}
            <div className="flex items-center gap-5">
              <div>
                <Link
                  href="#"
                  className="text-[#6366f1] hover:text-[#4f46e5] text-sm font-semibold transition-colors"
                >
                  Sign In
                </Link>
              </div>

              <div>
                <Button
                  as={Link}
                  href="#"
                  className="bg-[#5850ec] hover:bg-[#453e98] text-white font-medium px-5 py-2 rounded-xl transition-all shadow-lg shadow-indigo-500/10"
                  variant="solid"
                >
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        </header>

        {/* Mobile Dropdown Menu Drawer */}
        {isMenuOpen && (
          <div className="border-t border-neutral-800 md:hidden animate-in fade-in slide-in-from-top-2 duration-200">
            <ul className="flex flex-col gap-1 p-4">
              <li>
                <Link
                  href="#"
                  className="block py-2 px-3 text-neutral-400 hover:text-white hover:bg-neutral-900 rounded-lg text-sm font-medium transition-all"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Browse Jobs
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="block py-2 px-3 text-neutral-400 hover:text-white hover:bg-neutral-900 rounded-lg text-sm font-medium transition-all"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Company
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="block py-2 px-3 text-neutral-400 hover:text-white hover:bg-neutral-900 rounded-lg text-sm font-medium transition-all"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Pricing
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}
