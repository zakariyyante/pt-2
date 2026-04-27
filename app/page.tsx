import Header from "./components/Header";
import Footer from "./components/Footer";
import MobileCasinoModal from "./components/MobileCasinoModal";
import DesktopCasinoCard from "./components/DesktopCasinoCard";
import { regularCasinos, mobileCasinos } from "./data/casinos";

export default function HomePage() {
  const year = 2026;

  const faqs = [
    {
      q: "Os casinos listados são legais em Portugal?",
      a: "Sim. Todos os casinos que recomendamos possuem licença de exploração emitida pelo SRIJ (Serviço de Regulação e Inspeção de Jogos), o regulador oficial de jogos online em Portugal. Pode verificar a lista oficial em srij.turismodeportugal.pt.",
    },
    {
      q: "Como ganham dinheiro se são independentes?",
      a: "Podemos receber comissão de afiliado quando se regista através dos nossos links. Esta relação comercial não influencia as nossas classificações — casinos com melhor desempenho real ficam no topo, independentemente das comissões.",
    },
    {
      q: "Qual é a idade mínima para jogar em casinos online em Portugal?",
      a: "A idade mínima legal para jogar em Portugal é 18 anos. Todos os operadores licenciados pelo SRIJ são obrigados a verificar a identidade dos seus utilizadores antes de permitir depósitos.",
    },
    {
      q: "Como posso excluir-me de casinos online em Portugal?",
      a: "Pode inscrever-se no SISAL (Sistema de Interdição de Acesso ao Jogo) através do portal sisal.srij.pt. Este sistema permite excluir-se de todos os operadores licenciados pelo SRIJ de forma centralizada.",
    },
    {
      q: "Quais são os métodos de pagamento disponíveis em Portugal?",
      a: "Os casinos licenciados pelo SRIJ aceitam normalmente MB WAY, Multibanco, transferência bancária, cartões Visa/Mastercard e carteiras digitais como PayPal e Skrill. Os depósitos e levantamentos são processados em euros (€).",
    },
    {
      q: "Com que frequência actualizam as avaliações?",
      a: "As nossas avaliações são revistas mensalmente. Monitorizamos alterações de bónus, termos e condições, e qualidade de suporte ao cliente. A data de última actualização aparece em cada casino.",
    },
  ];

  return (
    <>
      <MobileCasinoModal casinos={mobileCasinos} />
      <Header />

      <main style={{ background: "#09090f" }}>

        {/* ══════════ HERO ══════════ */}
        <section
          className="relative overflow-hidden"
          style={{ background: "linear-gradient(135deg, #1a0505 0%, #200a0a 25%, #1a0d14 55%, #0d0d22 100%)", minHeight: 240 }}
        >
          {/* Casino atmosphere — roulette glows on sides */}
          <div className="pointer-events-none absolute inset-0" aria-hidden="true">
            <div style={{ position: "absolute", left: -80, top: "50%", transform: "translateY(-50%)", width: 320, height: 320, borderRadius: "50%", background: "radial-gradient(circle, rgba(180,20,20,0.35) 0%, transparent 70%)", filter: "blur(30px)" }} />
            <div style={{ position: "absolute", right: -80, top: "50%", transform: "translateY(-50%)", width: 320, height: 320, borderRadius: "50%", background: "radial-gradient(circle, rgba(180,20,20,0.28) 0%, transparent 70%)", filter: "blur(30px)" }} />
            <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, backgroundImage: "radial-gradient(rgba(255,255,255,0.03) 1px, transparent 1px)", backgroundSize: "28px 28px", opacity: 0.6 }} />
          </div>

          {/* Disclaimer top-right */}
          <div className="relative w-full pt-3 flex justify-end" style={{ paddingLeft: "clamp(20px, 6vw, 100px)", paddingRight: "clamp(20px, 6vw, 100px)" }}>
            <p style={{ color: "rgba(255,255,255,0.3)", fontSize: "10px" }}>
              Divulgação do Anunciante &nbsp;|&nbsp; 18+ T&amp;C Aplicam-se &nbsp;|&nbsp; Jogue com Responsabilidade
            </p>
          </div>

          {/* Hero text — LEFT aligned */}
          <div className="relative w-full pt-5 pb-10" style={{ paddingLeft: "clamp(20px, 6vw, 100px)", paddingRight: "clamp(20px, 6vw, 100px)" }}>

            {/* H1 — left aligned */}
            <h1 style={{ color: "#ffffff", fontSize: "clamp(24px, 4.5vw, 52px)", fontWeight: 900, lineHeight: 1.15, letterSpacing: "-0.02em", marginBottom: 14 }}>
              OS MELHORES{" "}
              <span className="vd-gold-text">CASINOS ONLINE</span>
              {" "}| {year}
            </h1>

            {/* Responsible gambling */}
            <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "clamp(12px, 1.4vw, 15px)", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 20 }}>
              SEJA RESPONSÁVEL, JOGUE COM MODERAÇÃO
            </p>

            {/* Trust chips — horizontally scrollable */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {[
                { icon: "🛡", label: "Licenciado SRIJ" },
                { icon: "★",  label: "Análise Editorial" },
                { icon: "⚡", label: "Levantamento Rápido" },
                { icon: "✓",  label: "100% Independente" },
              ].map((chip) => (
                <span key={chip.label} className="vd-trust-pill">{chip.icon} {chip.label}</span>
              ))}
            </div>

          </div>
        </section>

        {/* ══════════ CASINO CARDS ══════════ */}
        <section id="casinos" style={{ background: "#09090f", paddingTop: "clamp(32px, 4vw, 56px)", paddingBottom: "clamp(32px, 4vw, 56px)" }}>
          <div className="w-full" style={{ paddingLeft: "clamp(20px, 6vw, 100px)", paddingRight: "clamp(20px, 6vw, 100px)" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "clamp(16px, 2vw, 28px)" }}>
              {regularCasinos.map((casino, i) => (
                <DesktopCasinoCard key={casino.id} casino={casino} rank={i + 1} />
              ))}
            </div>

            {/* Affiliate disclaimer */}
            <div className="mt-6 rounded-lg p-4" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}>
              <p className="text-white/30 text-xs leading-relaxed">
                <strong className="text-white/45">Aviso de Afiliado:</strong> MelhoresCasinoPT é um serviço editorial de comparação independente. Podemos receber comissão quando se regista através dos nossos links — isto não influencia as nossas classificações. Verifique sempre a licença{" "}
                <a href="https://www.srij.turismodeportugal.pt" target="_blank" rel="noopener noreferrer" className="text-amber-500/70 hover:text-amber-400 underline transition-colors">SRIJ</a>
                {" "}antes de depositar. O jogo pode ser viciante; aposte apenas o que pode perder. 18+.{" "}
                <a href="https://www.jogoresponsavel.pt" target="_blank" rel="noopener noreferrer" className="text-amber-500/70 hover:text-amber-400 underline transition-colors">JogoResponsavel.pt</a>
              </p>
            </div>

            {/* Stats bar — under brands */}
            <div style={{ marginTop: "24px", display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1px", borderRadius: "12px", overflow: "hidden", border: "1px solid rgba(255,255,255,0.08)" }}>
              {[
                { value: "25+",  label: "Casinos Analisados" },
                { value: "100%", label: "Licença SRIJ" },
                { value: "2026", label: "Atualizado" },
                { value: "24/7", label: "Suporte" },
              ].map((s, i) => (
                <div key={s.label} style={{ textAlign: "center", padding: "18px 12px", background: i % 2 === 0 ? "rgba(255,255,255,0.04)" : "rgba(255,255,255,0.02)" }}>
                  <div className="vd-gold-text" style={{ fontSize: "clamp(22px, 2.5vw, 32px)", fontWeight: 900, lineHeight: 1 }}>{s.value}</div>
                  <div style={{ color: "rgba(255,255,255,0.4)", fontSize: "12px", marginTop: "6px", whiteSpace: "nowrap" }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════ INFORMATIONAL CONTENT ══════════ */}
        <section id="sobre-nos" style={{ background: "#09090f", paddingTop: "clamp(48px, 6vw, 96px)", paddingBottom: "clamp(48px, 6vw, 96px)" }}>
          <div className="w-full" style={{ paddingLeft: "clamp(20px, 6vw, 100px)", paddingRight: "clamp(20px, 6vw, 100px)" }}>

            <h2 style={{ color: "#fff", fontWeight: 900, fontSize: "clamp(24px, 3vw, 40px)", marginBottom: 12 }}>
              Melhores Casinos Online em <span className="vd-gold-text">Portugal</span>
            </h2>
            <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "clamp(14px, 1.3vw, 16px)", lineHeight: 1.75, maxWidth: 700, marginBottom: "clamp(36px, 4vw, 60px)" }}>
              Procuras os <strong style={{ color: "rgba(255,255,255,0.75)" }}>melhores casinos online em Portugal</strong>? Comparamos sites licenciados pelo <strong style={{ color: "rgba(255,255,255,0.75)" }}>SRIJ</strong>, bónus, métodos de pagamento e velocidade de levantamentos — para escolheres com total segurança.
            </p>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "clamp(16px, 2vw, 28px)", marginBottom: "clamp(48px, 6vw, 80px)" }}>
              {[
                {
                  icon: "🎁",
                  title: "Tipos de Bónus",
                  items: ["Bónus de boas-vindas", "Rodadas grátis", "Cashback semanal", "Bónus sem depósito (raro)", "Promoções regulares"],
                },
                {
                  icon: "🎮",
                  title: "Jogos Disponíveis",
                  items: ["Slots: clássicas, vídeo, jackpots progressivos", "Mesa: blackjack, roleta, baccarat, póquer", "Ao vivo: dealers reais, game shows"],
                },
                {
                  icon: "💳",
                  title: "Pagamentos em Portugal",
                  items: ["Depósito: MB WAY, Multibanco, Visa/Mastercard", "Levantamento: carteiras digitais, transferência", "Prazo: normalmente 24h a 3 dias úteis"],
                },
              ].map((card) => (
                <div key={card.title} className="vd-feature-card" style={{ padding: "clamp(20px, 2.5vw, 36px)" }}>
                  <div style={{ fontSize: 32, marginBottom: 16 }}>{card.icon}</div>
                  <h3 style={{ color: "#fff", fontWeight: 700, fontSize: "clamp(15px, 1.3vw, 18px)", marginBottom: 16 }}>{card.title}</h3>
                  <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
                    {card.items.map((item) => (
                      <li key={item} style={{ color: "rgba(255,255,255,0.45)", fontSize: "clamp(13px, 1.1vw, 14px)", lineHeight: 1.5, display: "flex", gap: 8 }}>
                        <span style={{ color: "#f5b942", flexShrink: 0 }}>›</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* How we rate */}
            <div id="como-avaliamos" style={{ paddingTop: "clamp(12px, 2vw, 24px)" }}>
              <div className="vd-eyebrow" style={{ marginBottom: 16 }}>📋 Metodologia</div>
              <h2 style={{ color: "#fff", fontWeight: 900, fontSize: "clamp(22px, 2.5vw, 36px)", marginBottom: "clamp(24px, 3vw, 40px)" }}>
                Como Avaliamos os <span className="vd-gold-text">Casinos</span>
              </h2>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "clamp(14px, 2vw, 24px)" }}>
                {[
                  { icon: "🛡", title: "Licença SRIJ", desc: "Verificamos a licença de cada operador no portal oficial do SRIJ. Sem licença válida, não aparece na lista." },
                  { icon: "💰", title: "Bónus Testados", desc: "Testamos os bónus, requisitos de apostas (wagering), limites de levantamento e prazos de validade." },
                  { icon: "⚡", title: "Velocidade de Levantamento", desc: "Medimos tempos reais via MB WAY, Multibanco e transferência bancária em Portugal." },
                  { icon: "🎮", title: "Qualidade dos Jogos", desc: "Avaliamos variedade de slots, casino ao vivo, fornecedores e experiência mobile." },
                  { icon: "💬", title: "Suporte ao Cliente", desc: "Testamos o suporte em português via chat, email e telefone, medindo tempos de resposta." },
                  { icon: "🔒", title: "Segurança & RGPD", desc: "Verificamos SSL, políticas de privacidade conformes com RGPD e protecção de dados pessoais." },
                ].map((item) => (
                  <div key={item.title} className="vd-feature-card" style={{ padding: "clamp(18px, 2vw, 28px)", display: "flex", gap: 16 }}>
                    <span style={{ fontSize: 24, flexShrink: 0 }}>{item.icon}</span>
                    <div>
                      <p style={{ color: "#fff", fontWeight: 700, fontSize: "clamp(13px, 1.1vw, 15px)", marginBottom: 8 }}>{item.title}</p>
                      <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "clamp(12px, 1vw, 13px)", lineHeight: 1.65 }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* ══════════ FAQ ══════════ */}
        <section style={{ background: "#0d0d1f", paddingTop: "clamp(48px, 6vw, 96px)", paddingBottom: "clamp(48px, 6vw, 96px)" }}>
          <div className="w-full" style={{ paddingLeft: "clamp(20px, 6vw, 100px)", paddingRight: "clamp(20px, 6vw, 100px)" }}>
            <div style={{ textAlign: "center", marginBottom: "clamp(32px, 4vw, 56px)" }}>
              <div className="vd-eyebrow" style={{ display: "inline-flex", marginBottom: 16 }}>❓ FAQ</div>
              <h2 style={{ color: "#fff", fontWeight: 900, fontSize: "clamp(24px, 3vw, 40px)" }}>
                Perguntas <span className="vd-gold-text">Frequentes</span>
              </h2>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12, maxWidth: 860, margin: "0 auto" }}>
              {faqs.map((faq, i) => (
                <details key={i} className="vd-card group">
                  <summary className="flex items-center justify-between gap-4 p-5 cursor-pointer list-none select-none" style={{ padding: "clamp(16px, 2vw, 24px)" }}>
                    <span style={{ color: "#fff", fontWeight: 600, fontSize: "clamp(13px, 1.2vw, 15px)", lineHeight: 1.4 }}>{faq.q}</span>
                    <span className="text-amber-500 flex-shrink-0 text-lg font-bold group-open:rotate-45 transition-transform duration-200">+</span>
                  </summary>
                  <div style={{ padding: "0 clamp(16px, 2vw, 24px) clamp(16px, 2vw, 24px)" }}>
                    <div className="vd-rule" style={{ marginBottom: 16 }} />
                    <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "clamp(13px, 1.1vw, 14px)", lineHeight: 1.75 }}>{faq.a}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

      </main>

      <Footer />

      {/* COMPLIANCE BAR — static HTML, no JS */}
      <div style={{ background: "#04040a", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <div className="w-full py-3 text-center" style={{ paddingLeft: "clamp(20px, 6vw, 100px)", paddingRight: "clamp(20px, 6vw, 100px)" }}>
          <p className="text-white/25 text-xs leading-relaxed">
            18+ | Jogo Responsável |{" "}
            <a href="https://www.srij.turismodeportugal.pt" target="_blank" rel="noopener noreferrer" className="text-amber-500/50 hover:text-amber-400 transition-colors">SRIJ Licenciado</a>
            {" | "}
            <a href="tel:1414" className="text-amber-500/50 hover:text-amber-400 transition-colors font-semibold">SOS Vício: 1414</a>
            {" | "}
            <a href="https://www.jogoresponsavel.pt" target="_blank" rel="noopener noreferrer" className="text-amber-500/50 hover:text-amber-400 transition-colors">JogoResponsavel.pt</a>
            {" | "}
            <a href="https://www.sisal.srij.pt" target="_blank" rel="noopener noreferrer" className="text-amber-500/50 hover:text-amber-400 transition-colors">SISAL Auto-Exclusão</a>
          </p>
        </div>
      </div>
    </>
  );
}
