"use client"
import { useState, useEffect } from 'react';

const ThemedImage = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  return (
    <div className="relative" style={{ width: 500, height: 500 }}>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <>
          {/* Light theme image */}
          <div className="hidden dark:block">
            <img
              src="/Sin_Piso_2.svg"
              alt="Dark Theme Image"
              width={500}
              height={500}
              className="max-w-full max-h-full"
            />
          </div>
          {/* Dark theme image */}
          <div className="block dark:hidden">
            <img
              src="/coderGIF_3.svg"
              alt="Light Theme Image"
              width={500}
              height={500}
              className="max-w-full max-h-full"
            />
          </div>
        </>
      )}
    </div>
  );
};


export default ThemedImage;