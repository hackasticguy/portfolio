import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { blogData } from '../data';
import { BlogPost } from '../types';
import { Calendar, Clock, ArrowUpRight, BookOpen, X } from 'lucide-react';

export default function Blog() {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  return (
    <section className="py-20 bg-[#050505] relative" id="blog">
      <div className="absolute right-1/4 bottom-10 w-80 h-80 bg-emerald-500/[0.01] rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-12 space-y-2">
          <p className="text-emerald-400 font-mono text-xs tracking-widest uppercase">// 09_INTELLIGENCE_REPORTS</p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-sans">
            Security <span className="text-emerald-400">Research & Blog</span>
          </h2>
          <div className="h-[1px] w-20 bg-emerald-500 mt-2 mx-auto" />
        </div>

        {/* Blog Post Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {blogData.map((post, idx) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="p-6 bg-[#141414] border border-neutral-800 hover:border-emerald-500/30 rounded-xl hover:bg-[#181818] transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                {/* Meta details */}
                <div className="flex justify-between items-center text-[10px] font-mono text-gray-500">
                  <span className="text-emerald-400 px-2 py-0.5 bg-emerald-950/40 border border-emerald-500/20 rounded uppercase tracking-wider">
                    {post.category}
                  </span>
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-emerald-500/60" />
                      <span>{post.date}</span>
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-emerald-500/60" />
                      <span>{post.readTime}</span>
                    </span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-emerald-400 transition-colors tracking-wide leading-snug">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-gray-400 text-xs leading-relaxed">
                  {post.excerpt}
                </p>
              </div>

              {/* Action and Tags */}
              <div className="mt-6 pt-4 border-t border-neutral-800/60 flex items-center justify-between">
                <div className="flex flex-wrap gap-1">
                  {post.tags.slice(0, 2).map((tag) => (
                    <span key={tag} className="text-[9px] font-mono text-gray-600 bg-neutral-900 border border-neutral-800 px-1.5 py-0.5 rounded">
                      #{tag.toUpperCase()}
                    </span>
                  ))}
                </div>
                <button
                  onClick={() => setSelectedPost(post)}
                  className="flex items-center gap-1 text-xs font-mono text-emerald-400 font-semibold group-hover:text-emerald-300 cursor-pointer"
                >
                  <span>READ INTEL</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Detailed Research Modal popup */}
        <AnimatePresence>
          {selectedPost && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedPost(null)}
                className="absolute inset-0 bg-black/85 backdrop-blur-sm"
              />

              {/* Research Article Dialog */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.3 }}
                className="bg-[#141414] border border-emerald-500/30 rounded-xl max-w-2xl w-full max-h-[80vh] overflow-y-auto z-10 p-6 md:p-8 space-y-6 relative scrollbar-thin scrollbar-thumb-emerald-500/20"
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedPost(null)}
                  className="absolute top-4 right-4 p-1.5 bg-neutral-900 border border-neutral-800 text-gray-400 hover:text-white rounded-full hover:border-emerald-500/30 transition-all cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>

                {/* Article Header */}
                <div className="space-y-3">
                  <div className="flex flex-wrap items-center gap-3 text-[10px] font-mono text-gray-500">
                    <span className="text-emerald-400 px-2 py-0.5 bg-emerald-950/40 border border-emerald-500/20 rounded uppercase font-bold">
                      {selectedPost.category}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-emerald-500" />
                      <span>{selectedPost.date}</span>
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-emerald-500" />
                      <span>{selectedPost.readTime}</span>
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-wide font-sans leading-tight">
                    {selectedPost.title}
                  </h3>
                </div>

                {/* Detailed Article Content Block */}
                <div className="space-y-4 border-t border-b border-neutral-800/80 py-6">
                  <p className="text-sm text-gray-300 leading-relaxed whitespace-pre-wrap font-sans">
                    {selectedPost.content}
                  </p>
                  
                  {/* Exploit Vector / Research Mock Code snippet */}
                  <div className="p-4 bg-neutral-950 border border-neutral-900 rounded font-mono text-xs text-emerald-400 space-y-2 relative">
                    <div className="absolute top-2 right-2 text-[9px] text-gray-600 font-bold uppercase select-none">CODE_RESEARCH</div>
                    <span className="text-gray-500 block"># Example Proof-of-Concept snippet</span>
                    <span>import ctypes, struct</span>
                    <br />
                    <span># Direct system call dynamic routing</span>
                    <br />
                    <span className="text-emerald-500">def bypass_user_hooks(ssn, params):</span>
                    <br />
                    <span className="pl-4 text-gray-400"># Direct system stack instruction injection...</span>
                    <br />
                    <span className="pl-4">pass</span>
                  </div>
                </div>

                {/* Tags and Verification footer */}
                <div className="flex flex-wrap justify-between items-center gap-4 text-xs font-mono">
                  <div className="flex flex-wrap gap-1.5">
                    {selectedPost.tags.map((tag) => (
                      <span key={tag} className="text-[10px] bg-neutral-900 border border-neutral-800 px-2 py-0.5 rounded text-gray-500">
                        #{tag.toUpperCase()}
                      </span>
                    ))}
                  </div>
                  <span className="text-emerald-500/40 text-[9px] tracking-wider uppercase font-bold">// SEC_RESEARCH_DEGRADED: FALSE</span>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
