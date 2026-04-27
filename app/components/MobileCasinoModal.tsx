"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import Image from "next/image";
import { CasinoSVGLogo } from "./CasinoLogos";
import type { Casino } from "../data/casinos";

interface MobileCasinoCardProps {
  casino: Casino;
  gclid: string;
  rank: number;
}

function MobileCasinoCard({ casino, gclid, rank }: MobileCasinoCardProps) {
  const url = `${casino.url}&s=4&utm_medium=${encodeURIComponent(gclid)}`;
  const isImageLogo = casino.logo.startsWith("/");

  return (
    <article
      className="felt-texture casino-card-bg rounded-xl p-4 cursor-pointer casino-glow relative overflow-hidden border border-white/8 hover:border-amber-500/30 transition-all duration-200"
      onClick={() => window.open(url, "_blank", "noopener,noreferrer")}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && window.open(url, "_blank", "noopener,noreferrer")}
      aria-label={`${casino.name} - ${casino.bonus}`}
    >
      <div className="flex items-center gap-3 mb-3">
        <span className="text-white/30 text-xs font-bold">#{rank}</span>
        <div className="flex-1 flex justify-center">
          {isImageLogo ? (
            <div className="relative h-10 w-24">
              <Image src={casino.logo} alt={`${casino.name} logo`} fill sizes="96px" className="object-contain" />
            </div>
          ) : (
            <CasinoSVGLogo name={casino.name} width={96} height={40} />
          )}
        </div>
        <span className="gold-text font-extrabold text-2xl">{casino.rating.toFixed(1)}</span>
      </div>
      <div className="bg-amber-500/10 border border-amber-500/20 rounded-lg p-2 mb-3">
        <p className="text-xs font-bold text-amber-300 text-center leading-snug">{casino.bonus}</p>
      </div>
      <button
        type="button"
        className="gold-border gold-shimmer w-full py-2.5 rounded-lg text-xs font-extrabold tracking-wider uppercase bg-amber-500 text-black hover:bg-amber-400 transition-all duration-200"
        tabIndex={-1}
        aria-hidden="true"
      >
        Jogar Agora →
      </button>
      <p className="text-center text-white/25 text-xs mt-1">T&amp;Cs aplicam-se · +18 · SRIJ</p>
    </article>
  );
}

function ModalContent({ casinos }: { casinos: Casino[] }) {
  const searchParams = useSearchParams();
  const gclid = searchParams.get("gclid");

  if (!gclid) return null;

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-[#06090f] overflow-y-auto">
      <div className="bg-amber-500/10 border-b border-amber-500/20 py-3 px-4 text-center">
        <p className="text-amber-400 text-xs font-bold tracking-widest uppercase">
          🎰 Ofertas Exclusivas para Mobile — Apenas para Novos Clientes · +18 · T&amp;Cs Aplicam-se
        </p>
      </div>

      <div className="py-6 px-4 text-center border-b border-white/5">
        <h1 className="text-xl font-extrabold text-white mb-1">
          Melhores Casinos{" "}
          <span className="gold-text">para Mobile</span>
        </h1>
        <p className="text-white/40 text-sm">Licenciados pelo SRIJ · Selecionado para Portugal · {new Date().getFullYear()}</p>
      </div>

      <div className="flex-1 max-w-2xl mx-auto w-full px-4 py-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {casinos.map((casino, i) => (
            <MobileCasinoCard key={casino.id} casino={casino} gclid={gclid} rank={i + 1} />
          ))}
        </div>
      </div>

      <div className="border-t border-white/5 py-4 px-4 text-center">
        <p className="text-white/30 text-xs leading-relaxed">
          Apenas novos clientes. +18. O jogo pode criar dependência. Jogue com responsabilidade.{" "}
          <a href="https://www.jogoresponsavel.pt" target="_blank" rel="noopener noreferrer" className="text-amber-500 hover:underline">JogoResponsavel.pt</a>
          {" "}· SOS Vício:{" "}
          <a href="tel:1414" className="text-amber-500 hover:underline font-semibold">1414</a>
          {" "}(gratuito)
        </p>
      </div>
    </div>
  );
}

export default function MobileCasinoModal({ casinos }: { casinos: Casino[] }) {
  return (
    <Suspense fallback={null}>
      <ModalContent casinos={casinos} />
    </Suspense>
  );
}
