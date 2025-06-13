import React from "react";
import Link from "next/link";
import Image from "next/image";

const blogPosts = [
  {
    id: "post1",
    title: "The Future of AI in Business",
    excerpt: "Exploring how artificial intelligence is transforming business operations and decision-making processes...",
    date: "2024-03-15",
    readTime: "5 min read",
    category: "AI & Technology",
    slug: "future-of-ai-in-business",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "post2",
    title: "Data-Driven Decision Making",
    excerpt: "A comprehensive guide to implementing data-driven strategies in modern organizations...",
    date: "2024-03-10",
    readTime: "7 min read",
    category: "Data Science",
    slug: "data-driven-decision-making",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "post3",
    title: "Digital Transformation Strategies",
    excerpt: "Key insights and best practices for successful digital transformation initiatives...",
    date: "2024-03-05",
    readTime: "6 min read",
    category: "Strategy",
    slug: "digital-transformation-strategies",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80"
  }
];

export default function BlogPage() {
  return (
    <main className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
          Blog
        </h1>
        <div className="space-y-8">
          {blogPosts.map((post) => (
            <article 
              key={post.id}
              className="glass card-hover p-6 rounded-2xl border-2 border-transparent hover:border-gradient-to-r hover:from-blue-400 hover:to-pink-400 transition-all"
            >
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/3">
                  <div className="aspect-video relative rounded-lg overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="md:w-2/3">
                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-2">
                    <span>{post.category}</span>
                    <span>•</span>
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <Link href={`/blog/${post.slug}`}>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 hover:text-blue-600 dark:hover:text-pink-400 transition-colors">
                      {post.title}
                    </h2>
                  </Link>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    {post.excerpt}
                  </p>
                  <Link 
                    href={`/blog/${post.slug}`}
                    className="inline-block text-blue-600 dark:text-pink-400 font-medium btn-animated"
                  >
                    Read more
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
} 