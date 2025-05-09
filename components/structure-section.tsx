import React, { useEffect, useRef } from 'react';

const StructureSection: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  // Initialize the vertical flow animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas dimensions to match display size
    const setCanvasDimensions = () => {
      const { width, height } = canvas.getBoundingClientRect();
      if (canvas.width !== width || canvas.height !== height) {
        canvas.width = width;
        canvas.height = height;
      }
    };
    
    setCanvasDimensions();
    window.addEventListener('resize', setCanvasDimensions);
    
    // Vertical flow particles
    class Particle {
      x: number;
      y: number;
      speed: number;
      size: number;
      color: string;
      opacity: number;
      
      constructor() {
        // Randomize horizontal position but place more particles near the vertical lines
        const rand = Math.random();
        if (rand < 0.4) {
          // Near the left vertical line (approx 25% across)
          this.x = canvas ? canvas.width * 0.25 + (Math.random() * 2 - 1) * 30 : 0;
        } else if (rand < 0.7) {
          // Near the right vertical line (approx 75% across)
          this.x = canvas ? canvas.width * 0.75 + (Math.random() * 2 - 1) * 30: 0;
        } else {
          // Elsewhere
          this.x = canvas ? Math.random() * canvas.width : 0;
        }
        
        // Start from random positions, but mostly from the top
        this.y = canvas ? (Math.random() < 0.9 ? Math.random() * (canvas.height * 0.1) : Math.random() * canvas.height) : 0;
        
        // Vary the speed slightly to create natural flow
        this.speed = 0.5 + Math.random() * 0.8;
        
        // Vary particle sizes
        this.size = 0.5 + Math.random() * 1.5;
        
        // Color based on position - orange/blue for the vertical lines, light blue for elsewhere
        if (canvas && Math.abs(this.x - canvas.width * 0.25) < 10) {
          // Left vertical line - orange
          this.color = `rgba(237, 137, 54, ${0.2 + Math.random() * 0.3})`;
        } else if (canvas && Math.abs(this.x - canvas.width * 0.75) < 10) {
          // Right vertical line - blue
          this.color = `rgba(59, 130, 246, ${0.2 + Math.random() * 0.3})`;
        } else {
          // Elsewhere - light blue
          this.color = `rgba(191, 219, 254, ${0.1 + Math.random() * 0.2})`;
        }
        
        // Random opacity for variety
        this.opacity = 0.1 + Math.random() * 0.4;
      }
      
      update() {
        // Move downward
        this.y += this.speed;
        
        // Reset position when particles go off-screen
        if (canvas && this.y > canvas.height) {
          this.y = -10;
          // Randomize x position on reset for variety
          const rand = Math.random();
          if (rand < 0.4) {
            this.x = canvas.width * 0.25 + (Math.random() * 2 - 1) * 30;
          } else if (rand < 0.7) {
            this.x = canvas.width * 0.75 + (Math.random() * 2 - 1) * 30;
          } else {
            this.x = Math.random() * canvas.width;
          }
        }
        
        // Add slight horizontal drift to create gentle sway
        this.x += Math.sin(this.y / 50) * 0.3;
      }
      
      draw(ctx: CanvasRenderingContext2D) {
        ctx.fillStyle = this.color;
        ctx.globalAlpha = this.opacity;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    
    // Create particles array
    const particles: Particle[] = [];
    const particleCount = 100;
    
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }
    
    // Create some horizontal particles for connecting lines
    class HorizontalParticle extends Particle {
      direction: number;
      length: number;
      
      constructor(y: number, leftToRight: boolean) {
        super();
        // Place particles on the horizontal connecting lines
        this.y = y + (Math.random() * 2 - 1) * 2; // Small variation
        
        if (leftToRight) {
          // Left to right connection (25% to 75%)
          this.x = canvas ? canvas.width * 0.25 + Math.random() * 10 : 0;
          this.direction = 1;
        } else {
          // Right to left connection (75% to a vertical location)
          this.x = canvas ? canvas.width * 0.75 - Math.random() * 10 : 0;
          this.direction = -1;
        }
        
        this.speed = 0.4 + Math.random() * 0.4;
        this.size = 0.5 + Math.random() * 1;
        
        // Determine color based on position
        if (canvas && Math.abs(this.y - canvas.height * 0.25) < 10) {
          // Upper horizontal line - orange
          this.color = `rgba(237, 137, 54, ${0.2 + Math.random() * 0.3})`;
        } else {
          // Lower horizontal lines - blue
          this.color = `rgba(59, 130, 246, ${0.2 + Math.random() * 0.3})`;
        }
        
        this.opacity = 0.1 + Math.random() * 0.3;
        this.length = 1 + Math.random() * 3; // Length of the particle streak
      }
      
      update() {
        // Move horizontally
        this.x += this.speed * this.direction;
        
        // Reset when off screen
        if (
          (canvas && this.direction > 0 && this.x > canvas.width * 0.75) ||
          (canvas && this.direction < 0 && this.x < canvas.width * 0.25)
        ) {
          if (canvas && this.direction > 0) {
            this.x = canvas.width * 0.25;
          } else if (canvas) {
            this.x = canvas.width * 0.75;
          }
        }
      }
      
      draw(ctx: CanvasRenderingContext2D) {
        ctx.strokeStyle = this.color;
        ctx.globalAlpha = this.opacity;
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(this.x + this.length * this.direction, this.y);
        ctx.stroke();
      }
    }
    
    // Create horizontal particles for the connecting lines
    const horizontalParticles: HorizontalParticle[] = [];
    const hParticleCount = 30;
    
    // Connection points (approximate y positions of the horizontal connection lines)
    const connectionLines = [
      canvas.height * 0.25, // Upper connection
      canvas.height * 0.5,  // Middle connection
      canvas.height * 0.7   // Lower connection
    ];
    
    connectionLines.forEach(y => {
      for (let i = 0; i < hParticleCount; i++) {
        horizontalParticles.push(new HorizontalParticle(y, true)); // Left to right
      }
    });
    
    // Animation loop
    const animate = () => {
      if (!ctx || !canvas) return;
      
      // Clear canvas with slight fade effect for trails
      ctx.fillStyle = 'rgba(255, 255, 255, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw regular particles
      particles.forEach(particle => {
        particle.update();
        particle.draw(ctx);
      });
      
      // Update and draw horizontal particles
      horizontalParticles.forEach(particle => {
        particle.update();
        particle.draw(ctx);
      });
      
      // Continue animation
      requestAnimationFrame(animate);
    };
    
    // Start animation
    animate();
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', setCanvasDimensions);
    };
  }, []);
  
  return (
    <section id="structure" className="py-20 px-6 relative overflow-hidden">
      {/* Subtle vertical flow background animation */}
      <canvas 
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full z-0 opacity-75"
      />
      
      <div className="container mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-8">
          <div className="inline-block px-4 py-1 bg-orange-100 text-orange-500 rounded-br-xl text-sm font-medium mb-4">
            Our Unique Approach
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold mb-2">
            Vertical Participation Structure
          </h2>
          <div className="text-gray-700 text-base sm:text-lg font-medium mb-4 max-w-2xl mx-auto">
            Our vertical structure directly involves professors and research centers in newly founded verticals. This transforms university research into marketable digital products and business models.
          </div>
        </div>

        {/* Vertical true-backbone structure */}
        <div className="w-full flex flex-col items-center relative z-10">
          {/* Vertical backbone from top to bottom */}
          <div className="absolute left-8 sm:left-1/2 top-0 bottom-0 w-1 bg-blue-300 -translate-x-1/2 z-0 pointer-events-none" style={{height: '100%'}}></div>

          {/* Root node */}
          <div className="relative flex flex-col items-start z-10 mb-3" style={{marginLeft: '1rem'}}>
            <div className="border-2 border-blue-500 bg-blue-50 px-6 py-3 rounded-md font-bold text-xl text-blue-800 shadow-lg">
              German University of Digital Science
            </div>
          </div>

          {/* Department rows, spaced down the backbone, with horizontal branch */}
          <div className="flex flex-col gap-10 w-full max-w-4xl relative z-10">
            {[
              {
                department: "Digital Entrepreneurship College",
                professors: [
                  {
                    name: "Prof. Dr. Marco Bade",
                    img: "/images/financial-support-commercial/marco_bade.jpeg",
                    link: "https://german-uds.de/marco_bade"
                  }
                ]
              },
              {
                department: "Digital Education and Internet Technologies",
                professors: [
                  {
                    name: "Prof. Dr. Christoph Meinel",
                    img: "/images/financial-support-commercial/meinel.jpeg",
                    link: "https://german-uds.de/christoph_meinel"
                  },
                  {
                    name: "Prof. Dr. Thomas Staubitz",
                    img: "/images/financial-support-commercial/tom.webp",
                    link: "https://german-uds.de/thomas_staubitz"
                  },
                ]
              },
              {
                department: "Virtual Education and Digital Reality",
                professors: [
                  {
                    name: "Prof. Dr. Mike Friedrichsen",
                    img: "/images/financial-support-commercial/mike.webp",
                    link: "https://german-uds.de/mike_friedrichsen"
                  }
                ]
              },
              {
                department: "Multimodal Learning Technologies",
                professors: [
                  {
                    name: "Prof. Dr. Daniele Di Mitri",
                    img: "/images/financial-support-commercial/DiMitri.webp",
                    link: "https://german-uds.de/daniele_di_mitri"
                  }
                ]
              },
              {
                department: "Artificial Intelligence",
                professors: [
                  {
                    name: "Prof. Dr. Feiyu Xu",
                    img: "/images/financial-support-commercial/Feiyu_Xu.webp",
                    link: "https://german-uds.de/feiyu_xu"
                  },
                  {
                    name: "Prof. Dr. Felix Weitkämper",
                    img: "/images/financial-support-commercial/Felix.jpeg",
                    link: "https://german-uds.de/felix_weitkaemper"
                  }
                ]
              },
              {
                department: "Cybersecurity",
                professors: [
                  {
                    name: "Prof. Dr. Tim Stuchtey",
                    img: "/images/financial-support-commercial/TimStuchtey.webp",
                    link: "https://german-uds.de/tim_stuchtey"
                  }
                ]
              },
              {
                department: "Digital Management and Work",
                professors: [
                  {
                    name: "Prof. Dr. Georg Loscher",
                    img: "/images/financial-support-commercial/Georg.webp",
                    link: "https://german-uds.de/georg_loscher"
                  }
                ]
              }
            ].map((vertical, i) => (
              <div key={vertical.department} className="relative flex items-center min-h-[110px] sm:min-h-[130px]">
                {/* Intersection on backbone */}
                <div className="absolute left-8 sm:left-1/2 top-1/2 w-4 h-4 bg-blue-100 border-2 border-blue-400 rounded-full -translate-x-1/2 -translate-y-1/2 z-10"></div>
                
                {/* Horizontal branch for department to the spine */}
                <div className="absolute left-8 sm:left-1/2 top-1/2 h-1 bg-blue-300 z-10" style={{width:'40px', marginLeft:'0'}}></div>

                {/* Department name left of backbone */}
                <div className="flex-1 flex justify-end pr-4">
                  <div className="px-3 py-2 rounded font-bold bg-blue-100 text-blue-700 border-2 border-blue-300 shadow whitespace-nowrap text-xs sm:text-base">
                    {vertical.department}
                  </div>
                </div>
                {/* Space for the vertical line and node */}
                <div style={{width:'48px'}} className="shrink-0"></div>
                {/* Professors right of backbone */}
                <div className="flex flex-row items-center gap-4 flex-1">
                  {vertical.professors.map((prof) => (
                    <div key={prof.name} className="flex flex-col items-center w-[90px] mx-1">
                      <a href={prof.link} target="_blank" rel="noopener noreferrer">
                        <img
                          src={prof.img}
                          alt={prof.name}
                          className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover border-2 border-blue-200 shadow"
                        />
                      </a>
                      <a
                        href={prof.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-2 text-xs sm:text-sm font-semibold text-blue-700 hover:text-blue-900 text-center leading-tight"
                      >
                        {prof.name}
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StructureSection;