import ScrollingText from 'web-scrolling-text/react';
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router';
import Background from '@/components/Background';

const Homepage = () => {
  const [click, setClick] = useState(0);

  const navigate = useNavigate();
  const timer = useRef<any>(null);

  useEffect(() => {
    return () => {
      clearTimeout(timer.current);
    };
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
      <Background name={'random'} />
    </div>
  );
};

export default Homepage;
