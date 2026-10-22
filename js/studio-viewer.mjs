import * as THREE from './vendor/three/build/three.module.min.js';
import {OrbitControls} from './vendor/three/examples/jsm/controls/OrbitControls.js';
import {GLTFLoader} from './vendor/three/examples/jsm/loaders/GLTFLoader.js';
import {DRACOLoader} from './vendor/three/examples/jsm/loaders/DRACOLoader.js';
import {RoomEnvironment} from './vendor/three/examples/jsm/environments/RoomEnvironment.js';

export async function createStudio({progress}){
 const container=document.querySelector('#viewer'),stage=document.querySelector('#model-stage');
 let renderer;
 try{renderer=new THREE.WebGLRenderer({antialias:true,alpha:true,powerPreference:'low-power'})}catch{throw new Error('WebGL is unavailable')}
 renderer.setPixelRatio(Math.min(devicePixelRatio||1,matchMedia('(max-width:760px)').matches?1.5:2));
 renderer.outputColorSpace=THREE.SRGBColorSpace;renderer.toneMapping=THREE.ACESFilmicToneMapping;renderer.toneMappingExposure=1;
 container.appendChild(renderer.domElement);
 const scene=new THREE.Scene(),camera=new THREE.PerspectiveCamera(32,1,.02,40);
 const controls=new OrbitControls(camera,renderer.domElement);controls.enablePan=false;controls.enableDamping=true;controls.dampingFactor=.09;controls.minDistance=.6;controls.maxDistance=7;controls.minPolarAngle=.18;controls.maxPolarAngle=Math.PI*.87;controls.autoRotateSpeed=.75;controls.zoomSpeed=.65;
 const pmrem=new THREE.PMREMGenerator(renderer),room=new RoomEnvironment();const env=pmrem.fromScene(room,.06);scene.environment=env.texture;scene.environmentIntensity=.55;room.dispose();pmrem.dispose();
 const hemi=new THREE.HemisphereLight(0xdde7ff,0x1d1527,1.15);scene.add(hemi);
 const key=new THREE.DirectionalLight(0xfff1e7,2.1);key.position.set(2.5,3.4,3);scene.add(key);
 const fill=new THREE.DirectionalLight(0xc4caff,1.35);fill.position.set(-3,1.8,1);scene.add(fill);
 const rim=new THREE.DirectionalLight(0xd6afff,2.3);rim.position.set(1,2.5,-3);scene.add(rim);
 const floor=new THREE.Mesh(new THREE.CylinderGeometry(.83,.87,.035,80),new THREE.MeshStandardMaterial({color:0x21212c,roughness:.48,metalness:.3}));floor.position.y=-.025;scene.add(floor);
 const ring=new THREE.Mesh(new THREE.TorusGeometry(.84,.0025,5,100),new THREE.MeshBasicMaterial({color:0xbba0e6}));ring.rotation.x=-Math.PI/2;ring.position.y=-.002;scene.add(ring);
 const draco=new DRACOLoader();draco.setDecoderPath(new URL('./vendor/draco/',import.meta.url).href);draco.setDecoderConfig({type:'wasm'});draco.setWorkerLimit(1);
 const loader=new GLTFLoader();loader.setDRACOLoader(draco);
 let root,dirty=true,visible=true,disposed=false;
 const resize=new ResizeObserver(()=>{const w=container.clientWidth,h=container.clientHeight;if(!w||!h)return;renderer.setSize(w,h,false);camera.aspect=w/h;camera.updateProjectionMatrix();dirty=true});resize.observe(container);
 const viewState={mode:'full'};
 function setView(mode){viewState.mode=mode;const narrow=container.clientWidth<500;if(mode==='portrait'){controls.target.set(0,1.78,0);camera.position.set(.04,1.78,narrow?1.15:.94);controls.minDistance=.45;controls.maxDistance=2.8}else{controls.target.set(0,1.04,0);camera.position.set(.1,1.12,narrow?4.7:4.15);controls.minDistance=1.5;controls.maxDistance=7}controls.update();dirty=true}
 function setLighting(mode){const presets={studio:[0xfff1e7,0xc4caff,0xd6afff,1],neon:[0xe99aff,0x58d5f4,0xb76bfa,.92],warm:[0xffd5a1,0xc6b3e8,0xffbf83,1.05]},p=presets[mode]||presets.studio;key.color.setHex(p[0]);fill.color.setHex(p[1]);rim.color.setHex(p[2]);renderer.toneMappingExposure=p[3];stage.style.background=mode==='neon'?'radial-gradient(ellipse at 50% 45%,#322139,#10151e 75%)':mode==='warm'?'radial-gradient(ellipse at 50% 45%,#42342e,#19171a 75%)':'';dirty=true}
 try{const gltf=await loader.loadAsync(new URL('../assets/models/vaessa-purple.glb',import.meta.url).href,e=>{if(e.total)progress(`Loading Vaessa · ${Math.round(e.loaded/e.total*100)}%`);else progress(`Loading Vaessa · ${(e.loaded/1048576).toFixed(1)} MB`)});root=gltf.scene;root.rotation.y=Math.PI;root.updateMatrixWorld(true);let box=new THREE.Box3().setFromObject(root);const height=box.max.y-box.min.y;root.scale.setScalar(2/height);root.updateMatrixWorld(true);box=new THREE.Box3().setFromObject(root);const center=box.getCenter(new THREE.Vector3());root.position.set(-center.x,-box.min.y,-center.z);root.traverse(o=>{if(o.isMesh){o.frustumCulled=true;const mats=Array.isArray(o.material)?o.material:[o.material];mats.forEach(m=>{m.envMapIntensity=.6;if(m.name.toLowerCase().includes('hair')||m.name.toLowerCase().includes('eyelash')){m.alphaTest=.28;m.transparent=false;m.depthWrite=true;m.side=THREE.DoubleSide}if(m.name==='eyeWetness_MAT')o.visible=false})}});scene.add(root);progress('Finishing the studio…');setView(document.querySelector('[data-view].active')?.dataset.view||'full');setLighting(document.querySelector('[data-light].active')?.dataset.light||'studio');renderer.render(scene,camera)}catch(e){resize.disconnect();controls.dispose();draco.dispose();env.dispose();renderer.dispose();renderer.domElement.remove();throw e}
 const bindings=[];function on(el,event,fn){el.addEventListener(event,fn);bindings.push(()=>el.removeEventListener(event,fn))}
 function turn(angle){const offset=camera.position.clone().sub(controls.target).applyAxisAngle(new THREE.Vector3(0,1,0),angle);camera.position.copy(controls.target).add(offset);controls.update();dirty=true}
 on(document.querySelector('#rotate-left'),'click',()=>turn(Math.PI/6));on(document.querySelector('#rotate-right'),'click',()=>turn(-Math.PI/6));
 const spin=document.querySelector('#auto-rotate');on(spin,'click',()=>{controls.autoRotate=!controls.autoRotate;spin.setAttribute('aria-pressed',String(controls.autoRotate));spin.innerHTML=controls.autoRotate?'<span>Ⅱ</span> Pause rotation':'<span>▶</span> Auto rotate';dirty=true});
 on(document.querySelector('#reset-view'),'click',()=>{controls.autoRotate=false;spin.setAttribute('aria-pressed','false');spin.innerHTML='<span>▶</span> Auto rotate';setView(viewState.mode)});
 const full=document.querySelector('#fullscreen-view');on(full,'click',async()=>{try{if(document.fullscreenElement)await document.exitFullscreen();else if(stage.requestFullscreen)await stage.requestFullscreen();else{window.afterimageToast?.('Fullscreen is not available in this browser')}}catch{window.afterimageToast?.('Fullscreen is not available in this browser')}});
 on(container,'keydown',e=>{if(e.key==='ArrowLeft'){e.preventDefault();turn(Math.PI/12)}if(e.key==='ArrowRight'){e.preventDefault();turn(-Math.PI/12)}if(['+','=','-'].includes(e.key)){e.preventDefault();const factor=e.key==='-'?1.12:.89;const offset=camera.position.clone().sub(controls.target).multiplyScalar(factor);const length=THREE.MathUtils.clamp(offset.length(),controls.minDistance,controls.maxDistance);camera.position.copy(controls.target).add(offset.setLength(length));controls.update();dirty=true}});
 const observer=new IntersectionObserver(es=>{visible=es[0]?.isIntersecting??true;if(visible)dirty=true},{threshold:0});observer.observe(stage);
 on(renderer.domElement,'webglcontextlost',e=>{e.preventDefault();document.querySelector('#model-status').textContent='GRAPHICS PAUSED / RELOAD TO RESTORE';window.afterimageToast?.('Graphics paused. Reload this page to restore the 3D view.')});
 let last=performance.now();renderer.setAnimationLoop(now=>{const dt=Math.min((now-last)/1000,.05);last=now;if(disposed||document.hidden||!visible)return;const changed=controls.update(dt);if(changed||dirty||controls.autoRotate){renderer.render(scene,camera);dirty=false}});
 return {setLighting,setView,dispose(){disposed=true;renderer.setAnimationLoop(null);bindings.forEach(f=>f());resize.disconnect();observer.disconnect();controls.dispose();draco.dispose();scene.traverse(o=>{o.geometry?.dispose();const ms=Array.isArray(o.material)?o.material:o.material?[o.material]:[];ms.forEach(m=>{for(const v of Object.values(m))if(v?.isTexture)v.dispose();m.dispose()})});env.dispose();renderer.dispose()}};
}
