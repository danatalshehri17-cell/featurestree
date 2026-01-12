'use client'

import { useRef, useMemo, useEffect, useState, Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Environment, Float, Sparkles } from '@react-three/drei'
import * as THREE from 'three'

// Realistic Tree Model Component - Procedural tree generation
function RealisticTree({ position, rotation, scrollY }: { position: [number, number, number], rotation: number, scrollY: number }) {
  const groupRef = useRef<InstanceType<typeof THREE.Group>>(null)

  useFrame((state: any) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = rotation + scrollY * 0.0003 + state.clock.elapsedTime * 0.1
      groupRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.3) * 0.2
    }
  })

  // Simplified tree for better performance
  const trunkGeometry = useMemo(() => new THREE.CylinderGeometry(0.4, 0.6, 4, 8), [])
  const trunkMaterial = useMemo(() => new THREE.MeshStandardMaterial({ 
    color: '#654321',
    roughness: 0.9,
    metalness: 0.1
  }), [])

  // Simplified leaves - fewer layers
  const createLeavesLayer = (height: number, scale: number, color: string) => {
    const geometry = new THREE.ConeGeometry(2.5 * scale, 3 * scale, 8)
    const material = new THREE.MeshStandardMaterial({ 
      color: color,
      roughness: 0.6,
      metalness: 0.05,
      transparent: true,
      opacity: 0.9
    })
    return { geometry, material, height }
  }

  const leavesLayers = useMemo(() => [
    createLeavesLayer(5, 1.2, '#2d5016'),
    createLeavesLayer(6.5, 1.0, '#3a6b1f'),
    createLeavesLayer(7.8, 0.85, '#4a7c2a'),
  ], [])

  // Simplified branches
  const branchGeometry = useMemo(() => new THREE.CylinderGeometry(0.08, 0.12, 1.5, 6), [])
  const branchMaterial = useMemo(() => new THREE.MeshStandardMaterial({ 
    color: '#8b4513',
    roughness: 0.8,
    metalness: 0.2
  }), [])

  return (
    <group ref={groupRef} position={position} rotation={[0, rotation, 0]}>
      {/* Detailed Trunk with texture-like appearance */}
      <mesh geometry={trunkGeometry} material={trunkMaterial} position={[0, 2, 0]}>
        <meshStandardMaterial {...trunkMaterial} color="#5c3317" />
      </mesh>
      
      {/* Multiple detailed leaf layers */}
      {leavesLayers.map((layer, index) => (
        <mesh 
          key={index}
          geometry={layer.geometry} 
          material={layer.material} 
          position={[0, layer.height, 0]} 
          rotation={[0, (index * Math.PI) / 3, 0]}
        />
      ))}

      {/* Simplified branches - fewer for performance */}
      {Array.from({ length: 4 }).map((_, i) => {
        const angle = (i / 4) * Math.PI * 2
        const height = 3 + (i % 2) * 0.8
        return (
          <mesh
            key={i}
            geometry={branchGeometry}
            material={branchMaterial}
            position={[Math.cos(angle) * 0.8, height, Math.sin(angle) * 0.8]}
            rotation={[0, angle, Math.PI / 6]}
          />
        )
      })}

      {/* Simplified particles - fewer for performance */}
      <Sparkles count={30} scale={10} size={2} speed={0.2} color="#22c55e" />
      
      {/* Additional ambient glow */}
      <pointLight position={[0, 6, 0]} intensity={0.3} color="#22c55e" distance={15} />
    </group>
  )
}

// Floating 3D Shapes
function FloatingShape({ position, shape }: { position: [number, number, number], shape: 'box' | 'sphere' | 'torus' }) {
  const meshRef = useRef<InstanceType<typeof THREE.Mesh>>(null)
  const [hovered, setHovered] = useState(false)

  useFrame((state: any) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01
      meshRef.current.rotation.y += 0.01
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.8 + position[0]) * 0.3
      meshRef.current.position.x = position[0] + Math.cos(state.clock.elapsedTime * 0.5) * 0.2
    }
  })

  const geometry = useMemo(() => {
    switch (shape) {
      case 'box':
        return new THREE.BoxGeometry(0.5, 0.5, 0.5)
      case 'sphere':
        return new THREE.SphereGeometry(0.3, 16, 16)
      case 'torus':
        return new THREE.TorusGeometry(0.3, 0.1, 16, 32)
      default:
        return new THREE.BoxGeometry(0.5, 0.5, 0.5)
    }
  }, [shape])

  const material = useMemo(() => new THREE.MeshStandardMaterial({ 
    color: hovered ? '#fbbf24' : '#22c55e',
    emissive: hovered ? '#fbbf24' : '#22c55e',
    emissiveIntensity: 0.3,
    roughness: 0.5,
    metalness: 0.5
  }), [hovered])

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh
        ref={meshRef}
        geometry={geometry}
        material={material}
        position={position}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        castShadow
      >
        <pointLight intensity={0.5} color="#fbbf24" />
      </mesh>
    </Float>
  )
}

// Main Scene Component
function Scene({ scrollY }: { scrollY: number }) {
  const groupRef = useRef<InstanceType<typeof THREE.Group>>(null)

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y = scrollY * 0.0005
    }
  })

  return (
    <>
      <ambientLight intensity={0.6} />
      <directionalLight position={[10, 10, 5]} intensity={0.8} />
      <pointLight position={[-10, 10, -10]} intensity={0.4} color="#fbbf24" />
      <pointLight position={[10, 10, 10]} intensity={0.4} color="#22c55e" />

      <group ref={groupRef}>
        {/* Main Tree */}
        <RealisticTree position={[0, 0, 0]} rotation={0} scrollY={scrollY} />
        
        {/* Simplified floating shapes - fewer for performance */}
        <FloatingShape position={[-3, 2, -2]} shape="sphere" />
        <FloatingShape position={[3, 3, -2]} shape="box" />
        <FloatingShape position={[-2, 4, 2]} shape="torus" />
      </group>

      <Environment preset="sunset" />
    </>
  )
}

// Main Component
export default function Tree3D() {
  const [scrollY, setScrollY] = useState(0)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    if (typeof window === 'undefined') return
    
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!mounted) {
    return <div className="w-full h-screen fixed top-0 left-0 z-0 pointer-events-none" />
  }

  return (
    <div className="w-full h-screen fixed top-0 left-0 z-0 pointer-events-none">
      <Canvas
        camera={{ position: [0, 5, 10], fov: 50 }}
        gl={{ antialias: false, alpha: true, powerPreference: 'high-performance' }}
        dpr={[1, 1.5]}
        performance={{ min: 0.5 }}
      >
        <Scene scrollY={scrollY} />
        <OrbitControls 
          enableZoom={false} 
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={Math.PI / 2.2}
        />
      </Canvas>
    </div>
  )
}

