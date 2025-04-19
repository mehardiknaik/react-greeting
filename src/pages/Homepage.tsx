import ScrollingText from 'web-scrolling-text/react';
//@ts-ignore
import { AnimatedBackground } from 'animated-backgrounds';
import { useEffect, useState } from 'react';

const Homepage = () => {
  const [animation, setAnimation] = useState({
    name: 'starryNight',
  });

  useEffect(() => {

    const storedIndex = localStorage.getItem('backgroundAnimationIndex');

    const newIndex = storedIndex
      ? (parseInt(storedIndex) + 1) % animations.length
      : 0;

    setAnimation({
      name: animations[newIndex],
    });

    localStorage.setItem('backgroundAnimationIndex', newIndex.toString());
  }, []);
  return (
    <div className="flex h-screen items-center justify-center text-center text-2xl overflow-hidden">
      <ScrollingText>
        {['Design & Develop By', 'Hardik Naik', 'Made with ❤️', 'Made for ❤️']}
      </ScrollingText>
      <AnimatedBackground animationName={animation.name} />
    </div>
  );
};

const animations = [
  'starryNight',
  'floatingBubbles',
  'gradientWave',
  'particleNetwork',
  'galaxySpiral',
  'rainbowWaves',
  'geometricShapes',
  'fireflies',
  'matrixRain',
  'quantumField',
  'electricStorm',
  'cosmicDust',
  'neonPulse',
  'auroraBorealis',
  'autumnLeaves',
  'dnaHelix',
  'fallingFoodFiesta',
];

export default Homepage;
