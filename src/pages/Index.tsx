
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
      {/* Video Background */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="https://arttentionmedia.pro/wp-content/uploads/2025/07/social_utribeone_A_gentle_breeze_stirs_a_field_of_glowing_violet_flo_fab86d25-d8d5-44b9-8805-d47816b6160d_0.mp4" type="video/mp4" />
      </video>

      {/* Full-page Glass Overlay */}
      <div className="absolute inset-0 backdrop-blur-sm bg-black/5"></div>

      {/* Logo - Top Left */}
      <div className="absolute top-6 left-6 md:top-8 md:left-8 z-10">
        <div className="text-white/70 font-medium text-lg md:text-xl tracking-wider">
          BUTTERFLY EFFECT
        </div>
      </div>

      {/* Main Content - Bottom Left */}
      <div className="absolute bottom-20 left-8 right-8 md:bottom-12 md:left-12 md:right-auto md:max-w-xl z-10">
        <div className="space-y-4 md:space-y-6">
          {/* Tagline */}
          <div 
            className={`text-white/90 text-xs md:text-sm uppercase tracking-[0.2em] font-medium transition-all duration-1000 ease-out ${
              showContent ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
            style={{ animationDelay: '0.5s' }}
          >
            Small Moments. Big Shifts.
          </div>

          {/* Main Heading */}
          <h1 
            className={`text-white text-3xl md:text-5xl lg:text-6xl font-bold transition-all duration-1000 ease-out ${
              showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ animationDelay: '1s' }}
          >
            Butterfly Effect
          </h1>

          {/* Description */}
          <div className="space-y-3 md:space-y-4">
            <p 
              className={`text-white/90 text-sm md:text-lg leading-relaxed transition-all duration-1000 ease-out ${
                showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ animationDelay: '1.5s' }}
            >
              Butterfly Effect is a mindful design playground.
            </p>
            <p 
              className={`text-white/90 text-sm md:text-lg leading-relaxed transition-all duration-1000 ease-out hidden md:block ${
                showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ animationDelay: '2s' }}
            >
              Explore minimal interactions that spark deeper ideas, moments, and motion.
            </p>
          </div>

          {/* Social Icons */}
          <div 
            className={`flex space-x-6 transition-all duration-1000 ease-out ${
              showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ animationDelay: '2.5s' }}
          >
            <a 
              href="https://x.com/0x3Matt" 
              className="text-white/70 hover:text-white hover:scale-110 transition-all duration-300 ease-out hover:drop-shadow-lg"
            >
              <Twitter size={18} className="md:w-5 md:h-5" />
            </a>
            <a 
              href="https://github.com/0x3Matt/" 
              className="text-white/70 hover:text-white hover:scale-110 transition-all duration-300 ease-out hover:drop-shadow-lg"
            >
              <Github size={18} className="md:w-5 md:h-5" />
            </a>
            <a 
              href="arttentionmedia.pro" 
              className="text-white/70 hover:text-white hover:scale-110 transition-all duration-300 ease-out hover:drop-shadow-lg"
            >
              <Web size={18} className="md:w-5 md:h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* CTA Button - Bottom Right */}
      <div className="absolute bottom-8 right-8 md:bottom-12 md:right-12 z-10">
        <button 
          className={`
            bg-gradient-to-r from-purple-400/20 to-pink-400/20 backdrop-blur-sm
            border border-white/20 text-white px-8 py-4 md:px-10 md:py-5 rounded-2xl
            font-medium text-lg md:text-xl shadow-2xl
            hover:scale-105 hover:bg-gradient-to-r hover:from-purple-400/30 hover:to-pink-400/30
            hover:border-white/30 hover:shadow-purple-500/25
            transition-all duration-500 ease-out
            ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
          `}
          style={{ animationDelay: '3s' }}
        >
          Let it Flutter
        </button>
      </div>
    </div>
  );
};

export default Index;
