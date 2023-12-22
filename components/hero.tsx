"use client";
import { Suspense } from 'react';
import { useMediaQuery } from 'react-responsive';
import CoverImage from './cover_image';
import ResponsiveCover from './responsive_cover';
import { ClipLoader } from 'react-spinners';

export default function Hero() {
  const isDesktopOrLaptop = useMediaQuery({ minWidth: 1024 });

  return (
    <div>
      <Suspense fallback={<div><ClipLoader/></div>}>
        {isDesktopOrLaptop ? <CoverImage /> : <ResponsiveCover />}
      </Suspense>
    </div>
  );
}

