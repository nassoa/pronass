"use client";

import { motion } from "framer-motion";

interface SkillBadgeProps {
  name: string;
  level: number;
}

export function SkillBadge({ name, level }: SkillBadgeProps) {
  return (
    <div className=" border-gray-100 dark:border-gray-800 pt-2">
      <div className="flex justify-between items-center mb-1.5">
        <h3 className="text-sm text-gray-900 dark:text-white">{name}</h3>
        <span className="text-xs text-gray-500 dark:text-gray-400">
          {level}%
        </span>
      </div>
      <div className="h-1 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-yellow-400 dark:bg-yellow-500 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${level}%` }}
          transition={{ duration: 1, delay: 0.2 }}
        />
      </div>
    </div>
  );
}
