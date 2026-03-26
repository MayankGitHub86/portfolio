"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { Award, ExternalLink } from "lucide-react";

export function Certifications() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="certifications" ref={ref} className="relative py-24 sm:py-32 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block text-orange-400 mb-4 text-lg font-semibold tracking-[0.3em] uppercase"
          >
            CREDENTIALS
          </motion.span>
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6">
            <span className="text-white">Certifi</span><span className="text-orange-400">cations</span>
          </h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Industry-recognized certifications that validate my expertise.
          </motion.p>
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {[
            { 
              name: "The Bits and Bytes of Computer Networking", 
              provider: "Google", 
              date: "Sep 2024",
              link: "https://coursera.org/share/d99776de4b928c4df6354ab1a88c0c3b", 
              image: "/src/assets/google-cert.png" 
            },
            { 
              name: "Introduction to Hardware and Operating Systems", 
              provider: "IBM", 
              date: "Oct 2024",
              link: "https://www.coursera.org/account/accomplishments/verify/H8ALYNCYDGMX?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course", 
              image: "/src/assets/ibm-cert.png" 
            },
            { 
              name: "Responsive Web Design", 
              provider: "FreeCodeCamp", 
              date: "Oct 2024",
              link: "https://www.freecodecamp.org/certification/fcc5834dc29-8b41-4806-bc8d-12be89e940d7/responsive-web-design", 
              image: "/src/assets/freecodecamp-cert.png" 
            },
            { 
              name: "Social Media Marketing", 
              provider: "W3Grads", 
              date: "Oct 2023",
              link: null, 
              image: "/src/assets/w3grads-cert.png" 
            },
          ].map((cert, index) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
              className="relative group h-full"
            >
              <div className="glass-card rounded-2xl p-6 border border-white/10 hover:border-primary/40 transition-all duration-300 text-center relative overflow-hidden h-full min-h-[280px] flex flex-col">
                {/* Background glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10 flex flex-col flex-1">
                  {/* Icon */}
                  <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Award className="w-7 h-7 text-primary" />
                  </div>

                  {/* Provider */}
                  <p className="text-sm font-bold text-primary mb-2">{cert.provider}</p>

                  {/* Certificate Name */}
                  <p className="text-sm text-foreground mb-3 flex-1 flex items-center justify-center min-h-[48px]">{cert.name}</p>

                  {/* Date */}
                  <p className="text-xs text-muted-foreground mb-4">{cert.date}</p>

                  {/* Verify Link */}
                  <div className="h-6">
                    {cert.link && (
                      <a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs text-primary hover:text-primary/80 transition-colors"
                      >
                        <ExternalLink className="w-3 h-3" />
                        Verify
                      </a>
                    )}
                  </div>
                </div>

                {/* Hover Image Preview - Full Card Overlay */}
                <div className="absolute inset-0 bg-background/95 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 z-20 rounded-2xl p-2 flex items-center justify-center">
                  <img
                    src={cert.image}
                    alt={`${cert.name} certificate`}
                    className="w-full h-full object-contain rounded-lg"
                    onError={(e) => {
                      const target = e.currentTarget;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent) {
                        const fallback = document.createElement('div');
                        fallback.className = 'w-full h-full flex items-center justify-center text-muted-foreground text-xs';
                        fallback.textContent = 'Certificate Preview';
                        parent.appendChild(fallback);
                      }
                    }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
