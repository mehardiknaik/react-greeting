import ScrollingText from 'web-scrolling-text/react';
//@ts-ignore
import { AnimatedBackground } from 'animated-backgrounds';
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router';
import { background } from '../constant/background';

const Homepage = () => {
  const [animation, setAnimation] = useState({
    name: 'starryNight',
  });
  const [click, setClick] = useState(0);

  const navigate = useNavigate();
  const timer = useRef<any>(null);

  useEffect(() => {
    const storedIndex = localStorage.getItem('backgroundAnimationIndex');

    const newIndex = storedIndex
      ? (parseInt(storedIndex) + 1) % background.length
      : 0;

    setAnimation({
      name: background[newIndex],
    });

    localStorage.setItem('backgroundAnimationIndex', newIndex.toString());
  }, []);

  const handleClick = () => {
    setClick((prev) => prev + 1);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => {
      setClick(0);
    }, 1000);
    if (click === 2) {
      navigate('/form');
    }
  };
  return (
    <div
      onClick={handleClick}
      className="flex h-screen items-center justify-center text-center text-2xl overflow-hidden"
    >
      <ScrollingText>
        {['Design & Develop By', 'Hardik Naik', 'Made with ❤️', 'Made for ❤️']}
      </ScrollingText>
      <AnimatedBackground animationName={animation.name} />
    </div>
  );
};

export default Homepage;
