
import { useState, useEffect } from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';
import { GlassCard } from '@/components/GlassCard';
import { GlassButton } from '@/components/GlassButton';
import { HeroSection } from '@/components/HeroSection';
import { SkillsSection } from '@/components/SkillsSection';
import { ContactSection } from '@/components/ContactSection';

const Index = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white relative overflow-x-hidden">
      {/* Optimized Static Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800" />
      
      {/* Reduced and Optimized Floating Glass Particles */}
      <div className="fixed inset-0 pointer-events-none">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full opacity-20" // Reduced from opacity-30
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 100 + 30}px`,
              height: `${Math.random() * 100 + 30}px`,
              backdropFilter: 'blur(15px)',
              background: 'rgba(255, 255, 255, 0.01)', // Reduced from 0.02
              border: '1px solid rgba(255, 255, 255, 0.03)', // Reduced from 0.05
              animation: `float ${Math.random() * 3 + 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Optimized Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 p-6">
        <div className="max-w-7xl mx-auto">
          <div 
            className="rounded-2xl px-8 py-4 flex justify-between items-center transition-all duration-300"
            style={{
              backdropFilter: 'blur(20px)',
              background: 'rgba(255, 255, 255, 0.04)', // Reduced from 0.08
              border: '1px solid rgba(255, 255, 255, 0.08)', // Reduced from 0.15
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
            }}
          >
            <div className="text-xl font-bold opacity-80">MOHAMED ADHNAAN</div> {/* Added opacity */}
            <div className="hidden md:flex space-x-8">
              {['About', 'Skills', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="hover:text-gray-300 transition-all duration-500 ease-out px-3 py-1 rounded-lg hover:backdrop-blur-sm hover:bg-white/3 hover:scale-105 transform opacity-70 hover:opacity-90" // Reduced opacity and hover bg
                  style={{
                    transition: 'all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                  }}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <HeroSection scrollY={scrollY} />

      {/* About Section - Improved spacing and performance */}
      <section id="about" className="relative py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <GlassCard className="p-12">
            <h2 className="text-4xl font-bold mb-8 text-center">About Me</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-lg leading-relaxed mb-6">
                  Cybersecurity specialist and full-stack developer with expertise in AI-powered vulnerability scanning and ethical hacking. I create secure, innovative solutions that bridge the gap between cutting-edge technology and robust security practices.
                </p>
                <p className="text-lg leading-relaxed">
                  My passion lies in developing glassmorphism UI designs inspired by Apple's aesthetic while maintaining the highest standards of application security and performance.
                </p>
              </div>
              <div 
                className="space-y-4 p-6 rounded-2xl"
                style={{
                  backdropFilter: 'blur(15px)',
                  background: 'rgba(255, 255, 255, 0.025)', // Reduced from 0.05
                  border: '1px solid rgba(255, 255, 255, 0.05)', // Reduced from 0.1
                }}
              >
                <h3 className="text-xl font-semibold mb-4">Specializations</h3>
                {[
                  'Cybersecurity & Ethical Hacking',
                  'AI-powered Security Solutions',
                  'Full-Stack Development',
                  'Advanced UI/UX Design',
                  'Network Analysis & Penetration Testing'
                ].map((spec, index) => (
                  <div 
                    key={index}
                    className="p-3 rounded-lg transition-all duration-300 hover:backdrop-blur-md hover:bg-white/3" // Reduced hover bg
                    style={{
                      background: 'rgba(255, 255, 255, 0.015)', // Reduced from 0.03
                      border: '1px solid rgba(255, 255, 255, 0.04)', // Reduced from 0.08
                    }}
                  >
                    {spec}
                  </div>
                ))}
              </div>
            </div>
          </GlassCard>
        </div>
      </section>

      {/* Skills Section */}
      <SkillsSection />

      {/* Experience Timeline - Improved performance */}
      <section className="relative py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Experience & Projects</h2>
          <div className="space-y-8">
            {[
              {
                title: "AI-Powered Vulnerability Scanner",
                period: "2024",
                description: "Developed advanced scanning tools with real-time AI solution generation for identified vulnerabilities. Integrated with Flask backend and modern glassmorphism UI.",
              },
              {
                title: "Secure Chatbot Development",
                period: "2023-2024",
                description: "Created secure web applications with advanced packet sniffing capabilities and comprehensive security analysis using Wireshark and Kali Linux.",
              },
              {
                title: "Full-Stack Security Solutions",
                period: "2023",
                description: "Built Flask and PyQt5 applications with integrated PDF report generation and graph visualization for security assessments.",
              },
            ].map((item, index) => (
              <div key={index} className="relative">
                <GlassCard className="p-8 transition-all duration-300 hover:backdrop-blur-3xl hover:scale-[1.01]">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                    <h3 className="text-2xl font-semibold">{item.title}</h3>
                    <span 
                      className="px-4 py-2 rounded-full text-sm"
                      style={{
                        background: 'rgba(255, 255, 255, 0.05)', // Reduced from 0.1
                        border: '1px solid rgba(255, 255, 255, 0.1)', // Reduced from 0.2
                        backdropFilter: 'blur(10px)',
                      }}
                    >
                      {item.period}
                    </span>
                  </div>
                  <p className="text-gray-300 leading-relaxed">{item.description}</p>
                </GlassCard>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <footer className="relative py-12 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <GlassCard className="p-8">
            <p className="text-gray-400 opacity-80"> {/* Added opacity */}
              © 2025 Mohamed Adhnaan J M. "Security is not a product, but a process. Trust, but verify."
            </p>
          </GlassCard>
        </div>
      </footer>
    </div>
  );
};

export default Index;
