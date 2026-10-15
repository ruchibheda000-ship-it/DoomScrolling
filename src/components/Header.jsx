import React from 'react';
import { PROJECT_METADATA } from '../data/researchPosts';

export default function Header({ activeFilter, onFilterChange, postCount }) {
  const highlights = [
    { title: "Framing", count: "01", desc: "Core Inquiry" },
    { title: "Somatic", count: "02", desc: "Touch Reflex" },
    { title: "Interests", count: "03", desc: "Hobby Friction" },
    { title: "Cohorts", count: "04", desc: "4 Generations" },
    { title: "Literature", count: "05", desc: "Secondary Lit" },
    { title: "Affinity", count: "06", desc: "7 Clusters" },
    { title: "Insight", count: "07", desc: "Core Insight" },
    { title: "Problem", count: "08", desc: "POV & HMW" }
  ];

  return (
    <header className="border-b border-[#E5E4DE] pb-6 mb-6">
      {/* Top Mobile/Desktop App Bar */}
      <div className="flex items-center justify-between py-3.5 border-b border-[#ECEBE6] text-xs font-mono uppercase tracking-widest text-[#737373]">
        <div className="flex items-center gap-2">
          <svg className="w-4 h-4 text-[#171717]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
          <span className="font-semibold text-[#171717] lowercase">@{PROJECT_METADATA.archiveHandle}</span>
          <span className="inline-flex items-center justify-center w-4 h-4 rounded-full bg-[#171717] text-[#F5F4F0] text-[9px] font-bold">
            ✓
          </span>
        </div>
        <div className="flex items-center gap-3">
          <span className="hidden sm:inline px-2 py-0.5 rounded-xs text-[10px] bg-[#E9E8E2] text-[#555]">ARCHIVE VERIFIED</span>
          <span className="text-[11px] text-[#171717]">2026 ED.</span>
        </div>
      </div>

      {/* Profile Bio Section */}
      <div className="pt-6 sm:pt-8 grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-start">
        {/* Profile Avatar */}
        <div className="md:col-span-3 flex justify-start sm:justify-center">
          <div className="relative group">
            <div className="w-20 h-20 sm:w-28 sm:h-28 rounded-full bg-[#171717] text-[#F5F4F0] flex flex-col items-center justify-center border-2 border-[#171717] shadow-sm select-none">
              <span className="font-mono text-xl sm:text-2xl font-bold tracking-tighter">BP</span>
              <span className="text-[8px] font-mono tracking-widest text-neutral-400 uppercase mt-0.5">ARCHIVE</span>
            </div>
            <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-[#F5F4F0] border-2 border-[#171717] flex items-center justify-center text-[10px] font-bold text-[#171717]">
              •
            </div>
          </div>
        </div>

        {/* Profile Info & Stats */}
        <div className="md:col-span-9 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-3">
            <div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#171717] uppercase">
                {PROJECT_METADATA.title}
              </h1>
              <p className="text-sm sm:text-base font-medium text-[#525252] mt-1 max-w-xl">
                {PROJECT_METADATA.subtitle}
              </p>
            </div>
          </div>

          {/* Editorial Metadata Bar */}
          <div className="inline-block bg-[#EBEAE5] text-[#262626] text-[10px] sm:text-[11px] font-mono tracking-widest px-2.5 py-1 rounded-xs uppercase">
            {PROJECT_METADATA.metaLine}
          </div>

          {/* Stats Row (Instagram Profile Style) */}
          <div className="flex items-center gap-6 sm:gap-8 pt-2 text-xs sm:text-sm border-t border-[#ECEBE6]">
            {PROJECT_METADATA.stats.map((stat, i) => (
              <div key={i} className="flex flex-col">
                <span className="font-extrabold text-[#171717] font-mono text-sm sm:text-base">{stat.value}</span>
                <span className="text-[10px] font-mono tracking-wider text-[#737373] uppercase">{stat.label}</span>
              </div>
            ))}
          </div>

          {/* Bio Description */}
          <div className="text-xs sm:text-sm text-[#404040] leading-relaxed max-w-2xl pt-1">
            <p className="font-medium text-[#171717]">{PROJECT_METADATA.bio.curator}</p>
            <p className="mt-1 text-[#525252]">{PROJECT_METADATA.bio.description}</p>
            <div className="mt-2 flex flex-wrap items-center gap-3 text-xs font-mono text-[#737373]">
              <span>📍 {PROJECT_METADATA.bio.location}</span>
              <span>•</span>
              <span className="text-[#171717] underline decoration-neutral-400 cursor-pointer">
                📄 {PROJECT_METADATA.bio.linkText}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Stories / Highlights Strip */}
      <div className="pt-6 sm:pt-8 flex items-center gap-4 sm:gap-5 overflow-x-auto pb-2 scrollbar-none">
        {highlights.map((hl, i) => (
          <div key={i} className="flex flex-col items-center flex-shrink-0 group cursor-default">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full border border-[#D5D4CE] bg-[#EFEFEA] p-0.5 transition-transform group-hover:scale-105">
              <div className="w-full h-full rounded-full bg-[#FFFFFF] flex flex-col items-center justify-center text-center p-1">
                <span className="font-mono text-[10px] font-bold text-[#171717]">{hl.count}</span>
                <span className="text-[8px] font-mono uppercase text-[#737373] tracking-tight">{hl.title}</span>
              </div>
            </div>
            <span className="text-[10px] font-mono text-[#525252] mt-1.5">{hl.desc}</span>
          </div>
        ))}
      </div>

      {/* Grid Tabs & Filter Bar */}
      <div className="mt-6 pt-4 border-t border-[#ECEBE6] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        {/* Left: Instagram Grid Navigation Icon */}
        <div className="flex items-center gap-8">
          <button
            onClick={() => onFilterChange('ALL')}
            className={`flex items-center gap-2 pb-2 text-xs font-mono tracking-widest uppercase transition-colors relative ${
              activeFilter === 'ALL'
                ? 'text-[#171717] font-bold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#171717]'
                : 'text-[#737373] hover:text-[#171717]'
            }`}
          >
            {/* 3x3 Grid Icon */}
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <rect x="3" y="3" width="5" height="5" />
              <rect x="10" y="3" width="5" height="5" />
              <rect x="17" y="3" width="5" height="5" />
              <rect x="3" y="10" width="5" height="5" />
              <rect x="10" y="10" width="5" height="5" />
              <rect x="17" y="10" width="5" height="5" />
              <rect x="3" y="17" width="5" height="5" />
              <rect x="10" y="17" width="5" height="5" />
              <rect x="17" y="17" width="5" height="5" />
            </svg>
            <span>RESEARCH GRID ({postCount})</span>
          </button>

          <button
            onClick={() => onFilterChange('EMPATHISE')}
            className={`flex items-center gap-1.5 pb-2 text-xs font-mono tracking-widest uppercase transition-colors relative ${
              activeFilter === 'EMPATHISE'
                ? 'text-[#171717] font-bold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#171717]'
                : 'text-[#737373] hover:text-[#171717]'
            }`}
          >
            <span>01. EMPATHISE</span>
          </button>

          <button
            onClick={() => onFilterChange('DEFINE')}
            className={`flex items-center gap-1.5 pb-2 text-xs font-mono tracking-widest uppercase transition-colors relative ${
              activeFilter === 'DEFINE'
                ? 'text-[#171717] font-bold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#171717]'
                : 'text-[#737373] hover:text-[#171717]'
            }`}
          >
            <span>02. DEFINE</span>
          </button>
        </div>

        {/* Right: Hint */}
        <div className="hidden md:flex items-center gap-2 text-[11px] font-mono text-[#737373]">
          <span>CLICK ANY POST TO OPEN MULTI-SLIDE VIEWER</span>
        </div>
      </div>
    </header>
  );
}
