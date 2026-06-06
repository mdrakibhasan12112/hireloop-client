'use client';

import React from 'react';
import StatsCard from '@/components/dashboard/StatsCard';

const DashboardLayout = ({
  title,
  subtitle,
  recruiterStats = [],
  children,
}) => {
  return (
    <div className="w-full p-6 min-h-screen bg-background text-foreground space-y-8">
      {/* Header Section */}
      <div className="space-y-1 pl-1">
        <h1 className="text-3xl font-bold tracking-tight text-foreground dark:text-white">
          {title}
        </h1>
        {subtitle && (
          <p className="text-sm text-default-400 dark:text-neutral-500">
            {subtitle}
          </p>
        )}
      </div>

      {/* Stats Grid */}
      {recruiterStats.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {recruiterStats.map((stat, index) => (
            <StatsCard
              key={stat.id || index}
              title={stat.title}
              value={stat.value}
              icon={stat.icon}
              iconColor={stat.iconColor}
            />
          ))}
        </div>
      )}

      {/* Extra Page Content (Tables, Graphs, Charts) */}
      {children && <div className="mt-8 w-full">{children}</div>}
    </div>
  );
};

export default DashboardLayout;
