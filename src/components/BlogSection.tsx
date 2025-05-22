
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const BlogSection = () => {
  const blogPosts = [
    {
      month: "MAY",
      title: "10 Social Media Trends to Watch in 2023",
      excerpt: "Discover the latest trends that are reshaping social media marketing strategies.",
      image: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80"
    },
    {
      month: "APR",
      title: "The Ultimate Guide to SEO in 2023",
      excerpt: "Learn the essential SEO strategies to improve your website's visibility and ranking.",
      image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80"
    },
    {
      month: "MAR",
      title: "How to Create a Successful Email Marketing Campaign",
      excerpt: "Expert tips for crafting email campaigns that drive engagement and conversions.",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    }
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-syne mb-4 md:mb-0">
            Digital Marketing & Industry Insights
          </h2>
          
          <Button 
            variant="outline"
            className="rounded-none border border-black text-black hover:bg-black hover:text-white transition-colors font-kanit self-start md:self-auto"
          >
            VIEW MORE <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <div 
              key={index} 
              className="group relative bg-white overflow-hidden rounded-sm shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="aspect-w-16 aspect-h-9 relative">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-white py-1 px-3 text-xs font-bold font-syne">
                  {post.month}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-syne font-bold mb-3 group-hover:text-chaotic-blue transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-700 font-kanit text-sm mb-4">
                  {post.excerpt}
                </p>
                <a 
                  href="#" 
                  className="inline-flex items-center text-chaotic-blue font-kanit text-sm hover:underline"
                >
                  Read More <ArrowRight className="ml-1 h-3 w-3" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
