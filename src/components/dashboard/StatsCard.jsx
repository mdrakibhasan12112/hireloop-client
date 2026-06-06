'use client';

import React from 'react';
// HeroUI v3-তে শুধুমাত্র মেইন Card ইম্পোর্ট করতে হয়
import { Card } from '@heroui/react';

const StatsCard = ({
  title,
  value,
  icon: Icon,
  iconColor = 'text-neutral-400',
}) => {
  return (
    <Card
      variant="default" // v3 এর নতুন সিমেন্টিক ভ্যারিয়েন্ট সিস্টেম
      className="bg-[#161616] border border-neutral-800/80 rounded-xl w-full hover:scale-[1.01] transition-transform duration-200"
    >
      {/* v3-তে CardBody এর পরিবর্তে Card.Content ব্যবহার করা বাধ্যতামূলক */}
      <Card.Content className="p-6 flex flex-col gap-5">
        {/* Top Section: Icon Container */}
        <div className="flex items-center">
          <div className="p-2.5 bg-neutral-900/80 border border-neutral-800 rounded-lg flex items-center justify-center">
            {Icon && <Icon className={`h-5 w-5 ${iconColor}`} />}
          </div>
        </div>

        {/* Bottom Section: Text Content */}
        <div className="flex flex-col gap-1.5">
          <span className="text-neutral-400 text-xs font-normal tracking-wide">
            {title}
          </span>
          <h2 className="text-2xl font-bold text-white tracking-tight">
            {value}
          </h2>
        </div>
      </Card.Content>
    </Card>
  );
};

export default StatsCard;
