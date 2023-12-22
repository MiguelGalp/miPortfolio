"use client"
import { useState, useEffect } from 'react';
import { ClipLoader } from 'react-spinners';
import Image from 'next/image';

const ThemedImage = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  return (
    <div className="relative" style={{ width: 500, height: 500 }}>
      {isLoading && (
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(0, 0, 0, 0)",
          }}
        >
          <ClipLoader />
        </div>
      )}
        
          {/* Light theme image */}
          <div className="hidden dark:block">
            <Image
              src="/Sin_Piso_2.svg"
              alt="Dark Theme Image"
              width={500}
              height={500}
              className="max-w-full max-h-full"
              loading='eager'
            />
          </div>
          {/* Dark theme image */}
          <div className="block dark:hidden">
            <Image
              src="/coderGIF_3.svg"
              alt="Light Theme Image"
              width={500}
              height={500}
              className="max-w-full max-h-full"
              loading='eager'
            />
          </div>
        
    </div>
  );
};


export default ThemedImage;