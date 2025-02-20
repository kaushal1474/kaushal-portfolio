"use client"
import { Suspense, useEffect, useState } from 'react'
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import CanvasLoader from '@/components/Loader';

const Computers = ({ isMobile }) => {
  const computer = useGLTF("/webdev_gltf/scene.gltf");
  return (
    <mesh>
      <hemisphereLight intensity={0.45} groundColor="white" />
      <pointLight intensity={10} />
      <spotLight
        position={[15, 30, 10]}
        angle={0.8}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.8 : 0.8}
        position={isMobile ? [-0.6, -1.5, -1.2] : [0, -1.25, -0.5]}
        rotation={isMobile ? [-0.01, 1, 0.0] : [-0.03, 0.6, 0.0]}
      />
    </mesh>
  )
}


const ComputersCanvas = () => {

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches)

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches)
    }

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    }

  }, [])

  return (
    <Canvas
      frameloop='demand'
      shadows
      camera={{ position: [isMobile ? 20 : 16, 3, isMobile ? 8 : 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
      className='max-w-7xl mx-auto'
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  )
}

export default ComputersCanvas