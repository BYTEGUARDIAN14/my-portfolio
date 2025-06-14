import { motion, useAnimation, useMotionValue } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { useDragControls, useMotionValueEvent } from "framer-motion";

// Replacement for @uidotdev/usehooks useWindowSize
function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 1200,
    height: typeof window !== "undefined" ? window.innerHeight : 800,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
}

// Official-like, white SVG or text logos for each technology/tool
const technologies = [
  {
    name: "Python",
    logo: (
      // Python two-snakes
      <svg width="36" height="36" viewBox="0 0 48 48" fill="none">
        <rect width="48" height="48" rx="24" fill="none"/>
        <path d="M14 20c0-6 2-8 10-8s10 2 10 8v4H14v-4z" stroke="#fff" strokeWidth="2" fill="none"/>
        <circle cx="18" cy="18" r="1.3" fill="#fff"/>
        <path d="M34 28c0 6-2 8-10 8s-10-2-10-8v-4h20v4z" stroke="#fff" strokeWidth="2" fill="none"/>
        <circle cx="30" cy="30" r="1.3" fill="#fff"/>
      </svg>
    ),
  },
  {
    name: "Flask",
    logo: (
      // Flask bottle
      <svg width="36" height="36" viewBox="0 0 48 48" fill="none">
        <rect width="48" height="48" rx="24" fill="none"/>
        <ellipse cx="24" cy="34" rx="6.5" ry="7.5" stroke="#fff" strokeWidth="2" fill="none"/>
        <rect x="21" y="13" width="6" height="13" rx="2" stroke="#fff" strokeWidth="2" fill="none"/>
        <circle cx="24" cy="17" r="1.4" fill="#fff"/>
      </svg>
    ),
  },
  {
    name: "PyQt5",
    logo: (
      // Simple Qt with '5'
      <svg width="36" height="36" viewBox="0 0 48 48" fill="none">
        <rect x="8" y="10" width="32" height="28" rx="5" stroke="#fff" strokeWidth="2" fill="none"/>
        <text x="16" y="30" fill="#fff" fontFamily="Arial" fontSize="15" fontWeight="bold">Qt</text>
        <text x="28" y="32" fill="#fff" fontFamily="Arial" fontSize="10" fontWeight="bold">5</text>
      </svg>
    ),
  },
  {
    name: "Scapy",
    logo: (
      // Packet + python tail
      <svg width="36" height="36" viewBox="0 0 48 48" fill="none">
        <ellipse cx="24" cy="24" rx="10" ry="15" stroke="#fff" strokeWidth="2" fill="none"/>
        <path d="M24 12c6 4.5 10 12 10 18" stroke="#fff" strokeWidth="1.5"/>
        <circle cx="24" cy="24" r="3" fill="#fff"/>
      </svg>
    ),
  },
  {
    name: "React",
    logo: (
      // Simplified React atom
      <svg width="36" height="36" viewBox="0 0 48 48" fill="none">
        <circle cx="24" cy="24" r="2.5" fill="#fff"/>
        <ellipse cx="24" cy="24" rx="13.5" ry="6" stroke="#fff" strokeWidth="2"/>
        <ellipse cx="24" cy="24" rx="6" ry="13.5" stroke="#fff" strokeWidth="2" transform="rotate(60 24 24)"/>
        <ellipse cx="24" cy="24" rx="6" ry="13.5" stroke="#fff" strokeWidth="2" transform="rotate(120 24 24)"/>
      </svg>
    ),
  },
  {
    name: "JavaScript",
    logo: (
      // JS yellow block with white JS
      <svg width="36" height="36" viewBox="0 0 48 48">
        <rect x="10" y="12" width="28" height="24" rx="6" fill="none" stroke="#fff" strokeWidth="2"/>
        <text x="16" y="32" fill="#fff" fontFamily="Arial" fontSize="15" fontWeight="bold">JS</text>
      </svg>
    ),
  },
  {
    name: "HTML",
    logo: (
      // Simple HTML5 shield
      <svg width="36" height="36" viewBox="0 0 48 48">
        <polygon points="15,10 33,10 30,38 24,41 18,38" fill="none" stroke="#fff" strokeWidth="2"/>
        <text x="18" y="30" fill="#fff" fontFamily="Arial" fontSize="13" fontWeight="bold">5</text>
      </svg>
    ),
  },
  {
    name: "CSS",
    logo: (
      // Simple CSS3 shield
      <svg width="36" height="36" viewBox="0 0 48 48">
        <polygon points="15,10 33,10 30,38 24,41 18,38" fill="none" stroke="#fff" strokeWidth="2"/>
        <text x="16" y="30" fill="#fff" fontFamily="Arial" fontSize="13" fontWeight="bold">3</text>
      </svg>
    ),
  },
  {
    name: "Tailwind CSS",
    logo: (
      // Tailwind wave
      <svg width="36" height="36" viewBox="0 0 48 48" fill="none">
        <path d="M10 29c2-6 10-8 14-3 4 5 9 4 11 1" stroke="#fff" strokeWidth="2" fill="none"/>
        <path d="M10 37c2-6 10-8 14-3 4 5 9 4 11 1" stroke="#fff" strokeWidth="2" fill="none"/>
      </svg>
    ),
  },
  {
    name: "Framer Motion",
    logo: (
      // Framer square F
      <svg width="36" height="36" viewBox="0 0 48 48">
        <rect x="12" y="10" width="24" height="28" rx="3" fill="none" stroke="#fff" strokeWidth="2"/>
        <polyline points="18,22 30,22 18,34 30,34" stroke="#fff" strokeWidth="2" fill="none"/>
      </svg>
    ),
  },
  {
    name: "Bash",
    logo: (
      // Terminal block
      <svg width="36" height="36" viewBox="0 0 48 48">
        <rect x="12" y="13" width="24" height="18" rx="5" fill="none" stroke="#fff" strokeWidth="2"/>
        <polyline points="19,22 23,25 19,28" stroke="#fff" strokeWidth="2" fill="none"/>
        <rect x="28" y="26" width="4" height="2" rx="1" fill="#fff"/>
      </svg>
    ),
  },
  {
    name: "Kali Linux",
    logo: (
      // Dragon swoop
      <svg width="36" height="36" viewBox="0 0 48 48" fill="none">
        <path d="M13 32Q27 16 37 18" stroke="#fff" strokeWidth="2.1" fill="none"/>
        <path d="M29 19q-4-3 7-9" stroke="#fff" strokeWidth="1.5" fill="none"/>
        <circle cx="29" cy="18" r="1" fill="#fff"/>
      </svg>
    ),
  },
  {
    name: "Aircrack-ng",
    logo: (
      // Wifi symbol
      <svg width="36" height="36" viewBox="0 0 48 48">
        <path d="M14 34q10-10 20 0" stroke="#fff" strokeWidth="2"/>
        <path d="M19 37q5-5 10 0" stroke="#fff" strokeWidth="1.3"/>
        <circle cx="24" cy="40" r="2" fill="#fff"/>
      </svg>
    ),
  },
  {
    name: "Wifite",
    logo: (
      // Signal scanning lines
      <svg width="36" height="36" viewBox="0 0 48 48">
        <path d="M16,36q8-11,16,0" stroke="#fff" strokeWidth="2" fill="none"/>
        <path d="M20,32q4-5,8,0" stroke="#fff" strokeWidth="1.3" fill="none"/>
        <circle cx="24" cy="40" r="2" fill="#fff"/>
      </svg>
    ),
  },
  {
    name: "Wireshark",
    logo: (
      // Shark fin over water
      <svg width="36" height="36" viewBox="0 0 48 48">
        <path d="M16 32q8-14 16 0" stroke="#fff" strokeWidth="2.2" fill="none"/>
        <path d="M20 34q4-4 8 0" stroke="#fff" strokeWidth="1.3" fill="none"/>
      </svg>
    ),
  },
  {
    name: "rockyou.txt",
    logo: (
      // "RY" text on file shape
      <svg width="36" height="36" viewBox="0 0 48 48">
        <rect x="14" y="11" width="20" height="26" rx="4" fill="none" stroke="#fff" strokeWidth="2"/>
        <text x="20" y="30" fill="#fff" fontFamily="Arial" fontSize="12" fontWeight="bold">RY</text>
      </svg>
    ),
  },
  {
    name: "TCPDump",
    logo: (
      // Packets
      <svg width="36" height="36" viewBox="0 0 48 48">
        <circle cx="15" cy="30" r="3" stroke="#fff" strokeWidth="2" fill="none"/>
        <circle cx="24" cy="24" r="3" stroke="#fff" strokeWidth="2" fill="none"/>
        <circle cx="33" cy="18" r="3" stroke="#fff" strokeWidth="2" fill="none"/>
        <polyline points="17,28 23,26 31,20" stroke="#fff" strokeWidth="1.5" fill="none"/>
      </svg>
    ),
  },
  {
    name: "Nmap",
    logo: (
      // Compass
      <svg width="36" height="36" viewBox="0 0 48 48">
        <circle cx="24" cy="24" r="12" stroke="#fff" strokeWidth="2"/>
        <polygon points="24,15 28,27 24,24 20,27" fill="#fff"/>
        <circle cx="24" cy="24" r="2" fill="#fff"/>
      </svg>
    ),
  },
  {
    name: "TP-Link",
    logo: (
      // TP-Link stylized 'T'
      <svg width="36" height="36" viewBox="0 0 48 48">
        <rect x="13" y="18" width="22" height="12" rx="6" stroke="#fff" strokeWidth="2" fill="none"/>
        <rect x="21" y="13" width="6" height="12" rx="3" stroke="#fff" strokeWidth="2" fill="none"/>
      </svg>
    ),
  },
  {
    name: "GLSL",
    logo: (
      // Cube-like 3D edges (shader cube)
      <svg width="36" height="36" viewBox="0 0 48 48">
        <rect x="14" y="16" width="20" height="16" rx="3" stroke="#fff" strokeWidth="2" fill="none"/>
        <polygon points="24,8 14,16 34,16" stroke="#fff" strokeWidth="2" fill="none"/>
        <polyline points="24,8 24,24" stroke="#fff" strokeWidth="2"/>
      </svg>
    ),
  },
  {
    name: "Lucide Icons",
    logo: (
      // Lucide 'L' on outline
      <svg width="36" height="36" viewBox="0 0 48 48">
        <rect x="14" y="14" width="20" height="20" rx="4" stroke="#fff" strokeWidth="2" fill="none"/>
        <text x="20" y="32" fill="#fff" fontFamily="Arial" fontSize="16" fontWeight="bold">L</text>
      </svg>
    ),
  },
  {
    name: "ShadCN/UI",
    logo: (
      // Two rounded stacked lines
      <svg width="36" height="36" viewBox="0 0 48 48">
        <rect x="14" y="18" width="20" height="5" rx="2.5" fill="#fff"/>
        <rect x="14" y="27" width="20" height="5" rx="2.5" fill="#fff"/>
      </svg>
    ),
  },
  {
    name: "ChatGPT",
    logo: (
      // Hexagon GPT swirl (approximated)
      <svg width="36" height="36" viewBox="0 0 48 48">
        <polygon points="24,8 38,16 38,32 24,40 10,32 10,16" stroke="#fff" strokeWidth="2" fill="none"/>
        <path d="M17 17a8 8 0 0 1 14 0l-7 13z" stroke="#fff" strokeWidth="1" fill="none"/>
      </svg>
    ),
  },
  {
    name: "PDF",
    logo: (
      // Document + folded corner + PDF text
      <svg width="36" height="36" viewBox="0 0 48 48">
        <rect x="14" y="10" width="20" height="28" rx="4" stroke="#fff" strokeWidth="2" fill="none"/>
        <polyline points="28,10 34,16 28,16" stroke="#fff" strokeWidth="2" fill="none"/>
        <text x="17" y="33" fill="#fff" fontFamily="Arial" fontSize="10" fontWeight="bold">PDF</text>
      </svg>
    ),
  },
  {
    name: "3D Graph",
    logo: (
      // 3D axes with bars
      <svg width="36" height="36" viewBox="0 0 48 48">
        <polyline points="14,34 14,16 34,16" stroke="#fff" strokeWidth="2" fill="none"/>
        <rect x="18" y="22" width="4" height="8" fill="#fff"/>
        <rect x="25" y="19" width="4" height="11" fill="#fff"/>
        <rect x="32" y="26" width="4" height="4" fill="#fff"/>
      </svg>
    ),
  },
  {
    name: "Risk Scoring",
    logo: (
      // Score bar + alert
      <svg width="36" height="36" viewBox="0 0 48 48">
        <rect x="18" y="26" width="12" height="4" rx="2" fill="#fff"/>
        <rect x="18" y="18" width="8" height="4" rx="2" fill="#fff"/>
        <polygon points="36,28 44,28 40,40" fill="#fff"/>
      </svg>
    ),
  },
];

const SPEED = 55; // px per second

export const TechInfiniteBanner = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const dragControls = useDragControls();
  const dragX = useMotionValue(0);
  const { width } = useWindowSize();
  const itemGap = 44; // px
  const baseCardWidth = 120; // including padding/margin

  // Prepare: double the tools array for seamless effect
  const showTech = [...technologies, ...technologies]; // duplicate

  // The width of one "set" of the tools, for 1 seamless scroll lap
  const setWidth = (baseCardWidth + itemGap) * technologies.length;

  useEffect(() => {
    if (!containerRef.current || !width) return;

    controls.set({ x: 0 });

    controls.start({
      x: [-setWidth, 0],
      transition: {
        ease: [0.37, 0, 0.63, 1],
        duration: setWidth / SPEED, // sec for one full set
        repeat: Infinity,
        repeatType: "loop",
      }
    });

    return () => {
      controls.stop();
    };
    // eslint-disable-next-line
  }, [width, setWidth]);

  useMotionValueEvent(dragX, "change", (v) => {
    controls.set({ x: v });
  });

  return (
    <div className="w-full flex flex-col items-center">
      <div
        className="relative overflow-hidden w-full"
        style={{
          borderRadius: 22,
          border: "1px solid rgba(255,255,255,0.15)",
          background: "rgba(25,25,25,0.86)",
          boxShadow: "0 8px 40px rgba(0,0,0,0.32), 0 1px 0 rgba(255,255,255,0.08)",
          backdropFilter: "blur(24px) saturate(165%)",
        }}
      >
        <motion.div
          className="flex flex-row items-center gap-9 py-5 px-7 cursor-grab"
          ref={containerRef}
          drag="x"
          dragConstraints={{ left: -32000, right: 0 }}
          dragElastic={0.15}
          onDragStart={() => controls.stop()}
          onDragEnd={() => controls.start({})}
          dragControls={dragControls}
          style={{ x: dragX }}
          animate={controls}
        >
          {showTech.map((tech, idx) => (
            <div
              key={tech.name + idx}
              className="flex flex-col items-center justify-center select-none"
              style={{ width: 120, minWidth: 104 }}
            >
              <motion.div
                className="mb-3 rounded-full border border-white border-opacity-5 flex items-center justify-center shadow-[0_8px_30px_rgba(0,0,0,0.11)] transition-all"
                style={{
                  boxShadow: "0 2px 20px rgba(0,0,0,0.23), 0 0 20px 4px rgba(255,255,255,0.08)",
                  width: 52,
                  height: 52,
                  background: "rgba(255,255,255,0.03)",
                  filter: "drop-shadow(0 8px 22px rgba(255,255,255,0.08))",
                }}
                whileHover={{
                  scale: 1.13,
                  boxShadow: "0 4px 35px 0 rgba(255,255,255,0.13), 0 2px 16px rgba(0,0,0,0.25)",
                  filter: "drop-shadow(0 8px 42px rgba(255,255,255,0.18))",
                }}
                transition={{ type: "spring", stiffness: 320, damping: 16 }}
              >
                {tech.logo}
              </motion.div>
              <div
                className="uppercase font-medium text-white opacity-95 text-[14px] tracking-wide text-center"
                style={{
                  fontFamily: "Inter, SF Pro, Arial",
                  letterSpacing: 1.2,
                  textShadow: "0 1px 2px rgba(66,66,75,0.12)",
                  fontWeight: 500,
                }}
              >
                {tech.name}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
      <div className="w-full flex items-center justify-center mt-3">
        <span className="font-light tracking-wide text-xs md:text-sm text-gray-200 opacity-70" style={{
          letterSpacing: 0.6,
          fontFamily: "Inter, SF Pro Display, Arial",
          fontWeight: 300
        }}>
          Tools I Master for Securing the Web
        </span>
      </div>
    </div>
  );
};

// The file is very long. Consider refactoring if you want to add or change logic later!
