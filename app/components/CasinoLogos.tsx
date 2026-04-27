"use client";

import React from "react";

interface LogoProps {
  width?: number;
  height?: number;
}

const logos: Record<string, React.FC<LogoProps>> = {
  "Bet.pt": ({ width = 120, height = 48 }) => (
    <svg width={width} height={height} viewBox="0 0 120 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="120" height="48" rx="8" fill="#1a3a6b" />
      <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fill="#ffffff" fontFamily="Inter,sans-serif" fontWeight="800" fontSize="20">
        bet<tspan fill="#f4b942">.pt</tspan>
      </text>
    </svg>
  ),
  "ESC Online": ({ width = 120, height = 48 }) => (
    <svg width={width} height={height} viewBox="0 0 120 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="120" height="48" rx="8" fill="#0d1a2d" />
      <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fill="#ffffff" fontFamily="Inter,sans-serif" fontWeight="800" fontSize="14">
        <tspan fill="#f4b942">ESC</tspan>
        <tspan fill="#ffffff"> Online</tspan>
      </text>
    </svg>
  ),
  Betclic: ({ width = 120, height = 48 }) => (
    <svg width={width} height={height} viewBox="0 0 120 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="120" height="48" rx="8" fill="#e63946" />
      <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fill="#ffffff" fontFamily="Inter,sans-serif" fontWeight="800" fontSize="20">
        betclic
      </text>
    </svg>
  ),
  "PokerStars Casino": ({ width = 120, height = 48 }) => (
    <svg width={width} height={height} viewBox="0 0 120 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="120" height="48" rx="8" fill="#0a1628" />
      <circle cx="60" cy="24" r="16" fill="#f4b942" opacity="0.15" />
      <text x="50%" y="48%" dominantBaseline="middle" textAnchor="middle" fill="#f4b942" fontFamily="Inter,sans-serif" fontWeight="800" fontSize="11">
        PokerStars
      </text>
      <text x="50%" y="70%" dominantBaseline="middle" textAnchor="middle" fill="#ffffff" fontFamily="Inter,sans-serif" fontWeight="600" fontSize="9">
        CASINO
      </text>
    </svg>
  ),
  "888 Casino": ({ width = 120, height = 48 }) => (
    <svg width={width} height={height} viewBox="0 0 120 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="120" height="48" rx="8" fill="#1a0a00" />
      <text x="50%" y="45%" dominantBaseline="middle" textAnchor="middle" fill="#f4b942" fontFamily="Inter,sans-serif" fontWeight="900" fontSize="22">
        888
      </text>
      <text x="50%" y="72%" dominantBaseline="middle" textAnchor="middle" fill="#ffffff" fontFamily="Inter,sans-serif" fontWeight="600" fontSize="9">
        CASINO
      </text>
    </svg>
  ),
  LeoVegas: ({ width = 120, height = 48 }) => (
    <svg width={width} height={height} viewBox="0 0 120 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="120" height="48" rx="8" fill="#0a1628" />
      <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fill="#f4b942" fontFamily="Inter,sans-serif" fontWeight="800" fontSize="18">
        Leo<tspan fill="#ffffff">Vegas</tspan>
      </text>
    </svg>
  ),
  Betway: ({ width = 120, height = 48 }) => (
    <svg width={width} height={height} viewBox="0 0 120 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="120" height="48" rx="8" fill="#00a651" />
      <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fill="#ffffff" fontFamily="Inter,sans-serif" fontWeight="800" fontSize="20">
        betway
      </text>
    </svg>
  ),
  Unibet: ({ width = 120, height = 48 }) => (
    <svg width={width} height={height} viewBox="0 0 120 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="120" height="48" rx="8" fill="#007b5e" />
      <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fill="#ffffff" fontFamily="Inter,sans-serif" fontWeight="800" fontSize="20">
        unibet
      </text>
    </svg>
  ),
  "William Hill": ({ width = 120, height = 48 }) => (
    <svg width={width} height={height} viewBox="0 0 120 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="120" height="48" rx="8" fill="#0b2d4a" />
      <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fill="#ffffff" fontFamily="Inter,sans-serif" fontWeight="700" fontSize="12">
        William Hill
      </text>
    </svg>
  ),
};

const DefaultLogo = ({ name, width = 120, height = 48 }: { name: string } & LogoProps) => (
  <svg width={width} height={height} viewBox="0 0 120 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="120" height="48" rx="8" fill="#0c1223" />
    <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fill="#f4b942" fontFamily="Inter,sans-serif" fontWeight="700" fontSize="12">
      {name.length > 12 ? name.slice(0, 12) + "…" : name}
    </text>
  </svg>
);

export function CasinoSVGLogo({ name, width, height }: { name: string } & LogoProps) {
  const baseName = name.replace(/ Mobile$/, "");
  const Logo = logos[baseName];
  if (Logo) return <Logo width={width} height={height} />;
  return <DefaultLogo name={baseName} width={width} height={height} />;
}
