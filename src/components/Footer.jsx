

const Footer = () => {
  return (
    <footer className="bg-gray-900 pt-16 pb-8 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h4 className="font-extrabold text-white uppercase tracking-wider mb-4">Customer Service</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Help & FAQs</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Delivery Information</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Returns & Refunds</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Track Your Order</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-extrabold text-white uppercase tracking-wider mb-4">Shopping Info</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Size Guides</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Boot Buying Guide</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Personalisation</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Student Discount</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Gift Vouchers</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-extrabold text-white uppercase tracking-wider mb-4">About Rugbystore</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Our Story</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-extrabold text-white uppercase tracking-wider mb-4">Stay Connected</h4>
            <p className="text-sm mb-4">Subscribe to our newsletter for exclusive offers and the latest rugby news.</p>
            <div className="flex">
              <input type="email" placeholder="Email Address" className="w-full px-4 py-2 text-black focus:outline-none" />
              <button className="bg-red-600 text-white px-4 py-2 font-bold uppercase hover:bg-red-700">Sign Up</button>
            </div>
            <div className="flex space-x-4 mt-6 text-sm font-bold">
              <a href="#" className="hover:text-white">FB</a>
              <a href="#" className="hover:text-white">X</a>
              <a href="#" className="hover:text-white">IG</a>
              <a href="#" className="hover:text-white">YT</a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs">
          <p>© 2026 Rugbystore.co.uk Demo. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <span className="font-bold italic text-gray-500">VISA</span>
            <span className="font-bold italic text-gray-500">MASTERCARD</span>
            <span className="font-bold italic text-gray-500">PAYPAL</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
