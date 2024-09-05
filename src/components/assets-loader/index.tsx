import FullScreenLoading from "@/components/fullscreen-loading";
import preloadImage from "@/utils/preload-image";
import { useCallback, useEffect, useState } from "react";

type AssetsLoaderProps = {
  children: React.ReactNode;
  assets: Record<string, string>;
};

export default function AssetsLoader({ children, assets }: AssetsLoaderProps) {
  const [isLoading, setLoading] = useState(true);

  const loadAssets = useCallback(async () => {
    const images = Object.keys(assets);

    await Promise.all(images.map((key) => preloadImage(assets[key])));

    setLoading(false);
  }, [assets]);

  useEffect(() => {
    loadAssets();
  }, [loadAssets]);

  if (isLoading) {
    return <FullScreenLoading />;
  }

  return children;
}
