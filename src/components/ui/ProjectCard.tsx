"use client";

import Image from "next/image";
import Link from "next/link";
import { DevisioIllustration } from "@/components/illustrations/DevisioIllustration";
import { OrthoflowIllustration } from "@/components/illustrations/OrthoflowIllustration";
import { GitSkreenIllustration } from "@/components/illustrations/GitSkreenIllustration";
import { SeoAnalyzerIllustration } from "@/components/illustrations/SeoAnalyzerIllustration";
import { AiCoverIllustration } from "@/components/illustrations/AiCoverIllustration";
import { GlobalConverterIllustration } from "@/components/illustrations/GlobalConverterIllustration";
import { MovieSprintIllustration } from "@/components/illustrations/MovieSprintIllustration";

interface ProjectCardProps {
  id: string;
  url: string;
  type: string;
  name: string;
  desc: string;
  tags: string[];
  wide?: boolean;
  illustration: string;
}

const illustrationMap = {
  devisio: DevisioIllustration,
  orthoflow: OrthoflowIllustration,
  gitskreen: GitSkreenIllustration,
  "seo-analyzer": SeoAnalyzerIllustration,
  "ai-cover": AiCoverIllustration,
  globalconverter: GlobalConverterIllustration,
  moviesprint: MovieSprintIllustration,
};

export default function ProjectCard({
  id,
  url,
  type,
  name,
  desc,
  tags,
  wide = false,
  illustration,
}: ProjectCardProps) {
  const IllustrationComponent =
    illustrationMap[illustration as keyof typeof illustrationMap];

  return (
    <Link
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`pc block bg-white rounded-xl border border-violet-100 hover:border-violet-300 transition-all duration-300 hover:shadow-lg hover:shadow-violet-100/50 ${wide ? "col-span-2" : ""}`}
    >
      <div className="p-6">
        {/* Project type */}
        <div className="text-xs font-medium text-violet-600 uppercase tracking-wide mb-3">
          {type}
        </div>

        {/* Project info */}
        <h3 className="text-lg font-semibold text-gray-900 mb-2 font-display">
          {name}
        </h3>
        <p className="text-sm text-gray-600 mb-4 line-clamp-2">{desc}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-violet-50 text-violet-600 text-xs font-medium rounded-md"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Image with SVG illustration */}
        <div
          className={`pc-img relative rounded-lg overflow-hidden bg-gradient-to-br from-violet-50 to-cyan-50`}
        >
          <div className="pc-img-inner flex items-center justify-center p-4">
            {IllustrationComponent ? (
              <div className="w-full h-full flex items-center justify-center">
                <IllustrationComponent />
              </div>
            ) : (
              <div className="text-center p-8">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-violet-400 to-cyan-400 rounded-xl flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">
                    {name.charAt(0)}
                  </span>
                </div>
                <p className="text-xs text-gray-500 font-mono">
                  {illustration}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}
