'use client';

import React from 'react';
import Image from 'next/image';
import { Briefcase, Key, Person, Star } from '@gravity-ui/icons';

export default function StatsSection() {
  return (
    <section className="relative w-full bg-black text-white py-24 px-4 overflow-hidden min-h-[85vh] flex flex-col items-center justify-end">
      {/* 1. GLOBE BACKGROUND IMAGE */}
      <div className="absolute inset-0 w-full h-full flex justify-center items-start pointer-events-none z-0 select-none">
        <Image
          src="/images/globe.png" // Ensure your image name matches what is in your public/ folder
      alt="Globe Network Background"
          fill
          priority
          className="object-contain object-top scale-110 md:scale-100 opacity-90"
        />
        {/* Soft atmospheric radial gradient flare behind the globe */}
        <div className="absolute top-1/4 w-[600px] h-[300px] bg-indigo-600/20 rounded-full blur-[120px] -z-10" />
      </div>

      {/* SECTION CONTENT WRAPPER */}
      <div className="relative z-10 max-w-7xl w-full mx-auto flex flex-col items-center">
        {/* 2. SECTION SUB-HEADING */}
        <h2 className="text-2xl sm:text-4xl text-neutral-200 font-normal tracking-tight text-center max-w-2xl leading-snug mb-16 px-4">
          Assisting over{' '}
          <span className="font-semibold text-white">15,000 job seekers</span>{' '}
          <br className="hidden sm:inline" />
          find their dream positions.
        </h2>

        {/* 3. FOUR-COLUMN GRID CARD LAYOUT */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 w-full px-2">
          {/* Card 1: Active Jobs */}
          <div className="bg-[#0c0c0e]/90 border border-neutral-800/80 rounded-2xl p-6 flex flex-col justify-between aspect-[4/3] backdrop-blur-md shadow-xl hover:border-neutral-700/80 transition-all">
            <div className="text-neutral-400 p-1">
              <Briefcase className="w-5 h-5" />
            </div>
            <div className="flex flex-col gap-1 mt-auto">
              <span className="text-4xl font-semibold tracking-tight text-white">
                50K
              </span>
              <span className="text-neutral-500 text-xs font-medium">
                Active Jobs
              </span>
            </div>
          </div>

          {/* Card 2: Companies */}
          <div className="bg-[#0c0c0e]/90 border border-neutral-800/80 rounded-2xl p-6 flex flex-col justify-between aspect-[4/3] backdrop-blur-md shadow-xl hover:border-neutral-700/80 transition-all">
            <div className="text-neutral-400 p-1">
              <Key className="w-5 h-5" />
            </div>
            <div className="flex flex-col gap-1 mt-auto">
              <span className="text-4xl font-semibold tracking-tight text-white">
                12K
              </span>
              <span className="text-neutral-500 text-xs font-medium">
                Companies
              </span>
            </div>
          </div>

          {/* Card 3: Job Seekers */}
          <div className="bg-[#0c0c0e]/90 border border-neutral-800/80 rounded-2xl p-6 flex flex-col justify-between aspect-[4/3] backdrop-blur-md shadow-xl hover:border-neutral-700/80 transition-all">
            <div className="text-neutral-400 p-1">
              <Person className="w-5 h-5" />
            </div>
            <div className="flex flex-col gap-1 mt-auto">
              <span className="text-4xl font-semibold tracking-tight text-white">
                2M
              </span>
              <span className="text-neutral-500 text-xs font-medium">
                Job Seekers
              </span>
            </div>
          </div>

          {/* Card 4: Satisfaction Rate */}
          <div className="bg-[#0c0c0e]/90 border border-neutral-800/80 rounded-2xl p-6 flex flex-col justify-between aspect-[4/3] backdrop-blur-md shadow-xl hover:border-neutral-700/80 transition-all">
            <div className="text-neutral-400 p-1">
              <Star className="w-5 h-5" />
            </div>
            <div className="flex flex-col gap-1 mt-auto">
              <span className="text-4xl font-semibold tracking-tight text-white">
                97%
              </span>
              <span className="text-neutral-500 text-xs font-medium">
                Satisfaction Rate
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// 'use client';

// import Image from 'next/image';
// import { Briefcase, Factory, CircleInfo, Star } from '@gravity-ui/icons';

// const stats = [
//   {
//     icon: <Briefcase width={20} height={20} />,
//     value: '50K',
//     label: 'Active Jobs',
//   },
//   {
//     icon: <Factory width={20} height={20} />,
//     value: '12K',
//     label: 'Companies',
//   },
//   {
//     icon: <CircleInfo width={20} height={20} />,
//     value: '2M',
//     label: 'Job Seekers',
//   },
//   {
//     icon: <Star width={20} height={20} />,
//     value: '97%',
//     label: 'Satisfaction Rate',
//   },
// ];

// export default function StatsSection() {
//   return (
//     <section className="relative overflow-hidden bg-black py-24">
//       {/* Globe Background */}
//       <div className="absolute inset-0 flex justify-center items-start">
//         <Image
//           src="/images/globe.png"
//           alt="Globe"
//           width={1400}
//           height={800}
//           priority
//           className="w-full max-w-7xl object-contain opacity-80"
//         />
//       </div>

//       {/* Purple Glow */}
//       <div className="absolute top-20 left-1/2 -translate-x-1/2 h-[400px] w-[900px] rounded-full bg-violet-600/30 blur-[140px]" />

//       {/* Content */}
//       <div className="relative z-10 max-w-7xl mx-auto px-6">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl md:text-5xl font-semibold text-white leading-tight">
//             Assisting over 15,000 job seekers
//             <br />
//             find their dream positions.
//           </h2>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//           {stats.map((item, index) => (
//             <div
//               key={index}
//               className="
//                 bg-white/[0.03]
//                 backdrop-blur-xl
//                 border border-white/10
//                 rounded-3xl
//                 p-8
//                 min-h-[220px]
//                 flex flex-col
//                 justify-between
//                 shadow-lg
//               "
//             >
//               <div className="text-white">{item.icon}</div>

//               <div>
//                 <h3 className="text-5xl font-bold text-white mb-3">
//                   {item.value}
//                 </h3>

//                 <p className="text-white/70">{item.label}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }