"use client"

import React, { useEffect } from "react"

export default function AnimatedCube3D() {
  useEffect(() => {
    // Dynamically load the Spline viewer script
    const script = document.createElement('script')
    script.type = 'module'
    script.src = 'https://unpkg.com/@splinetool/viewer@1.9.56/build/spline-viewer.js'
    document.head.appendChild(script)

    return () => {
      document.head.removeChild(script)
    }
  }, [])

  return (
    <div className="w-full h-[420px] md:h-[520px] my-12 flex items-center justify-center">
      <spline-viewer
        url="https://prod.spline.design/DlnNMurvV4Ugn-k6/scene.splinecode"
        style={{ width: '100%', height: '100%' }}
      />
    </div>
  )
}


