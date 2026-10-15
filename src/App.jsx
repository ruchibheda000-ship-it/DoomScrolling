import React, { useState } from 'react';
import Header from './components/Header';
import GridTile from './components/GridTile';
import PostModal from './components/PostModal';
import Footer from './components/Footer';
import { RESEARCH_POSTS } from './data/researchPosts';

export default function App() {
  const [activeFilter, setActiveFilter] = useState('ALL');
  const [selectedPost, setSelectedPost] = useState(null);

  // Filter posts based on tab
  const filteredPosts = RESEARCH_POSTS.filter((post) => {
    if (activeFilter === 'ALL') return true;
    return post.phase === activeFilter;
  });

  const handleSelectPost = (post) => {
    setSelectedPost(post);
  };

  const handleCloseModal = () => {
    setSelectedPost(null);
  };

  const handleSelectNextPost = (nextPostId) => {
    const nextPost = RESEARCH_POSTS.find((p) => p.id === nextPostId);
    if (nextPost) {
      setSelectedPost(nextPost);
    } else {
      setSelectedPost(null);
    }
  };

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#F5F4F0] text-[#171717] selection:bg-[#171717] selection:text-[#F5F4F0]">
      {/* Editorial Main Container */}
      <main className="max-w-4xl mx-auto px-2 sm:px-4 md:px-6 py-3 sm:py-6 md:py-8">
        {/* Profile / Archive Header */}
        <Header
          activeFilter={activeFilter}
          onFilterChange={setActiveFilter}
          postCount={filteredPosts.length}
        />

        {/* 3-Column Editorial Grid (Recreating Instagram Profile Reference) */}
        <section
          aria-label="Research posts grid"
          className="grid grid-cols-3 gap-1 sm:gap-1.5 md:gap-2.5 transition-opacity duration-300"
        >
          {filteredPosts.map((post) => (
            <GridTile
              key={post.id}
              post={post}
              onSelect={handleSelectPost}
            />
          ))}
        </section>

        {filteredPosts.length === 0 && (
          <div className="py-16 text-center font-mono text-xs text-[#737373]">
            NO POSTS FOUND FOR THE SELECTED FILTER.
          </div>
        )}

        {/* Footer */}
        <Footer onScrollTop={handleScrollTop} />
      </main>

      {/* Functional Interactive Post Viewer Modal */}
      <PostModal
        post={selectedPost}
        isOpen={Boolean(selectedPost)}
        onClose={handleCloseModal}
        onSelectNextPost={handleSelectNextPost}
      />
    </div>
  );
}
