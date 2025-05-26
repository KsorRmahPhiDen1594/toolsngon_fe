'use client';

import React from 'react';
import { mockFundingData } from '@/data/mockData';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/app/(admin)/components/ui/card';
import { Button } from '@/app/(admin)/components/ui/button';
import { DollarSign, Users, CheckCircle, BarChart2 } from 'lucide-react';
import { motion } from 'framer-motion';

// Kiểu dữ liệu cho tier
interface Tier {
  id: string;
  name: string;
  price: number;
  description: string;
}

// Kiểu dữ liệu cho mockFundingData
interface FundingData {
  tiers: Tier[];
  activeSubscribers: number;
  totalSubscribers: number;
}

const FundingPage: React.FC = () => {
  const { tiers, activeSubscribers, totalSubscribers }: FundingData = mockFundingData;

  return (
    <div className="space-y-8">
      <motion.h1 
        className="text-4xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-orange-400 mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Manage Your Funding
      </motion.h1>

      <div className="grid gap-6 md:grid-cols-2">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.1 }}>
          <Card className="bg-slate-800/70 border-slate-700 shadow-xl hover:shadow-amber-500/30 transition-shadow duration-300">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-slate-400">Active Subscribers</CardTitle>
              <Users className="h-5 w-5 text-amber-400" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-slate-100">{activeSubscribers}</div>
              <p className="text-xs text-slate-500">out of {totalSubscribers} total sponsors</p>
            </CardContent>
          </Card>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
          <Card className="bg-slate-800/70 border-slate-700 shadow-xl hover:shadow-orange-500/30 transition-shadow duration-300">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-slate-400">Estimated Monthly Revenue</CardTitle>
              <DollarSign className="h-5 w-5 text-orange-400" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-slate-100">
                ${(
                  tiers.reduce((acc, tier) => acc + (tier.price * (activeSubscribers / tiers.length)), 0)
                ).toFixed(2)}
              </div>
              <p className="text-xs text-slate-500">Based on current active subscribers</p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
      
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.3 }}>
        <Card className="bg-slate-800/70 border-slate-700 shadow-xl">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-slate-100">Funding Tiers</CardTitle>
            <CardDescription className="text-slate-400">
              Manage your subscription plans. Stripe integration will be available soon for payment processing.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {tiers.map((tier, index) => (
              <motion.div 
                key={tier.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
              >
                <Card className="bg-slate-700/50 border-slate-600 hover:border-sky-500/50 transition-colors duration-200">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-xl font-medium text-sky-300">{tier.name}</CardTitle>
                        <p className="text-2xl font-bold text-slate-100 mt-1">
                          ${tier.price}
                          <span className="text-sm font-normal text-slate-400">/month</span>
                        </p>
                      </div>
                      <CheckCircle className="h-6 w-6 text-green-400" />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-300">{tier.description}</p>
                  </CardContent>
                  <CardFooter className="pt-4 border-t border-slate-600">
                    <Button variant="outline" className="border-sky-500 text-sky-400 hover:bg-sky-500/10 hover:text-sky-300">
                      Edit Tier
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </CardContent>
          <CardFooter className="border-t border-slate-700 pt-6 flex justify-end">
            <Button className="bg-gradient-to-r from-sky-500 to-cyan-600 hover:from-sky-600 hover:to-cyan-700 text-white shadow-lg transform hover:scale-105 transition-transform duration-200">
              <BarChart2 className="mr-2 h-4 w-4" /> View Payouts & Analytics (Coming Soon)
            </Button>
          </CardFooter>
        </Card>
      </motion.div>
    </div>
  );
};

export default FundingPage;
