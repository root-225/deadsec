'use client';

import React, { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const blogPosts = [
  {
    id: 1,
    title: 'The Future of Cloud Computing in 2024',
    excerpt: 'Explore the latest trends and innovations shaping the cloud computing landscape.',
    date: '2024-03-15',
    category: 'Cloud Computing',
    image: '/blog/cloud-computing.jpg',
    readTime: '5 min read',
    featured: true,
    tags: ['Cloud', 'Future Tech', 'Enterprise'],
    author: {
      name: 'John Smith',
      avatar: '/authors/john.jpg',
      role: 'Cloud Architect'
    },
    likes: 245,
    comments: 18
  },
  {
    id: 2,
    title: 'AI and Machine Learning: A Comprehensive Guide',
    excerpt: 'Learn about the fundamentals and advanced concepts of AI and ML.',
    date: '2024-03-14',
    category: 'Artificial Intelligence',
    image: '/blog/ai-ml.jpg',
    readTime: '8 min read',
    featured: true,
    tags: ['AI', 'Machine Learning', 'Technology'],
    author: {
      name: 'Sarah Chen',
      avatar: '/authors/sarah.jpg',
      role: 'AI Researcher'
    },
    likes: 312,
    comments: 24
  },
  {
    id: 3,
    title: 'Cybersecurity Best Practices for Enterprises',
    excerpt: 'Essential security measures to protect your organization from cyber threats.',
    date: '2024-03-13',
    category: 'Cybersecurity',
    image: '/blog/cybersecurity.jpg',
    readTime: '6 min read',
    featured: false,
    tags: ['Security', 'Enterprise', 'Best Practices'],
    author: {
      name: 'Mike Johnson',
      avatar: '/authors/mike.jpg',
      role: 'Security Expert'
    },
    likes: 189,
    comments: 15
  },
  {
    id: 4,
    title: 'Digital Transformation: A Roadmap to Success',
    excerpt: 'Step-by-step guide to implementing successful digital transformation.',
    date: '2024-03-12',
    category: 'Digital Transformation',
    image: '/blog/digital-transformation.jpg',
    readTime: '7 min read',
    featured: false,
    tags: ['Digital', 'Transformation', 'Strategy'],
    author: {
      name: 'Emma Davis',
      avatar: '/authors/emma.jpg',
      role: 'Digital Strategist'
    },
    likes: 156,
    comments: 12
  },
  {
    id: 5,
    title: 'The Rise of Edge Computing',
    excerpt: 'Understanding the impact and benefits of edge computing technology.',
    date: '2024-03-11',
    category: 'Technology',
    image: '/blog/edge-computing.jpg',
    readTime: '5 min read',
    featured: false,
    tags: ['Edge Computing', 'IoT', 'Innovation'],
    author: {
      name: 'Alex Wong',
      avatar: '/authors/alex.jpg',
      role: 'Tech Analyst'
    },
    likes: 178,
    comments: 14
  },
  {
    id: 6,
    title: 'DevOps: Streamlining Software Development',
    excerpt: 'Best practices and tools for efficient software development and deployment.',
    date: '2024-03-10',
    category: 'DevOps',
    image: '/blog/devops.jpg',
    readTime: '6 min read',
    featured: false,
    tags: ['DevOps', 'Development', 'Automation'],
    author: {
      name: 'Lisa Chen',
      avatar: '/authors/lisa.jpg',
      role: 'DevOps Engineer'
    },
    likes: 145,
    comments: 10
  },
  {
    id: 7,
    title: 'The Power of Data Analytics',
    excerpt: 'How data analytics is revolutionizing business decision-making.',
    date: '2024-03-09',
    category: 'Data Analytics',
    image: '/blog/data-analytics.jpg',
    readTime: '7 min read',
    featured: false,
    tags: ['Analytics', 'Data', 'Business'],
    author: {
      name: 'David Kim',
      avatar: '/authors/david.jpg',
      role: 'Data Scientist'
    },
    likes: 167,
    comments: 13
  },
  {
    id: 8,
    title: 'Blockchain Technology: Beyond Cryptocurrency',
    excerpt: 'Exploring the diverse applications of blockchain technology.',
    date: '2024-03-08',
    category: 'Blockchain',
    image: '/blog/blockchain.jpg',
    readTime: '6 min read',
    featured: false,
    tags: ['Blockchain', 'Innovation', 'Future Tech'],
    author: {
      name: 'Rachel Liu',
      avatar: '/authors/rachel.jpg',
      role: 'Blockchain Developer'
    },
    likes: 134,
    comments: 9
  }
];

const categories = ['All', 'Cloud Computing', 'Artificial Intelligence', 'Cybersecurity', 'Digital Transformation', 'Technology', 'DevOps', 'Data Analytics', 'Blockchain'];

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('latest');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [hoveredPost, setHoveredPost] = useState<number | null>(null);
  const [readingProgress, setReadingProgress] = useState(0);
  const [showSearchResults, setShowSearchResults] = useState(false);

  // Track reading progress
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setReadingProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Get all unique tags
  const allTags = useMemo(() => {
    const tags = new Set<string>();
    blogPosts.forEach(post => post.tags.forEach(tag => tags.add(tag)));
    return Array.from(tags);
  }, []);

  const filteredPosts = useMemo(() => {
    let posts = [...blogPosts];
    
    // Apply search filter
    if (searchTerm) {
      posts = posts.filter(post => 
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    // Apply category filter
    if (selectedCategory !== 'All') {
      posts = posts.filter(post => post.category === selectedCategory);
    }

    // Apply tag filter
    if (selectedTags.length > 0) {
      posts = posts.filter(post => 
        selectedTags.every(tag => post.tags.includes(tag))
      );
    }

    // Apply sorting
    switch (sortBy) {
      case 'latest':
        posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
        break;
      case 'oldest':
        posts.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
        break;
      case 'popular':
        posts.sort((a, b) => b.likes - a.likes);
        break;
      default:
        break;
    }

    return posts.slice(0, 8); // Limit to 8 posts
  }, [searchTerm, selectedCategory, sortBy, selectedTags]);

  const toggleTag = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag) 
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  const featuredPost = useMemo(() => {
    return filteredPosts.find(post => post.featured) || filteredPosts[0];
  }, [filteredPosts]);

  const regularPosts = useMemo(() => {
    return filteredPosts.filter(post => post.id !== featuredPost?.id);
  }, [filteredPosts, featuredPost]);

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Reading Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-slate-800 z-50">
        <motion.div
          className="h-full bg-gradient-to-r from-blue-500 to-indigo-500"
          initial={{ width: 0 }}
          animate={{ width: `${readingProgress}%` }}
          transition={{ duration: 0.2 }}
        />
      </div>

      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] animated-bg"></div>
      <div className="absolute inset-0 matrix-bg opacity-10"></div>

      {/* Decorative Elements */}
      <div className="absolute top-1/3 left-0 w-72 h-72 bg-blue-500/20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/3 right-0 w-72 h-72 bg-indigo-500/20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold gradient-text mb-4">Latest Blog Posts</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Stay updated with our latest insights, trends, and innovations in technology.
          </p>
        </div>

        {/* Enhanced Search and Filter */}
        <div className="max-w-4xl mx-auto mb-12 space-y-6">
          <div className="relative">
            <input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setShowSearchResults(true);
              }}
              onFocus={() => setShowSearchResults(true)}
              onBlur={() => setTimeout(() => setShowSearchResults(false), 200)}
              className="w-full px-4 py-3 bg-slate-800 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <svg
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>

          {/* Quick Search Results */}
          <AnimatePresence>
            {showSearchResults && searchTerm && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute z-10 w-full bg-slate-800 rounded-lg shadow-lg mt-2 max-h-96 overflow-y-auto"
              >
                {filteredPosts.slice(0, 5).map((post) => (
                  <Link
                    key={post.id}
                    href={`/blog/${post.id}`}
                    className="block p-4 hover:bg-slate-700 transition-colors"
                  >
                    <h4 className="text-white font-medium">{post.title}</h4>
                    <p className="text-slate-400 text-sm">{post.excerpt}</p>
                  </Link>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          <div className="flex flex-wrap gap-4">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 bg-slate-800 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="latest">Latest First</option>
              <option value="oldest">Oldest First</option>
              <option value="popular">Most Popular</option>
            </select>

            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-blue-500 to-indigo-500 text-white'
                      : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => toggleTag(tag)}
                className={`px-3 py-1 rounded-full text-xs font-medium transition-all duration-300 ${
                  selectedTags.includes(tag)
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                    : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Post */}
        {featuredPost && (
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12 tech-card group hover:glow relative overflow-hidden"
            onMouseEnter={() => setHoveredPost(featuredPost.id)}
            onMouseLeave={() => setHoveredPost(null)}
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div className="relative h-64 md:h-full">
                <Image
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  fill
                  className="object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                {featuredPost.featured && (
                  <div className="absolute top-4 right-4 px-3 py-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full text-xs text-white">
                    Featured
                  </div>
                )}
              </div>
              <div className="p-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden">
                      <Image
                        src={featuredPost.author.avatar}
                        alt={featuredPost.author.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-white">{featuredPost.author.name}</p>
                      <p className="text-xs text-slate-400">{featuredPost.author.role}</p>
                    </div>
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors">
                    {featuredPost.title}
                  </h3>
                  <p className="text-slate-400 mb-4">{featuredPost.excerpt}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {featuredPost.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-slate-800 rounded-full text-xs text-slate-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between text-sm text-slate-400">
                    <div className="flex items-center gap-4">
                      <span className="flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                        {featuredPost.likes}
                      </span>
                      <span className="flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                        {featuredPost.comments}
                      </span>
                    </div>
                    <span>{featuredPost.readTime}</span>
                  </div>
                </div>

                <div className="flex items-center gap-4 mt-6">
                  <Link
                    href={`/blog/${featuredPost.id}`}
                    className="flex-1 text-center px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full text-white font-medium hover:opacity-90 transition-opacity"
                  >
                    Read More
                  </Link>
                  <div className="flex gap-2">
                    <button className="p-2 bg-slate-800 rounded-full hover:bg-slate-700 transition-colors">
                      <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                      </svg>
                    </button>
                    <button className="p-2 bg-slate-800 rounded-full hover:bg-slate-700 transition-colors">
                      <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.article>
        )}

        {/* Regular Posts Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${searchTerm}-${selectedCategory}-${sortBy}-${selectedTags.join(',')}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {regularPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="tech-card group hover:glow relative"
                onMouseEnter={() => setHoveredPost(post.id)}
                onMouseLeave={() => setHoveredPost(null)}
              >
                <div className="relative h-48 overflow-hidden rounded-t-lg">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="relative w-10 h-10 rounded-full overflow-hidden">
                      <Image
                        src={post.author.avatar}
                        alt={post.author.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-white">{post.author.name}</p>
                      <p className="text-xs text-slate-400">{post.author.role}</p>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-slate-400 text-sm mb-4 line-clamp-2">{post.excerpt}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-slate-800 rounded-full text-xs text-slate-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between text-sm text-slate-400">
                    <div className="flex items-center gap-4">
                      <span className="flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                        {post.likes}
                      </span>
                      <span className="flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                        {post.comments}
                      </span>
                    </div>
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <AnimatePresence>
                  {hoveredPost === post.id && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent rounded-lg flex items-end p-6"
                    >
                      <div className="w-full space-y-4">
                        <Link
                          href={`/blog/${post.id}`}
                          className="block w-full text-center px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full text-white font-medium hover:opacity-90 transition-opacity"
                        >
                          Read More
                        </Link>
                        <div className="flex justify-center gap-2">
                          <button className="p-2 bg-slate-800 rounded-full hover:bg-slate-700 transition-colors">
                            <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                            </svg>
                          </button>
                          <button className="p-2 bg-slate-800 rounded-full hover:bg-slate-700 transition-colors">
                            <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.article>
            ))}
          </motion.div>
        </AnimatePresence>

        {filteredPosts.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-slate-400">No articles found matching your criteria.</p>
          </motion.div>
        )}

        {filteredPosts.length > 0 && (
          <div className="text-center mt-12">
            <Link
              href="/blog"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full text-white font-medium hover:opacity-90 transition-opacity"
            >
              View All Posts
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
} 