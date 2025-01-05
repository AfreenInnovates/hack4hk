import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { CircleProps } from './types'; // Import types for props
import './LoadingScreen.css'; // Import CSS for styling

const LoadingScreen: React.FC = () => {
  // GSAP animation for the "S" and neon circles
  const animateBigS = () => {
    const tl = gsap.timeline({ repeat: -1, repeatDelay: 0.5 }); // Infinite loop with delay
    tl.to('.big-s', {
      scale: 1.2,
      duration: 0.8,
      ease: 'power1.inOut',
    })
      .to('.big-s', {
        rotate: 360,
        duration: 1.5,
        ease: 'elastic.out(1, 0.3)',
      })
      .to('.big-s', {
        scale: 1,
        duration: 0.5,
        ease: 'power1.inOut',
      });

    // Animating the circles around the "S"
    gsap.to('.circle', {
      scale: 1.4,
      opacity: 0.6,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut',
    });
  };

  useEffect(() => {
    animateBigS(); // Start GSAP animation
  }, []);

  return (
    <div className="loading-screen">
      <motion.div className="big-s" initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, ease: 'easeOut' }}>
        S
      </motion.div>

      {/* Neon circles around the "S" */}
      <Circle className="circle circle-1" />
      <Circle className="circle circle-2" />
      <Circle className="circle circle-3" />
    </div>
  );
};

// Circle component
const Circle: React.FC<CircleProps> = ({ className }) => {
  return <div className={className}></div>;
};

export default LoadingScreen;
