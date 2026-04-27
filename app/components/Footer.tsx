"use client";

import Link from "next/link";
import Logo from "./Logo";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{ background: "#07070f", borderTop: "1px solid rgba(255,255,255,0.07)" }}>

      {/* Main footer */}
      <div className="w-full py-10" style={{ paddingLeft: "clamp(20px, 6vw, 100px)", paddingRight: "clamp(20px, 6vw, 100px)" }}>

        {/* Logo + nav */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "16px", marginBottom: "28px" }}>
          <Logo size="md" />
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px 24px", justifyContent: "center" }}>
            <Link href="/privacy"    style={{ color: "rgba(255,255,255,0.45)", fontSize: "13px", textDecoration: "none" }} className="hover:text-white transition-colors">Política de Privacidade</Link>
            <Link href="/terms"      style={{ color: "rgba(255,255,255,0.45)", fontSize: "13px", textDecoration: "none" }} className="hover:text-white transition-colors">Termos de Serviço</Link>
            <Link href="/disclaimer" style={{ color: "rgba(255,255,255,0.45)", fontSize: "13px", textDecoration: "none" }} className="hover:text-white transition-colors">Declaração de Divulgação</Link>
            <Link href="/contact"    style={{ color: "rgba(255,255,255,0.45)", fontSize: "13px", textDecoration: "none" }} className="hover:text-white transition-colors">Contacto</Link>
            <Link href="/about" style={{ color: "rgba(255,255,255,0.45)", fontSize: "13px", textDecoration: "none" }} className="hover:text-white transition-colors">Sobre Nós</Link>
          </div>
        </div>

        {/* Disclaimer */}
        <div style={{ maxWidth: "860px", margin: "0 auto 24px", textAlign: "center" }}>
          <p style={{ color: "rgba(255,255,255,0.25)", fontSize: "11px", lineHeight: 1.8 }}>
            <strong style={{ color: "rgba(255,255,255,0.4)" }}>melhorescasinopt.com</strong> é um serviço editorial de comparação independente suportado por comissões de referência dos sites apresentados. A compensação recebida pode influenciar a ordenação dos operadores. Outros factores, incluindo as nossas opiniões, a sua localização e a probabilidade de registo, podem também afectar a classificação apresentada a um determinado utilizador. melhorescasinopt.com não apresenta informações sobre todos os casinos online disponíveis.
          </p>
          <p style={{ color: "rgba(255,255,255,0.25)", fontSize: "11px", lineHeight: 1.8, marginTop: "12px" }}>
            Ao longo deste website, fornecemos informações sobre bónus e ofertas de vários casinos online. Cada uma destas ofertas tem Termos e Condições específicos. Os detalhes podem ser encontrados nos sites dos operadores. Recomendamos vivamente que todos os visitantes se familiarizem com estes termos antes de efectuarem qualquer depósito.
          </p>
        </div>

        {/* Responsible gambling line */}
        <p style={{ textAlign: "center", color: "rgba(255,255,255,0.35)", fontSize: "12px", fontWeight: 600, letterSpacing: "0.05em", marginBottom: "24px" }}>
          Proibido jogar a menores de 18 anos &nbsp;·&nbsp; SEJA RESPONSÁVEL, JOGUE COM MODERAÇÃO
        </p>

        {/* Regulatory logos */}
        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "center", gap: "20px", marginBottom: "24px" }}>

          {/* SRIJ */}
          <a href="https://www.srij.turismodeportugal.pt/pt/sos-jogadores/autoexclusao-e-proibicao" target="_blank" rel="noopener noreferrer"
            style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "4px", textDecoration: "none", opacity: 0.7, transition: "opacity .2s" }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.7")}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/srij.png" alt="SRIJ" style={{ height: 40, width: "auto", objectFit: "contain" }} />
            <span style={{ color: "rgba(255,255,255,0.3)", fontSize: "9px", letterSpacing: "0.05em" }}>Licenciado</span>
          </a>

          {/* 18+ */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "4px" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/18-plus-br.png" alt="18+" style={{ height: 40, width: "auto", objectFit: "contain" }} />
            <span style={{ color: "rgba(255,255,255,0.3)", fontSize: "9px", letterSpacing: "0.05em" }}>Idade Mínima</span>
          </div>

          {/* ICAD */}
          <a href="https://www.icad.pt/ImageContent/Index/21?languageId=0" target="_blank" rel="noopener noreferrer"
            style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "4px", textDecoration: "none", opacity: 0.7, transition: "opacity .2s" }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.7")}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/icad.png" alt="ICAD" style={{ height: 40, width: "auto", objectFit: "contain" }} />
            <span style={{ color: "rgba(255,255,255,0.3)", fontSize: "9px", letterSpacing: "0.05em" }}>Conduta Aditiva</span>
          </a>

        </div>

        {/* Copyright */}
        <p style={{ textAlign: "center", color: "rgba(255,255,255,0.2)", fontSize: "11px" }}>
          Copyright © {year} melhorescasinopt.com · Todos os direitos reservados
        </p>

      </div>
    </footer>
  );
}
