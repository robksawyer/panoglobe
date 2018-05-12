// import * as THREE from 'three';
// import OrbitControls from '../../utils/orbitControls';
import { OrbitControls } from "three-full";
import Config from '../../data/config';

// Controls based on orbit controls
export default class Controls {
  constructor(camera, container) {
    // Orbit controls first needs to pass in THREE to constructor
    const orbitControls = new OrbitControls(camera, container);
    this.threeControls = orbitControls;

    
    function handleMouseMove() {
      document.body.style.cursor = 'grabbing';
    }
    
    function onMouseUp() {
      container.removeEventListener("mousemove", handleMouseMove, false);
      document.body.style.cursor = 'default';
    }

    container.addEventListener("mousedown", (event)=>{

      container.addEventListener("mousemove", handleMouseMove, false);
      
      container.addEventListener("mouseup", onMouseUp, false);
      container.addEventListener("mouseout", onMouseUp, false);

    }, false);

    this.init();
  }

  init() {
    this.threeControls.target.set(Config.controls.target.x, Config.controls.target.y, Config.controls.target.z);
    this.threeControls.autoRotate = Config.controls.autoRotate;
    this.threeControls.autoRotateSpeed = Config.controls.autoRotateSpeed;
    this.threeControls.rotateSpeed = Config.controls.rotateSpeed;
    this.threeControls.zoomSpeed = Config.controls.zoomSpeed;
    this.threeControls.minDistance = Config.controls.minDistance;
    this.threeControls.maxDistance = Config.controls.maxDistance;
    this.threeControls.minPolarAngle = Config.controls.minPolarAngle;
    this.threeControls.maxPolarAngle = Config.controls.maxPolarAngle;
    this.threeControls.enableDamping = Config.controls.enableDamping;
    this.threeControls.enableZoom = Config.controls.enableZoom;
    this.threeControls.dampingFactor = Config.controls.dampingFactor;
    this.threeControls.enablePan = Config.controls.enablePan;
  }
}
