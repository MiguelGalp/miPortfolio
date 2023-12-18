import React, { useState } from "react"
import Image from "next/image"
import { ClipLoader } from "react-spinners"

const ImageComponent = ({ src, alt }) => {
  const [loading, setLoading] = useState(true)

  const handleOnLoad = () => {
    setLoading(false)
  }

  return (
    <div
      style={{
        position: "relative",
        width: "170%",
        height: "92%",
        right: "20px",
      }}
    >
      {loading && (
        <div
          style={{
            position: "absolute",
            bottom: 0,
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
        src={src} // Use the src prop
        alt={alt} // Use the alt prop
        layout="fill"
        objectFit="cover"
        className="rounded-md"
        priority
        onLoad={handleOnLoad}
      />
    </div>
  )
}

export default ImageComponent
