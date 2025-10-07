"use client"

import dynamic from "next/dynamic"

const AnimatedCube3DClient = dynamic(() => import("./AnimatedCube3D"), {
  ssr: false,
})

export default AnimatedCube3DClient


