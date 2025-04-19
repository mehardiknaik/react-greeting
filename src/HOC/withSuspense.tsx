import React from 'react';

const withSuspense = (Component: React.ComponentType) => {
  return function (props: any) {
    return (
      <React.Suspense fallback={<Loading />}>
        <Component {...props} />
      </React.Suspense>
    );
  };
};

const Loading = () => {
  return (
    <div className="fixed inset-0 flex justify-center items-center flex-col gap-4">
<svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    viewBox="0 0 100 100"
   className='h-20 w-20'
  >
    <circle
      cx={50}
      cy={50}
      r={48}
      fill="none"
      stroke="#fff"
      strokeMiterlimit={10}
      strokeWidth={4}
    />
    <path
      fill="none"
      stroke="#fff"
      strokeLinecap="round"
      strokeMiterlimit={10}
      strokeWidth={4}
      d="m50 50 35 .5"
    >
      <animateTransform
        attributeName="transform"
        dur="2s"
        from="0 50 50"
        repeatCount="indefinite"
        to="360 50 50"
        type="rotate"
      />
    </path>
    <path
      fill="none"
      stroke="#fff"
      strokeLinecap="round"
      strokeMiterlimit={10}
      strokeWidth={4}
      d="m50 50-.5 24"
    >
      <animateTransform
        attributeName="transform"
        dur="15s"
        from="0 50 50"
        repeatCount="indefinite"
        to="360 50 50"
        type="rotate"
      />
    </path>
  </svg>
      <p className="text-white text-lg">Loading...</p>
    </div>
  );
};

export default withSuspense;
