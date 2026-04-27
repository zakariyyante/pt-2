"use client";

import Image from "next/image";
import { useState } from "react";
import { CasinoSVGLogo } from "./CasinoLogos";
import type { Casino } from "../data/casinos";

interface CasinoCardProps {
  casino: Casino;
  rank: number;
}

function BadgePill({ badge }: { badge: string }) {
  if (!badge) return null;
  const labels: Record<string, string> = {
    "Editor's Pick": "Escolha Do Editor",
    "Top Pick": "Mais Popular",
    "Trending Now": "Em Alta",
  };
  const colors: Record<string, string> = {
    "Editor's Pick": "bg-amber-500/20 text-amber-400 border border-amber-500/30",
    "Top Pick": "bg-blue-500/20 text-blue-400 border border-blue-500/30",
    "Trending Now": "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30",
  };
  return (
    <span className={`text-[10px] font-bold tracking-wider uppercase px-2 py-0.5 rounded-full ${colors[badge] ?? "bg-white/10 text-white/60"}`}>
      {labels[badge] ?? badge}
    </span>
  );
}

function CasinoLogo({ name, logo }: { name: string; logo: string }) {
  const [err, setErr] = useState(false);
  if (logo.startsWith("/") && !err) {
    return (
      <div className="relative w-20 h-12 rounded-lg overflow-hidden bg-[#0c1223] flex-shrink-0">
        <Image src={logo} alt={`${name} logo`} fill sizes="80px" className="object-contain p-1" onError={() => setErr(true)} unoptimized />
      </div>
    );
  }
  return (
    <div className="flex-shrink-0">
      <CasinoSVGLogo name={name} width={80} height={48} />
    </div>
  );
}

export default function CasinoCard({ casino, rank }: CasinoCardProps) {
  const { name, logo, bonus, url, votes, rating, badge } = casino;
  const handleClick = () => window.open(url, "_blank", "noopener,noreferrer");

  const reviewTexts: Record<string, string> = {
    "Bwin": "Um dos operadores mais reconhecidos em Portugal com licença SRIJ válida e vasta oferta de jogos.",
    "Bet.pt": "Casino 100% português com excelente suporte local e pagamentos rápidos em euros.",
    "ESC Online": "Operador de referência em Portugal com bónus generosos e jogos de casino ao vivo.",
    "Betclic": "Plataforma internacional com forte presença em Portugal e interface intuitiva.",
    "PokerStars Casino": "Reputação global com segurança máxima e uma das maiores variedades de slots.",
    "888 Casino": "Marca histórica com mais de 25 anos de experiência e promoções regulares.",
    "LeoVegas": "Premiado casino mobile com app dedicada e ampla selecção de jogos.",
    "Betway": "Casino confiável com excelentes bónus de boas-vindas e suporte 24/7.",
    "Unibet": "Plataforma sólida com odds competitivas e casino integrado de qualidade.",
    "William Hill": "Marca britânica com décadas de experiência e licença SRIJ em Portugal.",
  };

  const review = reviewTexts[name] ?? "Casino licenciado pelo SRIJ com excelente reputação no mercado português.";

  return (
    <article
      role="button"
      tabIndex={0}
      onClick={handleClick}
      onKeyDown={(e) => e.key === "Enter" && handleClick()}
      className="casino-card-bg border border-white/8 rounded-xl p-4 sm:p-5 cursor-pointer relative hover:border-amber-500/30 transition-all duration-200 hover:shadow-lg hover:shadow-amber-500/5"
      aria-label={`${name} — ${bonus}`}
    >
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-3 flex-1 min-w-0">
          <span className="text-white/30 text-xs font-bold w-5 flex-shrink-0 text-center">{rank}</span>
          <CasinoLogo name={name} logo={logo} />
          <div className="min-w-0">
            <div className="flex items-center gap-2 mb-1 flex-wrap">
              <BadgePill badge={badge} />
            </div>
            <p className="text-xs text-white/40 uppercase tracking-widest font-semibold mb-0.5">Bónus de Boas-Vindas</p>
            <p className="font-bold text-white text-sm leading-snug">{name}</p>
            <p className="text-sm text-amber-400 font-semibold mt-0.5 leading-snug">{bonus}</p>
          </div>
        </div>

        <div className="hidden sm:flex flex-col gap-1 w-52 flex-shrink-0">
          <div className="flex gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <span key={i} className={i < Math.round(rating / 2) ? "text-amber-400 text-sm" : "text-white/20 text-sm"}>★</span>
            ))}
          </div>
          <p className="text-xs text-white/40 leading-relaxed line-clamp-3">
            ({votes.toLocaleString("pt-PT")} avaliações) — {review}
          </p>
        </div>

        <div className="flex flex-col items-center gap-2 flex-shrink-0">
          <span className="text-amber-400 font-extrabold text-3xl leading-none">{rating.toFixed(1)}</span>
          <button
            type="button"
            onClick={handleClick}
            tabIndex={-1}
            aria-hidden="true"
            className="gold-shimmer bg-amber-500 hover:bg-amber-400 text-black px-5 py-2.5 rounded-lg text-xs font-extrabold tracking-wider uppercase transition-all duration-200"
          >
            Obter Bónus
          </button>
          <span className="text-amber-500/70 text-xs underline underline-offset-2 hover:text-amber-400 hover:no-underline transition-colors">
            Visitar {name.split(" ")[0]}
          </span>
        </div>
      </div>

      <p className="text-white/20 text-xs mt-3 pt-3 border-t border-white/5">
        +18. Aplicam-se T&amp;C. Apenas novos jogadores. SRIJ Licenciado. Jogo responsável.
      </p>
    </article>
  );
}
