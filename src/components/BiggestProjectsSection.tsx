import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, ExternalLink, Calendar, Users, Trophy, TrendingUp } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';

const BiggestProjectsSection = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const biggestProjects = [
    {
      name: "HyGear Fashion",
      url: "https://hygearfashion.com/",
      category: "E-commerce Platform",
      result: "+65% Online Sales Growth",
      revenue: "$2.5M+ Revenue Generated",
      description: "A comprehensive fashion e-commerce platform that revolutionized online retail for trendy clothing, featuring advanced inventory management, personalized recommendations, and seamless payment integration.",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      achievements: [
        "2.5M+ Revenue Generated",
        "65% Sales Growth",
        "50K+ Active Users",
        "99.9% Uptime"
      ],
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "AWS"],
      duration: "8 Months",
      teamSize: "12 Specialists",
      clientType: "Fashion Retail Giant"
    },
    {
      name: "Oxygen4India",
      url: "https://oxygen4india.com/",
      category: "Healthcare Platform",
      result: "+80% Life-Saving Connections",
      revenue: "10,000+ Lives Impacted",
      description: "Critical healthcare platform that connected patients with oxygen suppliers during emergency situations, featuring real-time tracking, emergency alerts, and 24/7 support system.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      achievements: [
        "10,000+ Lives Impacted",
        "80% Faster Response Time",
        "1000+ Suppliers Connected",
        "24/7 Emergency Support"
      ],
      technologies: ["React", "Firebase", "Google Maps API", "PWA", "WebRTC"],
      duration: "6 Months",
      teamSize: "15 Specialists",
      clientType: "Healthcare Emergency Services"
    },
    {
      name: "Roadies Koffe Houz",
      url: "https://roadies-koffe-houz.vercel.app/",
      category: "Restaurant Technology",
      result: "+70% Online Orders",
      revenue: "$500K+ Order Value",
      description: "Modern coffee house platform offering premium coffee experiences with seamless online ordering, table reservations, and loyalty program management.",
      image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      achievements: [
        "$500K+ Order Value",
        "70% Order Growth",
        "5000+ Loyal Customers",
        "4.8★ Customer Rating"
      ],
      technologies: ["Next.js", "Tailwind CSS", "Supabase", "Vercel", "Stripe"],
      duration: "4 Months",
      teamSize: "8 Specialists",
      clientType: "Premium Coffee Chain"
    },
    {
      name: "KD Engineers",
      url: "https://kdengineers.in/",
      category: "Engineering Consultancy",
      result: "+35% Project Inquiries",
      revenue: "$1.2M+ Project Value",
      description: "Professional engineering consultancy platform showcasing complex infrastructure projects, technical capabilities, and providing comprehensive engineering solutions.",
      image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      achievements: [
        "$1.2M+ Project Value",
        "35% Inquiry Growth",
        "25+ Major Projects",
        "Industry Recognition"
      ],
      technologies: ["WordPress", "Custom PHP", "MySQL", "AutoCAD Integration"],
      duration: "10 Months",
      teamSize: "10 Specialists",
      clientType: "Infrastructure Development"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-chaotic-blue/5 via-transparent to-yellow-400/5"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 bg-chaotic-blue/10 text-chaotic-blue px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Trophy className="w-4 h-4" />
            Our Biggest Projects
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-syne mb-6">
            Transforming Industries,<br />
            <span className="text-chaotic-blue">One Project at a Time</span>
          </h2>
          <p className="text-xl text-gray-600 font-kanit max-w-3xl mx-auto">
            These are the projects that define our expertise. Each one represents months of innovation, 
            cutting-edge technology, and measurable business impact.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {biggestProjects.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="group relative"
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-chaotic-blue text-white">
                      {project.category}
                    </Badge>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-2xl font-bold text-white mb-2 font-syne">
                      {project.name}
                    </h3>
                    <div className="flex items-center gap-4 text-white/90 text-sm">
                      <div className="flex items-center gap-1">
                        <TrendingUp className="w-4 h-4" />
                        {project.result}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-gray-600 font-kanit mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <Calendar className="w-4 h-4" />
                        Duration: {project.duration}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <Users className="w-4 h-4" />
                        Team: {project.teamSize}
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="text-sm text-gray-500">Client Type:</div>
                      <div className="text-sm font-medium">{project.clientType}</div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold mb-3 text-gray-800">Key Achievements</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {project.achievements.map((achievement, achIndex) => (
                        <div key={achIndex} className="flex items-center gap-2 text-sm text-gray-600">
                          <div className="w-2 h-2 bg-chaotic-blue rounded-full"></div>
                          {achievement}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold mb-3 text-gray-800">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-2xl font-bold text-chaotic-blue">
                        {project.revenue}
                      </div>
                      <div className="text-sm text-gray-500">Impact Generated</div>
                    </div>
                    <Button
                      onClick={() => window.open(project.url, '_blank', 'noopener,noreferrer')}
                      className="bg-chaotic-blue hover:bg-chaotic-blue/90 text-white font-kanit"
                    >
                      View Project <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>

              {hoveredProject === index && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="absolute inset-0 bg-gradient-to-r from-chaotic-blue/20 to-yellow-400/20 rounded-2xl -z-10 blur-xl"
                />
              )}
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <p className="text-lg font-kanit text-gray-600 mb-6">
            Ready to be our next success story?
          </p>
          <Button 
            size="lg"
            className="bg-chaotic-blue hover:bg-chaotic-blue/90 text-white font-kanit rounded-none"
          >
            START YOUR PROJECT <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default BiggestProjectsSection;
