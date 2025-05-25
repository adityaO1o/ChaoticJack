import { useState } from 'react';
import { Lightbulb, Users, LayoutDashboard, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const ConsultationSection = () => {
  const [formData, setFormData] = useState({ phone: '', email: '' });
  const [submitting, setSubmitting] = useState(false);
  const [successMsg, setSuccessMsg] = useState('');
  const [errorMsg, setErrorMsg] = useState('');


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


  return (
    <section className="w-full py-20 md:py-28 bg-chaotic-blue/10">
      <div className="max-w-screen-2xl mx-auto px-4 md:px-8">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden p-8 md:p-16 relative">

          {/* Header */}
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-syne leading-tight mb-6">
              Get a Free Consultation to <span className="text-chaotic-blue">Boost Your Business</span>
            </h2>
            <p className="text-lg md:text-xl font-kanit text-gray-700">
              Our comprehensive marketing audit includes analysis of your target audience, UX evaluation, content audit, and a tailored growth strategy.
            </p>
          </div>
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

          {/* Audit Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-chaotic-blue/5 hover:bg-chaotic-blue/10 transition p-8 rounded-2xl text-center shadow-md">
              <div className="bg-chaotic-blue text-white w-12 h-12 mx-auto rounded-full flex items-center justify-center mb-4">
                <Users className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-syne font-bold mb-2">Target Audience Analysis</h3>
              <p className="text-gray-700 font-kanit text-sm">
                We identify your ideal customers and how to reach them effectively.
              </p>
            </div>

            <div className="bg-chaotic-blue/5 hover:bg-chaotic-blue/10 transition p-8 rounded-2xl text-center shadow-md">
              <div className="bg-chaotic-blue text-white w-12 h-12 mx-auto rounded-full flex items-center justify-center mb-4">
                <LayoutDashboard className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-syne font-bold mb-2">UX Analysis</h3>
              <p className="text-gray-700 font-kanit text-sm">
                We evaluate your website’s user experience and conversion paths.
              </p>
            </div>

            <div className="bg-chaotic-blue/5 hover:bg-chaotic-blue/10 transition p-8 rounded-2xl text-center shadow-md">
              <div className="bg-chaotic-blue text-white w-12 h-12 mx-auto rounded-full flex items-center justify-center mb-4">
                <Lightbulb className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-syne font-bold mb-2">Content Audit</h3>
              <p className="text-gray-700 font-kanit text-sm">
                We assess your content strategy and recommend improvements.
              </p>
            </div>
          </div>

          {/* CTA Button and Email Form */}
          <div className="text-center mb-10">
            <h3 className="text-xl font-syne font-bold mb-3">Ready to Grow Your Brand?</h3>
            <p className="text-gray-700 font-kanit text-sm mb-6">Let us show you what real digital performance looks like.</p>
            <div className="flex justify-center mb-6">
              <a
                href="tel:9541457327"
                className="
      inline-flex items-center gap-2 px-4 py-2
      bg-chaotic-blue rounded-[10px_10px_10px_10px] text-white font-bold text-base shadow-lg tracking-wide 
      transition-colors duration-200
      hover:bg-black focus:bg-chaotic-blue
      cursor-pointer
    "
                aria-label="Call us at 9541457327"
              >
                <Phone className="w-5 h-5" />
                Let’s Talk – <span className="font-mono tracking-tight">9541457327</span>
              </a>
            </div>
            {/* Cool Form */}
          <form
  onSubmit={handleSubmit}
  className="
    bg-white p-3 rounded-[20px_20px_20px_20px] border-2 border-black shadow-lg
    flex flex-col md:flex-row gap-2 md:gap-0
    overflow-hidden transition-all duration-300 hover:shadow-xl transform hover:scale-[1.02]
    w-full md:w-[50vw] mx-auto
  "
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
            <div className="flex flex-col items-center mt-4 mb-8">
              <h3 className="text-sm font-syne font-bold mb-2">
                A PARTNER NOT A VENDOR
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsultationSection;
