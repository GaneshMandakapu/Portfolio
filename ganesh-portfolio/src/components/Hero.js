import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import * as THREE from 'three';

const Hero = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    containerRef.current.appendChild(renderer.domElement);

    // Handle window resize - Define this first
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    // Define animate function first
        const animate = () => {
          requestAnimationFrame(animate);
          spheres.forEach((sphere, index) => {
            // Gentle rotation
            sphere.rotation.x += 0.001 * (index + 1);
            sphere.rotation.y += 0.002 * (index + 1);
            
            // Floating motion
            const time = Date.now() * 0.0005;
            sphere.position.y += Math.sin(time + index) * 0.002;
            sphere.position.x += Math.cos(time + index) * 0.002;
            
            // Keep spheres within bounds
            if (Math.abs(sphere.position.y) > 8) {
              sphere.position.y = sphere.userData.originalY;
            }
            if (Math.abs(sphere.position.x) > 8) {
              sphere.position.x = sphere.userData.originalX;
            }
          });
          renderer.render(scene, camera);
        };
    
    // Create spheres and setup scene
    const spheres = [
      { size: 4, color: '#FF6B6B', position: { x: -8, y: 4, z: -5 }, link: '' },
      { size: 4, color: '#4ECDC4', position: { x: 6, y: -6, z: -5 }, link: 'Services' },
      { size: 4, color: '#45B7D1', position: { x: -4, y: -5, z: -4 }, link: 'Portfolio' },
      { size: 4, color: '#96CEB4', position: { x: 4, y: 5, z: -4}, link: 'Contact' }
    ].map(({ size, color, position, link }) => {
      const geometry = new THREE.SphereGeometry(size, 64, 64);
      const material = new THREE.MeshPhongMaterial({
        color,
        wireframe: true,
        transparent: true,
        opacity: 0.8,
        wireframeLinewidth: 1.5
      });
      const sphere = new THREE.Mesh(geometry, material);
      sphere.position.set(position.x, position.y, position.z);
      sphere.userData.link = link.toLowerCase();
      sphere.userData.originalX = position.x;
      sphere.userData.originalY = position.y;
      scene.add(sphere);
      return sphere;
    });

    // Add click interaction
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    const handleClick = (event) => {
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(spheres);

      if (intersects.length > 0) {
        const link = intersects[0].object.userData.link;
        document.getElementById(link)?.scrollIntoView({ behavior: 'smooth' });
      }
    };

    // Add event listeners
    window.addEventListener('click', handleClick);
    window.addEventListener('resize', handleResize);

    // Start animation
    animate();

    // Cleanup function
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('click', handleClick);
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center">
      <div ref={containerRef} className="absolute inset-0 z-0" />
      
      {/* Sphere Labels */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="relative w-full h-full flex items-center justify-center">
          <div className="absolute top-1/4 left-1/4 text-2xl font-bold"></div>
          <div className="absolute top-1/4 right-1/4 text-2xl font-bold"></div>
          <div className="absolute bottom-1/4 left-1/4 text-2xl font-bold"></div>
          <div className="absolute bottom-1/4 right-1/4 text-2xl font-bold"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6 text-black"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Hi, I'm Ganesh Balaraju
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-black-300 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Software Developer based in Berlin
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <button 
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              className="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition-colors"
            >
              Get in Touch
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;