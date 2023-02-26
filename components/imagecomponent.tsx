import React from "react"
import Image from "next/image"

const ImageComponent = () => {
  return (
    <div style={{ position: "relative", width: "100%", height: "100%" }}>
      <Image
        src="/love_hero_2.png"
        alt="Love hero image"
        layout="fill"
        objectFit="cover"
        className="rounded-md"
        loading="eager"
      />
    </div>
  )
}

export default ImageComponent
