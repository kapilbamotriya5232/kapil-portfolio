"use client";

import React, { useState, useRef, useEffect } from "react";
import { Media, Row, Column, Button, Icon } from "@once-ui-system/core";
import styles from "./ImageSlider.module.scss";

interface ImageSliderProps {
  images: (string | { src: string; alt?: string })[];
  aspectRatio?: string;
  showIndicators?: boolean;
  showArrows?: boolean;
}

export const ImageSlider: React.FC<ImageSliderProps> = ({
  images,
  aspectRatio,
  showIndicators = true,
  showArrows = true,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const normalizedImages = images.map((img) =>
    typeof img === "string" ? { src: img, alt: "Gallery image" } : img
  );

  const scrollToIndex = (index: number) => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const imageWidth = container.clientWidth;
      container.scrollTo({
        left: imageWidth * index,
        behavior: "smooth",
      });
      setCurrentIndex(index);
    }
  };

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const scrollLeft = container.scrollLeft;
      const imageWidth = container.clientWidth;
      const newIndex = Math.round(scrollLeft / imageWidth);
      setCurrentIndex(newIndex);
    }
  };

  const goToPrevious = () => {
    const newIndex = currentIndex > 0 ? currentIndex - 1 : normalizedImages.length - 1;
    scrollToIndex(newIndex);
  };

  const goToNext = () => {
    const newIndex = currentIndex < normalizedImages.length - 1 ? currentIndex + 1 : 0;
    scrollToIndex(newIndex);
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
      return () => container.removeEventListener("scroll", handleScroll);
    }
  }, []);

  if (normalizedImages.length === 0) return null;

  return (
    <Column className={styles.sliderContainer} gap="16">
      <div className={styles.sliderWrapper}>
        <div
          ref={scrollContainerRef}
          className={styles.scrollContainer}
        >
          {normalizedImages.map((image, index) => (
            <div key={index} className={styles.imageWrapper}>
              <img
                src={image.src}
                alt={image.alt || `Image ${index + 1}`}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                  borderRadius: "8px",
                }}
              />
            </div>
          ))}
        </div>
        
        {showArrows && normalizedImages.length > 1 && (
          <>
            <Button
              className={styles.arrowButton + " " + styles.arrowLeft}
              onClick={goToPrevious}
              variant="tertiary"
              size="s"
            >
              <Icon name="chevronLeft" size="m" />
            </Button>
            <Button
              className={styles.arrowButton + " " + styles.arrowRight}
              onClick={goToNext}
              variant="tertiary"
              size="s"
            >
              <Icon name="chevronRight" size="m" />
            </Button>
          </>
        )}
      </div>

      {showIndicators && normalizedImages.length > 1 && (
        <Row gap="8" horizontal="center">
          {normalizedImages.map((_, index) => (
            <button
              key={index}
              className={`${styles.indicator} ${
                index === currentIndex ? styles.active : ""
              }`}
              onClick={() => scrollToIndex(index)}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </Row>
      )}
    </Column>
  );
};
