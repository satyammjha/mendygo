"use client";
import { cn } from "@/lib/utils";
import React, { useEffect, useRef, useState } from "react";
import { createNoise3D } from "simplex-noise";

export const WavyBackground = ({
  children,
  className,
  containerClassName,
  colors,
  waveWidth,
  backgroundFill,
  blur = 10,
  speed = "fast",
  waveOpacity = 0.5,
  ...props
}: {
  children?: any;
  className?: string;
  containerClassName?: string;
  colors?: string[];
  waveWidth?: number;
  backgroundFill?: string;
  blur?: number;
  speed?: "slow" | "fast";
  waveOpacity?: number;
  [key: string]: any;
}) => {
  const noise = createNoise3D();
  let w: number,
    h: number,
    nt: number,
    i: number,
    x: number,
    ctx: any,
    canvas: any;
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const checkDarkMode = () => {
      if (typeof window !== "undefined") {
        const isDark = document.documentElement.classList.contains('dark');
        setIsDarkMode(isDark);
      }
    };

    checkDarkMode();

    const observer = new MutationObserver(checkDarkMode);
    if (typeof window !== "undefined") {
      observer.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ['class']
      });

      return () => {
        observer.disconnect();
      };
    }
  }, []);

  const getSpeed = () => {
    switch (speed) {
      case "slow":
        return 0.001;
      case "fast":
        return 0.002;
      default:
        return 0.001;
    }
  };

  const init = () => {
    canvas = canvasRef.current;
    if (!canvas) return;

    ctx = canvas.getContext("2d");
    w = ctx.canvas.width = window.innerWidth;
    h = ctx.canvas.height = window.innerHeight;
    ctx.filter = `blur(${blur}px)`;
    nt = 0;

    window.onresize = function () {
      if (ctx) {
        w = ctx.canvas.width = window.innerWidth;
        h = ctx.canvas.height = window.innerHeight;
        ctx.filter = `blur(${blur}px)`;
      }
    };
    render();
  };

  const darkModeColors = [
    "#38bdf8", // sky blue
    "#818cf8", // indigo
    "#c084fc", // purple
    "#f472b6", // pink
    "#34d399", // emerald
  ];
  const lightModeColors = [
    "#ff1a1a", // vivid red
    "#ff0066", // neon pink
    "#9900ff", // electric purple
    "#0033ff", // rich blue
    "#00cccc", // aqua cyan
  ];




  const waveColors = colors ?? (isDarkMode ? darkModeColors : lightModeColors);

  const drawWave = (n: number) => {
    nt += getSpeed();
    for (i = 0; i < n; i++) {
      ctx.beginPath();
      ctx.lineWidth = waveWidth || 50;
      ctx.strokeStyle = waveColors[i % waveColors.length];
      for (x = 0; x < w; x += 5) {
        var y = noise(x / 800, 0.3 * i, nt) * 100;
        ctx.lineTo(x, y + h * 0.5);
      }
      ctx.stroke();
      ctx.closePath();
    }
  };

  let animationId: number;
  const render = () => {
    if (!ctx) return;

    // Clear the canvas first
    ctx.clearRect(0, 0, w, h);

    // Set background - pure white for light mode, pure black for dark mode
    ctx.fillStyle = backgroundFill || (isDarkMode ? "#000000" : "#ffffff");
    ctx.globalAlpha = 1;
    ctx.fillRect(0, 0, w, h);

    // Set wave opacity based on theme
    ctx.globalAlpha = isDarkMode ? (waveOpacity || 0.6) : (waveOpacity || 0.4);

    drawWave(5);
    animationId = requestAnimationFrame(render);
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (canvasRef.current) {
        init();
      }
    }, 100); // Small delay to ensure DOM is ready

    return () => {
      clearTimeout(timeoutId);
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [isDarkMode]); // Re-initialize when theme changes

  const [isSafari, setIsSafari] = useState(false);
  useEffect(() => {
    setIsSafari(
      typeof window !== "undefined" &&
      navigator.userAgent.includes("Safari") &&
      !navigator.userAgent.includes("Chrome")
    );
  }, []);

  return (
    <div
      className={cn(
        "h-screen flex flex-col items-center justify-center transition-colors duration-300",
        isDarkMode ? "bg-black" : "bg-white",
        containerClassName
      )}
      {...props}
    >
      <canvas
        className="absolute inset-0 z-0"
        ref={canvasRef}
        id="canvas"
        style={{
          ...(isSafari ? { filter: `blur(${blur}px)` } : {}),
        }}
      />
      <div className={cn("relative z-10 w-full", className)}>
        {children}
      </div>
    </div>
  );
};