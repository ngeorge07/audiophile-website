import { useEffect, useState } from 'react';

type WindowDimensions = {
  screenWidth: number;
};

const useWindowWidth = (): WindowDimensions => {
  const [windowDimensions, setWindowDimensions] = useState<WindowDimensions>({
    screenWidth: 0,
  });
  useEffect(() => {
    function handleResize(): void {
      setWindowDimensions({
        screenWidth: window.innerWidth,
      });
    }
    handleResize();
    window.addEventListener('resize', handleResize);
    return (): void => window.removeEventListener('resize', handleResize);
  }, []); // Empty array ensures that effect is only run on mount

  return windowDimensions;
};

export default useWindowWidth;
