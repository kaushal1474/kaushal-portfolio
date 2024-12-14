/* eslint-disable */
"use client";

import { useRef, Suspense } from 'react';

import { Canvas, useFrame } from '@react-three/fiber';
import { PointMaterial, Points, Preload } from '@react-three/drei';
import dynamic from 'next/dynamic';
import { inSphere } from 'maath/random';


// const random = dynamic(() =>
//   import('maath/random/dist/maath-random.esm'),
//   { ssr: false }
// );

const Stars = () => {

  const ref = useRef();
  
  const sphere = inSphere(new Float32Array(5000), { radius: 1.2 });

  useFrame((_, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y += delta / 15;
  })

  if(sphere.lenght === 0 || sphere.some(data => isNaN(data))) return

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled>
        <PointMaterial transparent color="#f272c8" size={0.002}
          sizeAttenuation={true} depthWrite={false}
        />
      </Points>
    </group>
  )
}

const StarsCanvas = () => {
  return (
    <div className='w-full h-auto absolute inset-0 -z-[1]'>
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <Stars />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  )
}

export default StarsCanvas