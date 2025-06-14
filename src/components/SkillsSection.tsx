import { GlassCard } from './GlassCard';
import { TechCarousel } from './TechCarousel';
import { TechInfiniteBanner } from './TechInfiniteBanner';

export const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Cybersecurity & Ethical Hacking",
      skills: [
        "AI-powered Vulnerability Scanning",
        "Packet Sniffing and Network Analysis", 
        "Wireshark, Kali Linux, Wifite, Aircrack-ng",
        "Penetration Testing",
        "Security Assessment & Reporting"
      ]
    },
    {
      title: "Full-Stack Development",
      skills: [
        "Flask, PyQt5, JavaScript",
        "React to Flask UI Conversion",
        "Secure Web App Development",
        "PDF Report Generation",
        "Graph Visualization"
      ]
    },
    {
      title: "AI & Advanced Technologies",
      skills: [
        "Real-time AI Solution Generation",
        "Secure Chatbots Development",
        "GLSL Shader Design",
        "Animated Backgrounds",
        "Machine Learning Integration"
      ]
    },
    {
      title: "UI/UX Design",
      skills: [
        "Advanced Glassmorphism Design",
        "Apple-inspired Interfaces",
        "Visual Design (Dora AI inspired)",
        "iOS 26-style Transparency Effects",
        "Interactive Blur and Glow Effects"
      ]
    }
  ];

  return (
    <section id="skills" className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">Technical Expertise</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto opacity-80">
            Comprehensive skill set spanning cybersecurity, AI development, and cutting-edge UI design
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {skillCategories.map((category, index) => (
            <GlassCard key={index} className="p-8 h-full">
              <h3 className="text-2xl font-bold mb-6 text-center">{category.title}</h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="group p-4 rounded-xl transition-all duration-300 hover:backdrop-blur-xl"
                    style={{
                      background: 'rgba(255, 255, 255, 0.02)',
                      border: '1px solid rgba(255, 255, 255, 0.05)',
                    }}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-medium opacity-90">{skill}</span>
                      <div 
                        className="w-2 h-2 rounded-full transition-all duration-300 group-hover:w-4 group-hover:h-4"
                        style={{
                          background: 'rgba(255, 255, 255, 0.2)',
                          boxShadow: '0 0 10px rgba(255, 255, 255, 0.1)',
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </GlassCard>
          ))}
        </div>

        {/* World-Class Infinite Scrolling Tech Banner */}
        <div className="mt-16">
          <div className="text-center mb-10">
            <h3 className="text-3xl font-bold mb-4">Core Technologies &amp; Tools</h3>
            <p className="text-gray-400 text-lg opacity-80">
              Professional arsenal for cybersecurity and ethical hacking
            </p>
          </div>
          <TechInfiniteBanner />
        </div>
      </div>
    </section>
  );
};
