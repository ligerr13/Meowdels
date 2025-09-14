// import '../style/index.css';
import React, { Suspense, useEffect, useRef, useState} from 'react';
import { createRoot } from 'react-dom/client';
import { Canvas , useFrame } from '@react-three/fiber';
import { OrbitControls, Edges, Environment } from '@react-three/drei'
import GLTFModelWrapper from './gltf_wrapper.jsx'
import SceneControlls from './scene_controlls.jsx';
import NavigationMenuDemo from './navigation_menu.jsx';
import DialogFileOpener from './file_dialog.jsx'
import AsciiBanner from "./banner.jsx";

function HomeBox(args) {
    const [hovered, set_hovered] = useState(false)
    const _ref_mesh = useRef();
    const rotation_speed = 0.5;

    function auto_rotate(rotate, delta) {
        if (rotate === true) {
            _ref_mesh.current.rotation.x += rotation_speed * delta;
            _ref_mesh.current.rotation.y += rotation_speed * delta;
        }
    }

    useFrame((state, delta) => {
        if (!_ref_mesh.current) {return}
        auto_rotate(!hovered, delta)
    })

    return (
        <mesh ref={_ref_mesh}
            onPointerOver={(e) => set_hovered(true)}
            onPointerOut={(e) => set_hovered(false)}
        >
            <Edges lineWidth={1.5} color="black"/>
            <boxGeometry args={[1.5,1.5,1.5]}/>
            <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
        </mesh>
    )
}

function MeowdelsCanvas() {
    const [loadedGltfScene, setLoadedGltfScene] = useState(null);

    const handleModelLoad = (gltfScene) => {
        setLoadedGltfScene(gltfScene);
    };

    return (
        <div id="MeowdelsCanvas-container" className="relative w-full h-screen">
            <div>
                <AsciiBanner />
            </div>
            <div id="canvas-container" className="w-full h-full">
                <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
                    <Suspense fallback={null}>
                        <ambientLight intensity={8.0} />
                        <directionalLight color="white" position={[0, 0, 5]} />

                        {loadedGltfScene ? (
                            <GLTFModelWrapper
                                gltfScene={loadedGltfScene}
                                position={[0, -0.5, 0]}
                                autoRotate={false}
                            />
                        ) : (
                            <HomeBox debug={true} position={[0, 0, 0]} />
                        )}
                        <OrbitControls makeDefault />
                        <Environment preset="city" />
                    </Suspense>
                </Canvas>
            </div>
            {/* <div id="nav-menu" className="absolute top-4 left-4">
                <NavigationMenuDemo />
            </div> */}
            {/* <div id="scene-controlls" className="absolute top-4 right-4">
                <SceneControlls loadedModel={loadedGltfScene} />
            </div> */}
            <div className="absolute top-5 left-5">
                <DialogFileOpener onModelLoad={handleModelLoad} />
            </div>
        </div>
    );
}

const domNode = document.getElementById('root-container');
const root = createRoot(domNode);

root.render(<MeowdelsCanvas />);

export default MeowdelsCanvas;