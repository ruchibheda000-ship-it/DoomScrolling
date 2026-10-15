import React, { useState, useEffect, useRef } from 'react';

export default function PostModal({ post, isOpen, onClose, onSelectNextPost }) {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const touchStartXRef = useRef(null);
  const touchEndXRef = useRef(null);
  const modalRef = useRef(null);

  // Reset to first slide when a new post is opened
  useEffect(() => {
    if (isOpen) {
      setCurrentSlideIndex(0);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, post?.id]);

  // Keyboard navigation & accessibility
  useEffect(() => {
    if (!isOpen || !post) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowRight') {
        goToNextSlide();
      } else if (e.key === 'ArrowLeft') {
        goToPrevSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, currentSlideIndex, post]);

  if (!isOpen || !post) return null;

  const totalSlides = post.slides.length;
  const currentSlide = post.slides[currentSlideIndex];
  const isFirstSlide = currentSlideIndex === 0;
  const isLastSlide = currentSlideIndex === totalSlides - 1;

  const goToNextSlide = () => {
    if (currentSlideIndex < totalSlides - 1) {
      setCurrentSlideIndex((prev) => prev + 1);
    }
  };

  const goToPrevSlide = () => {
    if (currentSlideIndex > 0) {
      setCurrentSlideIndex((prev) => prev - 1);
    }
  };

  // Touch swipe handling for mobile
  const handleTouchStart = (e) => {
    touchStartXRef.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndXRef.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartXRef.current || !touchEndXRef.current) return;
    const distance = touchStartXRef.current - touchEndXRef.current;
    const minSwipeDistance = 45; // in px

    if (distance > minSwipeDistance) {
      // Swiped left -> Next
      goToNextSlide();
    } else if (distance < -minSwipeDistance) {
      // Swiped right -> Prev
      goToPrevSlide();
    }

    touchStartXRef.current = null;
    touchEndXRef.current = null;
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-slide-title"
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/85 backdrop-blur-md transition-opacity duration-300"
    >
      {/* Modal Dialog Content Container (stops click propagation so clicking inside does NOT close) */}
      <div
        ref={modalRef}
        onClick={(e) => e.stopPropagation()}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        className="relative w-full max-w-3xl max-h-[92vh] sm:max-h-[88vh] bg-[#F5F4F0] text-[#171717] rounded-sm shadow-2xl flex flex-col border border-neutral-700/30 overflow-hidden select-text"
      >
        {/* Top Header Bar: Segmented Progress + Counter + Close Button */}
        <div className="pt-3.5 px-4 sm:px-6 pb-3 border-b border-[#E5E4DE] bg-[#F5F4F0] flex-shrink-0">
          {/* Segmented Story Progress Bar */}
          <div className="flex items-center gap-1.5 w-full mb-3" aria-label="Slide progress">
            {post.slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlideIndex(idx)}
                aria-label={`Jump to slide ${idx + 1}`}
                className="h-1 flex-1 rounded-full overflow-hidden bg-[#D8D7D0] transition-all hover:h-1.5"
              >
                <div
                  className={`h-full transition-all duration-300 ${
                    idx < currentSlideIndex
                      ? 'w-full bg-[#171717]'
                      : idx === currentSlideIndex
                      ? 'w-full bg-[#171717]'
                      : 'w-0'
                  }`}
                />
              </button>
            ))}
          </div>

          {/* Title & Metadata Strip */}
          <div className="flex items-center justify-between text-xs font-mono tracking-wider">
            <div className="flex items-center gap-2 overflow-hidden text-ellipsis whitespace-nowrap">
              <span className="px-1.5 py-0.5 bg-[#171717] text-[#F5F4F0] text-[10px] rounded-xs font-bold">
                POST {post.number}
              </span>
              <span className="text-[#737373] uppercase hidden sm:inline">•</span>
              <span className="text-[#525252] uppercase text-[11px] truncate">
                {post.category}
              </span>
            </div>

            <div className="flex items-center gap-3 flex-shrink-0">
              <span className="text-[11px] font-bold text-[#171717]">
                0{currentSlideIndex + 1} / 0{totalSlides}
              </span>

              {/* Close Button */}
              <button
                onClick={onClose}
                aria-label="Close post viewer"
                className="p-1 rounded-sm text-[#737373] hover:text-[#171717] hover:bg-[#EBEAE5] transition-colors"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Slide Body: Dynamic Content by Slide Type */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-7 md:p-9 space-y-6">
          {/* SLIDE TYPE: COVER */}
          {currentSlide.slideType === 'cover' && (
            <div className="space-y-6 animate-fadeIn">
              {currentSlide.image && (
                <div className="relative aspect-video sm:aspect-[21/9] w-full rounded-xs overflow-hidden film-grain bg-[#171717]">
                  <img
                    src={currentSlide.image}
                    alt={post.title}
                    className="w-full h-full object-cover filter grayscale contrast-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
              )}

              <div>
                <span className="text-xs font-mono tracking-widest uppercase text-[#737373] block mb-1">
                  EDITORIAL COVER / {post.phase} PHASE
                </span>
                <h2
                  id="modal-slide-title"
                  className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#171717] tracking-tight leading-tight"
                >
                  {currentSlide.headline}
                </h2>
                <p className="text-base sm:text-lg font-medium text-[#525252] mt-2">
                  {currentSlide.subheading}
                </p>
              </div>

              <div className="p-4 sm:p-5 bg-[#ECEBE5] border-l-3 border-[#171717] rounded-xs">
                <p className="text-sm sm:text-base text-[#262626] leading-relaxed font-serif italic">
                  "{currentSlide.abstract}"
                </p>
              </div>

              <div className="text-xs font-mono text-[#737373] flex items-center justify-between pt-2">
                <span>SLIDE 01: INTRODUCTION</span>
                <span>SWIPE OR USE → TO PROCEED</span>
              </div>
            </div>
          )}

          {/* SLIDE TYPE: CONTEXT & METHODOLOGY */}
          {currentSlide.slideType === 'context' && (
            <div className="space-y-6 animate-fadeIn">
              <div>
                <span className="text-xs font-mono tracking-widest uppercase text-[#737373] block mb-1">
                  METHODOLOGY & FIELD DESIGN
                </span>
                <h2
                  id="modal-slide-title"
                  className="text-2xl sm:text-3xl font-extrabold text-[#171717] tracking-tight"
                >
                  {currentSlide.headline}
                </h2>
              </div>

              {/* Research Objective */}
              {currentSlide.objective && (
                <div className="p-4 bg-[#FFFFFF] border border-[#E5E4DE] rounded-xs shadow-xs">
                  <span className="text-[10px] font-mono tracking-widest uppercase text-[#737373] block mb-1">
                    RESEARCH OBJECTIVE
                  </span>
                  <p className="text-sm sm:text-base text-[#171717] leading-relaxed font-medium">
                    {currentSlide.objective}
                  </p>
                </div>
              )}

              {/* Methodology details */}
              {currentSlide.methodology && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="p-3 bg-[#EFEFEA] rounded-xs border border-[#E5E4DE]">
                    <span className="font-mono text-[10px] uppercase text-[#737373] block mb-1">
                      PARTICIPANT COHORT
                    </span>
                    <p className="font-semibold text-[#171717]">{currentSlide.methodology.cohort}</p>
                  </div>
                  <div className="p-3 bg-[#EFEFEA] rounded-xs border border-[#E5E4DE]">
                    <span className="font-mono text-[10px] uppercase text-[#737373] block mb-1">
                      FIELD PROTOCOL
                    </span>
                    <p className="text-[#404040]">{currentSlide.methodology.protocol}</p>
                  </div>
                </div>
              )}

              {/* Specific Interview Questions */}
              {currentSlide.interviewQuestions && (
                <div className="space-y-2">
                  <span className="text-[11px] font-mono tracking-wider uppercase text-[#525252] block">
                    INQUIRY PROTOCOL / INTERVIEW QUESTIONS:
                  </span>
                  <div className="space-y-2">
                    {currentSlide.interviewQuestions.map((q, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2.5 p-2.5 bg-[#FFFFFF] border border-[#E5E4DE] rounded-xs text-xs sm:text-sm text-[#262626]"
                      >
                        <span className="font-mono font-bold text-[#737373] flex-shrink-0">
                          Q{idx + 1}.
                        </span>
                        <p>{q}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* SLIDE TYPE: EVIDENCE (Field Observations & Participant Quotes) */}
          {(currentSlide.slideType === 'evidence' || currentSlide.slideType === 'observation') && (
            <div className="space-y-5 animate-fadeIn">
              <div>
                <span className="text-xs font-mono tracking-widest uppercase text-[#737373] block mb-1">
                  EMPIRICAL DATA / EMPATHISE FIELDWORK
                </span>
                <h2
                  id="modal-slide-title"
                  className="text-2xl sm:text-3xl font-extrabold text-[#171717] tracking-tight"
                >
                  {currentSlide.headline}
                </h2>
              </div>

              {/* Items List with distinct tags */}
              <div className="space-y-4">
                {currentSlide.items.map((item, idx) => (
                  <div
                    key={idx}
                    className={`p-4 rounded-xs border transition-all ${
                      item.type === 'observation'
                        ? 'bg-[#171717] text-[#F5F4F0] border-[#171717]'
                        : item.type === 'quote'
                        ? 'bg-[#FFFFFF] border-[#D0CFCA] text-[#171717]'
                        : item.type === 'contradiction'
                        ? 'bg-[#FAF8F5] border-[#D5A021]/50 text-[#171717]'
                        : 'bg-[#EBEAE4] border-[#D8D7D0] text-[#262626]'
                    }`}
                  >
                    {/* Badge */}
                    <div className="flex items-center justify-between mb-2">
                      <span
                        className={`text-[9px] font-mono tracking-widest uppercase px-2 py-0.5 rounded-xs font-bold ${
                          item.type === 'observation'
                            ? 'bg-neutral-800 text-neutral-300'
                            : item.type === 'quote'
                            ? 'bg-[#EFEFEA] text-[#171717]'
                            : item.type === 'contradiction'
                            ? 'bg-[#F2E5C4] text-[#7A5400]'
                            : 'bg-neutral-300 text-neutral-800'
                        }`}
                      >
                        {item.label}
                      </span>
                      {item.attribution && (
                        <span className="text-[10px] font-mono text-[#737373]">{item.attribution}</span>
                      )}
                    </div>

                    {/* Content */}
                    <p
                      className={`text-sm sm:text-base leading-relaxed ${
                        item.type === 'quote' ? 'font-serif italic text-base sm:text-lg' : 'font-sans'
                      }`}
                    >
                      {item.content}
                    </p>
                  </div>
                ))}
              </div>

              <div className="p-3 bg-[#EBEAE5] text-[11px] font-mono text-[#525252] rounded-xs border border-[#DDDCD6]">
                ℹ️ <strong>Research Integrity Note:</strong> Direct interview quotes and field notes contain verified placeholders [ ] pending final transcription audit to prevent fabricated claims.
              </div>
            </div>
          )}

          {/* SLIDE TYPE: SECONDARY LITERATURE */}
          {currentSlide.slideType === 'secondary' && (
            <div className="space-y-5 animate-fadeIn">
              <div>
                <span className="text-xs font-mono tracking-widest uppercase text-[#737373] block mb-1">
                  SECONDARY LITERATURE & THEORETICAL GROUNDING
                </span>
                <h2
                  id="modal-slide-title"
                  className="text-2xl sm:text-3xl font-extrabold text-[#171717] tracking-tight"
                >
                  {currentSlide.headline}
                </h2>
              </div>

              <div className="space-y-4">
                {currentSlide.literature.map((lit, idx) => (
                  <div
                    key={idx}
                    className="p-4 sm:p-5 bg-[#FFFFFF] border border-[#E5E4DE] rounded-xs shadow-xs space-y-2"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="font-bold text-base sm:text-lg text-[#171717] leading-snug">
                        {lit.title}
                      </h3>
                      <a
                        href={lit.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-shrink-0 text-[10px] font-mono text-[#171717] underline hover:text-[#525252] flex items-center gap-1"
                      >
                        SOURCE ↗
                      </a>
                    </div>
                    <p className="text-xs font-mono text-[#737373]">
                      {lit.authors} • <em>{lit.publication}</em>
                    </p>
                    <p className="text-xs sm:text-sm text-[#404040] pt-1 leading-relaxed">
                      {lit.summary}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* SLIDE TYPE: CLUSTERS (Affinity Mapping) */}
          {currentSlide.slideType === 'clusters' && (
            <div className="space-y-5 animate-fadeIn">
              <div>
                <span className="text-xs font-mono tracking-widest uppercase text-[#737373] block mb-1">
                  DEFINE PHASE / AFFINITY MAPPING
                </span>
                <h2
                  id="modal-slide-title"
                  className="text-2xl sm:text-3xl font-extrabold text-[#171717] tracking-tight"
                >
                  {currentSlide.headline}
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {currentSlide.clusters.map((c) => (
                  <div
                    key={c.id}
                    className="p-4 bg-[#FFFFFF] border border-[#E5E4DE] rounded-xs shadow-xs space-y-1.5"
                  >
                    <span className="inline-block w-6 h-6 rounded-full bg-[#171717] text-[#F5F4F0] font-mono text-xs font-bold text-center leading-6 mb-1">
                      {c.id}
                    </span>
                    <h3 className="font-bold text-sm sm:text-base text-[#171717]">
                      {c.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#525252] leading-relaxed">
                      {c.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* SLIDE TYPE: INSIGHTS */}
          {currentSlide.slideType === 'insight' && (
            <div className="space-y-6 animate-fadeIn">
              <div>
                <span className="text-xs font-mono tracking-widest uppercase px-2 py-0.5 rounded-xs bg-[#171717] text-[#F5F4F0] font-bold">
                  {currentSlide.tag}
                </span>
                <h2
                  id="modal-slide-title"
                  className="text-2xl sm:text-3xl font-extrabold text-[#171717] tracking-tight mt-2"
                >
                  {currentSlide.headline}
                </h2>
              </div>

              <div className="p-5 sm:p-6 bg-[#FFFFFF] border-l-4 border-[#171717] rounded-xs shadow-sm">
                <p className="text-base sm:text-xl font-medium text-[#171717] leading-relaxed">
                  "{currentSlide.body}"
                </p>
              </div>

              {currentSlide.evidenceSupport && (
                <div className="p-4 bg-[#EBEAE5] rounded-xs text-xs sm:text-sm text-[#404040] space-y-1">
                  <span className="font-mono text-[10px] tracking-widest uppercase text-[#737373] block">
                    EMPIRICAL EVIDENCE BASIS:
                  </span>
                  <p>{currentSlide.evidenceSupport}</p>
                </div>
              )}
            </div>
          )}

          {/* SLIDE TYPE: POV */}
          {currentSlide.slideType === 'pov' && (
            <div className="space-y-5 animate-fadeIn">
              <div>
                <span className="text-xs font-mono tracking-widest uppercase text-[#737373] block mb-1">
                  DEFINE SYNTHESIS
                </span>
                <h2
                  id="modal-slide-title"
                  className="text-2xl sm:text-3xl font-extrabold text-[#171717] tracking-tight"
                >
                  Point of View (POV) Framework
                </h2>
              </div>

              <div className="space-y-3">
                <div className="p-4 bg-[#FFFFFF] border border-[#E5E4DE] rounded-xs">
                  <span className="font-mono text-[10px] text-[#737373] uppercase tracking-wider block mb-1">
                    [USER]
                  </span>
                  <p className="font-bold text-base sm:text-lg text-[#171717]">{currentSlide.user}</p>
                </div>

                <div className="p-4 bg-[#FFFFFF] border border-[#E5E4DE] rounded-xs">
                  <span className="font-mono text-[10px] text-[#737373] uppercase tracking-wider block mb-1">
                    [NEEDS]
                  </span>
                  <p className="font-bold text-base sm:text-lg text-[#171717]">{currentSlide.needs}</p>
                </div>

                <div className="p-4 bg-[#171717] text-[#F5F4F0] rounded-xs">
                  <span className="font-mono text-[10px] text-neutral-400 uppercase tracking-wider block mb-1">
                    [BECAUSE — SURPRISING INSIGHT]
                  </span>
                  <p className="font-medium text-base sm:text-lg leading-relaxed">{currentSlide.insight}</p>
                </div>
              </div>
            </div>
          )}

          {/* SLIDE TYPE: PROBLEM STATEMENT */}
          {currentSlide.slideType === 'problem' && (
            <div className="space-y-6 animate-fadeIn">
              <div>
                <span className="text-xs font-mono tracking-widest uppercase text-[#737373] block mb-1">
                  FORMAL DEFINE PHASE OUTPUT
                </span>
                <h2
                  id="modal-slide-title"
                  className="text-2xl sm:text-3xl font-extrabold text-[#171717] tracking-tight"
                >
                  Problem Statement
                </h2>
              </div>

              <div className="p-6 sm:p-8 bg-[#171717] text-[#F5F4F0] rounded-xs shadow-lg">
                <p className="text-lg sm:text-2xl font-serif leading-relaxed italic">
                  "{currentSlide.statement}"
                </p>
              </div>

              <p className="text-xs font-mono text-[#737373]">
                FORMULATED STRICTLY FROM VALIDATED EMPATHISE DATA.
              </p>
            </div>
          )}

          {/* SLIDE TYPE: HMW */}
          {currentSlide.slideType === 'hmw' && (
            <div className="space-y-5 animate-fadeIn">
              <div>
                <span className="text-xs font-mono tracking-widest uppercase text-[#737373] block mb-1">
                  ACTIONABLE RESEARCH FRAMEWORK
                </span>
                <h2
                  id="modal-slide-title"
                  className="text-2xl sm:text-3xl font-extrabold text-[#171717] tracking-tight"
                >
                  How Might We (HMW) Questions
                </h2>
              </div>

              <div className="space-y-3.5">
                {currentSlide.questions.map((q, idx) => (
                  <div
                    key={idx}
                    className="p-4 sm:p-5 bg-[#FFFFFF] border-l-3 border-[#171717] rounded-xs shadow-xs"
                  >
                    <span className="font-mono text-[10px] text-[#737373] uppercase tracking-wider block mb-1">
                      {q.num}
                    </span>
                    <p className="text-sm sm:text-base font-bold text-[#171717] leading-snug">
                      "{q.text}"
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* SLIDE TYPE: CONCLUSION / FINAL ROUTE */}
          {currentSlide.slideType === 'conclusion' && (
            <div className="space-y-6 py-4 animate-fadeIn">
              <span className="text-xs font-mono tracking-widest uppercase text-[#737373] block mb-1">
                POST {post.number} SUMMARY
              </span>
              <h2
                id="modal-slide-title"
                className="text-2xl sm:text-3xl font-extrabold text-[#171717] tracking-tight"
              >
                {currentSlide.headline}
              </h2>

              <div className="p-6 bg-[#FFFFFF] border border-[#E5E4DE] rounded-xs shadow-sm">
                <p className="text-base sm:text-xl font-serif italic text-[#171717] leading-relaxed">
                  "{currentSlide.callout}"
                </p>
              </div>

              {/* Prominent Next Post Route */}
              {currentSlide.nextPostId && (
                <div className="pt-4 border-t border-[#E5E4DE] flex flex-col sm:flex-row items-center justify-between gap-4">
                  <span className="text-xs font-mono text-[#737373]">
                    FINAL SLIDE REACHED
                  </span>

                  <button
                    onClick={() => onSelectNextPost(currentSlide.nextPostId)}
                    className="w-full sm:w-auto px-6 py-3 bg-[#171717] text-[#F5F4F0] text-xs font-mono tracking-widest uppercase rounded-xs hover:bg-black transition-transform hover:scale-[1.02] flex items-center justify-center gap-2"
                  >
                    <span>CONTINUE TO POST 0{currentSlide.nextPostId}: {currentSlide.nextPostTitle}</span>
                    <span>→</span>
                  </button>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Bottom Navigation Footer Controls */}
        <div className="p-3 sm:p-4 border-t border-[#E5E4DE] bg-[#F5F4F0] flex items-center justify-between text-xs font-mono flex-shrink-0">
          <button
            onClick={goToPrevSlide}
            disabled={isFirstSlide}
            aria-label="Previous slide"
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xs transition-colors ${
              isFirstSlide
                ? 'opacity-30 cursor-not-allowed text-[#A3A3A3]'
                : 'text-[#171717] hover:bg-[#EBEAE5] active:bg-[#E0DFD8]'
            }`}
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            <span className="hidden sm:inline">PREVIOUS</span>
          </button>

          <span className="text-[11px] text-[#737373] hidden sm:inline">
            [← / → ARROW KEYS OR SWIPE]
          </span>

          {isLastSlide && currentSlide.nextPostId ? (
            <button
              onClick={() => onSelectNextPost(currentSlide.nextPostId)}
              className="flex items-center gap-1.5 px-4 py-1.5 rounded-xs bg-[#171717] text-[#F5F4F0] hover:bg-black transition-colors font-bold"
            >
              <span>NEXT POST</span>
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          ) : (
            <button
              onClick={goToNextSlide}
              disabled={isLastSlide}
              aria-label="Next slide"
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xs transition-colors ${
                isLastSlide
                  ? 'opacity-30 cursor-not-allowed text-[#A3A3A3]'
                  : 'text-[#171717] hover:bg-[#EBEAE5] active:bg-[#E0DFD8] font-bold'
              }`}
            >
              <span className="hidden sm:inline">NEXT</span>
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
