import { Award, Phone, MapPin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          <div>
            <div className="flex items-center mb-6">
              <h3 className="text-2xl font-bold font-syne">Chaotic Jack</h3>
            </div>

            <p className="font-kanit text-gray-300 mb-8 max-w-lg">
              Chaotic Jack is a full-service digital marketing agency recognized for excellence in delivering results-driven marketing solutions across industries.
            </p>

            <div className="space-y-4">
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-chaotic-blue" />
                <span className="font-kanit">9541457327</span>
              </div>

              <div className="flex items-center">
                <MapPin className="h-5 w-5 mr-3 text-chaotic-blue" />
                <span className="font-kanit">Delhi, India</span>
              </div>

              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-chaotic-blue" />
                <span className="font-kanit">riteshchauhan1108@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="font-kanit text-gray-400 mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Chaotic Jack. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;