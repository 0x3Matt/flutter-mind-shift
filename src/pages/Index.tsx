
import { useState, useEffect } from 'react';
import { Twitter, Instagram, Dribbble } from 'lucide-react';

const Index = () => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Start animations after a brief delay
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/lovable-uploads/3193d15d-a501-4a9b-b8b9-995c620ba110.png)',
        }}
      >
        {/* Subtle overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-transparent to-blue-900/5"></div>
      </div>

      {/* Logo - Top Left */}
      <div className="absolute top-6 left-6 md:top-8 md:left-8 z-10">
        <div className="text-white/70 font-medium text-sm tracking-wider">
          BUTTERFLY EFFECT
        </div>
      </div>

      {/* Main Content - Bottom Left Glassmorphism Panel */}
      <div className="absolute bottom-8 left-8 right-8 md:bottom-12 md:left-12 md:right-auto md:max-w-xl z-10">
        <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 md:p-10 shadow-2xl">
          {/* Tagline */}
          <div 
            className={`text-white/80 text-xs md:text-sm uppercase tracking-[0.2em] font-medium mb-4 transition-all duration-1000 ease-out ${
              showContent ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
            style={{ animationDelay: '0.5s' }}
          >
            Small Moments. Big Shifts.
          </div>

          {/* Main Heading */}
          <h1 
            className={`text-white text-4xl md:text-5xl lg:text-6xl font-bold mb-6 transition-all duration-1000 ease-out ${
              showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ animationDelay: '1s' }}
          >
            Butterfly Effect
          </h1>

          {/* Description */}
          <div className="space-y-4 mb-8">
            <p 
              className={`text-white/90 text-base md:text-lg leading-relaxed transition-all duration-1000 ease-out ${
                showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ animationDelay: '1.5s' }}
            >
              Butterfly Effect is a mindful design playground.
            </p>
            <p 
              className={`text-white/90 text-base md:text-lg leading-relaxed transition-all duration-1000 ease-out ${
                showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ animationDelay: '2s' }}
            >
              Explore minimal interactions that spark deeper ideas, moments, and motion.
            </p>
            <p 
              className={`text-white/90 text-base md:text-lg leading-relaxed transition-all duration-1000 ease-out ${
                showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ animationDelay: '2.5s' }}
            >
              Because the smallest click can carry you somewhere new.
            </p>
          </div>

          {/* Social Icons */}
          <div 
            className={`flex space-x-6 transition-all duration-1000 ease-out ${
              showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ animationDelay: '3s' }}
          >
            <a 
              href="#" 
              className="text-white/70 hover:text-white hover:scale-110 transition-all duration-300 ease-out hover:drop-shadow-lg"
            >
              <Twitter size={20} />
            </a>
            <a 
              href="#" 
              className="text-white/70 hover:text-white hover:scale-110 transition-all duration-300 ease-out hover:drop-shadow-lg"
            >
              <Instagram size={20} />
            </a>
            <a 
              href="#" 
              className="text-white/70 hover:text-white hover:scale-110 transition-all duration-300 ease-out hover:drop-shadow-lg"
            >
              <Dribbble size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* CTA Button - Bottom Right */}
      <div className="absolute bottom-8 right-8 md:bottom-12 md:right-12 z-10">
        <button 
          className={`
            bg-gradient-to-r from-purple-400/20 to-pink-400/20 backdrop-blur-sm
            border border-white/20 text-white px-8 py-4 rounded-xl
            font-medium text-lg shadow-2xl
            hover:scale-105 hover:bg-gradient-to-r hover:from-purple-400/30 hover:to-pink-400/30
            hover:border-white/30 hover:shadow-purple-500/25
            transition-all duration-500 ease-out
            animate-float
            ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
          `}
          style={{ animationDelay: '3.5s' }}
        >
          Let it Flutter
        </button>
      </div>

      {/* Custom styles for floating animation */}
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Index;
