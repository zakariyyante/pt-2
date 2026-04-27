"use client";

import Image from "next/image";
import { useState } from "react";
import { CasinoSVGLogo } from "./CasinoLogos";
import type { Casino } from "../data/casinos";

interface DesktopCasinoCardProps {
  casino: Casino;
}

const badgeLabels: Record<string, string> = {
  "Editor's Pick": "✦ RECOMENDADO",
  "Top Pick":      "▲ ESCOLHA DO JOGADOR",
  "Trending Now":  "⚡ NOVA OFERTA",
};
const badgeColors: Record<string, string> = {
  "Editor's Pick": "#15803d",
  "Top Pick":      "#1d4ed8",
  "Trending Now":  "#b45309",
};

const tcTexts: Record<string, string> = {
  "Bwin":             "18+. T&C's APLICAM-SE. NOVOS REGISTOS APENAS. Após concluir o registo e fazeres um primeiro depósito de pelo menos 10€, tens 7 dias para jogar pelo menos 10€ numa lista de slots selecionadas.",
  "Bet.pt":           "18+. T&C'S.APLICAM-SE. NOVOS REGISTOS APENAS. Apenas para novos clientes residentes em Portugal. Bónus sujeito a requisitos de aposta.",
  "ESC Online":       "18+. T&C'S.APLICAM-SE. NOVOS REGISTOS APENAS. O bónus está sujeito a condições de rollover. Bónus válido por 30 dias após activação.",
  "Betclic":          "18+. T&C'S.APLICAM-SE. NOVOS REGISTOS APENAS. Bónus disponível apenas no primeiro depósito. Requisitos de aposta aplicam-se.",
  "PokerStars Casino":"18+. T&C'S.APLICAM-SE. NOVOS REGISTOS APENAS. Os novos jogadores podem receber a oferta de bónus e duplicar o depósito até €500.",
  "888 Casino":       "18+. T&C'S.APLICAM-SE. NOVOS REGISTOS APENAS. Rodadas grátis válidas em jogos seleccionados. Bónus sujeito a rollover x30.",
  "LeoVegas":         "18+. T&C'S.APLICAM-SE. NOVOS REGISTOS APENAS. Bónus de depósito e rodadas grátis sujeitos a requisitos de aposta.",
  "Betway":           "18+. T&C'S.APLICAM-SE. NOVOS REGISTOS APENAS. Bónus de boas-vindas aplicável ao primeiro depósito. Rollover x30 aplicável.",
  "Unibet":           "18+. T&C'S.APLICAM-SE. NOVOS REGISTOS APENAS. Bónus disponível para novos clientes. Requisitos de aposta e prazo de validade aplicam-se.",
  "William Hill":     "18+. T&C'S.APLICAM-SE. NOVOS REGISTOS APENAS. Bónus de boas-vindas sujeito a condições. Depósito mín. €10.",
};

function Stars({ rating, size }: { rating: number; size: number }) {
  const filled = Math.round(rating / 2);
  return (
    <div style={{ display: "flex", gap: 3 }}>
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} style={{ fontSize: size, color: i < filled ? "#f5b942" : "rgba(255,255,255,0.18)", lineHeight: 1 }}>★</span>
      ))}
    </div>
  );
}

function LogoBox({ name, logo, w, h }: { name: string; logo: string; w: number; h: number }) {
  const [err, setErr] = useState(false);
  if (logo.startsWith("/") && !err) {
    return (
      <div style={{ position: "relative", width: w, height: h, flexShrink: 0, borderRadius: 8, overflow: "hidden", background: "rgba(255,255,255,0.05)" }}>
        <Image src={logo} alt={`${name} logo`} fill sizes={`${w}px`} className="object-contain p-2" onError={() => setErr(true)} unoptimized />
      </div>
    );
  }
  return <div style={{ flexShrink: 0 }}><CasinoSVGLogo name={name} width={w} height={h} /></div>;
}

export default function DesktopCasinoCard({ casino }: DesktopCasinoCardProps) {
  const { name, logo, bonus, url, votes, rating, badge } = casino;
  const handleClick = () => window.open(url, "_blank", "noopener,noreferrer");
  const tc = tcTexts[name] ?? "18+. T&C'S.APLICAM-SE. NOVOS REGISTOS APENAS.";
  const badgeLabel = badgeLabels[badge];
  const badgeColor = badge ? badgeColors[badge] : undefined;

  return (
    <article
      role="button"
      tabIndex={0}
      onClick={handleClick}
      onKeyDown={(e) => e.key === "Enter" && handleClick()}
      style={{ cursor: "pointer", width: "100%" }}
      aria-label={`${name} — ${bonus}`}
    >
      {/* Badge above card */}
      {badgeLabel && badgeColor && (
        <div style={{
          display: "inline-flex", alignItems: "center",
          background: badgeColor, color: "#fff",
          fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase",
          padding: "5px 14px", borderRadius: "6px 6px 0 0",
        }}>
          {badgeLabel}
        </div>
      )}

      {/* Card — 2×2 grid */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gridTemplateRows: "1fr 1fr",
        background: "linear-gradient(160deg, #14143a 0%, #0f0f28 60%, #0a0a1e 100%)",
        border: "1px solid rgba(255,255,255,0.1)",
        borderRadius: badgeLabel ? "0 10px 10px 10px" : 10,
        overflow: "hidden",
        minHeight: "clamp(140px, 18vw, 200px)",
      }}>

        {/* TOP-LEFT: Logo */}
        <div style={{
          display: "flex", alignItems: "center", justifyContent: "center",
          padding: "clamp(14px, 2vw, 24px)",
          borderRight: "1px solid rgba(255,255,255,0.07)",
          borderBottom: "1px solid rgba(255,255,255,0.07)",
        }}>
          <LogoBox name={name} logo={logo} w={120} h={64} />
        </div>

        {/* TOP-RIGHT: Bonus */}
        <div style={{
          display: "flex", flexDirection: "column", justifyContent: "center",
          padding: "clamp(14px, 2vw, 24px)",
          borderBottom: "1px solid rgba(255,255,255,0.07)",
        }}>
          <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "clamp(9px, 1vw, 11px)", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: 8 }}>
            Bónus de Boas-Vindas
          </p>
          <p style={{ color: "#ffffff", fontWeight: 900, fontSize: "clamp(14px, 1.8vw, 20px)", lineHeight: 1.3 }}>
            {bonus}
          </p>
        </div>

        {/* BOTTOM-LEFT: Score + Stars */}
        <div style={{
          display: "flex", flexDirection: "column", justifyContent: "center", gap: 8,
          padding: "clamp(12px, 2vw, 22px)",
          borderRight: "1px solid rgba(255,255,255,0.07)",
        }}>
          <div style={{ display: "flex", alignItems: "baseline", gap: 8 }}>
            <span style={{ fontSize: "clamp(32px, 5vw, 52px)", fontWeight: 900, color: "#22c55e", lineHeight: 1 }}>
              {rating.toFixed(1)}
            </span>
            <span style={{ color: "rgba(255,255,255,0.3)", fontSize: "clamp(9px, 1vw, 11px)" }}>/ 10</span>
          </div>
          <Stars rating={rating} size={16} />
          <span style={{ color: "rgba(255,255,255,0.25)", fontSize: "clamp(9px, 0.9vw, 11px)" }}>
            Nossa Pontuação · {votes.toLocaleString("pt-PT")} votos
          </span>
        </div>

        {/* BOTTOM-RIGHT: Play button */}
        <div style={{
          display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 10,
          padding: "clamp(12px, 2vw, 22px)",
        }}>
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); handleClick(); }}
            className="vd-btn-shine"
            style={{
              background: "linear-gradient(135deg, #dc2626 0%, #ef4444 100%)",
              color: "#fff",
              fontWeight: 900,
              fontSize: "clamp(14px, 1.5vw, 18px)",
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              borderRadius: 999,
              padding: "clamp(11px, 1.5vw, 16px) clamp(20px, 3vw, 40px)",
              border: "none",
              cursor: "pointer",
              width: "100%",
              maxWidth: 220,
              boxShadow: "0 4px 20px rgba(220,38,38,0.4)",
              transition: "filter .2s, transform .15s",
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.filter = "brightness(1.15)"; (e.currentTarget as HTMLButtonElement).style.transform = "scale(1.03)"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.filter = "brightness(1)"; (e.currentTarget as HTMLButtonElement).style.transform = "scale(1)"; }}
            tabIndex={-1}
            aria-hidden="true"
          >
            JOGAR AGORA
          </button>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            style={{ color: "rgba(255,255,255,0.35)", fontSize: "clamp(10px, 1vw, 12px)", textDecoration: "underline", textUnderlineOffset: 2 }}
          >
            Visite {name.split(" ")[0]}
          </a>
        </div>

      </div>

      {/* T&C */}
      <p style={{ color: "rgba(255,255,255,0.22)", fontSize: 10, lineHeight: 1.55, padding: "5px 2px 12px" }}>
        {tc}
      </p>
    </article>
  );
}
