'use server';

import { serverMutation } from "../core/server";


export const createJob = async (newJobData) => {
 return serverMutation('/api/jobs', newJobData);

}


// const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
// export const createJob = async newJobData => {
//   const res = await fetch(`${baseUrl}/api/jobs`, {
//     method: 'POST',
//     headers: {
//       'content-type': 'application/jobs',
//     },
//     body: JSON.stringify(newJobData),
//   });
//   return res.json();
// };





// 'use server';

// export const createJob = async newJobData => {
//   try {
//     // Next.js সার্ভার অ্যাকশনে ইন্টারনাল API কলের জন্য শুধু আপেক্ষিক পথ (Relative path) ব্যবহার করাই যথেষ্ট
//     const res = await fetch('http://localhost:5000/api/jobs', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json', // FIXED: 'application/jobs' থেকে 'application/json' করা হলো
//       },
//       body: JSON.stringify(newJobData),
//     });

//     // যদি API এন্ডপয়েন্ট থেকে কোনো ভুল রেসপন্স (যেমন ৪0৪ বা ৫০0) আসে
//     if (!res.ok) {
//       const errorText = await res.text();
//       console.error('API Response Error:', errorText);
//       return {
//         error: true,
//         message: `Server responded with status ${res.status}`,
//       };
//     }

//     return await res.json();
//   } catch (error) {
//     console.error('SERVER ACTION FETCH CRASHED:', error);
//     return { error: true, message: error.message || 'Network request failed' };
//   }
// }