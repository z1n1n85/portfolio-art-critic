import React, { useEffect, useRef, useState } from 'react';
import { ShaderGradient, ShaderGradientCanvas } from "@shadergradient/react";

const BackgroundGradient = () => {
  return (
      <ShaderGradientCanvas
        style={{
          position: "fixed",
          top: '0',
          left: '0',
          right: '0',
          width: '100%',
          height: '120vh',
          zIndex: -1,
          pointerEvents: 'none',
        }}
      >
        <ShaderGradient
          control="query"
          urlString="https://www.shadergradient.co/customize?animate=on&axesHelper=on&bgColor1=%23000000&bgColor2=%23000000&brightness=0.5&cAzimuthAngle=180&cDistance=4&cPolarAngle=115&cameraZoom=1&color1=%237e0000&color2=%23ff00f7&color3=%23000000&destination=onCanvas&embedMode=off&envPreset=city&format=gif&fov=45&frameRate=10&grain=off&lightType=3d&pixelDensity=1.4&positionX=-0.5&positionY=0.1&positionZ=0&range=disabled&rangeEnd=40&rangeStart=0&reflection=0.1&rotationX=0&rotationY=0&rotationZ=235&shader=defaults&type=waterPlane&uAmplitude=0&uDensity=0.9&uFrequency=5.5&uSpeed=0.25&uStrength=2.3&uTime=0.2&wireframe=false&zoomOut=false"
        />
      </ShaderGradientCanvas>
  );
};

export default BackgroundGradient;
