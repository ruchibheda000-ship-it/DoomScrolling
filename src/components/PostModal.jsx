import React, { useState, useEffect, useRef } from 'react';
import AffinityMap from './AffinityMap';

export default function PostModal({ post, isOpen, onClose, onSelectNextPost }) {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const touchStartXRef = useRef(null);
  const touchEndXRef = useRef(null);

  // Always reset to first slide (Slide 1 = Cover) when opening a post
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
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/85 backdrop-blur-md transition-opacity duration-300 select-none"
    >
      {/* 
        FIXED RESPONSIVE VIEWER FRAME (Bug A Fix)
        Desktop: strictly w-[900px] h-[640px] max-w-[94vw] max-h-[88vh]
        Mobile: strictly w-full max-w-lg h-[84vh] max-h-[660px]
        Outer frame dimensions NEVER depend on slide content, image dimensions, or text length!
      */}
      <div
        onClick={(e) => e.stopPropagation()}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        className="relative w-full max-w-[900px] h-[640px] max-w-[94vw] max-h-[88vh] bg-[#F5F4F0] text-[#171717] rounded-xs shadow-2xl flex flex-col border border-neutral-700/30 overflow-hidden select-text"
      >
        {/* Top Header Bar: Segmented Progress + Counter + Close Button (Fixed Height: h-14) */}
        <div className="h-14 px-4 sm:px-6 border-b border-[#E5E4DE] bg-[#F5F4F0] flex flex-col justify-center flex-shrink-0">
          {/* Segmented Story Progress Bar */}
          <div className="flex items-center gap-1.5 w-full mb-1.5" aria-label="Slide progress">
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
                className="p-1 rounded-xs text-[#737373] hover:text-[#171717] hover:bg-[#EBEAE5] transition-colors"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* 
          Slide Body Viewport: Fixed flex-1 container.
          Text-heavy slides scroll within slide-scroll overflow-y-auto.
          Outer viewer box NEVER resizes.
        */}
        <div className="flex-1 min-h-0 overflow-hidden relative w-full h-full">
          {/* SLIDE 1: CANONICAL COVER (Bug B Fix) */}
          {isFirstSlide ? (
            post.type === 'photo' ? (
              /* Photo Cover: Identical crop, typography, and asset as grid tile */
              <div className="relative w-full h-full bg-[#171717] film-grain overflow-hidden flex flex-col justify-end p-6 sm:p-10 md:p-12">
                <img
                  src={post.image}
                  alt={post.title}
                  className="absolute inset-0 w-full h-full object-cover filter grayscale contrast-110 brightness-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/30 pointer-events-none" />

                <div className="relative z-10 max-w-xl space-y-2">
                  <span className="inline-block px-2 py-0.5 rounded-xs bg-black/60 backdrop-blur-xs text-[10px] font-mono text-neutral-300 uppercase tracking-widest">
                    POST {post.number} / {post.phase} PHASE
                  </span>
                  <h1
                    id="modal-slide-title"
                    className="font-extrabold text-2xl sm:text-4xl md:text-5xl text-[#F5F4F0] leading-tight tracking-tight drop-shadow-md whitespace-pre-line"
                  >
                    {post.displayTitle}
                  </h1>
                  <p className="text-sm sm:text-base text-neutral-200 font-sans leading-relaxed pt-1">
                    {currentSlide.abstract}
                  </p>
                  <div className="pt-3 flex items-center gap-2 text-xs font-mono text-neutral-400">
                    <span>SLIDE 01 / {totalSlides} (COVER)</span>
                    <span>•</span>
                    <span className="text-[#F5F4F0] underline cursor-pointer" onClick={goToNextSlide}>
                      EXPLORE RESEARCH ARCHIVE →
                    </span>
                  </div>
                </div>
              </div>
            ) : (
              /* Text-Led Cover: Identical typography, micro-note, and background as grid tile */
              <div className="w-full h-full p-6 sm:p-10 md:p-12 flex flex-col justify-between bg-[#FFFFFF] relative">
                <div className="flex items-start justify-between gap-4 border-b border-[#ECEBE6] pb-4">
                  <div className="max-w-md">
                    <span className="font-mono text-xs text-[#A3A3A3] block uppercase tracking-wider mb-1">
                      POST {post.number} / {post.phase} PHASE
                    </span>
                    <p className="text-xs text-[#737373] font-sans leading-relaxed">
                      {post.topNote}
                    </p>
                  </div>
                  <span className="px-2 py-0.5 bg-[#EAE9E4] text-[#171717] font-mono text-xs rounded-xs font-bold flex-shrink-0">
                    SLIDE 01 (COVER)
                  </span>
                </div>

                <div className="my-auto py-6">
                  <h1
                    id="modal-slide-title"
                    className="font-extrabold text-3xl sm:text-5xl md:text-6xl text-[#171717] leading-[1.05] tracking-tight whitespace-pre-line"
                  >
                    {post.displayTitle}
                  </h1>
                  <p className="text-base sm:text-xl text-[#525252] font-medium mt-3 max-w-xl leading-relaxed">
                    {currentSlide.subheading}
                  </p>
                </div>

                <div className="p-4 bg-[#F5F4F0] border-l-4 border-[#171717] rounded-xs flex items-center justify-between gap-4">
                  <p className="text-xs sm:text-sm text-[#262626] font-serif italic">
                    "{currentSlide.abstract}"
                  </p>
                  <button
                    onClick={goToNextSlide}
                    className="flex-shrink-0 px-3 py-1.5 bg-[#171717] text-[#F5F4F0] font-mono text-xs rounded-xs font-bold hover:bg-black"
                  >
                    START →
                  </button>
                </div>
              </div>
            )
          ) : (
            /* SLIDES 2..N: RESEARCH CONTENT (Scrolls inside slide-scroll overflow-y-auto) */
            <div className="w-full h-full overflow-y-auto p-5 sm:p-7 md:p-8 space-y-6 slide-scroll overscroll-contain">
              {/* SLIDE: Context & Observation Narrative */}
              {currentSlide.slideType === 'context' && (
                <div className="space-y-6 animate-fadeIn">
                  <div>
                    <span className="text-xs font-mono tracking-widest uppercase text-[#737373] block mb-1">
                      RESEARCH FRAMING
                    </span>
                    <h2 id="modal-slide-title" className="text-2xl sm:text-3xl font-extrabold text-[#171717] tracking-tight">
                      {currentSlide.headline}
                    </h2>
                  </div>

                  {currentSlide.observationNarrative && (
                    <div className="space-y-4">
                      <div className="p-4 bg-[#FFFFFF] border border-[#E5E4DE] rounded-xs space-y-1.5">
                        <span className="text-[10px] font-mono uppercase font-bold text-[#737373] tracking-wider block">
                          INITIAL CASUAL OBSERVATION
                        </span>
                        <p className="text-sm sm:text-base text-[#171717] leading-relaxed font-sans">
                          {currentSlide.observationNarrative.initialObservation}
                        </p>
                      </div>

                      <div className="p-4 bg-[#FFFFFF] border-l-3 border-[#171717] rounded-xs space-y-1.5">
                        <span className="text-[10px] font-mono uppercase font-bold text-[#737373] tracking-wider block">
                          WHY THIS RAISED A DESIGN QUESTION
                        </span>
                        <p className="text-sm sm:text-base text-[#262626] leading-relaxed font-sans">
                          {currentSlide.observationNarrative.whyRaisedQuestion}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* SLIDE: Formal Objective */}
              {currentSlide.slideType === 'objective_formal' && (
                <div className="space-y-6 animate-fadeIn">
                  <div>
                    <span className="text-xs font-mono tracking-widest uppercase text-[#737373] block mb-1">
                      EMPIRICAL FOUNDATION
                    </span>
                    <h2 id="modal-slide-title" className="text-2xl sm:text-3xl font-extrabold text-[#171717] tracking-tight">
                      {currentSlide.headline}
                    </h2>
                  </div>

                  <div className="p-5 sm:p-6 bg-[#171717] text-[#F5F4F0] rounded-xs shadow-md">
                    <span className="text-[10px] font-mono tracking-widest uppercase text-neutral-400 block mb-2">
                      CORE RESEARCH OBJECTIVE
                    </span>
                    <p className="text-base sm:text-xl font-serif italic leading-relaxed">
                      "{currentSlide.formalObjective}"
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    {currentSlide.approachDetails.map((app, idx) => (
                      <div key={idx} className="p-3.5 bg-[#FFFFFF] border border-[#E5E4DE] rounded-xs space-y-1">
                        <span className="font-mono text-[10px] font-bold text-[#171717] block">
                          {app.label}
                        </span>
                        <p className="text-xs text-[#525252] leading-relaxed">
                          {app.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* SLIDE: Conceptual Distinction */}
              {currentSlide.slideType === 'conceptual_distinction' && (
                <div className="space-y-5 animate-fadeIn">
                  <div>
                    <span className="text-xs font-mono tracking-widest uppercase text-[#737373] block mb-1">
                      RIGOROUS TAXONOMY
                    </span>
                    <h2 id="modal-slide-title" className="text-2xl sm:text-3xl font-extrabold text-[#171717] tracking-tight">
                      {currentSlide.headline}
                    </h2>
                    <p className="text-xs sm:text-sm text-[#525252] mt-1">{currentSlide.explanation}</p>
                  </div>

                  <div className="space-y-3">
                    {currentSlide.distinctions.map((d, idx) => (
                      <div key={idx} className="p-4 bg-[#FFFFFF] border border-[#E5E4DE] rounded-xs space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="w-5 h-5 rounded-full bg-[#171717] text-[#F5F4F0] text-[10px] font-mono font-bold flex items-center justify-center">
                            {idx + 1}
                          </span>
                          <h3 className="font-bold text-sm sm:text-base text-[#171717]">{d.term}</h3>
                        </div>
                        <p className="text-xs sm:text-sm text-[#404040] leading-relaxed pl-7">
                          {d.definition}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="p-3 bg-[#EAE9E4] text-[11px] font-mono text-[#525252] rounded-xs border border-[#DDDCD6]">
                    ⚠️ <strong>Boundary Note:</strong> {currentSlide.boundaryNote}
                  </div>
                </div>
              )}

              {/* SLIDE: Cohort Methodology */}
              {currentSlide.slideType === 'cohort_methodology' && (
                <div className="space-y-5 animate-fadeIn">
                  <div>
                    <span className="text-xs font-mono tracking-widest uppercase text-[#737373] block mb-1">
                      PRIMARY FIELD ARCHIVE
                    </span>
                    <h2 id="modal-slide-title" className="text-2xl sm:text-3xl font-extrabold text-[#171717] tracking-tight">
                      {currentSlide.headline}
                    </h2>
                    <p className="text-xs sm:text-sm text-[#525252] mt-1">{currentSlide.rationale}</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {currentSlide.cohorts.map((c, idx) => (
                      <div key={idx} className="p-3.5 bg-[#FFFFFF] border border-[#E5E4DE] rounded-xs space-y-1">
                        <span className="font-mono text-[10px] font-bold text-[#171717] uppercase block">
                          COHORT {idx + 1}: {c.name}
                        </span>
                        <p className="text-xs text-[#525252] leading-relaxed">{c.context}</p>
                      </div>
                    ))}
                  </div>

                  <div className="p-3 bg-[#EAE9E4] text-[11px] font-mono text-[#525252] rounded-xs border border-[#DDDCD6]">
                    ℹ️ <strong>Research Honesty:</strong> {currentSlide.integrityNote}
                  </div>
                </div>
              )}

              {/* SLIDE: Interview Protocol Questions */}
              {currentSlide.slideType === 'interview_protocol' && (
                <div className="space-y-5 animate-fadeIn">
                  <div>
                    <span className="text-xs font-mono tracking-widest uppercase text-[#737373] block mb-1">
                      FIELD INQUIRY PROTOCOL
                    </span>
                    <h2 id="modal-slide-title" className="text-2xl sm:text-3xl font-extrabold text-[#171717] tracking-tight">
                      {currentSlide.headline}
                    </h2>
                  </div>

                  <div className="space-y-3.5">
                    {currentSlide.categories.map((cat, idx) => (
                      <div key={idx} className="p-3.5 bg-[#FFFFFF] border border-[#E5E4DE] rounded-xs space-y-2">
                        <span className="font-mono text-[11px] font-bold text-[#171717] uppercase tracking-wide block border-b border-[#ECEBE6] pb-1">
                          {cat.group}
                        </span>
                        <ul className="space-y-1 text-xs text-[#404040]">
                          {cat.questions.map((q, qIdx) => (
                            <li key={qIdx} className="flex items-start gap-2">
                              <span className="font-mono text-[#737373]">•</span>
                              <span>{q}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* SLIDE: Cohort Profiles (Parts 1 & 2) */}
              {(currentSlide.slideType === 'profiles_part1' || currentSlide.slideType === 'profiles_part2') && (
                <div className="space-y-5 animate-fadeIn">
                  <div>
                    <span className="text-xs font-mono tracking-widest uppercase text-[#737373] block mb-1">
                      QUALITATIVE INTERVIEW PROFILES
                    </span>
                    <h2 id="modal-slide-title" className="text-2xl sm:text-3xl font-extrabold text-[#171717] tracking-tight">
                      {currentSlide.headline}
                    </h2>
                  </div>

                  <div className="space-y-5">
                    {currentSlide.profiles.map((p, idx) => (
                      <div key={idx} className="p-4 sm:p-5 bg-[#FFFFFF] border border-[#E5E4DE] rounded-xs space-y-3 shadow-xs">
                        <div className="flex items-center justify-between border-b border-[#ECEBE6] pb-2">
                          <span className="font-mono text-xs font-bold text-[#171717] uppercase">
                            {p.cohort}
                          </span>
                          <span className="text-[10px] font-mono text-[#737373]">{p.context}</span>
                        </div>

                        <div className="space-y-2">
                          <div className="p-3 bg-[#F9F9F7] border-l-3 border-[#171717] rounded-xs">
                            <span className="text-[9px] font-mono text-[#737373] uppercase tracking-wider block mb-0.5">
                              PARTICIPANT QUOTATION
                            </span>
                            <p className="text-xs sm:text-sm font-serif italic text-[#171717]">{p.quotation}</p>
                          </div>

                          <div className="p-3 bg-[#171717] text-[#F5F4F0] rounded-xs">
                            <span className="text-[9px] font-mono text-neutral-400 uppercase tracking-wider block mb-0.5">
                              OBSERVED BEHAVIOUR
                            </span>
                            <p className="text-xs font-sans text-neutral-200">{p.observation}</p>
                          </div>

                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                            <div className="p-2.5 bg-[#EFEFEA] rounded-xs">
                              <span className="font-mono text-[9px] text-[#737373] uppercase block mb-0.5">
                                RESEARCHER INTERPRETATION
                              </span>
                              <p className="text-[#262626]">{p.interpretation}</p>
                            </div>
                            <div className="p-2.5 bg-[#EFEFEA] rounded-xs">
                              <span className="font-mono text-[9px] text-[#737373] uppercase block mb-0.5">
                                CONTRADICTIONS & EDGE CASES
                              </span>
                              <p className="text-[#262626]">{p.contradictions}</p>
                            </div>
                          </div>

                          <div className="p-2 bg-[#EAE9E4] rounded-xs text-xs font-mono text-[#171717]">
                            💡 <strong>Emerging Insight:</strong> {p.insight}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* SLIDE: Hobbies & Friction Investigation */}
              {currentSlide.slideType === 'investigation_prompts' && (
                <div className="space-y-5 animate-fadeIn">
                  <div>
                    <span className="text-xs font-mono tracking-widest uppercase text-[#737373] block mb-1">
                      HOBBY ACTIVATION DYNAMICS
                    </span>
                    <h2 id="modal-slide-title" className="text-2xl sm:text-3xl font-extrabold text-[#171717] tracking-tight">
                      {currentSlide.headline}
                    </h2>
                    <p className="text-xs sm:text-sm text-[#525252] mt-1">{currentSlide.promptFocus}</p>
                  </div>

                  <div className="space-y-2.5">
                    {currentSlide.prompts.map((p, idx) => (
                      <div key={idx} className="p-3 bg-[#FFFFFF] border border-[#E5E4DE] rounded-xs">
                        <span className="font-mono text-xs font-bold text-[#171717] block mb-0.5">
                          {p.title}
                        </span>
                        <p className="text-xs text-[#525252] leading-relaxed">{p.detail}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* SLIDE: Hypothesis Framing */}
              {currentSlide.slideType === 'hypothesis_framing' && (
                <div className="space-y-6 animate-fadeIn">
                  <div>
                    <span className="text-xs font-mono tracking-widest uppercase px-2 py-0.5 rounded-xs bg-[#171717] text-[#F5F4F0] font-bold">
                      {currentSlide.badge}
                    </span>
                    <h2 id="modal-slide-title" className="text-2xl sm:text-3xl font-extrabold text-[#171717] tracking-tight mt-2">
                      {currentSlide.headline}
                    </h2>
                  </div>

                  <div className="p-6 bg-[#FFFFFF] border-l-4 border-[#171717] rounded-xs shadow-md">
                    <p className="text-lg sm:text-2xl font-serif italic text-[#171717] leading-relaxed">
                      {currentSlide.hypothesis}
                    </p>
                  </div>

                  <div className="p-4 bg-[#EAE9E4] text-xs sm:text-sm text-[#404040] rounded-xs leading-relaxed">
                    <strong>Analytical Rationale:</strong> {currentSlide.rationale}
                  </div>
                </div>
              )}

              {/* SLIDE: Friction Matrix */}
              {currentSlide.slideType === 'friction_matrix' && (
                <div className="space-y-5 animate-fadeIn">
                  <div>
                    <span className="text-xs font-mono tracking-widest uppercase text-[#737373] block mb-1">
                      FRICTION COMPARISON FRAMEWORK
                    </span>
                    <h2 id="modal-slide-title" className="text-2xl sm:text-3xl font-extrabold text-[#171717] tracking-tight">
                      {currentSlide.headline}
                    </h2>
                    <p className="text-xs font-mono text-[#737373] mt-1">{currentSlide.matrixNote}</p>
                  </div>

                  <div className="space-y-3.5">
                    {currentSlide.categories.map((c, idx) => (
                      <div key={idx} className={`p-4 rounded-xs border border-[#E5E4DE] ${c.color} space-y-1.5`}>
                        <h3 className="font-mono text-xs font-bold text-[#171717]">{c.tier}</h3>
                        <p className="text-xs sm:text-sm text-[#171717] font-semibold">{c.activities}</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#525252] pt-1 border-t border-[#ECEBE6]">
                          <div><strong>Friction:</strong> {c.initiationFriction}</div>
                          <div><strong>Outcome:</strong> {c.outcome}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* SLIDE: Generation Comparison Matrix */}
              {currentSlide.slideType === 'comparison_matrix' && (
                <div className="space-y-5 animate-fadeIn">
                  <div>
                    <span className="text-xs font-mono tracking-widest uppercase text-[#737373] block mb-1">
                      MULTI-GENERATIONAL SYNTHESIS
                    </span>
                    <h2 id="modal-slide-title" className="text-2xl sm:text-3xl font-extrabold text-[#171717] tracking-tight">
                      {currentSlide.headline}
                    </h2>
                  </div>

                  <div className="space-y-4">
                    {currentSlide.matrix.map((row, idx) => (
                      <div key={idx} className="p-4 bg-[#FFFFFF] border border-[#E5E4DE] rounded-xs space-y-2">
                        <span className="font-mono text-xs font-bold text-[#171717] uppercase block border-b border-[#ECEBE6] pb-1">
                          {row.cohort}
                        </span>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                          <div><strong>Reasons for Phone:</strong> <span className="text-[#525252]">{row.reasonsForPhone}</span></div>
                          <div><strong>Free Time:</strong> <span className="text-[#525252]">{row.freeTimeActivity}</span></div>
                          <div className="sm:col-span-2 p-2 bg-[#F9F9F7] rounded-xs font-mono text-[11px] text-[#262626]">
                            <strong>First Response:</strong> {row.firstResponse}
                          </div>
                          <div><strong>Alternative Activities:</strong> <span className="text-[#525252]">{row.alternatives}</span></div>
                          <div><strong>Barriers to Starting:</strong> <span className="text-[#525252]">{row.barriers}</span></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* SLIDE: Similarities & Differences */}
              {currentSlide.slideType === 'similarities_differences' && (
                <div className="space-y-5 animate-fadeIn">
                  <div>
                    <span className="text-xs font-mono tracking-widest uppercase text-[#737373] block mb-1">
                      CROSS-COHORT ANALYSIS
                    </span>
                    <h2 id="modal-slide-title" className="text-2xl sm:text-3xl font-extrabold text-[#171717] tracking-tight">
                      {currentSlide.headline}
                    </h2>
                  </div>

                  <div className="space-y-4">
                    {currentSlide.sections.map((sec, idx) => (
                      <div key={idx} className="p-4 bg-[#FFFFFF] border border-[#E5E4DE] rounded-xs space-y-2">
                        <h3 className="font-bold text-sm text-[#171717] uppercase tracking-wide border-b border-[#ECEBE6] pb-1">
                          {sec.title}
                        </h3>
                        <ul className="space-y-1.5 text-xs sm:text-sm text-[#404040]">
                          {sec.points.map((pt, ptIdx) => (
                            <li key={ptIdx} className="flex items-start gap-2">
                              <span className="font-mono text-[#737373]">•</span>
                              <span>{pt}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* SLIDE: Literature Review (Post 05) */}
              {currentSlide.slideType === 'literature_review' && (
                <div className="space-y-5 animate-fadeIn">
                  <div>
                    <span className="text-xs font-mono tracking-widest uppercase text-[#737373] block mb-1">
                      SECONDARY RESEARCH SOURCES
                    </span>
                    <h2 id="modal-slide-title" className="text-2xl sm:text-3xl font-extrabold text-[#171717] tracking-tight">
                      {currentSlide.headline}
                    </h2>
                  </div>

                  <div className="space-y-4">
                    {currentSlide.papers.map((p, idx) => (
                      <div key={idx} className="p-4 bg-[#FFFFFF] border border-[#E5E4DE] rounded-xs space-y-2 shadow-xs">
                        <div className="flex items-start justify-between gap-3">
                          <div>
                            <span className="text-[10px] font-mono text-[#737373] uppercase">
                              {p.year} • <em>{p.journal}</em>
                            </span>
                            <h3 className="font-bold text-sm sm:text-base text-[#171717] leading-snug">
                              {p.title}
                            </h3>
                          </div>
                          <a
                            href={p.doi}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-shrink-0 px-2 py-1 bg-[#171717] text-[#F5F4F0] text-[10px] font-mono rounded-xs hover:bg-black font-bold flex items-center gap-1"
                          >
                            <span>DOI LINK</span>
                            <span>↗</span>
                          </a>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#525252] pt-1">
                          <div><strong>Design:</strong> {p.design}</div>
                          <div><strong>Key Findings:</strong> {p.findings}</div>
                          <div><strong>Limitations:</strong> {p.limitations}</div>
                          <div><strong>Project Relevance:</strong> {p.relevance}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* SLIDE: Thematic Synthesis (Post 05) */}
              {currentSlide.slideType === 'thematic_synthesis' && (
                <div className="space-y-5 animate-fadeIn">
                  <div>
                    <span className="text-xs font-mono tracking-widest uppercase text-[#737373] block mb-1">
                      THEMATIC TAXONOMY
                    </span>
                    <h2 id="modal-slide-title" className="text-2xl sm:text-3xl font-extrabold text-[#171717] tracking-tight">
                      {currentSlide.headline}
                    </h2>
                  </div>

                  <div className="space-y-2.5">
                    {currentSlide.themes.map((th, idx) => (
                      <div key={idx} className="p-3 bg-[#FFFFFF] border border-[#E5E4DE] rounded-xs space-y-0.5">
                        <h3 className="font-bold text-xs sm:text-sm text-[#171717]">{th.theme}</h3>
                        <p className="text-xs text-[#525252] leading-relaxed">{th.summary}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* SLIDE: Evidence Matrix (Post 05) */}
              {currentSlide.slideType === 'evidence_matrix' && (
                <div className="space-y-5 animate-fadeIn">
                  <div>
                    <span className="text-xs font-mono tracking-widest uppercase text-[#737373] block mb-1">
                      CORRELATION VS. CAUSATION
                    </span>
                    <h2 id="modal-slide-title" className="text-2xl sm:text-3xl font-extrabold text-[#171717] tracking-tight">
                      {currentSlide.headline}
                    </h2>
                  </div>

                  <div className="space-y-3.5">
                    {currentSlide.matrixRows.map((row, idx) => (
                      <div key={idx} className="p-4 bg-[#FFFFFF] border border-[#E5E4DE] rounded-xs space-y-2">
                        <span className="font-mono text-xs font-bold text-[#171717] block">
                          Q: "{row.question}"
                        </span>
                        <div className="text-[10px] font-mono text-[#737373]">
                          Informing Sources: {row.sources}
                        </div>
                        <div className="p-2.5 bg-[#FAF9F6] border-l-3 border-[#171717] rounded-xs text-xs text-[#262626] font-mono">
                          {row.distinction}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* SLIDE: Interactive Affinity Map (Post 06) */}
              {currentSlide.isAffinityMap && (
                <div className="space-y-4 animate-fadeIn">
                  <div>
                    <span className="text-xs font-mono tracking-widest uppercase text-[#737373] block mb-1">
                      INTERACTIVE QUALITATIVE MAP
                    </span>
                    <h2 id="modal-slide-title" className="text-2xl sm:text-3xl font-extrabold text-[#171717] tracking-tight">
                      {currentSlide.headline}
                    </h2>
                    <p className="text-xs text-[#525252] mt-0.5">{currentSlide.description}</p>
                  </div>

                  {/* AffinityMap Component */}
                  <AffinityMap />
                </div>
              )}

              {/* SLIDE: Research Synthesis Analysis (Post 06) */}
              {currentSlide.slideType === 'synthesis_analysis' && (
                <div className="space-y-5 animate-fadeIn">
                  <div>
                    <span className="text-xs font-mono tracking-widest uppercase text-[#737373] block mb-1">
                      QUALITATIVE SYNTHESIS
                    </span>
                    <h2 id="modal-slide-title" className="text-2xl sm:text-3xl font-extrabold text-[#171717] tracking-tight">
                      {currentSlide.headline}
                    </h2>
                  </div>

                  <div className="space-y-3">
                    {currentSlide.sections.map((sec, idx) => (
                      <div key={idx} className="p-3.5 bg-[#FFFFFF] border border-[#E5E4DE] rounded-xs space-y-1">
                        <span className="font-mono text-xs font-bold text-[#171717] uppercase block">
                          {sec.title}
                        </span>
                        <p className="text-xs sm:text-sm text-[#525252] leading-relaxed font-sans">{sec.text}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* SLIDE: Insight Journey (Post 07) */}
              {currentSlide.slideType === 'insight_journey' && (
                <div className="space-y-5 animate-fadeIn">
                  <div>
                    <span className="text-xs font-mono tracking-widest uppercase text-[#737373] block mb-1">
                      DEFINE PHASE REASONING
                    </span>
                    <h2 id="modal-slide-title" className="text-2xl sm:text-3xl font-extrabold text-[#171717] tracking-tight">
                      {currentSlide.headline}
                    </h2>
                  </div>

                  <div className="space-y-3">
                    {currentSlide.steps.map((st, idx) => (
                      <div key={idx} className="p-4 bg-[#FFFFFF] border border-[#E5E4DE] rounded-xs space-y-1">
                        <span className="font-mono text-[10px] uppercase font-bold text-[#737373] block">
                          {st.stage}
                        </span>
                        <p className="font-bold text-sm sm:text-base text-[#171717]">{st.content}</p>
                        <p className="text-xs text-[#737373] pt-0.5">{st.context}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* SLIDE: Evidence Evaluation (Post 07) */}
              {currentSlide.slideType === 'evidence_evaluation' && (
                <div className="space-y-5 animate-fadeIn">
                  <div>
                    <span className="text-xs font-mono tracking-widest uppercase text-[#737373] block mb-1">
                      CRITICAL REFLECTION
                    </span>
                    <h2 id="modal-slide-title" className="text-2xl sm:text-3xl font-extrabold text-[#171717] tracking-tight">
                      {currentSlide.headline}
                    </h2>
                  </div>

                  <div className="space-y-4">
                    {currentSlide.sections.map((sec, idx) => (
                      <div key={idx} className="p-4 bg-[#FFFFFF] border border-[#E5E4DE] rounded-xs space-y-2">
                        <h3 className="font-bold text-xs sm:text-sm text-[#171717] uppercase tracking-wide border-b border-[#ECEBE6] pb-1">
                          {sec.title}
                        </h3>
                        <ul className="space-y-1.5 text-xs text-[#404040]">
                          {sec.items.map((it, itIdx) => (
                            <li key={itIdx} className="flex items-start gap-2">
                              <span className="font-mono text-[#737373]">•</span>
                              <span>{it}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* SLIDE: Confidence Justification (Post 07) */}
              {currentSlide.slideType === 'confidence_justification' && (
                <div className="space-y-6 animate-fadeIn">
                  <div>
                    <span className="text-xs font-mono tracking-widest uppercase text-[#737373] block mb-1">
                      RESEARCH HONESTY
                    </span>
                    <h2 id="modal-slide-title" className="text-2xl sm:text-3xl font-extrabold text-[#171717] tracking-tight">
                      {currentSlide.headline}
                    </h2>
                  </div>

                  <div className="p-5 bg-[#171717] text-[#F5F4F0] rounded-xs">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 block mb-1">
                      EVALUATED CONFIDENCE LEVEL
                    </span>
                    <p className="text-base sm:text-xl font-bold">{currentSlide.confidence}</p>
                    <p className="text-xs sm:text-sm text-neutral-300 mt-2 leading-relaxed">
                      {currentSlide.justification}
                    </p>
                  </div>

                  <div className="p-4 bg-[#FFFFFF] border border-[#E5E4DE] rounded-xs text-xs sm:text-sm text-[#525252] leading-relaxed">
                    <strong>Primary vs. Secondary Synergy:</strong> {currentSlide.relationshipNote}
                  </div>
                </div>
              )}

              {/* SLIDE: Empathy Map (Post 08) */}
              {currentSlide.slideType === 'empathy_map' && (
                <div className="space-y-5 animate-fadeIn">
                  <div>
                    <span className="text-xs font-mono tracking-widest uppercase text-[#737373] block mb-1">
                      DEFINE PHASE / EMPATHY SYNTHESIS
                    </span>
                    <h2 id="modal-slide-title" className="text-2xl sm:text-3xl font-extrabold text-[#171717] tracking-tight">
                      {currentSlide.headline}
                    </h2>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    {currentSlide.quadrants.map((q, idx) => (
                      <div key={idx} className="p-4 bg-[#FFFFFF] border border-[#E5E4DE] rounded-xs space-y-2">
                        <span className="font-mono text-xs font-bold text-[#171717] uppercase block border-b border-[#ECEBE6] pb-1">
                          {q.label}
                        </span>
                        <ul className="space-y-1.5 text-xs text-[#404040]">
                          {q.items.map((it, itIdx) => (
                            <li key={itIdx} className="flex items-start gap-1.5">
                              <span className="font-mono text-[#737373]">•</span>
                              <span className={idx === 0 ? 'font-serif italic' : ''}>{it}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* SLIDE: Provisional Persona (Post 08) */}
              {currentSlide.slideType === 'provisional_persona' && (
                <div className="space-y-6 animate-fadeIn">
                  <div>
                    <span className="text-xs font-mono tracking-widest uppercase px-2 py-0.5 rounded-xs bg-[#171717] text-[#F5F4F0] font-bold">
                      {currentSlide.tag}
                    </span>
                    <h2 id="modal-slide-title" className="text-2xl sm:text-3xl font-extrabold text-[#171717] tracking-tight mt-2">
                      {currentSlide.persona.title}
                    </h2>
                  </div>

                  <div className="p-5 bg-[#FFFFFF] border border-[#E5E4DE] rounded-xs space-y-3">
                    <div>
                      <span className="font-mono text-[10px] text-[#737373] uppercase block">ARCHETYPE</span>
                      <p className="text-sm sm:text-base font-bold text-[#171717]">{currentSlide.persona.archetype}</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 border-t border-[#ECEBE6] text-xs">
                      <div>
                        <strong className="block text-[#171717] mb-0.5">Observed Behaviours:</strong>
                        <p className="text-[#525252] leading-relaxed">{currentSlide.persona.behaviours}</p>
                      </div>
                      <div>
                        <strong className="block text-[#171717] mb-0.5">Core Frustration:</strong>
                        <p className="text-[#525252] leading-relaxed">{currentSlide.persona.coreFrustration}</p>
                      </div>
                    </div>
                  </div>

                  <div className="p-3 bg-[#EAE9E4] text-[11px] font-mono text-[#525252] rounded-xs border border-[#DDDCD6]">
                    ⚠️ {currentSlide.persona.provisionalDisclaimer}
                  </div>
                </div>
              )}

              {/* SLIDE: POV, Problem Statement & HMW (Post 08) */}
              {currentSlide.slideType === 'pov_problem_hmw' && (
                <div className="space-y-5 animate-fadeIn">
                  <div>
                    <span className="text-xs font-mono tracking-widest uppercase text-[#737373] block mb-1">
                      FORMAL DEFINE PHASE ARTIFACTS
                    </span>
                    <h2 id="modal-slide-title" className="text-2xl sm:text-3xl font-extrabold text-[#171717] tracking-tight">
                      {currentSlide.headline}
                    </h2>
                  </div>

                  <div className="p-4 bg-[#FFFFFF] border border-[#E5E4DE] rounded-xs space-y-1">
                    <span className="font-mono text-[10px] font-bold text-[#737373] uppercase tracking-wider block">
                      {currentSlide.pov.label}
                    </span>
                    <p className="text-xs sm:text-sm text-[#171717] leading-relaxed font-sans">
                      "{currentSlide.pov.statement}"
                    </p>
                  </div>

                  <div className="p-4 bg-[#FFFFFF] border-l-4 border-[#171717] rounded-xs space-y-1 shadow-xs">
                    <span className="font-mono text-[10px] font-bold text-[#737373] uppercase tracking-wider block">
                      {currentSlide.problem.label}
                    </span>
                    <p className="text-xs sm:text-sm text-[#171717] leading-relaxed font-sans font-medium">
                      "{currentSlide.problem.statement}"
                    </p>
                  </div>

                  <div className="p-4 sm:p-5 bg-[#171717] text-[#F5F4F0] rounded-xs space-y-1.5 shadow-md">
                    <span className="font-mono text-[10px] font-bold text-neutral-400 uppercase tracking-wider block">
                      {currentSlide.hmw.label}
                    </span>
                    <p className="text-sm sm:text-lg font-serif italic leading-relaxed text-[#F5F4F0]">
                      "{currentSlide.hmw.question}"
                    </p>
                  </div>
                </div>
              )}

              {/* SLIDE: Conclusion / Next Route */}
              {currentSlide.slideType === 'conclusion' && (
                <div className="space-y-6 py-4 animate-fadeIn">
                  <span className="text-xs font-mono tracking-widest uppercase text-[#737373] block mb-1">
                    POST {post.number} SUMMARY
                  </span>
                  <h2 id="modal-slide-title" className="text-2xl sm:text-3xl font-extrabold text-[#171717] tracking-tight">
                    {currentSlide.headline}
                  </h2>

                  <div className="p-6 bg-[#FFFFFF] border border-[#E5E4DE] rounded-xs shadow-sm">
                    <p className="text-base sm:text-xl font-serif italic text-[#171717] leading-relaxed">
                      "{currentSlide.callout}"
                    </p>
                  </div>

                  {currentSlide.nextPostId && (
                    <div className="pt-4 border-t border-[#E5E4DE] flex flex-col sm:flex-row items-center justify-between gap-4">
                      <span className="text-xs font-mono text-[#737373]">
                        FINAL SLIDE (0{totalSlides}/{totalSlides})
                      </span>

                      <button
                        onClick={() => onSelectNextPost(currentSlide.nextPostId)}
                        className="w-full sm:w-auto px-6 py-3 bg-[#171717] text-[#F5F4F0] text-xs font-mono tracking-widest uppercase rounded-xs hover:bg-black transition-transform hover:scale-[1.02] flex items-center justify-center gap-2 font-bold"
                      >
                        <span>CONTINUE TO POST 0{currentSlide.nextPostId}: {currentSlide.nextPostTitle}</span>
                        <span>→</span>
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}
        </div>

        {/* Bottom Navigation Footer Controls (Fixed Height: h-14) */}
        <div className="h-14 px-4 sm:px-6 border-t border-[#E5E4DE] bg-[#F5F4F0] flex items-center justify-between text-xs font-mono flex-shrink-0">
          <button
            onClick={goToPrevSlide}
            disabled={isFirstSlide}
            aria-label="Previous slide"
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xs transition-colors ${
              isFirstSlide
                ? 'opacity-30 cursor-not-allowed text-[#A3A3A3]'
                : 'text-[#171717] hover:bg-[#EBEAE5] active:bg-[#E0DFD8] font-bold'
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
