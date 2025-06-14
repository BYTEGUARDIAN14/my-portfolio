
import { GlassCard } from './GlassCard';
import { GlassButton } from './GlassButton';
import { Mail, Github, Linkedin } from 'lucide-react';

export const ContactSection = () => {
  return (
    <section id="contact" className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">Let's Connect</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto opacity-80"> {/* Added opacity */}
            Ready to collaborate on cybersecurity projects or discuss cutting-edge AI solutions? 
            Let's build something secure and beautiful together.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Contact Information */}
          <GlassCard className="p-8">
            <h3 className="text-2xl font-bold mb-8">Get In Touch</h3>
            <div className="space-y-6">
              <div 
                className="flex items-center space-x-4 p-4 rounded-xl transition-all duration-300 hover:backdrop-blur-xl"
                style={{
                  background: 'rgba(255, 255, 255, 0.025)', // Reduced from 0.05
                  border: '1px solid rgba(255, 255, 255, 0.05)', // Reduced from 0.1
                }}
              >
                <Mail className="w-6 h-6 text-gray-300 opacity-70" /> {/* Added opacity */}
                <div>
                  <div className="font-semibold">Email</div>
                  <div className="text-gray-300 opacity-80">byteguardiann@gmail.com</div> {/* Added opacity */}
                </div>
              </div>

              <div 
                className="flex items-center space-x-4 p-4 rounded-xl transition-all duration-300 hover:backdrop-blur-xl"
                style={{
                  background: 'rgba(255, 255, 255, 0.025)', // Reduced from 0.05
                  border: '1px solid rgba(255, 255, 255, 0.05)', // Reduced from 0.1
                }}
              >
                <Linkedin className="w-6 h-6 text-gray-300 opacity-70" /> {/* Added opacity */}
                <div>
                  <div className="font-semibold">LinkedIn</div>
                  <div className="text-gray-300 opacity-80">www.linkedin.com/in/byteguardiann</div> {/* Added opacity */}
                </div>
              </div>

              <div 
                className="flex items-center space-x-4 p-4 rounded-xl transition-all duration-300 hover:backdrop-blur-xl"
                style={{
                  background: 'rgba(255, 255, 255, 0.025)', // Reduced from 0.05
                  border: '1px solid rgba(255, 255, 255, 0.05)', // Reduced from 0.1
                }}
              >
                <Github className="w-6 h-6 text-gray-300 opacity-70" /> {/* Added opacity */}
                <div>
                  <div className="font-semibold">GitHub</div>
                  <div className="text-gray-300 opacity-80">BYTEGUARDIAN14</div> {/* Added opacity */}
                </div>
              </div>
            </div>
          </GlassCard>

          {/* Call to Action */}
          <div className="space-y-8">
            <GlassCard className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Ready to Collaborate?</h3>
              <p className="text-gray-300 mb-6 opacity-80"> {/* Added opacity */}
                Whether you need cybersecurity consulting, AI-powered solutions, 
                or stunning glassmorphism UI design, I'm here to help bring your vision to life.
              </p>
              <GlassButton href="mailto:byteguardiann@gmail.com" className="w-full justify-center">
                <Mail className="w-5 h-5 opacity-80" /> {/* Added opacity */}
                <span>Start a Conversation</span>
              </GlassButton>
            </GlassCard>

            <div className="grid grid-cols-2 gap-4">
              <GlassButton href="https://www.linkedin.com/in/byteguardiann" variant="secondary" className="justify-center">
                <Linkedin className="w-5 h-5 opacity-80" /> {/* Added opacity */}
                <span>LinkedIn</span>
              </GlassButton>
              <GlassButton href="https://github.com/BYTEGUARDIAN14" variant="secondary" className="justify-center">
                <Github className="w-5 h-5 opacity-80" /> {/* Added opacity */}
                <span>GitHub</span>
              </GlassButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
