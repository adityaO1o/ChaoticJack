import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { CircularProgressCard, BudgetCard, TrafficCard } from '@/components/DashboardCard';
import { motion } from 'framer-motion';

const Hero = () => {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState(''); // <-- Added phone state
  const [animateCards, setAnimateCards] = useState(false);

  const budgetData = [
    { name: 'Jan', value: 30000, previous: 25000 },
    { name: 'Feb', value: 35000, previous: 28000 },
    { name: 'Mar', value: 33000, previous: 30000 },
    { name: 'Apr', value: 32000, previous: 29000 },
    { name: 'May', value: 38000, previous: 25000 },
    { name: 'Jun', value: 42000, previous: 32000 },
  ];

  const trafficData = [
    { name: 'Jan', leads: 20, traffic: 0 },
    { name: 'Feb', leads: 30, traffic: 0 },
    { name: 'Mar', leads: 22, traffic: 0 },
    { name: 'Apr', leads: 28, traffic: 0 },
    { name: 'May', leads: 24, traffic: 0 },
    { name: 'Jun', leads: 0, traffic: 30 },
    { name: 'Jul', leads: 0, traffic: 40 },
    { name: 'Aug', leads: 0, traffic: 34 },
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimateCards(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Email submitted:', email, 'Phone:', phone);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 10,
      },
    },
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-20 pb-10 mt-30 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/50 via-chaotic-blue/20 to-transparent z-0"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            className="space-y-8 max-w-2xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-syne leading-tight">
              Creative marketing that drives revenue
            </h1>
            <p className="text-lg md:text-xl font-kanit text-gray-700">
              It's your turn to shine when we put the spotlight on your brand. We help get the attention and revenues your business deserves in the digital world.
            </p>
            {/* Responsive Form */}
           <form onSubmit={handleSubmit} className="mt-4 animate-slide-up">
                <div
                  className="
      bg-white p-3 rounded-[20px_20px_20px_0px] border-2 border-black shadow-lg
      flex flex-col md:flex-row gap-2 md:gap-0
      overflow-hidden transition-all duration-300 hover:shadow-xl transform hover:scale-[1.02]
    "
                >
                  <input
                    type="email"
                    placeholder="Email"
                    className="
        flex-1 py-2 px-4 focus:outline-none font-kanit text-black placeholder-gray-500
        rounded-t-xl md:rounded-t-none md:rounded-l-xl
      "
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />

                  <input
                    type="tel"
                    placeholder="Phone"
                    className="
        flex-1 py-2 px-4 focus:outline-none font-kanit text-black placeholder-gray-500
        border-t md:border-t-0 md:border-l border-black
        rounded-none
      "
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />

                  <button
                    type="submit"
                    className="
        bg-black text-sm text-white border-none hover:bg-chaotic-blue transition-colors
        px-4 font-kanit w-full md:w-auto
        rounded-b-xl md:rounded-b-none md:rounded-r-xl
      "
                  >
                    GET A FREE AUDIT
                  </button>
                </div>
              </form>



            {/* End Responsive Form */}
          </motion.div>

          <motion.div
            className="relative flex flex-col gap-4"
            variants={containerVariants}
            initial="hidden"
            animate={animateCards ? 'visible' : 'hidden'}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <motion.div variants={cardVariants} className="scale-90">
                <TrafficCard
                  title="Generated Traffic & Leads"
                  data={trafficData}
                  percentage={61}
                  className="hover:shadow-xl transition-all duration-300 rounded-xl"
                />
              </motion.div>

              <motion.div variants={cardVariants} className="scale-90">
                <CircularProgressCard
                  title="Facebook Marketing Campaign"
                  value={690}
                  max={1000}
                  className="hover:shadow-xl transition-all duration-300 rounded-xl"
                />
              </motion.div>

              <motion.div variants={cardVariants} className="md:col-span-2 scale-90">
                <BudgetCard
                  amount={42600}
                  budget={55000}
                  data={budgetData}
                  className="hover:shadow-xl transition-all duration-300 rounded-xl"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
