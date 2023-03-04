import React, { useState } from "react"
import Image from "next/image"
import { ClipLoader } from "react-spinners"

const ImageComponent = () => {
  const [loading, setLoading] = useState(true)

  const handleOnLoad = () => {
    setLoading(false)
  }

  return (
    <div
      style={{
        position: "relative",
        width: "150%",
        height: "100%",
        right: "20px",
      }}
    >
      {loading && (
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
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
      <Image
        src="/love_hero.png"
        alt="Love hero image"
        layout="fill"
        objectFit="cover"
        className="rounded-md"
        loading="lazy"
        onLoad={handleOnLoad}
      />
    </div>
  )
}

export default ImageComponent
