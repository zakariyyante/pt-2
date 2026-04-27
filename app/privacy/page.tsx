import type { Metadata } from "next";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Política de Privacidade | MelhoresCasinoPT – Melhores Casinos Online Portugal 2026 | SRIJ",
  description: "Política de privacidade do MelhoresCasinoPT. Saiba como recolhemos, utilizamos e protegemos os seus dados pessoais em conformidade com o RGPD.",
  alternates: { canonical: "/privacy" },
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  const year = new Date().getFullYear();

  return (
    <>
      <Header />
      <main className="min-h-screen" style={{ background: "#06090f", paddingTop: "clamp(40px,5vw,80px)", paddingBottom: "clamp(40px,5vw,80px)" }}>
        <div style={{ maxWidth: 820, margin: "0 auto", paddingLeft: "clamp(20px, 6vw, 80px)", paddingRight: "clamp(20px, 6vw, 80px)" }}>
          <nav className="mb-8 text-sm text-white/35" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-amber-400 transition-colors">Início</Link>
            <span className="mx-2">/</span>
            <span className="text-white/60">Política de Privacidade</span>
          </nav>

          <article>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-2">
              <span className="vd-gold-text">Política de</span> Privacidade
            </h1>
            <p className="text-white/35 text-sm mb-10">Última actualização: 1 de Janeiro de {year}</p>

            <div className="space-y-8 text-white/55 leading-relaxed">

              <section>
                <h2 className="text-xl font-bold text-white mb-3 border-b pb-2" style={{ borderColor: "rgba(244,185,66,0.15)" }}>1. Introdução</h2>
                <p>O <strong className="text-amber-400">MelhoresCasinoPT</strong> respeita a sua privacidade e está empenhado em proteger os seus dados pessoais. Esta Política de Privacidade explica como recolhemos, utilizamos, divulgamos e protegemos as informações quando visita o nosso website.</p>
                <p className="mt-3">Ao aceder ao nosso site, aceita as práticas descritas nesta política.</p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white mb-3 border-b pb-2" style={{ borderColor: "rgba(244,185,66,0.15)" }}>2. Responsável pelo Tratamento</h2>
                <p>O responsável pelo tratamento dos dados pessoais recolhidos através do website <strong>MelhoresCasinoPT</strong> é o MelhoresCasinoPT. Para qualquer questão relacionada com privacidade, pode contactar-nos através do endereço de e-mail disponível na secção de contactos.</p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white mb-3 border-b pb-2" style={{ borderColor: "rgba(244,185,66,0.15)" }}>3. Dados que Recolhemos</h2>
                <p className="mb-3">Podemos recolher os seguintes tipos de informação:</p>
                <ul className="list-disc list-inside space-y-2 text-white/40 ml-2">
                  <li><strong className="text-white/60">Dados de utilização:</strong> endereço IP, tipo de browser, páginas visitadas, duração da visita, fonte de referência.</li>
                  <li><strong className="text-white/60">Dados de cookies:</strong> preferências, sessão e cookies de análise.</li>
                  <li><strong className="text-white/60">Dados de formulários:</strong> caso preencha formulários de contacto.</li>
                  <li><strong className="text-white/60">Dados de rastreio de afiliados:</strong> parâmetros UTM e gclid para fins de análise de marketing.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white mb-3 border-b pb-2" style={{ borderColor: "rgba(244,185,66,0.15)" }}>4. Como Utilizamos os seus Dados</h2>
                <p className="mb-3">Utilizamos as informações recolhidas para:</p>
                <ul className="list-disc list-inside space-y-2 text-white/40 ml-2">
                  <li>Melhorar o conteúdo e a funcionalidade do website;</li>
                  <li>Analisar tendências de utilização e desempenho do site;</li>
                  <li>Gerir parcerias de afiliados e comissões;</li>
                  <li>Responder a pedidos de contacto;</li>
                  <li>Cumprir obrigações legais.</li>
                </ul>
                <p className="mt-3">Não vendemos nem alugamos os seus dados pessoais a terceiros para fins de marketing.</p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white mb-3 border-b pb-2" style={{ borderColor: "rgba(244,185,66,0.15)" }}>5. Cookies</h2>
                <p className="mb-3">O nosso website utiliza cookies para melhorar a experiência do utilizador. Utilizamos:</p>
                <ul className="list-disc list-inside space-y-2 text-white/40 ml-2">
                  <li><strong className="text-white/60">Cookies essenciais:</strong> necessários para o funcionamento básico do site.</li>
                  <li><strong className="text-white/60">Cookies de análise:</strong> utilizamos o Vercel Analytics (dados anonimizados).</li>
                  <li><strong className="text-white/60">Cookies de afiliados:</strong> para rastrear cliques em links de parceiros.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white mb-3 border-b pb-2" style={{ borderColor: "rgba(244,185,66,0.15)" }}>6. Partilha de Dados com Terceiros</h2>
                <p className="mb-3">Podemos partilhar informações com:</p>
                <ul className="list-disc list-inside space-y-2 text-white/40 ml-2">
                  <li><strong className="text-white/60">Vercel:</strong> alojamento e analytics do website;</li>
                  <li><strong className="text-white/60">Operadores de casino parceiros:</strong> quando clica num link de afiliado;</li>
                  <li><strong className="text-white/60">Autoridades legais:</strong> quando exigido por lei.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white mb-3 border-b pb-2" style={{ borderColor: "rgba(244,185,66,0.15)" }}>7. Os seus Direitos (RGPD)</h2>
                <p className="mb-3">Ao abrigo do RGPD, tem o direito de:</p>
                <ul className="list-disc list-inside space-y-2 text-white/40 ml-2">
                  <li>Aceder aos seus dados pessoais;</li>
                  <li>Rectificar dados inexactos;</li>
                  <li>Solicitar a eliminação dos seus dados;</li>
                  <li>Opor-se ao tratamento dos seus dados;</li>
                  <li>Portabilidade dos dados;</li>
                  <li>Apresentar reclamação à CNPD (Comissão Nacional de Protecção de Dados).</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white mb-3 border-b pb-2" style={{ borderColor: "rgba(244,185,66,0.15)" }}>8. Segurança</h2>
                <p>Implementamos medidas de segurança técnicas e organizacionais para proteger os seus dados. O website utiliza ligação HTTPS encriptada.</p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white mb-3 border-b pb-2" style={{ borderColor: "rgba(244,185,66,0.15)" }}>9. Menores de Idade</h2>
                <p>O nosso website não se destina a menores de 18 anos. Não recolhemos conscientemente dados de menores.</p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white mb-3 border-b pb-2" style={{ borderColor: "rgba(244,185,66,0.15)" }}>10. Alterações a esta Política</h2>
                <p>Podemos actualizar esta Política periodicamente. Quaisquer alterações serão publicadas nesta página com a data de actualização.</p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white mb-3 border-b pb-2" style={{ borderColor: "rgba(244,185,66,0.15)" }}>11. Contacto</h2>
                <p>Para questões relacionadas com esta Política de Privacidade, contacte-nos através do website <strong>MelhoresCasinoPT</strong>.</p>
              </section>

            </div>

            <div className="mt-10 pt-6 border-t border-white/5">
              <Link href="/" className="text-amber-400 text-sm hover:underline">← Voltar ao Início</Link>
            </div>
          </article>
        </div>
      </main>
      <Footer />

      {/* Compliance bar */}
      <div style={{ background: "#03050a", borderTop: "1px solid rgba(244,185,66,0.08)" }}>
        <div className="max-w-5xl mx-auto px-4 py-3 text-center">
          <p className="text-white/25 text-xs">
            18+ | Jogo Responsável |{" "}
            <a href="https://www.srij.turismodeportugal.pt" target="_blank" rel="noopener noreferrer" className="text-amber-500/50 hover:text-amber-400 transition-colors">SRIJ Licenciado</a>
            {" | "}
            <a href="tel:1414" className="text-amber-500/50 hover:text-amber-400 transition-colors font-semibold">SOS Vício: 1414</a>
          </p>
        </div>
      </div>
    </>
  );
}
