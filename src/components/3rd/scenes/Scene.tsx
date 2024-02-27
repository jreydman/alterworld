import CameraRig from "@/components/3rd/performance/CameraRig";
import { BakeShadows, MeshReflectorMaterial } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Bloom, DepthOfField, EffectComposer } from "@react-three/postprocessing";
import { Alastor, ComputerInstances, Computers } from "../models";

export default function Scene(): JSX.Element {
    return (
        <Canvas className="fixed z-0 top-0 left-0 right-0" shadows dpr={[1, 1.5]} camera={{ position: [-1.5, 1, 5.5], fov: 45, near: 1, far: 20 }} eventSource={document.getElementById('scene')} eventPrefix="client">
            <color attach="background" args={['black']} />
            <hemisphereLight intensity={0.15} groundColor="black" />
            <spotLight position={[10, 20, 10]} angle={0.12} penumbra={1} intensity={1} castShadow shadow-mapSize={1024} />
            <group position={[-0, -1, 0]}>
                <ComputerInstances>
                    <Computers scale={0.5} />
                </ComputerInstances>
                <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]}>
                    <planeGeometry args={[50, 50]} />
                    <MeshReflectorMaterial
                        resolution={2048}
                        blur={[300, 30]}
                        mixBlur={1}
                        mixStrength={80}
                        roughness={1}
                        depthScale={1.2}
                        minDepthThreshold={0.4}
                        maxDepthThreshold={1.4}
                        color="#202020"
                        metalness={0.8} mirror={0} />
                </mesh>
                <Alastor position={[-0.5, 0, 0.5]} scale={[0.01, 0.01, 0.01]}   />
                <pointLight distance={1.5} intensity={1} position={[-0.15, 0.7, 0]} color="orange" />
            </group>
            {/* Postprocessing */}
            <EffectComposer disableNormalPass>
                <Bloom luminanceThreshold={0} mipmapBlur luminanceSmoothing={0.0} intensity={6} />
                <DepthOfField target={[0, 0, 13]} focalLength={0.3} bokehScale={15} height={700} />
            </EffectComposer>
            <CameraRig />
            <BakeShadows />
        </Canvas>
    )
}