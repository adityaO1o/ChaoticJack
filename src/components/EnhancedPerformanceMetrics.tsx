
import { useState } from 'react';
import { 
  LineChart, 
  Line, 
  AreaChart,
  Area,
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer 
} from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { motion } from 'framer-motion';

const EnhancedPerformanceMetrics = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const overviewData = [
    { month: 'Jan', roas: 3.2, budget: 12000, leads: 80 },
    { month: 'Feb', roas: 4.1, budget: 15000, leads: 120 },
    { month: 'Mar', roas: 5.5, budget: 18000, leads: 150 },
    { month: 'Apr', roas: 5.2, budget: 20000, leads: 140 },
    { month: 'May', roas: 6.7, budget: 22000, leads: 190 },
    { month: 'Jun', roas: 5.9, budget: 20000, leads: 170 },
  ];

  const ppcData = [
    { month: 'Jan', clicks: 5200, impressions: 120000, ctr: 4.3, conversion: 2.1 },
    { month: 'Feb', clicks: 6100, impressions: 135000, ctr: 4.5, conversion: 2.6 },
    { month: 'Mar', clicks: 7800, impressions: 160000, ctr: 4.9, conversion: 3.2 },
    { month: 'Apr', clicks: 7200, impressions: 145000, ctr: 5.0, conversion: 3.8 },
    { month: 'May', clicks: 8500, impressions: 170000, ctr: 5.0, conversion: 3.5 },
    { month: 'Jun', clicks: 9200, impressions: 180000, ctr: 5.1, conversion: 4.0 },
  ];

  const seoData = [
    { month: 'Jan', organic: 2800, direct: 1200, referral: 800 },
    { month: 'Feb', organic: 3100, direct: 1300, referral: 950 },
    { month: 'Mar', organic: 3600, direct: 1450, referral: 1100 },
    { month: 'Apr', organic: 4200, direct: 1600, referral: 1250 },
    { month: 'May', organic: 4800, direct: 1750, referral: 1400 },
    { month: 'Jun', organic: 5500, direct: 1900, referral: 1650 },
  ];

  const socialData = [
    { month: 'Jan', engagement: 4.5, reach: 18000, followers: 12500 },
    { month: 'Feb', engagement: 4.8, reach: 22000, followers: 13800 },
    { month: 'Mar', engagement: 5.2, reach: 26000, followers: 15200 },
    { month: 'Apr', engagement: 5.1, reach: 28000, followers: 16500 },
    { month: 'May', engagement: 5.6, reach: 32000, followers: 18200 },
    { month: 'Jun', engagement: 6.2, reach: 38000, followers: 20500 },
  ];

  const metrics = [
    { title: "6.7x", subtitle: "Avg. ROAS", description: "across SEO, PPC & Social", iconColor: "from-blue-500 to-purple-500" },
    { title: "100+", subtitle: "Clients served", description: "globally", iconColor: "from-yellow-500 to-orange-500" },
    { title: "₹15 Cr+", subtitle: "Managed budgets", description: "across platforms", iconColor: "from-green-500 to-emerald-500" },
    { title: "282,000+", subtitle: "Leads generated", description: "for our clients", iconColor: "from-pink-500 to-rose-500" },
  ];

  return (
    <section className="container mx-auto px-4 md:px-6 py-16">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl font-syne font-bold text-center mb-10">
           Performance Metrics That Matter
        </h2>
        
        <Tabs defaultValue="overview" className="space-y-6" onValueChange={setActiveTab}>
          <TabsList className="grid grid-cols-4 max-w-3xl mx-auto">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="ppc">PPC</TabsTrigger>
            <TabsTrigger value="seo">SEO</TabsTrigger>
            <TabsTrigger value="social">Social</TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview" className="space-y-8">
            <Card className="shadow-lg border-none">
              <CardHeader className="bg-gray-50 rounded-t-lg">
                <CardTitle className="flex items-center">
                  <span className="h-3 w-3 rounded-full bg-chaotic-blue mr-2"></span>
                  Campaign Performance Overview
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="h-[400px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={overviewData}>
                      <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
                      <XAxis dataKey="month" />
                      <YAxis yAxisId="left" orientation="left" stroke="#6366f1" />
                      <YAxis yAxisId="right" orientation="right" stroke="#fbbf24" />
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: '#fff', 
                          border: '1px solid #e5e7eb',
                          borderRadius: '0.5rem',
                          boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
                        }}
                      />
                      <Legend />
                      <Line
                        yAxisId="left"
                        type="monotone"
                        dataKey="roas"
                        name="ROAS (x)"
                        stroke="#6366f1"
                        strokeWidth={3}
                        dot={{ r: 6, fill: '#6366f1', stroke: '#fff', strokeWidth: 2 }}
                        activeDot={{ r: 8, stroke: '#6366f1', strokeWidth: 2 }}
                        animationDuration={1500}
                        animationEasing="ease-in-out"
                      />
                      <Line
                        yAxisId="right"
                        type="monotone"
                        dataKey="leads"
                        name="Leads Generated"
                        stroke="#fbbf24"
                        strokeWidth={3}
                        dot={{ r: 6, fill: '#fbbf24', stroke: '#fff', strokeWidth: 2 }}
                        activeDot={{ r: 8, stroke: '#fbbf24', strokeWidth: 2 }}
                        animationDuration={1500}
                        animationEasing="ease-in-out"
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {metrics.map((metric, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <Card className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border-t-4 border-chaotic-blue text-center h-full">
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${metric.iconColor} mx-auto mb-4 flex items-center justify-center`}>
                      <span className="text-white text-xl font-bold">#{index + 1}</span>
                    </div>
                    <h3 className="font-syne font-bold text-2xl mb-1">{metric.title}</h3>
                    <p className="font-syne text-lg mb-1">{metric.subtitle}</p>
                    <p className="text-gray-600 text-sm">{metric.description}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="ppc">
            <Card className="shadow-lg border-none">
              <CardHeader className="bg-gray-50 rounded-t-lg">
                <CardTitle>PPC Campaign Metrics</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="h-[400px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={ppcData}>
                      <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="clicks" name="Clicks" fill="#4B9CD3" animationDuration={1000} />
                      <Bar dataKey="conversion" name="Conversion Rate (%)" fill="#34D399" animationDuration={1300} />
                      <Bar dataKey="ctr" name="CTR (%)" fill="#FBBF24" animationDuration={1600} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="seo">
            <Card className="shadow-lg border-none">
              <CardHeader className="bg-gray-50 rounded-t-lg">
                <CardTitle>SEO & Traffic Sources</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="h-[400px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={seoData}>
                      <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Area type="monotone" dataKey="organic" name="Organic Traffic" stackId="1" stroke="#4B9CD3" fill="#4B9CD3" animationDuration={1500} />
                      <Area type="monotone" dataKey="direct" name="Direct Traffic" stackId="1" stroke="#34D399" fill="#34D399" animationDuration={1800} />
                      <Area type="monotone" dataKey="referral" name="Referral Traffic" stackId="1" stroke="#F59E0B" fill="#F59E0B" animationDuration={2100} />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="social">
            <Card className="shadow-lg border-none">
              <CardHeader className="bg-gray-50 rounded-t-lg">
                <CardTitle>Social Media Performance</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="h-[400px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={socialData}>
                      <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
                      <XAxis dataKey="month" />
                      <YAxis yAxisId="left" orientation="left" />
                      <YAxis yAxisId="right" orientation="right" />
                      <Tooltip />
                      <Legend />
                      <Line yAxisId="left" type="monotone" dataKey="engagement" name="Engagement (%)" stroke="#4B9CD3" strokeWidth={3} dot={{r: 5}} animationDuration={1500} />
                      <Line yAxisId="right" type="monotone" dataKey="followers" name="Followers" stroke="#F59E0B" strokeWidth={3} dot={{r: 5}} animationDuration={1800} />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </motion.div>
    </section>
  );
};

export default EnhancedPerformanceMetrics;
