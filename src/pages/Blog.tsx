
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight, Clock, Tag, BookOpen } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

import AnimatedPage from '../components/AnimatedPage';

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const blogPosts = [
    {
      id: 1,
      title: "Building Responsive Mobile Apps with Flutter",
      excerpt: "Learn the best practices for creating responsive Flutter applications that work seamlessly across different screen sizes and devices. Discover adaptive layouts, responsive widgets, and platform-specific designs.",
      date: "2024-06-15",
      readTime: "5 min read",
      category: "Flutter",
      author: "Shristy Jaiswal",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=400&fit=crop",
      tags: ["Flutter", "Responsive Design", "Mobile Development"]
    },
    {
      id: 2,
      title: "State Management in Flutter: A Complete Guide",
      excerpt: "Explore different state management solutions in Flutter, from Provider to Bloc, and learn when to use each approach. Compare performance, maintainability, and best use cases for each solution.",
      date: "2024-06-10",
      readTime: "8 min read",
      category: "Flutter",
      author: "Shristy Jaiswal",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=400&fit=crop",
      tags: ["Flutter", "State Management", "Provider", "Bloc"]
    },
    {
      id: 3,
      title: "React Best Practices for Modern Web Development",
      excerpt: "Discover the latest React patterns and best practices that will make your web applications more maintainable and performant. Learn about hooks, composition patterns, and optimization techniques.",
      date: "2024-06-05",
      readTime: "6 min read",
      category: "React",
      author: "Shristy Jaiswal",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=400&fit=crop",
      tags: ["React", "JavaScript", "Web Development"]
    },
    {
      id: 4,
      title: "REST API Integration in Mobile Apps",
      excerpt: "Learn how to efficiently integrate REST APIs in your mobile applications with proper error handling and caching strategies. Implement retry logic, offline support, and seamless data synchronization.",
      date: "2024-05-28",
      readTime: "7 min read",
      category: "API",
      author: "Shristy Jaiswal",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop",
      tags: ["REST API", "Mobile", "Backend Integration"]
    },
    {
      id: 5,
      title: "UI/UX Design Principles for Mobile Apps",
      excerpt: "Essential design principles every mobile app developer should know to create intuitive and engaging user experiences. From color theory to navigation patterns and accessibility considerations.",
      date: "2024-05-20",
      readTime: "4 min read",
      category: "Design",
      author: "Shristy Jaiswal",
      image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=800&h=400&fit=crop",
      tags: ["UI/UX", "Design", "User Experience"]
    },
    {
      id: 6,
      title: "Firebase Integration for Flutter Apps",
      excerpt: "Complete guide to integrating Firebase services like Authentication, Firestore, and Cloud Messaging in your Flutter applications. Build real-time features and implement secure authentication flows.",
      date: "2024-05-15",
      readTime: "10 min read",
      category: "Firebase",
      author: "Shristy Jaiswal",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop",
      tags: ["Firebase", "Flutter", "Backend"]
    },
    {
      id: 7,
      title: "Optimizing Flutter App Performance",
      excerpt: "Deep dive into Flutter performance optimization techniques. Learn about widget rebuilds, memory management, and profiling tools to create buttery-smooth 60fps experiences.",
      date: "2024-05-10",
      readTime: "9 min read",
      category: "Flutter",
      author: "Shristy Jaiswal",
      image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=400&fit=crop",
      tags: ["Flutter", "Performance", "Optimization"]
    },
    {
      id: 8,
      title: "Cross-Platform Development: Flutter vs React Native",
      excerpt: "A comprehensive comparison between Flutter and React Native. Explore differences in architecture, performance, developer experience, and when to choose each framework for your project.",
      date: "2024-05-05",
      readTime: "12 min read",
      category: "Mobile",
      author: "Shristy Jaiswal",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=400&fit=crop",
      tags: ["Flutter", "React Native", "Cross-Platform"]
    },
    {
      id: 9,
      title: "Building Accessible Web Applications",
      excerpt: "Learn how to build web applications that are accessible to all users. Understand WCAG guidelines, semantic HTML, ARIA attributes, and keyboard navigation best practices.",
      date: "2024-04-28",
      readTime: "7 min read",
      category: "Web",
      author: "Shristy Jaiswal",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=400&fit=crop",
      tags: ["Accessibility", "Web", "WCAG"]
    },
    {
      id: 10,
      title: "Modern API Design Patterns",
      excerpt: "Explore modern API design patterns including REST, GraphQL, and gRPC. Learn about versioning strategies, authentication methods, and best practices for building scalable APIs.",
      date: "2024-04-20",
      readTime: "11 min read",
      category: "API",
      author: "Shristy Jaiswal",
      image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&h=400&fit=crop",
      tags: ["API", "REST", "GraphQL", "Backend"]
    },
    {
      id: 11,
      title: "Designing for Dark Mode",
      excerpt: "Best practices for implementing dark mode in your applications. Learn about color theory, contrast ratios, and creating seamless theme switching experiences.",
      date: "2024-04-15",
      readTime: "6 min read",
      category: "Design",
      author: "Shristy Jaiswal",
      image: "https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?w=800&h=400&fit=crop",
      tags: ["Design", "Dark Mode", "UI/UX"]
    },
    {
      id: 12,
      title: "Testing Strategies for Mobile Apps",
      excerpt: "Comprehensive guide to testing mobile applications. Cover unit testing, widget testing, integration testing, and end-to-end testing with practical examples and best practices.",
      date: "2024-04-10",
      readTime: "10 min read",
      category: "Testing",
      author: "Shristy Jaiswal",
      image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&h=400&fit=crop",
      tags: ["Testing", "Mobile", "Quality Assurance"]
    }
  ];

  const categories = ["All", "Flutter", "React", "API", "Design", "Firebase", "Mobile", "Web", "Testing"];

  const filteredPosts = selectedCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <AnimatedPage>
      <div className="min-h-screen bg-background">
        <Header />
        
        {/* Hero Section */}
        <section className="pt-24 pb-16 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 border-b border-border">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-primary/10 backdrop-blur-sm rounded-full">
                  <BookOpen className="w-12 h-12 text-primary" />
                </div>
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-foreground">
                Development Blog
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Insights, tutorials, and thoughts on mobile and web development
              </p>
              <div className="flex items-center justify-center gap-4 text-muted-foreground">
                <span className="flex items-center gap-2">
                  <User size={16} />
                  Shristy Jaiswal
                </span>
                <span>•</span>
                <span>Mobile App Developer</span>
                <span>•</span>
                <span>{blogPosts.length} Articles</span>
              </div>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 bg-card border-b border-border">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full transition-all font-medium ${
                    selectedCategory === category
                      ? 'bg-primary text-primary-foreground shadow-md'
                      : 'bg-secondary text-muted-foreground hover:bg-primary/10 hover:text-primary border border-border'
                  }`}
                >
                  {category}
                  {category !== "All" && (
                    <span className="ml-2 text-xs opacity-70">
                      ({blogPosts.filter(post => post.category === category).length})
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {filteredPosts.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-muted-foreground text-lg">No posts found in this category.</p>
              </div>
            ) : (
              <>
                <div className="text-center mb-8">
                  <p className="text-muted-foreground">
                    Showing <span className="font-semibold text-foreground">{filteredPosts.length}</span> {filteredPosts.length === 1 ? 'article' : 'articles'}
                    {selectedCategory !== "All" && ` in ${selectedCategory}`}
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredPosts.map((post) => (
                    <article key={post.id} className="bg-card rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow border border-border group">
                      <div className="relative h-48 overflow-hidden bg-muted">
                        <img 
                          src={post.image} 
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute top-4 left-4">
                          <span className="px-3 py-1 bg-primary text-primary-foreground text-sm rounded-full font-medium shadow-md">
                            {post.category}
                          </span>
                        </div>
                      </div>
                      
                      <div className="p-6">
                        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                          <span className="flex items-center gap-1">
                            <Calendar size={14} />
                            {new Date(post.date).toLocaleDateString('en-US', { 
                              month: 'short', 
                              day: 'numeric', 
                              year: 'numeric' 
                            })}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock size={14} />
                            {post.readTime}
                          </span>
                        </div>
                        
                        <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                          <Link to={`/blog/${post.id}`}>
                            {post.title}
                          </Link>
                        </h3>
                        
                        <p className="text-muted-foreground mb-4 leading-relaxed line-clamp-3">
                          {post.excerpt}
                        </p>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 mb-4">
                          {post.tags.slice(0, 3).map((tag, index) => (
                            <span 
                              key={index}
                              className="text-xs px-2 py-1 bg-secondary text-muted-foreground rounded"
                            >
                              #{tag}
                            </span>
                          ))}
                        </div>
                        
                        <Link 
                          to={`/blog/${post.id}`}
                          className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors group"
                        >
                          Read Article
                          <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    </article>
                  ))}
                </div>
              </>
            )}
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-16 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 border-t border-border">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4 text-foreground">Stay Updated</h2>
              <p className="text-muted-foreground mb-8">
                Subscribe to get the latest posts and insights delivered to your inbox
              </p>
              <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg text-foreground bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium shadow-lg"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </AnimatedPage>
  );
};

export default Blog;
