import React from "react";
import { Unity, useUnityContext } from "react-unity-webgl";
export default function UnityApp() {
  const { unityProvider } = useUnityContext({
    loaderUrl: "../unity-build/Build/Build.loader.js",
    dataUrl: "../unity-build/Build/Build.data.unityweb",
    frameworkUrl: "../unity-build/Build/Build.framework.js.unityweb",
    codeUrl: "../unity-build/Build/Build.wasm.unityweb",
    streamingAssetsUrl: "../unity-build/StreamingAssets",
  });
  return (
    <Unity unityProvider={unityProvider} style={{ width: "100vw", height: "100vh" }} />
  );
}