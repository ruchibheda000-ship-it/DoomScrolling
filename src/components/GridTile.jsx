import React from 'react';

export default function GridTile({ post, onSelect }) {
  const isText = post.type === 'text';

  // Instagram-style Carousel Icon (two overlapping rounded squares)
  const CarouselBadge = ({ darkTheme = false }) => (
    <div
      className={`p-1.5 rounded-xs transition-opacity ${
        darkTheme ? 'bg-black/50 backdrop-blur-xs text-white' : 'text-[#737373]'
      }`}
      title="Multiple research slides"
      aria-hidden="true"
    >
      <svg className="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="none">
        <rect
          x="7"
          y="3"
          width="14"
          height="14"
          rx="2.5"
          stroke="currentColor"
          strokeWidth="1.8"
          fill={darkTheme ? "rgba(0,0,0,0.3)" : "rgba(255,255,255,0.8)"}
        />
        <rect
          x="3"
          y="7"
          width="14"
          height="14"
          rx="2.5"
          stroke="currentColor"
          strokeWidth="1.8"
          fill={darkTheme ? "rgba(0,0,0,0.6)" : "white"}
        />
      </svg>
    </div>
  );

  return (
    <article
      tabIndex={0}
      role="button"
      onClick={() => onSelect(post)}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onSelect(post);
        }
      }}
      aria-label={`Open research post: ${post.title}, ${post.slides.length} slides`}
      className="group relative aspect-square w-full cursor-pointer overflow-hidden border border-[#E5E4DE] bg-[#FFFFFF] transition-all duration-300 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#171717] focus:ring-offset-2 select-none"
    >
      {isText ? (
        /* Text-Only Editorial Cover (1:1 with Slide 1) */
        <div className="w-full h-full p-4 sm:p-6 md:p-7 flex flex-col justify-between bg-[#FFFFFF] transition-colors duration-300 group-hover:bg-[#FAF9F6]">
          {/* Top Row: Tiny Editorial Note + Carousel Icon */}
          <div className="flex items-start justify-between gap-2">
            <div className="max-w-[72%] sm:max-w-[68%]">
              <span className="font-mono text-[9px] sm:text-[10px] text-[#A3A3A3] block uppercase tracking-wider mb-0.5">
                {post.number} / {post.phase}
              </span>
              <p className="text-[8px] sm:text-[9.5px] leading-[1.25] text-[#808080] font-sans line-clamp-3 sm:line-clamp-4 select-none">
                {post.topNote}
              </p>
            </div>
            <CarouselBadge darkTheme={false} />
          </div>

          {/* Bottom Left: Bold, Minimalist Title */}
          <div className="mt-auto pt-2">
            <h2 className="font-extrabold text-xl sm:text-2xl md:text-[28px] lg:text-[32px] text-[#171717] leading-[1.05] tracking-tight whitespace-pre-line group-hover:text-black transition-transform duration-300 group-hover:translate-x-0.5">
              {post.displayTitle}
            </h2>
            <div className="mt-1 flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              <span className="text-[9px] font-mono tracking-widest text-[#737373] uppercase">
                {post.slides.length} SLIDES • OPEN ARCHIVE →
              </span>
            </div>
          </div>
        </div>
      ) : (
        /* Photographic Cover (1:1 with Slide 1) */
        <div className="relative w-full h-full bg-[#171717] film-grain overflow-hidden">
          {/* Main Monochrome Image (object-fit: cover) */}
          <img
            src={post.image}
            alt={post.title}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 filter grayscale contrast-110 brightness-95"
          />

          {/* Film Vignette Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/35 pointer-events-none" />

          {/* Top-Right: Carousel Badge */}
          <div className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10">
            <CarouselBadge darkTheme={true} />
          </div>

          {/* Top-Left: Minimal Post Number */}
          <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-10">
            <span className="px-1.5 py-0.5 rounded-xs bg-black/60 backdrop-blur-xs text-[9px] sm:text-[10px] font-mono text-neutral-300 uppercase tracking-widest">
              {post.number}
            </span>
          </div>

          {/* Bottom Left: Atmospheric Title Overlay */}
          <div className="absolute bottom-3 left-3 right-3 sm:bottom-5 sm:left-5 sm:right-5 z-10">
            <span className="text-[9px] font-mono uppercase tracking-widest text-neutral-400 block mb-0.5">
              {post.phase} ARCHIVE
            </span>
            <h2 className="font-extrabold text-lg sm:text-xl md:text-2xl text-[#F5F4F0] leading-tight tracking-tight drop-shadow-sm whitespace-pre-line">
              {post.displayTitle}
            </h2>
            <p className="text-[10px] sm:text-xs text-neutral-300 line-clamp-1 mt-1 opacity-80 group-hover:opacity-100 transition-opacity">
              {post.coverExcerpt}
            </p>
          </div>
        </div>
      )}
    </article>
  );
}
