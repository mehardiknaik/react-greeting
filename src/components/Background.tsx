import React from 'react';
import { background as backgroundArr } from '../constant/background';

interface BackgroundProps {
  name: string | 'random';
}

const Background = ({ name }: BackgroundProps) => {
  const [background, setBackground] = React.useState<any>(null);
  React.useEffect(() => {
    if (name === 'random') {
      const randomIndex = Math.floor(Math.random() * backgroundArr.length);
      setBackground(backgroundArr[randomIndex]);
    } else {
      setBackground(backgroundArr.find((x) => x.name === name));
    }
  }, [name]);

  if (!background) return null;

  return (
    <img
      src={background.src}
      alt={background.name}
      className="absolute h-screen w-screen object-cover inset-0 -z-10"
    />
  );
};

export default Background;
