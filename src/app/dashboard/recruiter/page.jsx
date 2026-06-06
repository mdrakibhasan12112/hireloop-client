'use client'
import { useSession } from '@/lib/auth-client';
import React from 'react';
import { Spinner } from '@heroui/react';
import { useRouter } from 'next/navigation';
import {
  FileText,
  Persons,
  Thunderbolt,
  CircleCheck,
} from '@gravity-ui/icons';
import DashboardLayout from '@/components/dashboard/DashboardLayout';

const RecruiterDashboardHomePage = () => {

 const { data: session, isPending } = useSession()
 
 if (isPending) {
  return (
    <div className="flex min-h-[60vh] w-full flex-col items-center justify-center gap-3">
      <Spinner size="lg" color="primary" />
      <span className="text-sm text-neutral-400 animate-pulse">
        Loading dashboard...
      </span>
    </div>
  );
 }

const recruiterStats = [
  {
    id: 1,
    title: 'Total Job Posts',
    value: '48',
    icon: FileText,
    iconColor: 'text-neutral-300',
  },
  {
    id: 2,
    title: 'Total Applicants',
    value: '1,284',
    icon: Persons,
    iconColor: 'text-neutral-300',
  },
  {
    id: 3,
    title: 'Active Jobs',
    value: '18',
    icon: Thunderbolt,
    iconColor: 'text-neutral-300',
  },
  {
    id: 4,
    title: 'Jobs Closed',
    value: '32',
    icon: CircleCheck,
    iconColor: 'text-neutral-300',
  },
];

 const user = session?.user;
console.log(session);

 return (
   <div>
     <h1 className="text-3xl font-semibold">Welcome back, {user?.name}</h1>
     <DashboardLayout recruiterStats={recruiterStats}></DashboardLayout>
   </div>
 );
};

export default RecruiterDashboardHomePage;