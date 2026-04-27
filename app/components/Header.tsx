"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Logo from "./Logo";

const navLinks = [
  { label: "Início", href: "/" },
  { label: "Análises", href: "#casinos" },
  { label: "Como Avaliamos", href: "#como-avaliamos" },
  { label: "Sobre Nós", href: "#sobre-nos" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-40 w-full"
      style={{ background: "#09091a", borderBottom: "1px solid rgba(255,255,255,0.09)" }}
    >
      <div className="w-full" style={{ paddingLeft: "clamp(20px, 6vw, 100px)", paddingRight: "clamp(20px, 6vw, 100px)" }}>
        <div className="flex items-center justify-between" style={{ height: "68px" }}>

          {/* Logo — always visible */}
          <Logo size="md" />

          {/* Desktop nav — only at lg+ */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Navegação principal">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-white/50 hover:text-white transition-colors duration-150"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right side: CTA + burger */}
          <div className="flex items-center gap-3">
            {/* CTA — desktop only */}
            <a
              href="#casinos"
              className="hidden lg:inline-flex items-center gap-1 px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-200 hover:brightness-110"
              style={{
                background: "linear-gradient(135deg, #d4920d 0%, #f4b942 60%, #fcd34d 100%)",
                color: "#06090f",
              }}
            >
              Ver Top Casinos →
            </a>

            {/* Burger — below lg */}
            <button
              type="button"
              aria-label={open ? "Fechar menu" : "Abrir menu"}
              aria-expanded={open}
              className="lg:hidden flex items-center justify-center rounded-lg text-white/60 hover:text-white hover:bg-white/8 transition-colors"
              style={{ width: "44px", height: "44px" }}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile / tablet dropdown */}
      {open && (
        <div
          className="lg:hidden border-t"
          style={{ background: "#09091a", borderColor: "rgba(255,255,255,0.07)" }}
        >
          <nav className="w-full flex flex-col gap-1 py-4" style={{ paddingLeft: "clamp(20px, 6vw, 100px)", paddingRight: "clamp(20px, 6vw, 100px)" }} aria-label="Navegação móvel">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block px-4 py-3 rounded-xl text-sm font-medium text-white/65 hover:text-white hover:bg-white/6 transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <div className="flex gap-4 pt-3 mt-2 border-t border-white/6">
              <Link href="/terms" onClick={() => setOpen(false)} className="text-xs text-white/35 hover:text-white/60 transition-colors">Termos</Link>
              <Link href="/privacy" onClick={() => setOpen(false)} className="text-xs text-white/35 hover:text-white/60 transition-colors">Privacidade</Link>
            </div>
            <div className="pt-3 mt-1">
              <a
                href="#casinos"
                onClick={() => setOpen(false)}
                className="block w-full py-3.5 rounded-xl text-sm text-center font-bold transition-all hover:brightness-110"
                style={{
                  background: "linear-gradient(135deg, #d4920d 0%, #f4b942 60%, #fcd34d 100%)",
                  color: "#06090f",
                }}
              >
                Ver Top Casinos →
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
