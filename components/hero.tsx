import { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import CoverImage from './cover_image';
import ResponsiveCover from './responsive_cover';
import { ClipLoader } from 'react-spinners';

export default function Hero() {
  const [loading, setLoading] = useState(true);
  const isDesktopOrLaptop = useMediaQuery({ minWidth: 1024 });

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500); // Adjust the delay as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {loading ? (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-75 z-50">
          <ClipLoader />
        </div>
      ) : (
        <div className="opacity-0 transition-opacity duration-1000 ease-in-out">
          <div className={`opacity-100 ${isDesktopOrLaptop ? 'opacity-100' : 'opacity-100'}`}>
            {isDesktopOrLaptop ? <CoverImage /> : <ResponsiveCover />}
          </div>
        </div>
      )}
    </div>
  );
}
