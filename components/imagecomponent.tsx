import React, { useState } from "react"
import Image from "next/image"
import { ClipLoader } from "react-spinners"

const ImageComponent = () => {
  const [loading, setLoading] = useState(true)

  const handleOnLoad = () => {
    setLoading(false)
  }

  return (
    <div style={{ position: "relative", width: "100%", height: "100%" }}>
      {loading && (
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
            backgroundColor: "rgba(0, 0, 0, 0.1)",
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

