"use client";

import { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, useMotionValueEvent } from "framer-motion";

const FRAME_COUNT = 151;

export default function ScrollyCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  
  const { scrollYProgress } = useScroll();
  
  // Preload images
  useEffect(() => {
    const loadedImages: HTMLImageElement[] = [];
    let loadedCount = 0;

    for (let i = 0; i < FRAME_COUNT; i++) {
      const img = new Image();
      const indexStr = i.toString().padStart(3, "0");
      img.src = `/sequence/frame_${indexStr}_delay-0.066s.webp`;
      
      img.onload = () => {
        loadedCount++;
        if (loadedCount === FRAME_COUNT) {
          // Initial draw once all are loaded
          drawFrame(0, loadedImages);
        }
      };
      loadedImages.push(img);
    }
    setImages(loadedImages);
  }, []);

  // Function to draw a specific frame
  const drawFrame = (frameIndex: number, imgs: HTMLImageElement[] = images) => {
    if (!canvasRef.current || !imgs[frameIndex]) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const img = imgs[frameIndex];
    
    // Calculate aspect ratio for object-fit cover
    const canvasRatio = canvas.width / canvas.height;
    const imgRatio = img.width / img.height;
    
    let drawWidth = canvas.width;
    let drawHeight = canvas.height;
    let offsetX = 0;
    let offsetY = 0;

    if (canvasRatio > imgRatio) {
      drawHeight = canvas.width / imgRatio;
      offsetY = (canvas.height - drawHeight) / 2;
    } else {
      drawWidth = canvas.height * imgRatio;
      offsetX = (canvas.width - drawWidth) / 2;
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
  };

  // Handle Resize
  useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current) {
        canvasRef.current.width = window.innerWidth;
        canvasRef.current.height = window.innerHeight;
        // Redraw current frame on resize
        const currentFrame = Math.min(
          FRAME_COUNT - 1,
          Math.max(0, Math.floor(scrollYProgress.get() * FRAME_COUNT))
        );
        drawFrame(currentFrame);
      }
    };
    
    handleResize(); // Initial setup
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [images, scrollYProgress]);

  // Handle scroll events
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (images.length === FRAME_COUNT) {
      const frameIndex = Math.min(
        FRAME_COUNT - 1,
        Math.max(0, Math.floor(latest * FRAME_COUNT))
      );
      requestAnimationFrame(() => drawFrame(frameIndex));
    }
  });

  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none bg-black">
      <canvas
        ref={canvasRef}
        className="w-full h-full object-cover"
      />
      {/* Overlay to darken the canvas slightly so text is readable */}
      <div className="absolute inset-0 bg-black/40 mix-blend-multiply" />
    </div>
  );
}
