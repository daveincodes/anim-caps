import React, { useEffect, useRef, useLayoutEffect } from 'react';
import { useGLTF, useAnimations, useScroll, PerspectiveCamera, OrthographicCamera } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
export default function Model(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF('/DIEGO CAPSULA-transformed.glb');
  const { actions, mixer } = useAnimations(animations, group);
  const scroll = useScroll();

  useLayoutEffect(() => {
    // Start all actions and set their duration to 10
    Object.values(actions).forEach(action => {
      action.play(); // Play the action
      const clip = action.getClip(); // Get the associated animation clip
      console.log(`Action: ${clip.name}, Duration: ${clip.duration} seconds`); // Log the duration
    });
  }, [actions]);

  useFrame((state, delta) => {
    if (scroll) { // Check if scroll is defined
      mixer.update(delta);
      const scrollProgress = scroll.offset * 10; // Adjust the multiplier as needed
      mixer.setTime(scroll.offset * 54.58); // Set the time of the mixer based on scroll
    }
  });

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene" >
            <OrthographicCamera
                 name="Camera"
                 makeDefault={true}
                 far={1000}
                 near={0.1}
                zoom={15}
                //  position={[78.737, 188.906, -13.127]}
                 rotation={[Math.PI, 0, Math.PI]}
               />
        <group name="fisek_govd003" position={[-100.373, -84.408, -1.2]} rotation={[-1.55, -1.569, -3.121]} scale={0.962}>
          <mesh name="fisek_govd003_1" geometry={nodes.fisek_govd003_1.geometry} material={materials.PaletteMaterial001} />
          <mesh name="fisek_govd003_2" geometry={nodes.fisek_govd003_2.geometry} material={materials.PaletteMaterial002} />
        </group>
        <mesh name="Blue_Top" geometry={nodes.Blue_Top.geometry} material={materials.PaletteMaterial002} position={[-185.893, -102.167, -6.899]} rotation={[0.062, -0.091, -0.113]} scale={0.331} />
        <mesh name="Blue_Tube" geometry={nodes.Blue_Tube.geometry} material={materials.PaletteMaterial002} position={[-185.952, -102.612, -6.937]} rotation={[-3.066, -0.035, -3.029]} scale={0.292} />
        <mesh name="Red_Tube" geometry={nodes.Red_Tube.geometry} material={materials.PaletteMaterial002} position={[-185.451, -102.886, -7.969]} rotation={[2.977, 0.429, -3.121]} scale={0.292} />
        <mesh name="Red_Top" geometry={nodes.Red_Top.geometry} material={materials.PaletteMaterial002} position={[-185.441, -102.38, -8.05]} rotation={[-0.161, -0.242, -0.019]} scale={0.331} />
        <mesh name="Cylinder023" geometry={nodes.Cylinder023.geometry} material={nodes.Cylinder023.material} position={[-208.256, 135.259, 32.641]} rotation={[Math.PI / 2, 0, 0]} scale={[1.144, 1.319, 2.21]} />
        <mesh name="CARTA_BUENA" geometry={nodes.CARTA_BUENA.geometry} material={materials.PaletteMaterial002} position={[85.474, 198.623, -12.859]} rotation={[-Math.PI / 2, 1.571, 0]} scale={-6.234} />
        <group name="Cylinder033" position={[91.634, 192.5, -13.091]} scale={[2.826, 0.806, 2.826]}>
          <mesh name="Cylinder030" geometry={nodes.Cylinder030.geometry} material={materials.PaletteMaterial002} />
          <mesh name="Cylinder030_1" geometry={nodes.Cylinder030_1.geometry} material={materials.PaletteMaterial001} />
          <mesh name="Cylinder030_2" geometry={nodes.Cylinder030_2.geometry} material={materials.PaletteMaterial001} />
        </group>
        <group name="CILINDRO_GRANDE" position={[91.634, 192.5, -13.091]} scale={[2.826, 0.806, 2.826]}>
          <mesh name="Cylinder030" geometry={nodes.Cylinder030.geometry} material={materials.PaletteMaterial002} />
          <mesh name="Cylinder030_1" geometry={nodes.Cylinder030_1.geometry} material={materials.PaletteMaterial001} />
          <mesh name="Cylinder030_2" geometry={nodes.Cylinder030_2.geometry} material={materials.PaletteMaterial001} />
        </group>
        <group name="Cylinder006" position={[-181.871, -107.616, -7.507]} rotation={[0, 0, -0.002]} scale={[1.717, 0.49, 1.717]}>
          <mesh name="Cylinder030" geometry={nodes.Cylinder030.geometry} material={materials.PaletteMaterial002} />
          <mesh name="Cylinder030_1" geometry={nodes.Cylinder030_1.geometry} material={materials.PaletteMaterial001} />
          <mesh name="Cylinder030_2" geometry={nodes.Cylinder030_2.geometry} material={materials.PaletteMaterial001} />
        </group>
        <group name="CILINDRO_GRANDE001" position={[-181.871, -107.616, -7.507]} rotation={[0, 0, -0.002]} scale={[1.717, 0.49, 1.717]}>
          <mesh name="Cylinder030" geometry={nodes.Cylinder030.geometry} material={materials.PaletteMaterial002} />
          <mesh name="Cylinder030_1" geometry={nodes.Cylinder030_1.geometry} material={materials.PaletteMaterial001} />
          <mesh name="Cylinder030_2" geometry={nodes.Cylinder030_2.geometry} material={materials.PaletteMaterial001} />
        </group>
        <mesh name="TAPA_NEGRA" geometry={nodes.TAPA_NEGRA.geometry} material={materials.PaletteMaterial002} position={[88.195, 193.909, -12.942]} scale={[2.826, 0.304, 2.826]} />
        <mesh name="TAPA_NEGRA001" geometry={nodes.TAPA_NEGRA001.geometry} material={materials.PaletteMaterial002} position={[-183.958, -106.755, -7.417]} rotation={[3.142, -0.892, 3.139]} scale={[1.717, 0.185, 1.717]} />
        <group name="TAPADERA_DE_CAPSULA001" position={[-136.482, -109.604, -6]} rotation={[-Math.PI / 2, -Math.PI / 2, 0]} scale={[0.258, 0.197, 0.197]}>
          <mesh name="Cylinder010" geometry={nodes.Cylinder010.geometry} material={materials.PaletteMaterial001} />
          <mesh name="Cylinder010_1" geometry={nodes.Cylinder010_1.geometry} material={materials.PaletteMaterial001} />
        </group>
        <group name="TAPADERA_DE_CAPSULA003" position={[-192.948, -109.811, -2.627]} rotation={[-Math.PI / 2, Math.PI / 2, 0]} scale={[0.148, 0.113, 0.113]}>
          <mesh name="Cylinder010" geometry={nodes.Cylinder010.geometry} material={materials.PaletteMaterial001} />
          <mesh name="Cylinder010_1" geometry={nodes.Cylinder010_1.geometry} material={materials.PaletteMaterial001} />
        </group>
        <group name="TAPADERA_DE_CAPSULA004" position={[-394.313, -390.077, -3.13]} rotation={[-Math.PI / 2, -Math.PI / 2, 0]} scale={[0.148, 0.113, 0.113]}>
          <mesh name="Cylinder010" geometry={nodes.Cylinder010.geometry} material={materials.PaletteMaterial001} />
          <mesh name="Cylinder010_1" geometry={nodes.Cylinder010_1.geometry} material={materials.PaletteMaterial001} />
        </group>
        <group name="TAPADERA_DE_CAPSULA002" position={[-677.792, -683.293, -6]} rotation={[-Math.PI / 2, -Math.PI / 2, 0]} scale={[0.258, 0.197, 0.197]}>
          <mesh name="Cylinder010" geometry={nodes.Cylinder010.geometry} material={materials.PaletteMaterial001} />
          <mesh name="Cylinder010_1" geometry={nodes.Cylinder010_1.geometry} material={materials.PaletteMaterial001} />
        </group>
        <group name="TAPADERA_DE_CAPSULA005" position={[-471.983, -383.363, -6]} rotation={[-Math.PI / 2, Math.PI / 2, 0]} scale={[0.258, 0.197, 0.197]}>
          <mesh name="Cylinder010" geometry={nodes.Cylinder010.geometry} material={materials.PaletteMaterial001} />
          <mesh name="Cylinder010_1" geometry={nodes.Cylinder010_1.geometry} material={materials.PaletteMaterial001} />
        </group>
        <group name="TAPADERA_DE_CAPSULA" position={[69.327, 171.564, -6]} rotation={[-Math.PI / 2, Math.PI / 2, 0]} scale={[0.258, 0.197, 0.197]}>
          <mesh name="Cylinder010" geometry={nodes.Cylinder010.geometry} material={materials.PaletteMaterial001} />
          <mesh name="Cylinder010_1" geometry={nodes.Cylinder010_1.geometry} material={materials.PaletteMaterial001} />
        </group>
        <mesh name="stacks_of_money001" geometry={nodes.stacks_of_money001.geometry} material={materials.PaletteMaterial002} position={[-456.874, -371.067, -13.247]} rotation={[-Math.PI, 0, Math.PI / 2]} scale={[-0.041, -0.038, -0.041]} />
        <mesh name="Plastic_Bag_3d_Model001" geometry={nodes.Plastic_Bag_3d_Model001.geometry} material={materials.PaletteMaterial002} position={[-456.899, -390.494, -14.066]} rotation={[Math.PI / 2, 0, 0]} scale={[0.077, 0.159, 0.135]} />
        <group name="fisek_kapa002" position={[-456.996, -364.515, -14.303]} rotation={[-Math.PI, 1.463, -Math.PI / 2]} scale={1.834}>
          <mesh name="fisek_kapa001" geometry={nodes.fisek_kapa001.geometry} material={materials.PaletteMaterial001} />
          <mesh name="fisek_kapa001_1" geometry={nodes.fisek_kapa001_1.geometry} material={materials.PaletteMaterial001} />
        </group>
        <group name="fisek_govd001" position={[-456.867, -386.815, -14.32]} rotation={[-1.55, -1.569, -3.121]} scale={1.834}>
          <mesh name="fisek_govd004" geometry={nodes.fisek_govd004.geometry} material={materials.PaletteMaterial001} />
          <mesh name="fisek_govd004_1" geometry={nodes.fisek_govd004_1.geometry} material={materials.PaletteMaterial001} />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload('/DIEGO CAPSULA-transformed.glb');