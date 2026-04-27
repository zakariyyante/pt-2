import type { Metadata } from "next";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Termos de Serviço | MelhoresCasinoPT – Melhores Casinos Online Portugal 2026 | SRIJ",
  description: "Termos de serviço do MelhoresCasinoPT. Leia os termos e condições de utilização do nosso website de comparação de casinos online em Portugal.",
  alternates: { canonical: "/terms" },
  robots: { index: true, follow: true },
};

export default function TermsPage() {
  const year = new Date().getFullYear();

  return (
    <>
      <Header />
      <main className="min-h-screen" style={{ background: "#06090f", paddingTop: "clamp(40px,5vw,80px)", paddingBottom: "clamp(40px,5vw,80px)" }}>
        <div style={{ maxWidth: 820, margin: "0 auto", paddingLeft: "clamp(20px, 6vw, 80px)", paddingRight: "clamp(20px, 6vw, 80px)" }}>
          <nav className="mb-8 text-sm text-white/35" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-amber-400 transition-colors">Início</Link>
            <span className="mx-2">/</span>
            <span className="text-white/60">Termos de Serviço</span>
          </nav>

          <article>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-2">
              <span className="vd-gold-text">Termos de</span> Serviço
            </h1>
            <p className="text-white/35 text-sm mb-10">Última actualização: 1 de Janeiro de {year}</p>

            <div className="space-y-8 text-white/55 leading-relaxed">

              <section>
                <h2 className="text-xl font-bold text-white mb-3 border-b pb-2" style={{ borderColor: "rgba(244,185,66,0.15)" }}>1. Aceitação dos Termos</h2>
                <p>Ao aceder e utilizar o website <strong className="text-amber-400">MelhoresCasinoPT</strong>, declara que leu, compreendeu e aceita integralmente estes Termos de Serviço. Se não concordar com qualquer parte destes termos, não deverá utilizar o Website.</p>
                <p className="mt-3">O MelhoresCasinoPT é operado para fins informativos e de comparação. Não somos um operador de jogo online.</p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white mb-3 border-b pb-2" style={{ borderColor: "rgba(244,185,66,0.15)" }}>2. Natureza do Serviço</h2>
                <p className="mb-3">O MelhoresCasinoPT é um website de comparação e informação que:</p>
                <ul className="list-disc list-inside space-y-2 text-white/40 ml-2">
                  <li>Compara e avalia casinos online licenciados pelo SRIJ em Portugal;</li>
                  <li>Fornece informações sobre bónus, promoções e características dos operadores;</li>
                  <li>Inclui links de afiliados para operadores de casino parceiros;</li>
                  <li>Promove o jogo responsável e a utilização de ferramentas de auto-exclusão.</li>
                </ul>
                <p className="mt-3"><strong className="text-amber-400">Não somos responsáveis</strong> pelas acções, promoções ou práticas dos operadores de casino listados no nosso website.</p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white mb-3 border-b pb-2" style={{ borderColor: "rgba(244,185,66,0.15)" }}>3. Elegibilidade</h2>
                <p className="mb-3">Para utilizar este Website, deve:</p>
                <ul className="list-disc list-inside space-y-2 text-white/40 ml-2">
                  <li>Ter pelo menos <strong className="text-white/70">18 anos de idade</strong>;</li>
                  <li>Residir num país onde o jogo online é legal;</li>
                  <li>Não estar inscrito no SISAL (Sistema de Interdição de Acesso ao Jogo);</li>
                  <li>Cumprir as leis aplicáveis na sua jurisdição.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white mb-3 border-b pb-2" style={{ borderColor: "rgba(244,185,66,0.15)" }}>4. Links de Afiliados e Divulgação Comercial</h2>
                <p>O MelhoresCasinoPT participa em programas de afiliados de casinos online. Podemos receber uma comissão quando clica em links presentes no nosso site e efectua um registo ou depósito num casino parceiro. Esta relação comercial <strong className="text-white/70">não influencia</strong> as nossas avaliações independentes.</p>
                <p className="mt-3">Todos os links de afiliados são claramente identificáveis como tal. O facto de recebermos comissão não implica endosso do operador.</p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white mb-3 border-b pb-2" style={{ borderColor: "rgba(244,185,66,0.15)" }}>5. Exactidão das Informações</h2>
                <p>Esforçamo-nos por manter as informações actualizadas e precisas. No entanto, os bónus, termos e condições dos operadores podem alterar-se sem aviso prévio. <strong className="text-amber-400">Recomendamos sempre</strong> que verifique os termos actuais directamente no website do operador antes de efectuar qualquer depósito.</p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white mb-3 border-b pb-2" style={{ borderColor: "rgba(244,185,66,0.15)" }}>6. Jogo Responsável</h2>
                <p className="mb-3">O MelhoresCasinoPT apoia activamente o jogo responsável. Recomendamos:</p>
                <ul className="list-disc list-inside space-y-2 text-white/40 ml-2">
                  <li>Estabelecer limites de depósito e perda;</li>
                  <li>Utilizar ferramentas de auto-exclusão via <a href="https://www.sisal.srij.pt" target="_blank" rel="noopener noreferrer" className="text-amber-400 hover:underline">SISAL</a>;</li>
                  <li>Contactar a linha SOS Vício: <a href="tel:1414" className="text-amber-400 hover:underline font-semibold">1414</a> (gratuita);</li>
                  <li>Visitar <a href="https://www.jogoresponsavel.pt" target="_blank" rel="noopener noreferrer" className="text-amber-400 hover:underline">JogoResponsavel.pt</a> para obter ajuda.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white mb-3 border-b pb-2" style={{ borderColor: "rgba(244,185,66,0.15)" }}>7. Propriedade Intelectual</h2>
                <p>Todo o conteúdo do Website — incluindo textos, logótipos, imagens, código e design — é propriedade do MelhoresCasinoPT ou dos seus licenciantes. É proibida a reprodução sem autorização prévia por escrito.</p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white mb-3 border-b pb-2" style={{ borderColor: "rgba(244,185,66,0.15)" }}>8. Limitação de Responsabilidade</h2>
                <p>O MelhoresCasinoPT e os seus colaboradores não são responsáveis por quaisquer perdas resultantes da utilização do Website ou da participação em jogos de azar junto dos operadores listados.</p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white mb-3 border-b pb-2" style={{ borderColor: "rgba(244,185,66,0.15)" }}>9. Lei Aplicável</h2>
                <p>Estes Termos de Serviço são regidos pela lei portuguesa. Qualquer litígio será submetido à jurisdição exclusiva dos tribunais portugueses competentes.</p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white mb-3 border-b pb-2" style={{ borderColor: "rgba(244,185,66,0.15)" }}>10. Alterações aos Termos</h2>
                <p>Reservamo-nos o direito de alterar estes Termos de Serviço a qualquer momento. A continuação da utilização do Website após tais alterações constitui a sua aceitação dos novos termos.</p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white mb-3 border-b pb-2" style={{ borderColor: "rgba(244,185,66,0.15)" }}>11. Contacto</h2>
                <p>Para questões relacionadas com estes Termos de Serviço, contacte-nos através do website <strong>MelhoresCasinoPT</strong>.</p>
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
