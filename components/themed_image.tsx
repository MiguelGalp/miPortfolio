import React from 'react';
import Image from 'next/image';

const ThemedImage = () => {
  return (
    <div className="relative" style={{ width: 500, height: 500 }}>
      {/* Light theme image */}
      <div className="hidden dark:block">
        <Image
          src="/Sin_Piso_2.svg"
          alt="Dark Theme Image"
          fill
          style={{ objectFit: 'cover' }}
          placeholder='empty'
        />
      </div>
      {/* Dark theme image */}
      <div className="block dark:hidden">
        <Image
          src="/coderGIF_3.svg"
          alt="Light Theme Image"
          fill
          style={{ objectFit: 'cover' }}
          placeholder='empty'
        />
      </div>
    </div>
  );
};

export default ThemedImage;