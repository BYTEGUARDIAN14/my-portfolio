import { GlassButton } from './GlassButton';
import { Mail, Github, Linkedin } from 'lucide-react';

interface HeroSectionProps {
  scrollY: number;
}

export const HeroSection = ({ scrollY }: HeroSectionProps) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-32">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        {/* Text Content */}
        <div className="space-y-8 z-10">
          <div 
            className="inline-block px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 cursor-default group mt-12"
            style={{
              backdropFilter: 'blur(15px)',
              background: 'rgba(255, 255, 255, 0.05)', // Reduced from 0.1
              border: '1px solid rgba(255, 255, 255, 0.1)', // Reduced from 0.2
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = '0 0 25px rgba(255, 255, 255, 0.25), 0 8px 32px rgba(0, 0, 0, 0.2)'; // Reduced glow
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)'; // Reduced from 0.15
              e.currentTarget.style.backdropFilter = 'blur(20px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.1)';
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
              e.currentTarget.style.backdropFilter = 'blur(15px)';
            }}
          >
            <span className="opacity-80">Cybersecurity Specialist & Full-Stack Developer</span> {/* Added opacity */}
          </div>
          
          <div className="space-y-6">
            <h1 className="text-6xl lg:text-7xl font-bold leading-tight">
              MOHAMED
              <br />
              <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent opacity-90"> {/* Added opacity */}
                ADHNAAN
              </span>
              <br />
              J M
            </h1>
            
            <p className="text-xl text-gray-300 leading-relaxed max-w-lg opacity-80"> {/* Added opacity */}
              Crafting secure, AI-powered solutions with cutting-edge glassmorphism design. 
              Specializing in vulnerability scanning, ethical hacking, and full-stack development.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <GlassButton href="mailto:byteguardiann@gmail.com">
              <Mail className="w-5 h-5 opacity-80" /> {/* Added opacity to icon */}
              <span>Contact Me</span>
            </GlassButton>
            
            <GlassButton href="https://www.linkedin.com/in/byteguardiann" variant="secondary">
              <Linkedin className="w-5 h-5 opacity-80" /> {/* Added opacity to icon */}
              <span>LinkedIn</span>
            </GlassButton>
            
            <GlassButton href="https://github.com/BYTEGUARDIAN14" variant="secondary">
              <Github className="w-5 h-5 opacity-80" /> {/* Added opacity to icon */}
              <span>GitHub</span>
            </GlassButton>
          </div>
        </div>

        {/* Profile Image - Fixed to prevent background overlay */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="relative">
            {/* Clean Glass Frame Around Image - No background interference */}
            <div 
              className="relative w-96 h-96 lg:w-[500px] lg:h-[500px] rounded-3xl overflow-hidden transition-all duration-300 cursor-default"
              style={{
                border: '2px solid rgba(255, 255, 255, 0.08)', // Reduced from 0.15
                boxShadow: '0 16px 64px rgba(0, 0, 0, 0.3)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 0 30px rgba(255, 255, 255, 0.2), 0 20px 80px rgba(0, 0, 0, 0.4)'; // Reduced glow
                e.currentTarget.style.transform = 'scale(1.02)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 16px 64px rgba(0, 0, 0, 0.3)';
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              {/* Clear image container with no background overlays */}
              <img
                src="/placeholder.svg"
                alt="Mohamed Adhnaan J M"
                className="w-full h-full object-cover opacity-90" // Added opacity
                style={{
                  filter: 'contrast(1.1) brightness(1.05)',
                }}
              />
              
              {/* Floating Glass Info Panel - Positioned to not cover face */}
              <div 
                className="absolute bottom-6 left-6 right-6 p-4 rounded-xl transition-all duration-300 hover:scale-105 cursor-default group"
                style={{
                  backdropFilter: 'blur(25px)',
                  background: 'rgba(0, 0, 0, 0.25)', // Reduced from 0.4
                  border: '1px solid rgba(255, 255, 255, 0.1)', // Reduced from 0.2
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 0 30px rgba(255, 255, 255, 0.3), 0 12px 40px rgba(0, 0, 0, 0.3)'; // Reduced glow
                  e.currentTarget.style.background = 'rgba(0, 0, 0, 0.35)'; // Reduced from 0.5
                  e.currentTarget.style.backdropFilter = 'blur(30px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.2)';
                  e.currentTarget.style.background = 'rgba(0, 0, 0, 0.25)';
                  e.currentTarget.style.backdropFilter = 'blur(25px)';
                }}
              >
                <h3 className="text-lg font-semibold text-white mb-1 opacity-90"> {/* Added opacity */}
                  Cybersecurity Expert
                </h3>
                <p className="text-sm text-gray-200 opacity-80"> {/* Added opacity */}
                  AI-Powered Security Solutions
                </p>
              </div>
            </div>

            {/* Minimal Floating Glass Elements - Reduced for better performance */}
            <div 
              className="absolute -top-4 -right-4 w-16 h-16 rounded-xl opacity-20 transition-all duration-300 hover:opacity-60 hover:scale-110 cursor-default" // Reduced opacity
              style={{
                backdropFilter: 'blur(10px)',
                background: 'rgba(255, 255, 255, 0.025)', // Reduced from 0.05
                border: '1px solid rgba(255, 255, 255, 0.05)', // Reduced from 0.1
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 0 20px rgba(255, 255, 255, 0.25), 0 8px 32px rgba(0, 0, 0, 0.2)'; // Reduced glow
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.06)'; // Reduced from 0.12
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.025)';
              }}
            />
            
            <div 
              className="absolute -bottom-4 -left-4 w-20 h-20 rounded-2xl opacity-15 transition-all duration-300 hover:opacity-45 hover:scale-110 cursor-default" // Reduced opacity
              style={{
                backdropFilter: 'blur(8px)',
                background: 'rgba(255, 255, 255, 0.015)', // Reduced from 0.03
                border: '1px solid rgba(255, 255, 255, 0.04)', // Reduced from 0.08
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 0 25px rgba(255, 255, 255, 0.2), 0 8px 32px rgba(0, 0, 0, 0.2)'; // Reduced glow
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)'; // Reduced from 0.1
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.015)';
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
