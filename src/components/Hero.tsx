import { useState, useEffect } from 'react';
import { CircularProgressCard, BudgetCard, TrafficCard } from '@/components/DashboardCard';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react'; 

const Hero = () => {
  const [formData, setFormData] = useState({ phone: '', email: '' });
  const [submitting, setSubmitting] = useState(false);
  const [successMsg, setSuccessMsg] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [animateCards, setAnimateCards] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccessMsg('');
    setErrorMsg('');

    if (!formData.phone || !formData.email) {
      setErrorMsg('Please fill in all fields.');
      return;
    }

    setSubmitting(true);

    const formBody = new URLSearchParams({
      'entry.1517572706': formData.phone,
      'entry.1991198582': formData.email,
    });

    try {
      await fetch('https://docs.google.com/forms/u/0/d/e/1FAIpQLSf87gCG5x4ooYJtjINEXKTnRK5ha5nM9BpZGxHfYOSwOg7x9Q/formResponse', {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: formBody.toString(),
      });

      setSuccessMsg('Thank you! Your enquiry has been sent.');
      setFormData({ phone: '', email: '' });

      setTimeout(() => {
        setSuccessMsg('');
      }, 3000);
    } catch (err) {
      setErrorMsg('Could not connect to server. Please try again.');
    }

    setSubmitting(false);
  };

  useEffect(() => {
    const timer = setTimeout(() => setAnimateCards(true), 500);
    return () => clearTimeout(timer);
  }, []);

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
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/50 via-chaotic-blue/20 to-transparent z-0"></div>

      {/* Success Popup */}
      <AnimatePresence>
  {successMsg && (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      className="fixed bottom-6 left-1/2 transform -translate-x-1/2 bg-black text-white px-6 py-3 rounded-xl shadow-lg z-50 font-kanit flex items-center gap-4"
    >
      <span className="flex-1">{successMsg}</span>
      <button
        onClick={() => setSuccessMsg('')}
        className="text-white hover:text-red-600 transition"
      >
        <X size={20} />
      </button>
    </motion.div>
  )}
</AnimatePresence>

      <div className="container mx-auto px-4 md:px-6 relative z-10 mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            className="space-y-8 max-w-2xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-syne leading-tight">
              Creative marketing that drives <span className="text-chaotic-blue">revenue</span>
            </h1>
            <p className="text-lg md:text-xl font-kanit text-gray-700">
              It's your turn to shine when we put the spotlight on your brand. We help get the attention and revenues your business deserves in the digital world.
            </p>

            {/* Form */}
            <form
              onSubmit={handleSubmit}
              className="bg-white p-3 rounded-[20px_20px_0px_20px] border-2 border-black shadow-lg
                         flex flex-col md:flex-row gap-2 md:gap-0
                         overflow-hidden transition-all duration-300 hover:shadow-xl transform hover:scale-[1.02]"
            >
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                className="flex-1 py-2 px-4 focus:outline-none font-kanit text-black placeholder-gray-500
                           rounded-t-xl md:rounded-t-none md:rounded-l-xl"
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder="Enter your phone number"
                value={formData.phone}
                onChange={handleChange}
                className="flex-1 py-2 px-4 focus:outline-none font-kanit text-black placeholder-gray-500
                           border-t md:border-t-0 md:border-l border-black rounded-none"
                required
              />
              <button
                type="submit"
                className="bg-black text-sm text-white border-none hover:bg-chaotic-blue transition-colors
             px-4 py-2 font-kanit w-full md:w-auto 
             rounded-xl"
                disabled={submitting}
              >
                {submitting ? 'Submitting...' : 'Submit'}
              </button>
            </form>

            {errorMsg && <p className="text-red-600 text-sm mt-2">{errorMsg}</p>}
          </motion.div>

          {/* Cards */}
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