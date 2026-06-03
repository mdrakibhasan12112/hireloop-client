'use client';

import React from 'react';
import Image from 'next/image';
import { Link } from '@heroui/react';
// Importing LogoFacebook, LogoPinterest, and LogoLinkedin from Gravity UI Icons
import { LogoFacebook, LogoGithub, LogoLinkedin } from '@gravity-ui/icons';

export default function Footer() {
  return (
    <footer className="w-full bg-black text-neutral-400 py-16 px-6 border-t border-neutral-900 mt-20">
      <div className="max-w-6xl mx-auto flex flex-col gap-12">
        {/* TOP SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-4">
          <div className="md:col-span-5 flex flex-col gap-4">
            <Link href="/" className="flex items-center">
              <Image
                src="/hireloop-logo.png"
                alt="Hireloop Logo"
                width={125}
                height={30}
                className="object-contain"
              />
            </Link>
            <p className="text-neutral-500 text-sm max-w-xs leading-relaxed">
              The AI-native career platform. Built for people who take their
              work seriously.
            </p>
          </div>

          <div className="hidden md:block md:col-span-1" />

          <div className="md:col-span-2 flex flex-col gap-4">
            <h4 className="text-[#4f46e5] font-semibold text-sm tracking-wide">
              Product
            </h4>
            <ul className="flex flex-col gap-3 text-sm">
              <li>
                <Link
                  href="#"
                  className="text-neutral-500 hover:text-neutral-200 transition-colors"
                >
                  Job discovery
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-neutral-500 hover:text-neutral-200 transition-colors"
                >
                  Worker AI
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-neutral-500 hover:text-neutral-200 transition-colors"
                >
                  Companies
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-neutral-500 hover:text-neutral-200 transition-colors"
                >
                  Salary data
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2 flex flex-col gap-4">
            <h4 className="text-[#4f46e5] font-semibold text-sm tracking-wide">
              Navigations
            </h4>
            <ul className="flex flex-col gap-3 text-sm">
              <li>
                <Link
                  href="#"
                  className="text-neutral-500 hover:text-neutral-200 transition-colors"
                >
                  Help center
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-neutral-500 hover:text-neutral-200 transition-colors"
                >
                  Career library
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-neutral-500 hover:text-neutral-200 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2 flex flex-col gap-4">
            <h4 className="text-[#4f46e5] font-semibold text-sm tracking-wide">
              Resources
            </h4>
            <ul className="flex flex-col gap-3 text-sm">
              <li>
                <Link
                  href="#"
                  className="text-neutral-500 hover:text-neutral-200 transition-colors"
                >
                  Brand Guideline
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-neutral-500 hover:text-neutral-200 transition-colors"
                >
                  Newsroom
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* BOTTOM SECTION */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-8 border-t border-neutral-900 gap-4">
          {/* Social Icons Row using Gravity UI packages */}
          <div className="flex items-center gap-3">
            <a
              href="#"
              className="w-9 h-9 flex items-center justify-center rounded-xl bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white transition-colors"
              aria-label="Facebook"
            >
              <LogoFacebook className="w-4 h-4" />
            </a>

            {/* Indigo container wrapper for the center icon matching Screenshot 2026-06-04 001129.png */}
            <a
              href="#"
              className="w-9 h-9 flex items-center justify-center rounded-xl bg-[#312e81]/60 border border-indigo-900/50 text-indigo-400 hover:text-indigo-200 transition-colors"
              aria-label="Pinterest"
            >
              <LogoGithub className="w-4 h-4" />
            </a>

            <a
              href="#"
              className="w-9 h-9 flex items-center justify-center rounded-xl bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <LogoLinkedin className="w-4 h-4" />
            </a>
          </div>

          {/* Copyright Info */}
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6 text-xs text-neutral-600 font-medium">
            <span>Copyright 2024 —Programming Hero</span>
            <div className="hidden sm:block w-1 h-1 rounded-full bg-neutral-800" />
            <Link
              href="#"
              className="text-neutral-600 hover:text-neutral-400 transition-colors text-xs font-medium"
            >
              Terms & Policy - Privacy Guideline
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
