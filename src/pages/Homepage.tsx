import ScrollingText from 'web-scrolling-text/react';
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router';
import { background } from '../constant/background';
const Homepage = () => {
  const [animation, setAnimation] = useState<{ name: string; src: any } | null>(
    null,
  );
  const [click, setClick] = useState(0);

  const navigate = useNavigate();
  const timer = useRef<any>(null);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * background.length);
    setAnimation(background[randomIndex]);
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

  console.log(animation);
  return (
    <div
      onClick={handleClick}
      className="flex h-screen items-center justify-center text-center text-2xl overflow-hidden"
    >
      <ScrollingText>
        {['Design & Develop By', 'Hardik Naik', 'Made with ❤️', 'Made for ❤️']}
      </ScrollingText>
      {animation && (
        <img
          src={animation?.src}
          alt={animation?.name}
          className="absolute h-screen w-screen object-cover inset-0 -z-10"
        />
      )}
    </div>
  );
};

export default Homepage;
