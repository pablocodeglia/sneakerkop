import React, { useRef, Suspense, useState, useEffect } from "react";
import { Engine, Model, Scene } from "react-babylonjs";
import { Color3, LoadImage, Texture, Vector3 } from "@babylonjs/core";
import gsap from "gsap";
import classes from "./CustomizationScene.module.css";
import CustomizationTray from "./CustomizationTray";

export const CustomizationScene = (scene) => {
  const loadedModelRef = useRef(null);
  const cameraRef = useRef();
  const [activeCustomTab, setCustomActiveTab] = useState("Lining");

  const customMesh = {
    sceneFilename: "nike_pegasus.babylon",
    rootUrl: `${process.env.PUBLIC_URL}/sneaker/textures/`,
  };

  const rootUrl = `${process.env.PUBLIC_URL}/sneaker/textures/`;

  const [customizationSelection, setCustomizationSelection] = useState({
    Upper: "upper_01.png",
    Overlay: "overlay_02.png",
    Midsole: "midsole_02.png",
    Traction: "traction_01.png",
    Swoosh: "swoosh_01.png",
    Lining: "lining_01.png",
    Laces: "laces_01.png",
  });
  const applyMaterials = () => {
    let index = productInfo.map((obj) => obj.name).indexOf(activeCustomTab);
    console.log("index:", index);
    console.log(
      "img url:",
      `${rootUrl}${customizationSelection[activeCustomTab]}`
    );
    LoadImage(`${rootUrl}${customizationSelection[activeCustomTab]}`, (img) => {
      console.log("src ", img);
      loadedModelRef.current.material.subMaterials[index].albedoTexture =
        new Texture(img.src);
    });
    console.log("changed material!");
  };

  const onModelLoaded = (model) => {
    loadedModelRef.current = model.meshes[0];
    applyMaterials();
    gsap.to(cameraRef.current, {
      duration: 1.5,
      alpha: -1.05,
      beta: 0.78,
      radius: 5,
      ease: "expo",
    });
    cameraRef.current.lowerRadiusLimit = 2.5;
    cameraRef.current.upperRadiusLimit = 5;
  };

  const clickColorHandler = (e) => {
    setCustomActiveTab(e.target.name);
    setCustomizationSelection({
      ...customizationSelection,
      [`${e.target.name}`]: e.target.value,
    });
  };

  const productInfo = [
    {
      name: "Upper",
      camAngles: { alpha: 1.4, beta: 1.06, radius: 5 },
      colors: [
        { colorName: "Light Gray", url: "upper_01.png", hex: "#6f6e73" },
        { colorName: "Moss", url: "upper_02.png", hex: "#38714e" },
        { colorName: "Royal Blue", url: "upper_03.png", hex: "#0d3061" },
        { colorName: "Pumpkin", url: "upper_04.png", hex: "#a83528" },
      ],
    },
    {
      name: "Overlay",
      camAngles: { alpha: -1.55, beta: 0.95, radius: 3.5 },
      colors: [
        { colorName: "Gray", url: "overlay_01.png", hex: "#7c7c84" },
        { colorName: "Dark Gray", url: "overlay_02.png", hex: "#131318" },
        { colorName: "Orange", url: "overlay_03.png", hex: "#b45724" },
        { colorName: "Lime", url: "overlay_04.png", hex: "#9ab604" },
        { colorName: "Petrol", url: "overlay_05.png", hex: "#12354f" },
      ],
    },
    {
      name: "Midsole",
      camAngles: { alpha: -1.6, beta: 1.6, radius: 5 },
      colors: [
        { colorName: "Light Gray", url: "midsole_01.png", hex: "#d7d5d8" },
        { colorName: "Cherry", url: "midsole_02.png", hex: "#e11d1d" },
        { colorName: "Yellow", url: "midsole_03.png", hex: "#e6c100" },
        { colorName: "Pink", url: "midsole_04.png", hex: "#e13aba" },
        { colorName: "Copper", url: "midsole_05.png", hex: "#916e45" },
      ],
    },
    {
      name: "Traction",
      camAngles: { alpha: -2.3, beta: 2.2, radius: 5 },
      colors: [
        { colorName: "Copper", url: "traction_01.png", hex: "#ac725a" },
        { colorName: "Black", url: "traction_02.png", hex: "#0d0d0d" },
        { colorName: "White", url: "traction_03.png", hex: "#e7e7e7" },
        { colorName: "Fucsia", url: "traction_04.png", hex: "#9e009c" },
        { colorName: "Petrol", url: "traction_05.png", hex: "#0a2638" },
      ],
    },
    {
      name: "Swoosh",
      camAngles: { alpha: -2.2, beta: 1.37, radius: 3.5 },
      colors: [
        { colorName: "Black", url: "swoosh_01.png", hex: "#1a1a1a" },
        { colorName: "White", url: "swoosh_02.png", hex: "#cccccc" },
        { colorName: "Fucsia", url: "swoosh_03.png", hex: "#b71578" },
        { colorName: "Cyan", url: "swoosh_04.png", hex: "#30a0cd" },
        { colorName: "Lime", url: "swoosh_05.png", hex: "#b8c900" },
      ],
    },
    {
      name: "Lining",
      camAngles: { alpha: -3.9, beta: 0.6, radius: 5 },
      colors: [
        { colorName: "Black", url: "lining_01.png", hex: "#0d0d0d" },
        { colorName: "Cyan", url: "lining_02.png", hex: "#00a0db" },
        { colorName: "Green", url: "lining_03.png", hex: "#00d851" },
        { colorName: "White", url: "lining_04.png", hex: "#e0e0e0" },
        { colorName: "Dark Gray", url: "lining_05.png", hex: "#7c7c84" },
      ],
    },
    {
      name: "Laces",
      camAngles: { alpha: -0.4, beta: 1.2, radius: 3.5 },
      colors: [
        { colorName: "Gray", url: "laces_01.png", hex: "#6e6d73" },
        { colorName: "Light Gray", url: "laces_02.png", hex: "#d8d7db" },
        { colorName: "Royal Blue", url: "laces_03.png", hex: "#0a1f5d" },
        { colorName: "Yellow", url: "laces_04.png", hex: "#b59b00" },
        { colorName: "Fucsia", url: "laces_05.png", hex: "#ad006f" },
      ],
    },
  ];

  useEffect(() => {
    if (loadedModelRef.current !== null) {
      applyMaterials();
    }
  }, [customizationSelection]);

  return (
    <>
      <div className={classes["customizationTray-Container"]}>
        <Engine antialias adaptToDeviceRatio canvasId="babylonJS">
          <Scene clearColor={new Color3(0.95, 0.95, 0.95)}>
            <arcRotateCamera
              ref={cameraRef}
              name="camera1"
              target={new Vector3(0, 1, 0)}
              alpha={Math.PI / 4}
              beta={Math.PI / 2}
              radius={6}
            />
            <hemisphericLight
              name="light1"
              intensity={0.7}
              direction={Vector3.Up()}
            />
            <directionalLight
              name="dl"
              direction={new Vector3(-0.5, 0.2, 0.5)}
              position={new Vector3(0, 5, 0)}
              intensity={5}
            >
              <shadowGenerator
                mapSize={1024}
                useBlurExponentialShadowMap
                blurKernel={32}
                shadowCastersExcluding={[]}
              />
            </directionalLight>

            <Suspense key={`${customMesh.sceneFilename}`}>
              <Model
                name="example2"
                sceneFilename={customMesh.sceneFilename}
                rootUrl={customMesh.rootUrl}
                position={new Vector3(0, 0, 0)}
                rotation={customMesh.rotation}
                scaleToDimension={4}
                onModelLoaded={onModelLoaded}
              />
            </Suspense>
          </Scene>
        </Engine>
        <div className={classes.customMenu}>
          <CustomizationTray
            onClick={clickColorHandler}
            cameraAngles={productInfo}
            camera={cameraRef}
          />
        </div>
      </div>
    </>
  );
};
