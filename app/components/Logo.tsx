import Link from "next/link";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

// Poker chip SVG — strokeDasharray hardcoded to avoid SSR float mismatch
// 8 segments: dash=12.5 gap=4.78 → 8×17.28 ≈ circumference of r=22 (138.23px)
function ChipIcon({ px }: { px: number }) {
  return (
    <svg
      width={px}
      height={px}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: "inline-block", verticalAlign: "middle", flexShrink: 0 }}
    >
      {/* Dark background */}
      <circle cx="24" cy="24" r="23" fill="#0d0a18" />

      {/* Segmented outer ring — 8 gold notches */}
      <circle
        cx="24" cy="24" r="22"
        fill="none"
        stroke="#f4b942"
        strokeWidth="4.5"
        strokeDasharray="12.5 4.78"
        strokeLinecap="round"
        transform="rotate(-90 24 24)"
      />

      {/* Inner gold ring */}
      <circle cx="24" cy="24" r="15" fill="none" stroke="#f4b942" strokeWidth="1.5" />

      {/* Center dark fill */}
      <circle cx="24" cy="24" r="13.5" fill="#1a0a2e" />

      {/* Spade */}
      <text
        x="24" y="30"
        textAnchor="middle"
        fontSize="15"
        fill="#f4b942"
        fontFamily="Georgia, serif"
        fontWeight="bold"
      >
        ♠
      </text>
    </svg>
  );
}

const cfg = {
  sm: { chip: 28, text: "24px", sub: "9px",  gap: "2px"  },
  md: { chip: 40, text: "34px", sub: "11px", gap: "3px"  },
  lg: { chip: 56, text: "48px", sub: "14px", gap: "4px"  },
};

export default function Logo({ className = "", size = "md" }: LogoProps) {
  const c = cfg[size];
  const fw = 900;

  return (
    <Link
      href="/"
      className={`inline-flex flex-col items-center select-none ${className}`}
      style={{ textDecoration: "none", gap: "2px" }}
      aria-label="MelhoresCasino — Página Inicial"
    >
      {/* Row 1: MELH + chip + RES */}
      <div style={{ display: "flex", alignItems: "center", gap: "1px", lineHeight: 1 }}>
        {/* M — Portuguese green */}
        <span style={{ fontSize: c.text, fontWeight: fw, color: "#16a34a", letterSpacing: "-0.04em", fontFamily: "Inter, system-ui, sans-serif" }}>M</span>
        {/* ELH — white */}
        <span style={{ fontSize: c.text, fontWeight: fw, color: "#ffffff", letterSpacing: "-0.04em", fontFamily: "Inter, system-ui, sans-serif" }}>ELH</span>
        {/* O → chip */}
        <ChipIcon px={c.chip} />
        {/* RES — white, S in red */}
        <span style={{ fontSize: c.text, fontWeight: fw, color: "#ffffff", letterSpacing: "-0.04em", fontFamily: "Inter, system-ui, sans-serif" }}>RE</span>
        <span style={{ fontSize: c.text, fontWeight: fw, color: "#dc2626", letterSpacing: "-0.04em", fontFamily: "Inter, system-ui, sans-serif" }}>S</span>
      </div>

      {/* Row 2: CASINOS ONLINE */}
      <div style={{ letterSpacing: c.gap, fontSize: c.sub, fontWeight: 600, color: "rgba(255,255,255,0.7)", textTransform: "uppercase", fontFamily: "Inter, system-ui, sans-serif" }}>
        CASINOS ONLINE
      </div>
    </Link>
  );
}
