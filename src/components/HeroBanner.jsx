'use client';

import React from 'react';
import { Button } from '@heroui/react';
// Importing exact search, location, and arrow/briefcase matching primitives from Gravity UI
import { Magnifier, Target, Briefcase } from '@gravity-ui/icons';

export default function HeroBanner() {
  return (
    <section className="relative w-full bg-black text-white py-24 px-4 overflow-hidden flex flex-col items-center justify-center min-h-[75vh]">
      {/* Dynamic Background Radial Glow and Ambient Particles Effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-indigo-600/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-[-10%] left-1/2 -translate-x-1/2 w-[800px] h-[250px] bg-purple-950/20 rounded-full blur-[120px]" />

        {/* Subtle decorative dot grid particles mimicking the lower half of the screenshot */}
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:24px_24px] mask-image-[radial-gradient(ellipse_at_center,transparent_20%,black_100%)] opacity-70" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center text-center">
        {/* 1. TOP BADGE PILL (50,000+ New Jobs This Month) */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-neutral-900/60 border border-neutral-800 backdrop-blur-md mb-8 animate-fade-in">
          {/* Briefcase Icon styled with subtle brown accent layout matching the image */}
          <div className="flex items-center justify-center text-amber-600 bg-amber-950/40 p-1 rounded-md">
            <Briefcase className="w-3.5 h-3.5" />
          </div>
          <p className="text-xs tracking-widest font-semibold text-neutral-400">
            <span className="text-white font-bold">50,000+</span> NEW JOBS THIS
            MONTH
          </p>
        </div>

        {/* 2. MAIN HEADER TITLE */}
        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white mb-6 max-w-2xl leading-[1.15]">
          Find Your Dream Job Today
        </h1>

        {/* 3. SUBTITLE DESCRIPTION */}
        <p className="text-neutral-400 text-base sm:text-lg max-w-2xl font-light leading-relaxed mb-12">
          HireLoop connects top talent with world-class companies. Browse
          thousands of curated opportunities and land your next role — faster.
        </p>

        {/* 4. DUAL SEARCH BAR INNER CONTAINER */}
        <div className="w-full max-w-3xl bg-[#0f0f11]/90 border border-neutral-800 rounded-2xl p-2 flex flex-col md:flex-row items-center gap-2 shadow-2xl shadow-black/80 backdrop-blur-xl mb-6">
          {/* Segment A: Job Title Search */}
          <div className="w-full flex items-center gap-3 px-3 py-2 md:py-0">
            <Magnifier className="text-neutral-500 w-5 h-5 shrink-0" />
            <input
              type="text"
              placeholder="Job title, skill or company"
              className="w-full bg-transparent text-white text-sm outline-none placeholder-neutral-600 font-normal py-1"
            />
          </div>

          {/* Segment Splitter Border Pipe */}
          <div className="hidden md:block h-6 w-[1px] bg-neutral-800 mx-2" />

          {/* Segment B: Location Search */}
          <div className="w-full flex items-center gap-3 px-3 py-2 md:py-0">
            <Target className="text-neutral-500 w-5 h-5 shrink-0" />
            <input
              type="text"
              placeholder="Location or Remote"
              className="w-full bg-transparent text-white text-sm outline-none placeholder-neutral-600 font-normal py-1"
            />
          </div>

          {/* Segment C: Vibrant Purple Search Submission Button */}
          <Button
            isIconOnly
            className="w-full md:w-12 h-11 rounded-xl bg-[#5850ec] hover:bg-[#453e98] text-white transition-all shadow-md shadow-indigo-600/20 shrink-0"
            aria-label="Search jobs"
          >
            <Magnifier className="w-5 h-5" />
          </Button>
        </div>

        {/* 5. TRENDING FOOTNOTE SELECTIONS */}
        <div className="flex flex-wrap items-center justify-center gap-3 text-sm">
          <span className="text-neutral-500 text-xs font-medium">
            Trending Position
          </span>

          <button className="px-3 py-1 rounded-full bg-neutral-900/60 border border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-700 text-xs font-medium transition-all">
            Product Designer
          </button>

          <button className="px-3 py-1 rounded-full bg-neutral-900/60 border border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-700 text-xs font-medium transition-all">
            AI Engineering
          </button>

          <button className="px-3 py-1 rounded-full bg-neutral-900/60 border border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-700 text-xs font-medium transition-all">
            Dev-ops Engineer
          </button>
        </div>
      </div>
    </section>
  );
}
