import React, { useEffect, useRef } from 'react';
import { useLocale } from '../contexts/LocaleContext';

const BusinessSection: React.FC = () => {
  const { t } = useLocale();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  // Spider graph animation setup and rendering
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas dimensions to match its display size
    const setCanvasDimensions = () => {
      const { width, height } = canvas.getBoundingClientRect();
      if (canvas.width !== width || canvas.height !== height) {
        canvas.width = width;
        canvas.height = height;
      }
    };
    
    setCanvasDimensions();
    window.addEventListener('resize', setCanvasDimensions);
    
    // Spider web nodes
    const nodes: { x: number; y: number; vx: number; vy: number }[] = [];
    const numNodes = 75;
    const maxDistance = 150; // Maximum distance for drawing connections
    
    // Initialize nodes
    for (let i = 0; i < numNodes; i++) {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5, // Velocity X
        vy: (Math.random() - 0.5) * 0.5  // Velocity Y
      });
    }
    
    // Animation function
    const animate = () => {
      if (!ctx || !canvas) return;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw connections
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
      
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < maxDistance) {
            ctx.beginPath();
            ctx.lineWidth = 1 - distance / maxDistance; // Make closer connections stronger
            ctx.globalAlpha = 1 - distance / maxDistance;
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }
      
      // Draw nodes
      ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
      nodes.forEach(node => {
        ctx.beginPath();
        ctx.arc(node.x, node.y, 1.5, 0, Math.PI * 2);
        ctx.fill();
        
        // Update node position with small random movement
        node.x += node.vx;
        node.y += node.vy;
        
        // Bounce off edges
        if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1;
      });
      
      requestAnimationFrame(animate);
    };
    
    // Add interactive mouse effects
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;
      
      // Find a few closest nodes and move them toward the mouse
      nodes.forEach(node => {
        const dx = mouseX - node.x;
        const dy = mouseY - node.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        // Only affect nodes within a certain radius
        if (distance < 100) {
          // Calculate weak attraction to mouse
          const forceX = dx * 0.01;
          const forceY = dy * 0.01;
          
          // Apply small forces to node velocity
          node.vx += forceX;
          node.vy += forceY;
          
          // Limit maximum velocity
          const maxVel = 2;
          const vel = Math.sqrt(node.vx * node.vx + node.vy * node.vy);
          if (vel > maxVel) {
            node.vx = (node.vx / vel) * maxVel;
            node.vy = (node.vy / vel) * maxVel;
          }
        }
      });
    };
    
    // Start animation and add event listeners
    animate();
    canvas.addEventListener('mousemove', handleMouseMove);
    
    // Cleanup
    return () => {
      canvas.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', setCanvasDimensions);
    };
  }, []);
  
  return (
    <section 
      id="business" 
      className="py-20 px-6 bg-blue-900 text-white relative"
      style={{ 
        backgroundImage: 'linear-gradient(to bottom right, rgba(30, 58, 138, 0.95), rgba(30, 58, 138, 0.98))',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      {/* Interactive Spider Graph Canvas Background */}
      <canvas 
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full z-0"
      />
      
      <div className="container mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-1 bg-orange-500 bg-opacity-20 text-orange-300 rounded-br-xl text-sm font-medium mb-4">
            {String(t('business.subtitle'))}
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            {String(t('business.title'))}
          </h2>
          <p className="text-gray-300">
            {String(t('business.description'))}
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white bg-opacity-5 p-6 rounded-br-xl border border-gray-700 hover:shadow-lg hover:bg-opacity-10 transition-all duration-300">
            <div className="text-orange-300 mb-4">
              <h3 className="text-xl font-bold mb-1">{String(t('business.card1.title'))}</h3>
            </div>
            <p className="text-gray-300">
              {String(t('business.card1.description'))}
            </p>
          </div>
          
          <div className="bg-white bg-opacity-5 p-6 rounded-br-xl border border-gray-700 hover:shadow-lg hover:bg-opacity-10 transition-all duration-300">
            <div className="text-orange-300 mb-4">
              <h3 className="text-xl font-bold mb-1">{String(t('business.card2.title'))}</h3>
            </div>
            <p className="text-gray-300">
              {String(t('business.card2.description'))}
            </p>
          </div>
          
          <div className="bg-white bg-opacity-5 p-6 rounded-br-xl border border-gray-700 hover:shadow-lg hover:bg-opacity-10 transition-all duration-300">
            <div className="text-orange-300 mb-4">
              <h3 className="text-xl font-bold mb-1">{String(t('business.card3.title'))}</h3>
            </div>
            <p className="text-gray-300">
              {String(t('business.card3.description'))}
            </p>
          </div>
          
          <div className="bg-white bg-opacity-5 p-6 rounded-br-xl border border-gray-700 hover:shadow-lg hover:bg-opacity-10 transition-all duration-300">
            <div className="text-orange-300 mb-4">
              <h3 className="text-xl font-bold mb-1">{String(t('business.card4.title'))}</h3>
            </div>
            <p className="text-gray-300">
              {String(t('business.card4.description'))}
            </p>
          </div>
        </div>
        
        <div className="mt-16">
          <div className="bg-white bg-opacity-5 rounded-br-xl p-8 hover:shadow-lg transition-all duration-300">
            <h3 className="text-2xl font-bold mb-10 text-center">{String(t('business.financialStrategy.title'))}</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-400 bg-opacity-20 w-12 h-12 rounded-br-lg flex items-center justify-center text-white font-bold text-xl">1</div>
                <div>
                  <h4 className="text-lg font-semibold text-orange-300 mb-2">{String(t('business.financialStrategy.point1.title'))}</h4>
                  <p className="text-gray-300">{String(t('business.financialStrategy.point1.description'))}</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-blue-400 bg-opacity-20 w-12 h-12 rounded-br-lg flex items-center justify-center text-white font-bold text-xl">2</div>
                <div>
                  <h4 className="text-lg font-semibold text-orange-300 mb-2">{String(t('business.financialStrategy.point2.title'))}</h4>
                  <p className="text-gray-300">{String(t('business.financialStrategy.point2.description'))}</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-blue-400 bg-opacity-20 w-12 h-12 rounded-br-lg flex items-center justify-center text-white font-bold text-xl">3</div>
                <div>
                  <h4 className="text-lg font-semibold text-orange-300 mb-2">{String(t('business.financialStrategy.point3.title'))}</h4>
                  <p className="text-gray-300">{String(t('business.financialStrategy.point3.description'))}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessSection;