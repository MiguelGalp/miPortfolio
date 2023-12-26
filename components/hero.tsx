"use client";

import { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import CoverImage from './cover_image';
import ResponsiveCover from './responsive_cover';
import { ClipLoader } from 'react-spinners';

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);
  const isDesktopOrLaptop = useMediaQuery({ minWidth: 1024 });

  useEffect(() => {
    window.onload = () => {
      setIsLoaded(true);
    };
  }, []);

  if (!isLoaded) {
    return (
      <div className="flex items-center justify-center h-screen mt-[-50px]">
        <ClipLoader />
      </div>
    );
  }

  return (
    <div>
      {isDesktopOrLaptop ? <CoverImage /> : <ResponsiveCover />}
    </div>
  );
}
