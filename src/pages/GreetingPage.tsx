import React from 'react';
import { useNavigate, useParams } from 'react-router';
import { background as backgroundArr } from '../constant/background';

const GreetingPage = () => {
  const [data, setData] = React.useState<any>(null);
  const [background, setBackground] = React.useState<any>(null);
  const { data: encData } = useParams();
  const navigate = useNavigate();
  React.useEffect(() => {
    try {
      const decodedData = atob(encData || '');
      const parsedData = JSON.parse(decodedData);
      setBackground(backgroundArr.find(x=>x.name===parsedData.background));
      setData(parsedData);
    } catch (e) {
      navigate('/');
    }
  }, [encData]);
  return (
    <div className='relative'>
      {JSON.stringify(data, null, 2)}
      {/* <div>dqw</div> */}
      {background && <img src={background.src} alt={background.name} className='absolute h-screen w-screen object-cover inset-0 -z-10'/>}
    </div>
  );
};

export default GreetingPage;
