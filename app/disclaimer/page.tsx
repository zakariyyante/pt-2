import type { Metadata } from "next";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Declaração de Divulgação | MelhoresCasinoPT",
  description: "Declaração de divulgação e política de afiliados do MelhoresCasinoPT. Saiba como funciona o nosso modelo de negócio e as nossas práticas editoriais independentes.",
  alternates: { canonical: "/disclaimer" },
  robots: { index: true, follow: true },
};

export default function DisclaimerPage() {
  const year = new Date().getFullYear();

  return (
    <>
      <Header />
      <main className="min-h-screen" style={{ background: "#06090f", paddingTop: "clamp(40px,5vw,80px)", paddingBottom: "clamp(40px,5vw,80px)" }}>
        <div style={{ maxWidth: 820, margin: "0 auto", paddingLeft: "clamp(20px, 6vw, 80px)", paddingRight: "clamp(20px, 6vw, 80px)" }}>

          <nav className="mb-8 text-sm text-white/35" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-amber-400 transition-colors">Início</Link>
            <span className="mx-2">/</span>
            <span className="text-white/60">Declaração de Divulgação</span>
          </nav>

          <article>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-2">
              <span className="vd-gold-text">Declaração de</span> Divulgação
            </h1>
            <p className="text-white/35 text-sm mb-10">Última actualização: 1 de Janeiro de {year}</p>

            {/* Highlight box */}
            <div style={{ background: "rgba(244,185,66,0.08)", border: "1px solid rgba(244,185,66,0.25)", borderRadius: 12, padding: "clamp(16px,2vw,28px)", marginBottom: 40 }}>
              <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "clamp(13px,1.2vw,15px)", lineHeight: 1.8 }}>
                <strong style={{ color: "#f4b942" }}>melhorescasinopt.com</strong> é um serviço editorial de comparação independente suportado por comissões de referência dos operadores de casino apresentados neste website. A compensação recebida pode influenciar a ordenação e a selecção dos operadores apresentados, mas <strong style={{ color: "rgba(255,255,255,0.9)" }}>não influencia as nossas avaliações editoriais independentes</strong>. Verificamos sempre a licença SRIJ antes de apresentar qualquer operador.
              </p>
            </div>

            <div className="space-y-8 text-white/55 leading-relaxed">

              <section>
                <h2 className="text-xl font-bold text-white mb-3 border-b pb-2" style={{ borderColor: "rgba(244,185,66,0.15)" }}>1. Quem Somos</h2>
                <p>
                  <strong className="text-amber-400">melhorescasinopt.com</strong> é uma terceira parte totalmente independente que oferece análises, comparações, informação e recomendações sobre casinos online licenciados em Portugal. Todas as opiniões expressas são exclusivamente nossas e de modo algum representam as marcas ou operadores apresentados nestas páginas.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white mb-3 border-b pb-2" style={{ borderColor: "rgba(244,185,66,0.15)" }}>2. Modelo de Negócio — Links de Afiliados</h2>
                <p className="mb-3">
                  Quando clica num link de casino neste website e efectua um registo ou depósito, podemos receber uma comissão de afiliado do operador em questão. Esta é a principal forma como financiamos o nosso serviço editorial gratuito.
                </p>
                <p className="mb-3">
                  <strong className="text-white/75">Esta relação comercial não influencia as nossas classificações.</strong> Os casinos com melhor desempenho real (licença, bónus, levantamentos, suporte) ficam no topo, independentemente do valor das comissões.
                </p>
                <p>
                  Todos os factos apresentados neste website podem ser verificados. Os termos e condições específicos dos bónus encontram-se nos sites de cada operador e devem ser revistos antes de qualquer depósito.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white mb-3 border-b pb-2" style={{ borderColor: "rgba(244,185,66,0.15)" }}>3. Licenciamento — SRIJ</h2>
                <p className="mb-3">
                  Apresentamos exclusivamente casinos licenciados pelo <strong className="text-white/75">SRIJ — Serviço de Regulação e Inspeção de Jogos</strong> (Turismo de Portugal, I.P.), o regulador oficial de jogos online em Portugal.
                </p>
                <p>
                  Para verificar a licença de um operador, consulte o portal oficial:{" "}
                  <a href="https://www.srij.turismodeportugal.pt" target="_blank" rel="noopener noreferrer" className="text-amber-400 hover:underline">srij.turismodeportugal.pt</a>. Recomendamos sempre que o faça antes de efectuar qualquer depósito.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white mb-3 border-b pb-2" style={{ borderColor: "rgba(244,185,66,0.15)" }}>4. Exactidão das Informações</h2>
                <p className="mb-3">
                  Esforçamo-nos por manter as informações actualizadas e precisas. No entanto, os bónus, termos e condições dos operadores podem alterar-se sem aviso prévio. Recomendamos sempre que verifique os termos actuais directamente no website do operador antes de efectuar qualquer depósito.
                </p>
                <p>
                  O <strong className="text-white/75">melhorescasinopt.com</strong> não garante a exactidão, completude ou actualidade das informações fornecidas e não é responsável por quaisquer perdas resultantes da utilização deste website ou da participação em jogos de azar.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white mb-3 border-b pb-2" style={{ borderColor: "rgba(244,185,66,0.15)" }}>5. Metodologia de Classificação</h2>
                <p className="mb-3">Para reunir as classificações dos casinos apresentados, recolhemos dados de várias fontes, incluindo:</p>
                <ul className="list-disc list-inside space-y-2 text-white/40 ml-2">
                  <li>Verificação directa da licença SRIJ;</li>
                  <li>Análise dos termos dos bónus e requisitos de apostas;</li>
                  <li>Teste dos métodos de pagamento e tempos de levantamento;</li>
                  <li>Avaliação da qualidade do suporte ao cliente em português;</li>
                  <li>Avaliações e comentários dos utilizadores;</li>
                  <li>Algoritmos de classificação internos.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white mb-3 border-b pb-2" style={{ borderColor: "rgba(244,185,66,0.15)" }}>6. Jogo Responsável</h2>
                <p className="mb-3">
                  O jogo deve ser uma forma de entretenimento. Se sentir que o jogo está a afectar negativamente a sua vida, procure ajuda imediatamente.
                </p>
                <ul className="list-disc list-inside space-y-2 text-white/40 ml-2">
                  <li>Auto-exclusão SRIJ: <a href="https://www.srij.turismodeportugal.pt/pt/sos-jogadores/autoexclusao-e-proibicao" target="_blank" rel="noopener noreferrer" className="text-amber-400 hover:underline">srij.turismodeportugal.pt</a></li>
                  <li>ICAD — Comportamentos Aditivos: <a href="https://www.icad.pt/ImageContent/Index/21?languageId=0" target="_blank" rel="noopener noreferrer" className="text-amber-400 hover:underline">icad.pt</a></li>
                </ul>
                <p className="mt-3 font-semibold text-white/70">Apenas para maiores de 18 anos. Proibido jogar a menores.</p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white mb-3 border-b pb-2" style={{ borderColor: "rgba(244,185,66,0.15)" }}>7. Contacto</h2>
                <p>
                  Para questões relacionadas com esta Declaração de Divulgação, utilize o nosso{" "}
                  <Link href="/contact" className="text-amber-400 hover:underline">formulário de contacto</Link>.
                </p>
              </section>

            </div>

            <div className="mt-10 pt-6 border-t border-white/5">
              <Link href="/" className="text-amber-400 text-sm hover:underline">← Voltar ao Início</Link>
            </div>
          </article>
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
