"use client";

interface SkillBadgeProps {
  name: string;
}

export function SkillBadge({ name }: SkillBadgeProps) {
  return (
    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-gray-100 dark:bg-gray-800/80 text-gray-700 dark:text-gray-300 hover:bg-yellow-100 dark:hover:bg-yellow-900/30 hover:text-yellow-800 dark:hover:text-yellow-400 transition-colors duration-200 cursor-default">
      {name}
    </span>
  );
}
