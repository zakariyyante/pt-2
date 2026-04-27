"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    // mailto fallback — replace with Formspree/API endpoint if needed
    const mailto = `mailto:contact@melhorescasinopt.com?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(`Nome: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)}`;
    window.location.href = mailto;
    setTimeout(() => setStatus("sent"), 800);
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    background: "rgba(255,255,255,0.05)",
    border: "1px solid rgba(255,255,255,0.1)",
    borderRadius: 10,
    color: "#fff",
    fontSize: 15,
    padding: "13px 16px",
    outline: "none",
    transition: "border-color .2s",
  };

  const labelStyle: React.CSSProperties = {
    display: "block",
    color: "rgba(255,255,255,0.55)",
    fontSize: 13,
    fontWeight: 600,
    marginBottom: 8,
    letterSpacing: "0.02em",
  };

  return (
    <>
      <Header />
      <main className="min-h-screen" style={{ background: "#06090f", paddingTop: "clamp(40px,5vw,80px)", paddingBottom: "clamp(40px,5vw,80px)" }}>
        <div style={{ maxWidth: 680, margin: "0 auto", paddingLeft: "clamp(20px, 6vw, 80px)", paddingRight: "clamp(20px, 6vw, 80px)" }}>

          <nav className="mb-8 text-sm text-white/35" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-amber-400 transition-colors">Início</Link>
            <span className="mx-2">/</span>
            <span className="text-white/60">Contacto</span>
          </nav>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-2">
            <span className="vd-gold-text">Entre em</span> Contacto
          </h1>
          <p className="text-white/40 text-sm mb-10">
            Tem uma questão, sugestão ou quer reportar um problema? Preencha o formulário abaixo e responderemos brevemente.
          </p>

          {status === "sent" ? (
            <div style={{ background: "rgba(34,197,94,0.1)", border: "1px solid rgba(34,197,94,0.3)", borderRadius: 14, padding: "clamp(24px,3vw,40px)", textAlign: "center" }}>
              <div style={{ fontSize: 48, marginBottom: 16 }}>✓</div>
              <h2 style={{ color: "#22c55e", fontWeight: 800, fontSize: 22, marginBottom: 8 }}>Mensagem Enviada!</h2>
              <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 15, marginBottom: 24 }}>
                Obrigado pelo seu contacto. Responderemos o mais brevemente possível.
              </p>
              <button
                onClick={() => { setStatus("idle"); setForm({ name: "", email: "", subject: "", message: "" }); }}
                className="vd-btn-gold vd-btn-shine"
                style={{ padding: "12px 28px", borderRadius: 999, fontSize: 14, fontWeight: 700 }}
              >
                Enviar Nova Mensagem
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate>
              <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>

                {/* Name + Email */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }} className="grid-cols-responsive">
                  <div>
                    <label htmlFor="name" style={labelStyle}>Nome *</label>
                    <input
                      id="name" name="name" type="text" required
                      placeholder="O seu nome"
                      value={form.name}
                      onChange={handleChange}
                      style={inputStyle}
                      onFocus={(e) => (e.currentTarget.style.borderColor = "rgba(244,185,66,0.5)")}
                      onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)")}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" style={labelStyle}>Email *</label>
                    <input
                      id="email" name="email" type="email" required
                      placeholder="email@exemplo.com"
                      value={form.email}
                      onChange={handleChange}
                      style={inputStyle}
                      onFocus={(e) => (e.currentTarget.style.borderColor = "rgba(244,185,66,0.5)")}
                      onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)")}
                    />
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="subject" style={labelStyle}>Assunto *</label>
                  <select
                    id="subject" name="subject" required
                    value={form.subject}
                    onChange={handleChange}
                    style={{ ...inputStyle, cursor: "pointer" }}
                    onFocus={(e) => (e.currentTarget.style.borderColor = "rgba(244,185,66,0.5)")}
                    onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)")}
                  >
                    <option value="" style={{ background: "#0f0f28" }}>Seleccione um assunto</option>
                    <option value="Informação Geral" style={{ background: "#0f0f28" }}>Informação Geral</option>
                    <option value="Parceria / Afiliação" style={{ background: "#0f0f28" }}>Parceria / Afiliação</option>
                    <option value="Reportar Erro" style={{ background: "#0f0f28" }}>Reportar Erro</option>
                    <option value="Jogo Responsável" style={{ background: "#0f0f28" }}>Jogo Responsável</option>
                    <option value="Outro" style={{ background: "#0f0f28" }}>Outro</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" style={labelStyle}>Mensagem *</label>
                  <textarea
                    id="message" name="message" required
                    placeholder="Escreva a sua mensagem aqui..."
                    rows={6}
                    value={form.message}
                    onChange={handleChange}
                    style={{ ...inputStyle, resize: "vertical", minHeight: 140 }}
                    onFocus={(e) => (e.currentTarget.style.borderColor = "rgba(244,185,66,0.5)")}
                    onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)")}
                  />
                </div>

                {/* Submit */}
                <div style={{ display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap" }}>
                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="vd-btn-gold vd-btn-shine"
                    style={{ padding: "14px 36px", borderRadius: 999, fontSize: 15, fontWeight: 800, opacity: status === "sending" ? 0.7 : 1, cursor: status === "sending" ? "not-allowed" : "pointer" }}
                  >
                    {status === "sending" ? "A Enviar..." : "Enviar Mensagem →"}
                  </button>
                  <p style={{ color: "rgba(255,255,255,0.3)", fontSize: 12 }}>
                    * Campos obrigatórios
                  </p>
                </div>

              </div>
            </form>
          )}

          <div className="mt-12 pt-8 border-t border-white/5">
            <p style={{ color: "rgba(255,255,255,0.25)", fontSize: 12, lineHeight: 1.8 }}>
              Para questões urgentes relacionadas com jogo compulsivo, contacte o{" "}
              <a href="https://www.srij.turismodeportugal.pt/pt/sos-jogadores/autoexclusao-e-proibicao" target="_blank" rel="noopener noreferrer" className="text-amber-400 hover:underline">SRIJ</a>
              {" "}ou o{" "}
              <a href="https://www.icad.pt/ImageContent/Index/21?languageId=0" target="_blank" rel="noopener noreferrer" className="text-amber-400 hover:underline">ICAD</a>.
            </p>
          </div>

        </div>
      </main>
      <Footer />

      <div style={{ background: "#04040a", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <div className="w-full py-3 text-center" style={{ paddingLeft: "clamp(20px, 6vw, 100px)", paddingRight: "clamp(20px, 6vw, 100px)" }}>
          <p className="text-white/25 text-xs">18+ | Jogo Responsável | <a href="https://www.srij.turismodeportugal.pt/pt/sos-jogadores/autoexclusao-e-proibicao" target="_blank" rel="noopener noreferrer" className="text-amber-500/50 hover:text-amber-400 transition-colors">SRIJ Licenciado</a></p>
        </div>
      </div>
    </>
  );
}
