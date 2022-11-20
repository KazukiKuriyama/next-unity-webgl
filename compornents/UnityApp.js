import React from "react";
import { Unity, useUnityContext } from "react-unity-webgl";
export default function UnityApp() {
  const { unityProvider } = useUnityContext({
    loaderUrl: "../build/myunityapp.loader.js",
    dataUrl: "../build/myunityapp.data",
    frameworkUrl: "../build/myunityapp.framework.js",
    codeUrl: "../build/myunityapp.wasm",
  });
  return (
    <Unity unityProvider={unityProvider} style={{ width: 800, height: 600 }} />
  );
}