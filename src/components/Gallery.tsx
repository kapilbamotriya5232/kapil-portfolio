"use client";

import React from "react";
import { ImageSlider } from "./ImageSlider";

interface GalleryProps {
  images: (string | { src: string; alt?: string })[];
  aspectRatio?: string;
}

export const Gallery: React.FC<GalleryProps> = ({ images, aspectRatio }) => {
  return (
    <ImageSlider
      images={images}
      aspectRatio={aspectRatio}
      showIndicators={true}
      showArrows={true}
    />
  );
};
