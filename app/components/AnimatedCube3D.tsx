"use client"

import React, { useMemo, useRef, useState } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, Float, Sparkles, ContactShadows } from "@react-three/drei"
import { useTheme } from "next-themes"
import * as THREE from "three"

function RotatingCube({ edgeColor, cubeTint, particleColor }: { edgeColor: string; cubeTint: string; particleColor: string }) {
  const groupRef = useRef<THREE.Group>(null)
  const [isHovered, setIsHovered] = useState(false)

  useFrame((_, delta) => {
    if (!groupRef.current) return
    const speed = isHovered ? 0.2 : 0.6
    groupRef.current.rotation.x += delta * speed
    groupRef.current.rotation.y += delta * speed * 0.8
  })

  const edgesGeometry = useMemo(() => {
    const box = new THREE.BoxGeometry(2.2, 2.2, 2.2, 1, 1, 1)
    return new THREE.EdgesGeometry(box)
  }, [])

  const particlePositions = useMemo(() => {
    const positions: number[] = []
    const count = 250
    for (let i = 0; i < count; i++) {
      const x = (Math.random() - 0.5) * 1.6
      const y = (Math.random() - 0.5) * 1.6
      const z = (Math.random() - 0.5) * 1.6
      positions.push(x, y, z)
    }
    return new Float32Array(positions)
  }, [])

  return (
    <group
      ref={groupRef}
      onPointerOver={() => setIsHovered(true)}
      onPointerOut={() => setIsHovered(false)}
    >
      {/* Translucent cube */}
      <mesh>
        <boxGeometry args={[2, 2, 2, 8, 8, 8]} />
        <meshPhysicalMaterial
          transparent
          opacity={0.08}
          roughness={0.2}
          metalness={0.1}
          transmission={0.9}
          thickness={0.5}
          color={cubeTint}
        />
      </mesh>

      {/* Glowing wireframe edges */}
      <lineSegments>
        <primitive object={edgesGeometry} attach="geometry" />
        <lineBasicMaterial color={edgeColor} linewidth={2} />
      </lineSegments>

      {/* Inner particles */}
      <points>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[particlePositions, 3]} />
        </bufferGeometry>
        <pointsMaterial
          color={particleColor}
          size={0.03}
          sizeAttenuation
          transparent
          opacity={0.9}
        />
      </points>
    </group>
  )
}

export default function AnimatedCube3D() {
  const { resolvedTheme, theme } = useTheme()
  const isDark = (resolvedTheme ?? theme) === "dark"

  const edgeColor = isDark ? "#93c5fd" : "#2563eb" // light/dark: blue-300 vs blue-600
  const cubeTint = isDark ? "#a78bfa" : "#7c3aed" // violet-300 vs violet-700
  const particleColor = isDark ? "#c4b5fd" : "#6d28d9" // violet-200 vs violet-800
  const dirLightColor = isDark ? "#93c5fd" : "#60a5fa"
  const spotLightColor = isDark ? "#a78bfa" : "#7c3aed"
  const fogColor = isDark ? "#0b1020" : "#eef2ff" // slate-950-ish vs indigo-50

  return (
    <div className="w-full h-[420px] md:h-[520px] my-12">
      <Canvas
        camera={{ position: [4, 3, 6], fov: 50 }}
        dpr={[1, 1]}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance", preserveDrawingBuffer: false, stencil: false, depth: true }}
        style={{ background: "transparent" }}
        shadows={false}
      >
        {/* No fog and transparent canvas to blend with page background */}

        {/* Base lighting and environment */}
        <ambientLight intensity={isDark ? 0.5 : 0.6} />
        <directionalLight position={[5, 5, 5]} intensity={isDark ? 0.9 : 0.8} color={dirLightColor} />
        <spotLight
          position={[-5, -4, -6]}
          angle={0.3}
          penumbra={0.5}
          intensity={isDark ? 1.0 : 0.8}
          color={spotLightColor}
          castShadow={false}
        />

        <Float speed={1} rotationIntensity={0.2} floatIntensity={0.4}>
          <RotatingCube edgeColor={edgeColor} cubeTint={cubeTint} particleColor={particleColor} />
        </Float>

        {/* Ambient sparkles for subtle motion */}
        <Sparkles count={18} size={1.4} scale={[8, 6, 8]} speed={0.2} color={edgeColor} />

        {/* Remove contact shadows to avoid visible canvas bounds */}

        <OrbitControls enablePan={false} enableZoom={false} enableDamping dampingFactor={0.08} />
      </Canvas>
    </div>
  )
}


