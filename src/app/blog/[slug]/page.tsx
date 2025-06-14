import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import Image from "next/image";

const blogPosts = {
  "future-of-ai-in-business": {
    title: "The Future of AI in Business",
    excerpt: "Exploring how artificial intelligence is transforming business operations and decision-making processes...",
    content: `Artificial Intelligence (AI) is revolutionizing the way businesses operate and make decisions. In this comprehensive analysis, we'll explore the current state of AI in business and its future implications.

## The Current Landscape

AI technologies have already made significant inroads into various business sectors. From customer service chatbots to predictive analytics, businesses are leveraging AI to improve efficiency and gain competitive advantages.

## Key Areas of Impact

1. **Decision Making**
   - Data-driven insights
   - Predictive analytics
   - Risk assessment

2. **Customer Experience**
   - Personalized recommendations
   - Automated customer service
   - Enhanced user interfaces

3. **Operational Efficiency**
   - Process automation
   - Resource optimization
   - Quality control

## Future Trends

The future of AI in business looks promising, with several emerging trends:

- Increased adoption of AI-powered decision support systems
- Integration of AI with IoT devices
- Enhanced natural language processing capabilities
- More sophisticated predictive analytics

## Challenges and Considerations

While AI offers numerous benefits, businesses must also consider:

- Data privacy and security
- Ethical implications
- Implementation costs
- Workforce adaptation

## Conclusion

The integration of AI into business operations is not just a trend but a fundamental shift in how organizations operate. Companies that embrace AI technologies while addressing the associated challenges will be well-positioned for future success.`,
    date: "2024-03-15",
    readTime: "5 min read",
    category: "AI & Technology",
    author: "Matteus Kasten",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=80"
  },
  "data-driven-decision-making": {
    title: "Data-Driven Decision Making",
    excerpt: "A comprehensive guide to implementing data-driven strategies in modern organizations...",
    content: `Data-driven decision making has become a cornerstone of modern business strategy. This article explores how organizations can effectively leverage data to make informed decisions.

## Understanding Data-Driven Decision Making

Data-driven decision making involves using data to guide business strategy and operations. It requires:

- Quality data collection
- Effective data analysis
- Clear communication of insights
- Implementation of findings

## Key Components

1. **Data Collection**
   - Customer behavior
   - Market trends
   - Operational metrics
   - Financial data

2. **Analysis Methods**
   - Statistical analysis
   - Machine learning
   - Predictive modeling
   - Real-time analytics

3. **Implementation Strategy**
   - Clear objectives
   - Stakeholder buy-in
   - Resource allocation
   - Progress monitoring

## Best Practices

To succeed in data-driven decision making, organizations should:

- Establish clear data governance policies
- Invest in appropriate tools and technologies
- Train employees in data literacy
- Foster a data-driven culture

## Conclusion

Data-driven decision making is essential for modern business success. By following best practices and maintaining a focus on quality data and analysis, organizations can make more informed and effective decisions.`,
    date: "2024-03-10",
    readTime: "7 min read",
    category: "Data Science",
    author: "Matteus Kasten",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80"
  },
  "digital-transformation-strategies": {
    title: "Digital Transformation Strategies",
    excerpt: "Key insights and best practices for successful digital transformation initiatives...",
    content: `Digital transformation is reshaping how businesses operate and compete in the modern marketplace. This article provides insights into developing and implementing effective digital transformation strategies.

## What is Digital Transformation?

Digital transformation involves using digital technologies to:

- Improve business processes
- Enhance customer experiences
- Create new business models
- Drive innovation

## Key Components of Digital Transformation

1. **Technology Integration**
   - Cloud computing
   - IoT devices
   - AI and machine learning
   - Mobile solutions

2. **Process Optimization**
   - Automation
   - Workflow improvements
   - Efficiency enhancements
   - Quality control

3. **Customer Experience**
   - Digital channels
   - Personalization
   - Omnichannel integration
   - Customer feedback

## Implementation Strategies

Successful digital transformation requires:

- Clear vision and objectives
- Strong leadership
- Employee engagement
- Continuous improvement

## Challenges and Solutions

Common challenges include:

- Resistance to change
- Technology integration
- Data security
- Cost management

## Conclusion

Digital transformation is a journey, not a destination. Organizations must remain agile and adaptable to succeed in the digital age.`,
    date: "2024-03-05",
    readTime: "6 min read",
    category: "Strategy",
    author: "Matteus Kasten",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80"
  }
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function BlogPostPage({ params }: any) {
  const post = blogPosts[params.slug as keyof typeof blogPosts];

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <Link 
          href="/blog"
          className="inline-flex items-center text-blue-600 dark:text-pink-400 mb-8 hover:underline"
        >
          ← Back to Blog
        </Link>
        
        <article className="glass p-8 rounded-2xl">
          {post.image && (
            <div className="mb-8 aspect-video relative rounded-lg overflow-hidden">
              <Image 
                src={post.image} 
                alt={post.title}
                fill
                className="object-cover"
              />
            </div>
          )}

          <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-4">
            <span>{post.category}</span>
            <span>•</span>
            <span>{post.date}</span>
            <span>•</span>
            <span>{post.readTime}</span>
          </div>

          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
            {post.title}
          </h1>

          <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 mb-8">
            <span>By {post.author}</span>
          </div>

          <div className="prose dark:prose-invert max-w-none">
            {post.content.split('\n\n').map((paragraph, index) => {
              if (paragraph.startsWith('##')) {
                return (
                  <h2 key={index} className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
                    {paragraph.replace('## ', '')}
                  </h2>
                );
              }
              if (paragraph.startsWith('-')) {
                return (
                  <ul key={index} className="list-disc pl-6 mb-4">
                    {paragraph.split('\n').map((item, itemIndex) => (
                      <li key={itemIndex} className="text-gray-700 dark:text-gray-300 mb-2">
                        {item.replace('- ', '')}
                      </li>
                    ))}
                  </ul>
                );
              }
              return (
                <p key={index} className="text-gray-700 dark:text-gray-300 mb-4">
                  {paragraph}
                </p>
              );
            })}
          </div>
        </article>
      </div>
    </main>
  );
} 