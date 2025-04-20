import React from 'react';
import { useNavigate, useParams } from 'react-router';
import Background from '@/components/Background';
import Message from '@/components/Message';
import JSONCrush from "jsoncrush"

const GreetingPage = () => {
  const [data, setData] = React.useState<any>(null);
  const { data: encData } = useParams();
  const navigate = useNavigate();
  React.useEffect(() => {
    try {
      const decodedData=JSONCrush.uncrush(encData || '');
      const parsedData = JSON.parse(decodedData);
      setData(parsedData);
    } catch (e) {
      navigate('/');
    }
  }, [encData]);
  console.log(data)
  return (
    <div className="relative p-4 h-screen">
      <Message
        message={data?.message}
        alignmentX={data?.alignmentX}
        alignmentY={data?.alignmentY}
        colour={data?.colour}
      />
      <Background name={data?.background} />
    </div>
  );
};

export default GreetingPage;
