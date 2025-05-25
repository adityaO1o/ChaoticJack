import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const Hero = () => {
  const [formData, setFormData] = useState({ phone: '', email: '' });
  const [submitting, setSubmitting] = useState(false);
  const [successMsg, setSuccessMsg] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
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
      await fetch(
        'https://docs.google.com/forms/u/0/d/e/1FAIpQLSf87gCG5x4ooYJtjINEXKTnRK5ha5nM9BpZGxHfYOSwOg7x9Q/formResponse',
        {
          method: 'POST',
          mode: 'no-cors',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: formBody.toString(),
        }
      );
      setSuccessMsg('Thank you! Your enquiry has been sent.');
      setFormData({ phone: '', email: '' });
      setTimeout(() => setSuccessMsg(''), 3000);
    } catch (err) {
      setErrorMsg('Could not connect to server. Please try again.');
    }
    setSubmitting(false);
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-10 pb-10 overflow-hidden">
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

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Main flex container for centering */}
        <div className="flex flex-col lg:flex-row items-center justify-center min-h-[calc(100vh-80px)] mt-8 gap-12">
          {/* Left: Text and Form */}
          <motion.div
            className="space-y-8 max-w-2xl w-full"
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
            <form
              onSubmit={handleSubmit}
              className="bg-white p-3 rounded-[20px_20px_20px_20px] border-2 border-black shadow-lg
                         flex flex-col md:flex-row gap-2 md:gap-0
                         overflow-hidden transition-all duration-300 hover:shadow-xl transform hover:scale-[1.02] w-full max-w-xl"
            >
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="flex-1 py-2 px-4 focus:outline-none font-kanit text-black placeholder-gray-500
                           rounded-t-xl md:rounded-t-none md:rounded-l-xl"
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone"
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
                {submitting ? 'Submitting...' : 'NEXT'}
              </button>
            </form>
            {errorMsg && <p className="text-red-600 text-sm mt-2">{errorMsg}</p>}
          </motion.div>

          {/* Right: Images */}
          <motion.div
            className="flex flex-col gap-4 items-center justify-center w-full"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
              <img
                src="/box-2.webp"
                alt="Facebook Marketing Campaign"
                className="max-w-full h-auto rounded-xl shadow-md"
                style={{ width: '100%', maxWidth: 350 }}
              />
              <img
                src="/box-3.webp"
                alt="Generated Traffic & Leads"
                className="max-w-full h-auto rounded-xl shadow-md"
                style={{ width: '100%', maxWidth: 350 }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
