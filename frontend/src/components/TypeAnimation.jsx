import { TypeAnimation } from 'react-type-animation';

const TyperAnimation = ({
    first = 'SOFTWARE DEVELOPER', 
    second= 'WEB DEVELOPER',
}) => {
  return ( 
    <TypeAnimation
      sequence={[
        first,
        1000, 
        second,
        1000,
      ]}
      wrapper="span"
      speed={50}
      repeat={Infinity}
      className="text-pink-500 text-sm tracking-widest font-semibold mb-1"
    />
  );
};

export default TyperAnimation;