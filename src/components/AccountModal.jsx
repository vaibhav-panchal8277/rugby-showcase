import { X } from 'lucide-react';
import { useState } from 'react';

const AccountModal = ({ isOpen, onClose }) => {
  const [isLogin, setIsLogin] = useState(false);
  
  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(isLogin ? "Logged in successfully!" : "Account created successfully!");
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/60 z-[100] flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-md shadow-2xl relative transform transition-all">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-red-600 transition-colors">
          <X size={24} />
        </button>
        
        <div className="p-8">
          <h2 className="text-2xl font-extrabold uppercase italic text-blue-900 mb-6 text-center">
            {isLogin ? "Welcome Back" : "Create Account"}
          </h2>
          
          <form className="space-y-4" onSubmit={handleSubmit}>
            {!isLogin && (
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">Full Name</label>
                <input 
                  type="text" 
                  required 
                  placeholder="John Doe"
                  className="w-full border-2 border-gray-200 px-4 py-2 bg-gray-50 focus:bg-white focus:border-blue-900 focus:outline-none transition-colors" 
                />
              </div>
            )}
            
            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">Email Address</label>
              <input 
                type="email" 
                required 
                placeholder="you@example.com"
                className="w-full border-2 border-gray-200 px-4 py-2 bg-gray-50 focus:bg-white focus:border-blue-900 focus:outline-none transition-colors" 
              />
            </div>
            
            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">Password</label>
              <input 
                type="password" 
                required 
                placeholder="••••••••"
                className="w-full border-2 border-gray-200 px-4 py-2 bg-gray-50 focus:bg-white focus:border-blue-900 focus:outline-none transition-colors" 
              />
            </div>
            
            <button type="submit" className="w-full bg-red-600 text-white font-bold uppercase tracking-widest py-4 mt-6 hover:bg-red-700 transition-colors">
              {isLogin ? "Sign In" : "Register"}
            </button>
          </form>
          
          <div className="mt-8 text-center text-sm font-medium border-t border-gray-100 pt-6">
            <span className="text-gray-500">
              {isLogin ? "Don't have an account?" : "Already have an account?"}
            </span>
            <button 
              type="button"
              onClick={() => setIsLogin(!isLogin)} 
              className="ml-2 text-blue-900 font-bold hover:underline uppercase tracking-wider text-xs"
            >
              {isLogin ? "Create one" : "Log in here"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountModal;
