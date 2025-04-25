"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  link: string;
  isHovering: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  className?: string;
}

export function ProjectCard({
  title,
  description,
  tags,
  link,
  isHovering,
  onMouseEnter,
  onMouseLeave,
  className,
}: ProjectCardProps) {
  return (
    <div
      className={`group transition-all duration-300 dark:hover:bg-slate-900 hover:bg-zinc-100 hover:cursor-pointer p-4 ${
        isHovering ? "blur-sm opacity-70" : ""
      } ${className || ""}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <h3 className="text-base font-medium mb-2 text-gray-900 dark:text-white flex items-center group-hover:text-yellow-500">
        <Link
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="dark:group-hover:text-yellow-400 transition-colors"
        >
          {title}
          <ArrowUpRight className="inline-block ml-1 h-3.5 w-3.5 opacity-0 group-hover:opacity-100 dark:group-hover:text-yellow-400 group-hover:text-yellow-500 transition-opacity" />
        </Link>
      </h3>
      <p className="text-gray-600 dark:text-gray-400 text-sm mb-8 sm:mb-3">
        {description}
      </p>
      <div className="flex flex-wrap gap-1.5 mb-2">
        {tags.map((tag) => (
          <Badge
            key={tag}
            variant="secondary"
            className="bg-gray-200 font-medium dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 text-xs"
          >
            {tag}
          </Badge>
        ))}
      </div>
    </div>
  );
}
