// components/ThreeDScene.js
"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

const ThreeDScene = () => {
  const sceneRef = useRef(null);

  useEffect(() => {
    if (sceneRef.current) {
      // Setup da cena 3D
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      );
      const renderer = new THREE.WebGLRenderer();
      renderer.setSize(window.innerWidth, window.innerHeight);
      sceneRef.current.appendChild(renderer.domElement);

      // Cubo 3D
      const geometry = new THREE.BoxGeometry();
      const material = new THREE.MeshBasicMaterial({ color: 0x48cae4 });
      const cube = new THREE.Mesh(geometry, material);
      scene.add(cube);

      camera.position.z = 5;

      const animate = () => {
        requestAnimationFrame(animate);

        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;

        renderer.render(scene, camera);
      };

      animate();
    }

    return () => {
      if (sceneRef.current) {
        sceneRef.current.innerHTML = "";
      }
    };
  }, []);

  return (
    <div
      ref={sceneRef}
      className="w-full h-96 bg-gray-900 rounded-lg shadow-lg"
    ></div>
  );
};

export default ThreeDScene;
