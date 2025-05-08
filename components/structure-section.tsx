import React, { useEffect, useRef } from 'react';
import { Users, Globe, LightbulbIcon, Book, Sparkles, PiggyBank, Building } from 'lucide-react';

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
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-1 bg-orange-100 text-orange-500 rounded-br-xl text-sm font-medium mb-4">
            Our Unique Approach
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Vertical Participation Structure
          </h2>
          <p className="text-gray-600">
            Our vertical structure directly involves professors and research centers in newly founded verticals.
            This transforms university research into marketable digital products and business models.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="bg-white/75 p-8 rounded-br-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-bold text-orange-500 mb-6">Key Topics for Verticals</h3>
            <ul className="space-y-4">
              <li className="flex items-start hover:bg-blue-50 p-2 rounded-br-lg transition-colors duration-300">
                <div className="bg-blue-100 rounded-br-lg w-8 h-8 flex items-center justify-center text-blue-600 mr-3 flex-shrink-0 mt-1">
                  <Users size={16} />
                </div>
                <div>
                  <h4 className="font-semibold">Digital Entrepreneurship College</h4>
                  <p className="text-gray-600 text-sm">Prof. Dr. Marco Bade</p>
                </div>
              </li>
              
              <li className="flex items-start hover:bg-blue-50 p-2 rounded-br-lg transition-colors duration-300">
                <div className="bg-blue-100 rounded-br-lg w-8 h-8 flex items-center justify-center text-blue-600 mr-3 flex-shrink-0 mt-1">
                  <Globe size={16} />
                </div>
                <div>
                  <h4 className="font-semibold">Digital Education and Internet Technologies</h4>
                  <p className="text-gray-600 text-sm">Prof. Dr. Christoph Meinel / Prof. Dr. Thomas Staubitz</p>
                </div>
              </li>
              
              <li className="flex items-start hover:bg-blue-50 p-2 rounded-br-lg transition-colors duration-300">
                <div className="bg-blue-100 rounded-br-lg w-8 h-8 flex items-center justify-center text-blue-600 mr-3 flex-shrink-0 mt-1">
                  <LightbulbIcon size={16} />
                </div>
                <div>
                  <h4 className="font-semibold">Virtual Education and Digital Reality</h4>
                  <p className="text-gray-600 text-sm">Prof. Dr. Mike Friedrichsen</p>
                </div>
              </li>
              
              <li className="flex items-start hover:bg-blue-50 p-2 rounded-br-lg transition-colors duration-300">
                <div className="bg-blue-100 rounded-br-lg w-8 h-8 flex items-center justify-center text-blue-600 mr-3 flex-shrink-0 mt-1">
                  <Book size={16} />
                </div>
                <div>
                  <h4 className="font-semibold">Multimodal Learning Technologies</h4>
                  <p className="text-gray-600 text-sm">Prof. Dr. Daniele Di Mitri</p>
                </div>
              </li>
              
              <li className="flex items-start hover:bg-blue-50 p-2 rounded-br-lg transition-colors duration-300">
                <div className="bg-blue-100 rounded-br-lg w-8 h-8 flex items-center justify-center text-blue-600 mr-3 flex-shrink-0 mt-1">
                  <Sparkles size={16} />
                </div>
                <div>
                  <h4 className="font-semibold">Artificial Intelligence</h4>
                  <p className="text-gray-600 text-sm">Prof. Dr. Feiyu Xu / Prof. Dr. Felix Weitkämper</p>
                </div>
              </li>
              
              <li className="flex items-start hover:bg-blue-50 p-2 rounded-br-lg transition-colors duration-300">
                <div className="bg-blue-100 rounded-br-lg w-8 h-8 flex items-center justify-center text-blue-600 mr-3 flex-shrink-0 mt-1">
                  <PiggyBank size={16} />
                </div>
                <div>
                  <h4 className="font-semibold">Cybersecurity</h4>
                  <p className="text-gray-600 text-sm">Prof. Dr. Stuchtey</p>
                </div>
              </li>
              
              <li className="flex items-start hover:bg-blue-50 p-2 rounded-br-lg transition-colors duration-300">
                <div className="bg-blue-100 rounded-br-lg w-8 h-8 flex items-center justify-center text-blue-600 mr-3 flex-shrink-0 mt-1">
                  <Building size={16} />
                </div>
                <div>
                  <h4 className="font-semibold">Digital Management and New Work</h4>
                  <p className="text-gray-600 text-sm">Prof. Dr. Georg Loscher</p>
                </div>
              </li>
            </ul>
          </div>
          
          <div className="bg-white/75 p-8 rounded-br-xl shadow-lg flex items-center hover:shadow-xl transition-shadow duration-300">
            <div className="w-full">
              <h3 className="text-xl font-bold text-orange-500 mb-6">Vertical Structure</h3>
              <p className="text-gray-700 mb-6">
                Our unique structure allows for direct involvement of professors and research centers in newly founded verticals.
              </p>
              
              <div className="relative mt-12 pb-8">
                <div className="absolute top-0 left-1/4 transform -translate-x-1/2 bg-orange-100 p-3 rounded-br-xl w-40 text-center hover:bg-orange-200 transition-colors duration-300">
                  <h5 className="font-semibold text-orange-500">German UDS Innovation GmbH</h5>
                </div>
                
                <div className="absolute top-24 left-3/4 transform -translate-x-1/2 bg-blue-100 p-3 rounded-br-xl w-40 text-center hover:bg-blue-200 transition-colors duration-300">
                  <h5 className="font-semibold text-blue-700">German University of Digital Science</h5>
                </div>
                
                <div className="absolute top-48 left-1/4 transform -translate-x-1/2 bg-blue-100 p-2 rounded-br-xl w-32 text-center hover:bg-blue-200 transition-colors duration-300">
                  <h5 className="font-semibold text-blue-700 text-sm">Vertical 1</h5>
                </div>
                
                <div className="absolute top-72 left-1/4 transform -translate-x-1/2 bg-blue-100 p-2 rounded-br-xl w-32 text-center hover:bg-blue-200 transition-colors duration-300">
                  <h5 className="font-semibold text-blue-700 text-sm">Vertical n</h5>
                </div>
                
                <div className="absolute top-0 left-1/4 h-72 w-px bg-orange-300"></div>
                <div className="absolute top-24 left-1/4 w-48 h-px bg-orange-300"></div>
                
                <div className="absolute top-48 left-3/4 w-16 h-px bg-blue-300"></div>
                <div className="absolute top-72 left-3/4 w-16 h-px bg-blue-300"></div>
                
                <div className="absolute top-48 right-16 text-xs text-gray-600">
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-gray-800 rounded-full"></div>
                    <span>Professors</span>
                  </div>
                  <div className="flex items-center space-x-2 mt-1">
                    <div className="w-3 h-3 bg-gray-800 rounded-full"></div>
                    <span>Students</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StructureSection;