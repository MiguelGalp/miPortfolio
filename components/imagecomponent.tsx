import React, { useState } from "react"
import Image from "next/image"

const ImageComponent = ({ src }) => {
  const [loaded, setLoaded] = useState(false)

  const handleLoad = () => {
    setLoaded(true)
  }

  return (
    <div style={{ display: loaded ? "block" : "none" }}>
      <Image
        src={src}
        alt="Love hero image"
        layout="fill"
        objectFit="cover"
        className="rounded-md"
        priority={true}
        onLoad={handleLoad}
      />
    </div>
  )
}

export default ImageComponent
