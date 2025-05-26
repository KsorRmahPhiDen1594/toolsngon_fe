'use client';
import React from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import {
  Home, Package, CreditCard, Gift, Users, ShoppingBag,
  BarChart2, DollarSign, Settings, ChevronDown, Zap, Columns, LucideIcon
} from 'lucide-react';
import { motion } from 'framer-motion';
import { Avatar, AvatarFallback, AvatarImage } from '@/app/(client)/components/ui/avatar';
import {
  DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger
} from '@/app/(client)/components/ui/dropdown-menu';

// Define type for nav items
interface NavItem {
  name: string;
  path: string;
  icon: LucideIcon;
}

const mainNavItems: NavItem[] = [
  { name: 'Home', path: '/dashboaruser/overview', icon: Home },
  { name: 'Products', path: '/dashboaruser/products', icon: Package },
  { name: 'Usage Billing', path: '/usage-billing', icon: CreditCard },
  { name: 'Benefits', path: '/benefits', icon: Gift },
  { name: 'Customers', path: '/insights', icon: Users },
  { name: 'Sales', path: '/sales', icon: ShoppingBag },
  { name: 'Analytics', path: '/analytics', icon: BarChart2 },
  { name: 'Finance', path: '/funding', icon: DollarSign },
  { name: 'Settings', path: '/settings', icon: Settings },
];

const Sidebar: React.FC = () => {
  const pathname = usePathname(); // Get current path

  const isActive = (path: string): boolean => pathname.startsWith(path);

  return (
    <aside className="w-72 bg-slate-50 dark:bg-slate-900 p-4 flex flex-col ">
      <div className="flex items-center justify-between mb-6 px-2 pt-2">
        <div className="flex items-center">
          <motion.div
            className="h-8 w-8 bg-black dark:bg-white rounded-full mr-3 flex items-center justify-center"
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          >
            <Zap className="h-5 w-5 text-white dark:text-black transform scale-x-[-1]" />
          </motion.div>
        </div>
        <div className="flex items-center space-x-2">
          <button className="p-1.5 rounded hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
            <Zap className="h-5 w-5 text-slate-600 dark:text-slate-400" />
          </button>
          <button className="p-1.5 rounded hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
            <Columns className="h-5 w-5 text-slate-600 dark:text-slate-400" />
          </button>
        </div>
      </div>

      <nav className="flex-grow overflow-y-auto pr-1">
        <ul>
          {mainNavItems.map((item, index) => (
            <motion.li
              key={item.name}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="mb-1.5"
            >
              <Link
                href={item.path}
                className={`flex items-center py-2.5 px-3 rounded-lg transition-all duration-200 ease-in-out group text-sm font-medium
                  ${isActive(item.path)
                    ? 'bg-slate-200 dark:bg-slate-800 text-slate-900 dark:text-slate-50 shadow-sm'
                    : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700/50 hover:text-slate-800 dark:hover:text-slate-200'}`}
              >
                <item.icon
                  className={`h-5 w-5 mr-3 transition-colors duration-200 ${
                    isActive(item.path)
                      ? 'text-blue-600 dark:text-sky-400'
                      : 'text-slate-500 dark:text-slate-400 group-hover:text-slate-700 dark:group-hover:text-slate-300'
                  }`}
                />
                <span>{item.name}</span>
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>

      <div className="mt-auto pt-4 border-t border-slate-200 dark:border-slate-700">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <motion.button
              whileHover={{ backgroundColor: 'rgba(0,0,0,0.05)' }}
              className="w-full flex items-center p-2 rounded-md text-left focus:outline-none hover:bg-slate-100 dark:hover:bg-slate-700/50 transition-colors"
            >
              <Avatar className="h-8 w-8 mr-2">
                <AvatarImage src="https://avatars.githubusercontent.com/u/1?v=4" alt="Cu Đen" />
                <AvatarFallback className="bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-200">CĐ</AvatarFallback>
              </Avatar>
              <div className="flex-grow">
                <span className="text-sm font-semibold text-slate-800 dark:text-slate-200">Cu Đen</span>
              </div>
              <ChevronDown className="h-4 w-4 text-slate-500 dark:text-slate-400" />
            </motion.button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-64 mb-2 bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200"
            side="top"
            align="start"
          >
            <DropdownMenuItem className="hover:bg-slate-100 dark:hover:bg-slate-700 focus:bg-slate-100 dark:focus:bg-slate-700">Account Settings</DropdownMenuItem>
            <DropdownMenuItem className="hover:bg-slate-100 dark:hover:bg-slate-700 focus:bg-slate-100 dark:focus:bg-slate-700">Switch Organization</DropdownMenuItem>
            <DropdownMenuItem className="text-red-500 dark:text-red-400 hover:bg-red-500/10 focus:bg-red-500/10 hover:text-red-600 dark:hover:text-red-300 focus:text-red-600 dark:focus:text-red-300">
              Log out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </aside>
  );
};

export default Sidebar;