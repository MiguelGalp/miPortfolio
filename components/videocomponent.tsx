"use client"
import React, { useState } from "react"
import Image from "next/image"
import { ClipLoader } from "react-spinners"

const VideoComponent = () => {
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
            backgroundColor: "rgba(0, 0, 0, 0)",
          }}
        >
          <ClipLoader />
        </div>
      )}
      <video
        className="absolute inset-0 h-full w-full rounded-md object-cover"
        src="/nuevoVideoPortfolio.mp4"
        autoPlay
        muted
        loop
      ></video>
    </div>
  )
}

export default VideoComponent
