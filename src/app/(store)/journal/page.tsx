"use client";

import { useState, useEffect } from "react";
import PageWrapper from "@/components/shared/PageWrapper";
import { BLOG_POSTS } from "@/data/posts";
import { ArrowRight, ChevronLeft, ChevronRight, Mail, Calendar, Eye } from "lucide-react";
import Link from "next/link";

export default function JournalPage() {
  const [mounted, setMounted] = useState(false);
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail.trim()) {
      setSubscribed(true);
      setNewsletterEmail("");
    }
  };

  // Find the featured post
  const featuredPost = BLOG_POSTS.find((post) => post.featured) || BLOG_POSTS[0];
  // Recent posts
  const recentPosts = BLOG_POSTS.filter((post) => post.id !== featuredPost.id);

  if (!mounted) {
    return (
      <PageWrapper className="pt-24 pb-20 text-center py-32">
        <div className="font-sans text-sm text-[#76777b] font-medium">Loading workstation logs...</div>
      </PageWrapper>
    );
  }

  return (
    <div className="bg-[#faf9fe]">
      {/* Journal Header */}
      <header className="max-w-[1440px] mx-auto px-6 md:px-16 pt-16 pb-12 border-b border-[#c7c6ca]/30">
        <div className="max-w-3xl space-y-4">
          <span className="font-sans text-xs font-semibold text-[#76777b] uppercase tracking-widest block">
            The Archives
          </span>
          <h1 className="font-sans text-4xl md:text-6xl font-bold text-black tracking-tight leading-none">
            Journal
          </h1>
          <p className="font-sans text-base md:text-lg text-[#46474a] leading-relaxed">
            Exploring the intersection of craft, productivity, and architectural order. Insights into the tools and environments that define high-performance creative work.
          </p>
        </div>
      </header>

      {/* Featured Article */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-16 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-8 overflow-hidden rounded-lg border border-[#c7c6ca]/30 aspect-[16/9] relative group">
            <img
              src={featuredPost.image}
              alt={featuredPost.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-101"
            />
          </div>
          <div className="lg:col-span-4 flex flex-col justify-center space-y-4">
            <span className="font-sans text-xs font-semibold text-[#001f27] bg-[#c9e7f3] px-3 py-1 w-fit rounded-sm uppercase tracking-wider">
              {featuredPost.category}
            </span>
            <h2 className="font-sans text-2xl md:text-3xl font-bold text-black leading-tight tracking-tight">
              {featuredPost.title}
            </h2>
            <p className="font-sans text-sm md:text-base text-[#46474a] leading-relaxed">
              {featuredPost.excerpt}
            </p>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                alert(`Redirecting to article: ${featuredPost.title}`);
              }}
              className="flex items-center gap-1 font-mono text-xs font-bold text-black hover:opacity-80 transition-opacity w-fit uppercase tracking-wider group"
            >
              Read Article
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>
      </section>

      {/* Recent Entries Grid */}
      <section className="bg-[#f4f3f8] py-16 border-t border-b border-[#c7c6ca]/20">
        <div className="max-w-[1440px] mx-auto px-6 md:px-16">
          <div className="flex justify-between items-end mb-10 border-b border-[#c7c6ca]/30 pb-4">
            <h3 className="font-sans text-xl md:text-2xl font-bold text-black tracking-tight">
              Recent Entries
            </h3>
            <span className="font-mono text-xs text-[#76777b]">Filter: All Posts</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentPosts.map((post) => (
              <article
                key={post.id}
                className="flex flex-col bg-white border border-[#c7c6ca]/30 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-[0_20px_40px_-10px_rgba(26,27,31,0.08)] group"
              >
                <div className="overflow-hidden aspect-[4/3] bg-[#f4f3f8] border-b border-[#c7c6ca]/10 relative">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-102"
                  />
                </div>
                <div className="p-6 flex flex-col grow justify-between space-y-4">
                  <div>
                    <div className="flex justify-between items-center text-[10px] font-semibold text-[#76777b] uppercase tracking-wider">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3 text-[#76777b]/75" />
                        {post.date}
                      </span>
                      <span className="text-black font-bold border-b border-black">{post.category}</span>
                    </div>
                    <h4 className="font-sans text-lg font-bold text-black mt-3 group-hover:text-[#46474a] transition-colors leading-snug">
                      {post.title}
                    </h4>
                    <p className="font-sans text-sm text-[#46474a] leading-relaxed mt-2 line-clamp-2">
                      {post.excerpt}
                    </p>
                  </div>
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      alert(`Redirecting to article: ${post.title}`);
                    }}
                    className="flex items-center gap-1 font-mono text-[11px] font-bold text-black hover:opacity-80 transition-opacity w-fit uppercase tracking-wider group pt-2"
                  >
                    Read Entry
                    <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5" />
                  </a>
                </div>
              </article>
            ))}
          </div>

          {/* Simple Pagination */}
          <div className="flex justify-center items-center gap-4 mt-12">
            <button className="w-10 h-10 flex items-center justify-center border border-[#c7c6ca]/30 rounded bg-white text-black hover:bg-[#faf9fe] transition-colors cursor-pointer">
              <ChevronLeft className="w-4 h-4" />
            </button>
            <div className="flex gap-2">
              <button className="w-10 h-10 flex items-center justify-center bg-black text-white rounded font-mono text-sm font-semibold">
                1
              </button>
              <button className="w-10 h-10 flex items-center justify-center hover:bg-white rounded font-mono text-sm text-[#46474a] hover:text-black transition-colors cursor-pointer border border-transparent hover:border-[#c7c6ca]/30 bg-transparent">
                2
              </button>
              <button className="w-10 h-10 flex items-center justify-center hover:bg-white rounded font-mono text-sm text-[#46474a] hover:text-black transition-colors cursor-pointer border border-transparent hover:border-[#c7c6ca]/30 bg-transparent">
                3
              </button>
              <span className="w-10 h-10 flex items-center justify-center text-[#76777b]">...</span>
              <button className="w-10 h-10 flex items-center justify-center hover:bg-white rounded font-mono text-sm text-[#46474a] hover:text-black transition-colors cursor-pointer border border-transparent hover:border-[#c7c6ca]/30 bg-transparent">
                12
              </button>
            </div>
            <button className="w-10 h-10 flex items-center justify-center border border-[#c7c6ca]/30 rounded bg-white text-black hover:bg-[#faf9fe] transition-colors cursor-pointer">
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-16 py-16">
        <div className="bg-black text-white p-8 md:p-16 rounded-lg flex flex-col lg:flex-row justify-between items-center gap-8 border border-[#c7c6ca]/10">
          <div className="max-w-md space-y-2">
            <h3 className="font-sans text-2xl md:text-3xl font-bold text-white tracking-tight leading-tight">
              Stay Informed
            </h3>
            <p className="font-sans text-sm text-[#858384] leading-relaxed">
              Weekly insights on workspace design, technical craft, and productivity delivered straight to your inbox.
            </p>
          </div>

          <div className="w-full lg:w-auto">
            {subscribed ? (
              <div className="bg-[#1b1b1c] border border-emerald-500/30 p-4 rounded text-center text-emerald-400 font-sans text-sm font-semibold flex items-center gap-2 justify-center">
                <Mail className="w-4 h-4" />
                Subscription registered successfully!
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 w-full">
                <input
                  type="email"
                  required
                  placeholder="Email address"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="bg-transparent border-b border-[#858384] text-white placeholder-[#858384]/70 focus:outline-none focus:border-white px-2 py-3 w-full sm:w-72 font-sans text-sm outline-none transition-colors"
                />
                <button
                  type="submit"
                  className="bg-white text-black hover:opacity-90 font-mono text-xs font-bold px-6 py-3.5 rounded transition-all uppercase tracking-wider shrink-0"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
