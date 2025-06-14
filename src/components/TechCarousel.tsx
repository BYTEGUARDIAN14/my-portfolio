
import { useState, useEffect } from 'react';

export const TechCarousel = () => {
  const [isPaused, setIsPaused] = useState(false);

  const technologies = [
    {
      name: "Python",
      logo: "Py",
      description: "Programming Language"
    },
    {
      name: "Kali Linux",
      logo: "KL",
      description: "Penetration Testing OS"
    },
    {
      name: "Wireshark",
      logo: "WS",
      description: "Network Protocol Analyzer"
    },
    {
      name: "Nmap",
      logo: "Nm",
      description: "Network Discovery Tool"
    },
    {
      name: "Burp Suite",
      logo: "BS",
      description: "Web Security Testing"
    },
    {
      name: "Metasploit",
      logo: "MS",
      description: "Penetration Testing Framework"
    },
    {
      name: "Aircrack-ng",
      logo: "AC",
      description: "WiFi Security Auditing"
    },
    {
      name: "SQLmap",
      logo: "SQL",
      description: "SQL Injection Testing"
    },
    {
      name: "OWASP ZAP",
      logo: "ZAP",
      description: "Web App Security Scanner"
    },
    {
      name: "John the Ripper",
      logo: "JR",
      description: "Password Cracking"
    },
    {
      name: "Hydra",
      logo: "HY",
      description: "Login Cracker"
    },
    {
      name: "Nikto",
      logo: "NK",
      description: "Web Server Scanner"
    }
  ];

  // Triple the array for ultra-smooth infinite scroll
  const multipliedTechs = [...technologies, ...technologies, ...technologies];

  return (
    <div className="relative">
      {/* Main Banner Container */}
      <div 
        className="relative overflow-hidden py-8 mx-auto"
        style={{
          background: 'rgba(0, 0, 0, 0.95)',
          backdropFilter: 'blur(25px)',
          border: '1px solid rgba(255, 255, 255, 0.15)',
          borderRadius: '24px',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
        }}
      >
        {/* Scrolling Container */}
        <div 
          className={`flex items-center space-x-8 ${isPaused ? '' : 'animate-infinite-scroll'}`}
          style={{
            width: 'fit-content',
            paddingLeft: '2rem',
            paddingRight: '2rem'
          }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {multipliedTechs.map((tech, index) => (
            <div
              key={`${tech.name}-${index}`}
              className="flex-shrink-0 group cursor-pointer transition-all duration-500 ease-out"
            >
              <div 
                className="flex flex-col items-center space-y-3 p-6 rounded-2xl min-w-[120px] transition-all duration-500 ease-out"
                style={{
                  background: 'rgba(255, 255, 255, 0.02)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  backdropFilter: 'blur(10px)',
                  boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1), 0 1px 0 rgba(255, 255, 255, 0.05)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px) scale(1.05)';
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.06)';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                  e.currentTarget.style.boxShadow = '0 20px 60px rgba(0, 0, 0, 0.4), 0 0 30px rgba(255, 255, 255, 0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.02)';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                  e.currentTarget.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.1), 0 1px 0 rgba(255, 255, 255, 0.05)';
                }}
              >
                {/* Logo Circle */}
                <div 
                  className="w-16 h-16 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-500 group-hover:scale-110"
                  style={{
                    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.7))',
                    color: '#000',
                    boxShadow: '0 4px 16px rgba(255, 255, 255, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.5)',
                    border: '1px solid rgba(255, 255, 255, 0.3)'
                  }}
                >
                  {tech.logo}
                </div>
                
                {/* Tech Name */}
                <div className="text-center">
                  <div className="font-semibold text-sm text-white mb-1 opacity-90 group-hover:opacity-100 transition-opacity duration-300">
                    {tech.name}
                  </div>
                  <div className="text-xs text-gray-400 opacity-70 group-hover:opacity-85 transition-opacity duration-300">
                    {tech.description}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Gradient Fade Edges */}
        <div 
          className="absolute left-0 top-0 bottom-0 w-20 pointer-events-none z-10"
          style={{
            background: 'linear-gradient(to right, rgba(0, 0, 0, 0.95), transparent)',
          }}
        />
        <div 
          className="absolute right-0 top-0 bottom-0 w-20 pointer-events-none z-10"
          style={{
            background: 'linear-gradient(to left, rgba(0, 0, 0, 0.95), transparent)',
          }}
        />
      </div>

      {/* Subtitle */}
      <div className="text-center mt-8">
        <p className="text-gray-400 text-sm font-light tracking-wide opacity-80">
          Tools I Master for Securing the Web
        </p>
      </div>

      {/* Enhanced Animation Styles */}
      <style>
        {`
          @keyframes infinite-scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(calc(-100% / 3));
            }
          }
          
          .animate-infinite-scroll {
            animation: infinite-scroll 45s linear infinite;
          }
          
          /* Smooth pause on hover */
          .animate-infinite-scroll:hover {
            animation-play-state: paused;
          }
          
          /* Enhanced mobile responsiveness */
          @media (max-width: 768px) {
            .animate-infinite-scroll {
              animation-duration: 35s;
            }
          }
          
          @media (max-width: 480px) {
            .animate-infinite-scroll {
              animation-duration: 25s;
            }
          }
        `}
      </style>
    </div>
  );
};
