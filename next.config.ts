import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Fully static site, published to GitHub Pages (served from the custom
  // domain root, so no basePath is needed).
  output: "export",
  images: { unoptimized: true },
  // Dev only: lets a phone on the same Wi-Fi open `next dev` by LAN address.
  // Without this, Next blocks the dev WebSocket from those origins and the
  // page never hydrates (the theme button and scroll reveal do nothing).
  allowedDevOrigins: ["192.168.*.*", "10.*.*.*", "*.local"],
};

export default nextConfig;
