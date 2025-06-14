import React from "react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import Image from "next/image";

/**
 * BlogSection - Shows three blog posts in a responsive grid, each with a unique Unsplash image.
 */

const unsplashDesertImages = [
  "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80"
];

function getBlogPosts() {
  const blogDir = path.join(process.cwd(), "src/blog");
  const files = fs.readdirSync(blogDir)
    .filter((file) => file.endsWith(".md"))
    .sort((a, b) => b.localeCompare(a));
  // Only use the three most recent posts
  return files.slice(0, 3).map((file, idx) => {
    const filePath = path.join(blogDir, file);
    const source = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(source);
    return {
      slug: file.replace(/\.md$/, ""),
      title: data.title || file,
      date: data.date || "",
      description: data.description || "",
      content,
      image: unsplashDesertImages[idx % unsplashDesertImages.length],
    };
  });
}

const posts = typeof window === "undefined" ? getBlogPosts() : [];

const BlogSection: React.FC = () => {
  return (
    <section id="blog" className="w-full py-20 flex flex-col items-center bg-transparent">
      <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">Blog</h2>
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-3 gap-8">
        {posts.map((_node) => (
          <div key={_node.slug} className="glass glass-highlight glass-glow glass-reflection card-hover p-6 flex flex-col animate-fade-in">
            <div className="mb-4 rounded-xl overflow-hidden">
              <Image
                src={_node.image}
                alt={`Desert landscape for ${_node.title}`}
                width={800}
                height={400}
                className="w-full h-48 object-cover object-center rounded-xl"
                priority={_node.slug === "post-1"}
              />
            </div>
            <h3 className="text-xl font-bold mb-2 text-blue-700 dark:text-pink-400">{_node.title}</h3>
            <div className="text-sm text-gray-500 mb-2">{_node.date}</div>
            <p className="mb-4 text-gray-700 dark:text-gray-300">{_node.description}</p>
            <div className="mb-4">
              <ReactMarkdown components={{
                h1: ({...props}) => <h1 className="prose-h1" {...props} />, 
                p: ({...props}) => <p className="prose-p" {...props} />,
              }}>{_node.content.slice(0, 200) + (_node.content.length > 200 ? "..." : "")}</ReactMarkdown>
            </div>
            <a href={`blog/${_node.slug}`} className="mx-auto mt-4 px-6 py-2 rounded-full bg-gradient-to-r from-blue-600 to-pink-500 text-white font-semibold shadow-lg btn-animated focus:outline-none focus:ring-2 focus:ring-pink-400 transition-transform duration-200 hover:scale-105" style={{ display: 'inline-block' }}>Read more</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogSection; 