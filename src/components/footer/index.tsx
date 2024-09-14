
import { Facebook, Twitter, Instagram, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">EventManager</h3>
            <p className="text-sm">Your go-to platform for managing and discovering amazing events.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/events" className="hover:text-gray-300">All Events</a></li>
              <li><a href="/create-event" className="hover:text-gray-300">Create Event</a></li>
              <li><a href="/about" className="hover:text-gray-300">About Us</a></li>
              <li><a href="/contact" className="hover:text-gray-300">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-3">Legal</h4>
            <ul className="space-y-2">
              <li><a href="/terms" className="hover:text-gray-300">Terms of Service</a></li>
              <li><a href="/privacy" className="hover:text-gray-300">Privacy Policy</a></li>
              <li><a href="/cookies" className="hover:text-gray-300">Cookie Policy</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-3">Connect With Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-gray-300"><Facebook size={20} /></a>
              <a href="#" className="hover:text-gray-300"><Twitter size={20} /></a>
              <a href="#" className="hover:text-gray-300"><Instagram size={20} /></a>
              <a href="#" className="hover:text-gray-300"><Linkedin size={20} /></a>
            </div>
            <div className="mt-4">
              <a href="mailto:info@eventmanager.com" className="flex items-center hover:text-gray-300">
                <Mail size={20} className="mr-2" />
                info@eventmanager.com
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-sm">
          <p>&copy; {currentYear} EventManager. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;