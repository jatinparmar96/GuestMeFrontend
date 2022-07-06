import { useEffect, useState } from 'react';

function getScreenWidth() {
  return window.innerWidth
}

export default function ScreenWidth() {

  const [ width, setWidth ] = useState(getScreenWidth());

  const handleResize = () => {
    setWidth(getScreenWidth());
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, []);

  return width;



}