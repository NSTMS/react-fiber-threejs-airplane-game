/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.3 src/assets/cloud.glb
*/
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Cloud(props) {
  const { nodes, materials } = useGLTF('src/assets/cloud.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Node.geometry} material={materials.lambert2SG} />
    </group>
  )
}

useGLTF.preload('src/assets/cloud.glb')
