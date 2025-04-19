import React from 'react';
import { useNavigate, useParams } from 'react-router';
//@ts-ignore
import { AnimatedBackground } from 'animated-backgrounds';

const GreetingPage = () => {
  const [data, setData] = React.useState<any>(null);
  const { data: encData } = useParams();
  const navigate = useNavigate();
  React.useEffect(() => {
    try {
      const decodedData = atob(encData || '');
      const parsedData = JSON.parse(decodedData);
      setData(parsedData);
    } catch (e) {
      navigate('/');
    }
  }, [encData]);
  console.log(data);
  return (
    <div>
      {JSON.stringify(data, null, 2)}
      {data?.background && (
        <AnimatedBackground animationName={data.background} />
      )}
    </div>
  );
};

export default GreetingPage;
