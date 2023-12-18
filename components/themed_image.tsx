import React from 'react';
import Image from 'next/image';

const ThemedImage = () => {
  return (
    <div className="relative">
      {/* Light theme image */}
      <div className="hidden dark:block">
        <Image
          src="/Sin_Piso_2.svg"
          alt="Light Theme Image"
          width={500}
          height={500}
          priority={true}
        />
      </div>
      {/* Dark theme image */}
      <div className="block dark:hidden">
        <Image
          src="/CoderGIF_3.svg"
          alt="Dark Theme Image"
          width={500}
          height={500}
          priority={true}
        />
      </div>
    </div>
  );
};

export default ThemedImage;