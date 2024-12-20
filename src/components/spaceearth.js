import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import earthDayTexture from '@/assets/images/earth-day.jpg';
import earthBumpTexture from '@/assets/images/earth-bump.jpg';
import earthSpecTexture from '@/assets/images/earth-specular.jpg';

const CONFIG = {
  CAMERA: {
    FOV: 75,
    NEAR: 0.1,
    FAR: 1000,
    POSITION: { x: 0, y: 0, z: 8 } // 调整相机距离
  },
  EARTH: {
    RADIUS: 1,
    SEGMENTS: 64,
    ROTATION_SPEED: 0.002
  },
  PARTICLES: {
    COUNT: 2000,
    SHELL_RADIUS: 3.5, // 减小球壳半径，使粒子更靠近地球
    ROTATION_SPEED: 0.0002, // 降低旋转速度使运动更柔和
    INDIVIDUAL_SPEED: 0.001, // 保持温和的个体运动
    WAVE_SCALE: 0.15, // 增加波动幅度
    WAVE_FREQUENCY: 2.0, // 添加波动频率
    PARTICLE_SIZE: 0.03, // 调整粒子大小
    PARTICLE_OPACITY: 0.5 // 调整粒子透明度
  },
  SPACE_GRID: {
    SIZE: 40, // 增大网格尺寸
    DIVISIONS: 30, // 增加网格分段
    COLOR: 0x1a4a7a,
    OPACITY: 0.15,
    ANIMATION_SPEED: 0.001
  }
};

export class SpaceEarth {
  constructor(container) {
    if (!container) {
      throw new Error('Container element is required');
    }

    this.container = container;
    this.scene = null;
    this.camera = null;
    this.renderer = null;
    this.earth = null;
    this.controls = null;
    this.particleSystem = null;
    this.spaceGrid = null;
    this.crossGrid = null;
    this.textureLoader = new THREE.TextureLoader();
    this.animationFrameId = null;

    this.animate = this.animate.bind(this);
    this.handleResize = this.handleResize.bind(this);
  }

  async init() {
    this.initScene();
    this.initCamera();
    this.initRenderer();
    this.initControls();
    this.initLights();
    await this.initEarth();
    this.initParticles();

    window.addEventListener('resize', this.handleResize);
    this.animate();
  }

  initScene() {
    this.scene = new THREE.Scene();
    this.initSpaceGrid();
  }

  initSpaceGrid() {
    // 创建底部曲面网格
    const planeGeometry = new THREE.PlaneGeometry(
      CONFIG.SPACE_GRID.SIZE,
      CONFIG.SPACE_GRID.SIZE,
      CONFIG.SPACE_GRID.DIVISIONS,
      CONFIG.SPACE_GRID.DIVISIONS
    );

    // 创建顶点波浪动画的初始数据
    const vertices = planeGeometry.attributes.position.array;
    const waves = new Float32Array(vertices.length / 3);
    for (let i = 0; i < waves.length; i++) {
      waves[i] = Math.random() * Math.PI * 2;
    }
    planeGeometry.userData.waves = waves;

    // 创建网格材质
    const planeMaterial = new THREE.MeshBasicMaterial({
      color: CONFIG.SPACE_GRID.COLOR,
      wireframe: true,
      transparent: true,
      opacity: CONFIG.SPACE_GRID.OPACITY
    });

    this.spaceGrid = new THREE.Mesh(planeGeometry, planeMaterial);
    this.spaceGrid.rotation.x = -Math.PI / 3; // 倾斜网格
    this.spaceGrid.position.y = -8; // 降低网格位置
    this.scene.add(this.spaceGrid);

    // 添加第二个网格形成交叉效果
    const gridGeometry = new THREE.PlaneGeometry(
      CONFIG.SPACE_GRID.SIZE,
      CONFIG.SPACE_GRID.SIZE,
      CONFIG.SPACE_GRID.DIVISIONS,
      CONFIG.SPACE_GRID.DIVISIONS
    );
    
    const gridMaterial = new THREE.MeshBasicMaterial({
      color: CONFIG.SPACE_GRID.COLOR,
      wireframe: true,
      transparent: true,
      opacity: CONFIG.SPACE_GRID.OPACITY * 0.5
    });

    this.crossGrid = new THREE.Mesh(gridGeometry, gridMaterial);
    this.crossGrid.rotation.x = -Math.PI / 3;
    this.crossGrid.rotation.z = Math.PI / 2;
    this.crossGrid.position.y = -8; // 降低网格位置
    this.scene.add(this.crossGrid);
  }

  initCamera() {
    this.camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    this.camera.position.z = 12; // 增加相机距离使地球看起来更小
  }

  initRenderer() {
    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    this.renderer.setSize(this.container.clientWidth, this.container.clientHeight);
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.container.appendChild(this.renderer.domElement);
  }

  initControls() {
    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.enableZoom = false; // 禁用缩放
    this.controls.enablePan = false; // 禁用平移
    this.controls.enableDamping = true; // 启用阻尼效果
    this.controls.dampingFactor = 0.05; // 阻尼系数
    this.controls.rotateSpeed = 0.5; // 旋转速度
  }

  initLights() {
    // 主光源 - 白色直射光，增强对比度
    const mainLight = new THREE.DirectionalLight(0xffffff, 1.2);
    mainLight.position.set(5, 3, 5);
    
    // 环境光 - 添加淡蓝色调
    const ambientLight = new THREE.AmbientLight(0x6495ED, 0.3);
    
    // 补光 - 增加背面亮度
    const backLight = new THREE.DirectionalLight(0xffffff, 0.5);
    backLight.position.set(-5, 0, -5);
    
    this.scene.add(mainLight, ambientLight, backLight);
  }

  async initEarth() {
    const geometry = new THREE.SphereGeometry(
      CONFIG.EARTH.RADIUS * 1.8,
      CONFIG.EARTH.SEGMENTS,
      CONFIG.EARTH.SEGMENTS
    );

    const earthTexture = await this.textureLoader.loadAsync(earthDayTexture);
    const earthBumpMap = await this.textureLoader.loadAsync(earthBumpTexture);
    const earthSpecMap = await this.textureLoader.loadAsync(earthSpecTexture);

    // 增强地球材质效果
    const material = new THREE.MeshPhongMaterial({
      map: earthTexture,
      bumpMap: earthBumpMap,
      bumpScale: 0.15,
      specularMap: earthSpecMap,
      specular: new THREE.Color(0x666666),
      shininess: 25
    });

    this.earth = new THREE.Mesh(geometry, material);
    this.scene.add(this.earth);

    // 添加大气层发光效果
    const atmosphereGeometry = new THREE.SphereGeometry(
      CONFIG.EARTH.RADIUS * 1.85,
      CONFIG.EARTH.SEGMENTS,
      CONFIG.EARTH.SEGMENTS
    );

    const atmosphereMaterial = new THREE.ShaderMaterial({
      uniforms: {
        c: { type: "f", value: 0.7 },
        p: { type: "f", value: 3 },
        glowColor: { type: "c", value: new THREE.Color(0x6495ED) },
        viewVector: { type: "v3", value: this.camera.position }
      },
      vertexShader: `
        uniform vec3 viewVector;
        varying float intensity;
        void main() {
          vec3 vNormal = normalize(normalMatrix * normal);
          vec3 vNormel = normalize(normalMatrix * viewVector);
          intensity = pow(0.7 - dot(vNormal, vNormel), 2.0);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform vec3 glowColor;
        varying float intensity;
        void main() {
          vec3 glow = glowColor * intensity;
          gl_FragColor = vec4(glow, 0.5);
        }
      `,
      side: THREE.BackSide,
      blending: THREE.AdditiveBlending,
      transparent: true
    });

    const atmosphere = new THREE.Mesh(atmosphereGeometry, atmosphereMaterial);
    this.scene.add(atmosphere);
  }

  initParticles() {
    const particleGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(CONFIG.PARTICLES.COUNT * 3);
    const velocities = new Float32Array(CONFIG.PARTICLES.COUNT * 3);
    const angles = new Float32Array(CONFIG.PARTICLES.COUNT);
    const phases = new Float32Array(CONFIG.PARTICLES.COUNT);
    const colors = new Float32Array(CONFIG.PARTICLES.COUNT * 3);
    const opacities = new Float32Array(CONFIG.PARTICLES.COUNT);
    const sizes = new Float32Array(CONFIG.PARTICLES.COUNT);

    const color1 = new THREE.Color(0x6495ED);  // 淡蓝色
    const color2 = new THREE.Color(0xE6E6FA);  // 淡紫色
    const color3 = new THREE.Color(0xFFFFFF);  // 白色

    for (let i = 0; i < CONFIG.PARTICLES.COUNT; i++) {
      const i3 = i * 3;
      
      // 使用黄金螺旋分布
      const y = 1 - (i / (CONFIG.PARTICLES.COUNT - 1)) * 2;
      const radius = Math.sqrt(1 - y * y);
      const theta = Math.PI * (1 + Math.sqrt(5)) * i;

      positions[i3] = CONFIG.PARTICLES.SHELL_RADIUS * radius * Math.cos(theta);
      positions[i3 + 1] = CONFIG.PARTICLES.SHELL_RADIUS * y;
      positions[i3 + 2] = CONFIG.PARTICLES.SHELL_RADIUS * radius * Math.sin(theta);

      angles[i] = Math.random() * Math.PI * 2;
      phases[i] = Math.random() * Math.PI * 2;
      
      velocities[i3] = CONFIG.PARTICLES.INDIVIDUAL_SPEED * (Math.random() - 0.5);
      velocities[i3 + 1] = CONFIG.PARTICLES.INDIVIDUAL_SPEED * (Math.random() - 0.5);
      velocities[i3 + 2] = CONFIG.PARTICLES.INDIVIDUAL_SPEED * (Math.random() - 0.5);

      // 三色渐变
      const mixFactor = Math.random();
      let particleColor;
      if (mixFactor < 0.33) {
        particleColor = new THREE.Color().lerpColors(color1, color2, mixFactor * 3);
      } else if (mixFactor < 0.66) {
        particleColor = new THREE.Color().lerpColors(color2, color3, (mixFactor - 0.33) * 3);
      } else {
        particleColor = new THREE.Color().lerpColors(color3, color1, (mixFactor - 0.66) * 3);
      }
      
      colors[i3] = particleColor.r;
      colors[i3 + 1] = particleColor.g;
      colors[i3 + 2] = particleColor.b;

      // 随机大小和透明度
      sizes[i] = Math.random() < 0.1 ? 
        CONFIG.PARTICLES.PARTICLE_SIZE * 2 : 
        CONFIG.PARTICLES.PARTICLE_SIZE * (0.6 + Math.random() * 0.8);
      
      opacities[i] = 0.3 + Math.random() * 0.7; // 随机透明度
    }

    particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particleGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    particleGeometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));
    particleGeometry.setAttribute('opacity', new THREE.BufferAttribute(opacities, 1));
    particleGeometry.userData.velocities = velocities;
    particleGeometry.userData.angles = angles;
    particleGeometry.userData.phases = phases;
    particleGeometry.userData.initialPositions = positions.slice();

    const particleMaterial = new THREE.PointsMaterial({
      vertexColors: true,
      size: CONFIG.PARTICLES.PARTICLE_SIZE,
      opacity: 0.7,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      sizeAttenuation: true
    });

    this.particleSystem = new THREE.Points(particleGeometry, particleMaterial);
    this.scene.add(this.particleSystem);
  }

  updateParticles() {
    if (!this.particleSystem) return;

    const positions = this.particleSystem.geometry.attributes.position.array;
    const velocities = this.particleSystem.geometry.userData.velocities;
    const angles = this.particleSystem.geometry.userData.angles;
    const phases = this.particleSystem.geometry.userData.phases;
    const initialPositions = this.particleSystem.geometry.userData.initialPositions;

    // 整体旋转矩阵
    const rotationMatrix = new THREE.Matrix4();
    rotationMatrix.makeRotationY(CONFIG.PARTICLES.ROTATION_SPEED);

    const time = performance.now() * 0.001; // 获取当前时间用于动画

    for (let i = 0; i < CONFIG.PARTICLES.COUNT; i++) {
      const i3 = i * 3;

      // 更新个体运动
      angles[i] += velocities[i3];
      phases[i] += velocities[i3 + 1] * 0.5;

      // 应用复合波动效果
      const wave1 = Math.sin(angles[i] + time) * CONFIG.PARTICLES.WAVE_SCALE;
      const wave2 = Math.cos(phases[i] + time * 0.7) * CONFIG.PARTICLES.WAVE_SCALE * 0.7;
      const wave3 = Math.sin((angles[i] + phases[i]) * 0.5 + time * 0.5) * CONFIG.PARTICLES.WAVE_SCALE * 0.5;

      positions[i3] = initialPositions[i3] + wave1;
      positions[i3 + 1] = initialPositions[i3 + 1] + wave2;
      positions[i3 + 2] = initialPositions[i3 + 2] + wave3;

      // 应用整体旋转
      const point = new THREE.Vector3(positions[i3], positions[i3 + 1], positions[i3 + 2]);
      point.applyMatrix4(rotationMatrix);
      
      positions[i3] = point.x;
      positions[i3 + 1] = point.y;
      positions[i3 + 2] = point.z;
    }

    this.particleSystem.geometry.attributes.position.needsUpdate = true;
  }

  updateSpaceGrid() {
    if (!this.spaceGrid || !this.crossGrid) return;

    const time = Date.now() * CONFIG.SPACE_GRID.ANIMATION_SPEED;
    
    // 更新主网格
    const vertices = this.spaceGrid.geometry.attributes.position.array;
    const waves = this.spaceGrid.geometry.userData.waves;
    
    for (let i = 0; i < vertices.length; i += 3) {
      const wave = waves[i / 3];
      vertices[i + 2] = Math.sin(wave + time) * 0.5;
    }
    this.spaceGrid.geometry.attributes.position.needsUpdate = true;
    
    // 更新交叉网格
    const crossVertices = this.crossGrid.geometry.attributes.position.array;
    for (let i = 0; i < crossVertices.length; i += 3) {
      const x = crossVertices[i];
      const y = crossVertices[i + 1];
      crossVertices[i + 2] = Math.sin(x * 0.5 + time) * Math.cos(y * 0.5 + time) * 0.5;
    }
    this.crossGrid.geometry.attributes.position.needsUpdate = true;

    // 旋转网格
    this.spaceGrid.rotation.z += CONFIG.SPACE_GRID.ANIMATION_SPEED * 0.1;
    this.crossGrid.rotation.z += CONFIG.SPACE_GRID.ANIMATION_SPEED * 0.15;
  }

  animate() {
    this.animationFrameId = requestAnimationFrame(this.animate);

    if (this.earth) {
      this.earth.rotation.y += CONFIG.EARTH.ROTATION_SPEED;
    }

    this.updateParticles();
    this.updateSpaceGrid();
    this.controls.update();
    this.renderer.render(this.scene, this.camera);
  }

  handleResize() {
    const width = this.container.clientWidth;
    const height = this.container.clientHeight;
    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(width, height);
  }

  cleanup() {
    if (this.animationFrameId) {
      cancelAnimationFrame(this.animationFrameId);
    }

    window.removeEventListener('resize', this.handleResize);

    if (this.controls) {
      this.controls.dispose();
    }

    if (this.renderer) {
      this.renderer.dispose();
      if (this.container.contains(this.renderer.domElement)) {
        this.container.removeChild(this.renderer.domElement);
      }
    }

    if (this.particleSystem) {
      this.particleSystem.geometry.dispose();
      this.particleSystem.material.dispose();
      this.scene.remove(this.particleSystem);
    }

    if (this.spaceGrid) {
      this.spaceGrid.geometry.dispose();
      this.spaceGrid.material.dispose();
      this.scene.remove(this.spaceGrid);
    }

    if (this.crossGrid) {
      this.crossGrid.geometry.dispose();
      this.crossGrid.material.dispose();
      this.scene.remove(this.crossGrid);
    }

    if (this.earth) {
      this.earth.geometry.dispose();
      this.earth.material.dispose();
      this.scene.remove(this.earth);
    }

    if (this.scene) {
      this.scene.traverse((object) => {
        if (object.geometry) {
          object.geometry.dispose();
        }
        if (object.material) {
          if (Array.isArray(object.material)) {
            object.material.forEach(material => material.dispose());
          } else {
            object.material.dispose();
          }
        }
      });
    }

    this.scene = null;
    this.camera = null;
    this.renderer = null;
    this.earth = null;
    this.controls = null;
    this.particleSystem = null;
    this.spaceGrid = null;
    this.crossGrid = null;
  }
}