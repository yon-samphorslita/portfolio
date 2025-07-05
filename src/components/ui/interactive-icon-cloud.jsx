// src/components/interactive-icon-cloud.jsx

import { useEffect, useMemo, useState } from "react";
import { Cloud, fetchSimpleIcons, renderSimpleIcon } from "react-icon-cloud";

const iconSlugs = [
  "react",
  "javascript",
  "html5",
  "css3",
  "github",
  "figma",
  "vite",
  "tailwindcss",
  "visualstudiocode",
  "flutter",
  "mysql",
  "python",
  "java",
  "typescript",
  "vitejs",
  "vuejs",
  "firebase",
  "flutter",
  "docker",
  "dart",
  "postgresql",
  "graphql",
  "googlecloud",
  "php",
  "c",
  "cplusplus",
  "bash",
  "kubernetes",
  "jenkins",
  "ansible",
  "apache",
  "nginx",
  "mysql",
  "sqlite",
  "matplotlib",
  "numpy",
  "babel",
  "eslint",
  "prettier",
  "vuex",
  "express",
  "spring",
  "laravel",
  "springboot",
  "nextjs",
  "axios",
  "fetch",
];

export const cloudProps = {
  containerProps: {
    style: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      paddingTop: 40,
    },
  },
  options: {
    reverse: true,
    depth: 1,
    wheelZoom: false,
    imageScale: 3,
    activeCursor: "default",
    tooltip: "native",
    initial: [0.1, -0.1],
    clickToFront: 500,
    tooltipDelay: 0,
    outlineColour: "#0000",
    maxSpeed: 0.04,
    minSpeed: 0.02,
  },
};

function renderCustomIcon(icon, theme = "light") {
  const bgHex = theme === "light" ? "#f3f2ef" : "#080510";
  const fallbackHex = theme === "light" ? "#6e6e73" : "#ffffff";
  const minContrastRatio = theme === "dark" ? 2 : 1.2;

  return renderSimpleIcon({
    icon,
    bgHex,
    fallbackHex,
    minContrastRatio,
    size: 42,
    aProps: {
      href: undefined,
      target: undefined,
      rel: undefined,
      onClick: (e) => e.preventDefault(),
    },
  });
}

export function InteractiveIconCloud() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchSimpleIcons({ slugs: iconSlugs }).then(setData);
  }, []);

  const renderedIcons = useMemo(() => {
    if (!data) return null;
    return Object.values(data.simpleIcons).map(
      (icon) => renderCustomIcon(icon, "light"), // You can later swap to "dark" using Tailwind's class detection
    );
  }, [data]);

  return <Cloud {...cloudProps}>{renderedIcons}</Cloud>;
}
