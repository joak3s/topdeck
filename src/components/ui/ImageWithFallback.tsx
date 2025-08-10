"use client";

import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface ImageWithFallbackProps {
  src: string;
  alt: string;
  className?: string;
  fallbackSrc?: string;
  width?: number;
  height?: number;
  fill?: boolean;
  priority?: boolean;
}

export const ImageWithFallback = ({
  src,
  alt,
  className,
  fallbackSrc = "/images/placeholder.svg",
  width,
  height,
  fill,
  priority,
}: ImageWithFallbackProps) => {
  const [imgSrc, setImgSrc] = useState(src);
  const [isLoading, setIsLoading] = useState(true);

  const handleError = () => {
    setImgSrc(fallbackSrc);
  };

  const handleLoad = () => {
    setIsLoading(false);
  };

  if (fill) {
    return (
      <Image
        src={imgSrc}
        alt={alt}
        fill
        className={cn(
          "object-cover transition-opacity duration-300",
          isLoading ? "opacity-0" : "opacity-100",
          className
        )}
        onError={handleError}
        onLoad={handleLoad}
        priority={priority}
      />
    );
  }

  return (
    <Image
      src={imgSrc}
      alt={alt}
      width={width || 800}
      height={height || 600}
      className={cn(
        "transition-opacity duration-300",
        isLoading ? "opacity-0" : "opacity-100",
        className
      )}
      onError={handleError}
      onLoad={handleLoad}
      priority={priority}
    />
  );
};
