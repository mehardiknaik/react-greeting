import { useEffect, useState } from 'react';
import {
  alignmentX as alignmentXArr,
  alignmentY as alignmentYArr,
} from '@/constant/aligment';

interface MessageProps {
  message: string[];
  alignmentX: string;
  alignmentY: string;
  colour: string;
}

const Message = ({ message, alignmentX, alignmentY, colour }: MessageProps) => {
  const [alignmentXData, setAligmentX] = useState<any>(null);
  const [alignmentYData, setAligmentY] = useState<any>(null);
  useEffect(() => {
    setAligmentX(alignmentXArr.find((item) => item.name === alignmentX));
    setAligmentY(alignmentYArr.find((item) => item.name === alignmentY));
  }, [alignmentX, alignmentY]);
  return (
    <div
      className={`flex flex-col h-full ${alignmentXData?.className} ${alignmentYData?.className} `}
      style={{ color: colour }}
    >
      {message?.map((msg) => (
        <div key={msg} className="">
          {msg}
        </div>
      ))}
    </div>
  );
};

export default Message;
