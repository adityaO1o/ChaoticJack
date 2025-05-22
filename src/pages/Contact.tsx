
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  return (
    <div className=" absolute inset-0 bg-gradient-to-br from-yellow-400/50 via-chaotic-blue/20 to-transparent z-0 min-h-screen bg-white">
      <Navbar />
      
      <main className="pt-28 pb-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold font-syne mb-8">
                Get In Touch
              </h1>
              
              <p className="text-lg font-kanit text-gray-700 mb-8">
                Ready to boost your business with proven marketing strategies? 
                Fill out the form, and our team will get back to you within 24 hours.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-chaotic-blue/10 flex items-center justify-center text-chaotic-blue shrink-0 mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-syne font-bold">Phone</h3>
                    <p className="text-gray-700 font-kanit">9541457327</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-chaotic-blue/10 flex items-center justify-center text-chaotic-blue shrink-0 mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-syne font-bold">Email</h3>
                    <p className="text-gray-700 font-kanit">info@consultingmdm.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-chaotic-blue/10 flex items-center justify-center text-chaotic-blue shrink-0 mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-syne font-bold">Address</h3>
                    <p className="text-gray-700 font-kanit">Delhi, India</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-sm shadow-lg">
              <h2 className="text-2xl font-syne font-bold mb-6">Send Us a Message</h2>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block mb-2 font-kanit">Your Name</label>
                    <Input 
                      id="name" 
                      placeholder="John Doe" 
                      className="rounded-none border-gray-300 font-kanit"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block mb-2 font-kanit">Email</label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="john@example.com" 
                      className="rounded-none border-gray-300 font-kanit"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block mb-2 font-kanit">Subject</label>
                  <Input 
                    id="subject" 
                    placeholder="How can we help?" 
                    className="rounded-none border-gray-300 font-kanit"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block mb-2 font-kanit">Message</label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell us about your project..." 
                    className="rounded-none border-gray-300 font-kanit min-h-[150px]"
                  />
                </div>
                
                <Button 
                  type="submit"
                  className="w-full rounded-none bg-black text-white border border-white hover:bg-white hover:text-black transition-colors font-kanit"
                >
                  SEND MESSAGE
                </Button>
              </form>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
