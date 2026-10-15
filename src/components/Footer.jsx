import React from 'react';
import { PROJECT_METADATA } from '../data/researchPosts';

export default function Footer({ onScrollTop }) {
  return (
    <footer className="mt-16 sm:mt-24 pt-10 pb-16 border-t border-[#E5E4DE] text-xs font-mono text-[#737373] space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        <div className="md:col-span-5 space-y-2">
          <div className="flex items-center gap-2 text-[#171717] font-bold">
            <span>{PROJECT_METADATA.title}</span>
            <span>•</span>
            <span className="text-[10px] text-[#737373] uppercase">{PROJECT_METADATA.metaLine}</span>
          </div>
          <p className="text-[#525252] font-sans leading-relaxed text-xs">
            A design-thinking investigation strictly restricted to the Empathise and Define phases. Documenting the erosion of idle time and the somatic convenience of infinite digital feeds.
          </p>
        </div>

        <div className="md:col-span-4 space-y-1.5">
          <span className="text-[10px] uppercase font-bold text-[#171717] tracking-wider block">
            RESEARCH ETHICS & INTEGRITY
          </span>
          <p className="text-[11px] text-[#737373] leading-relaxed font-sans">
            All qualitative placeholders [ ] reflect ongoing transcription audit. No fabricated participant counts, quotations, or synthetic findings are presented.
          </p>
        </div>

        <div className="md:col-span-3 flex flex-col md:items-end justify-between space-y-3">
          <button
            onClick={onScrollTop}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xs border border-[#D5D4CE] bg-[#FFFFFF] text-[#171717] hover:bg-[#EFEFEA] transition-colors self-start md:self-end"
          >
            <span>↑ BACK TO TOP</span>
          </button>
          <span className="text-[10px] text-[#A3A3A3]">
            ARCHIVE RELEASE v1.4 / 2026
          </span>
        </div>
      </div>

      <div className="pt-6 border-t border-[#ECEBE6] flex flex-col sm:flex-row items-center justify-between gap-3 text-[10px] text-[#A3A3A3]">
        <span>© 2026 THE BOREDOM PROJECT. EDITORIAL QUALITATIVE ARCHIVE.</span>
        <span>ACADEMIC FIELDWORK • NON-COMMERCIAL DESIGN INQUIRY</span>
      </div>
    </footer>
  );
}
