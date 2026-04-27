import type { Metadata } from "next";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Sobre Nós | MelhoresCasinoPT – Melhores Casinos Online Portugal 2026",
  description: "Conheça a equipa por trás do MelhoresCasinoPT. Somos um serviço editorial independente especializado na análise de casinos online licenciados pelo SRIJ em Portugal.",
  alternates: { canonical: "/about" },
  robots: { index: true, follow: true },
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen" style={{ background: "#06090f", paddingTop: "clamp(40px,5vw,80px)", paddingBottom: "clamp(40px,5vw,80px)" }}>
        <div style={{ maxWidth: 820, margin: "0 auto", paddingLeft: "clamp(20px, 6vw, 80px)", paddingRight: "clamp(20px, 6vw, 80px)" }}>

          <nav className="mb-8 text-sm text-white/35" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-amber-400 transition-colors">Início</Link>
            <span className="mx-2">/</span>
            <span className="text-white/60">Sobre Nós</span>
          </nav>

          <article>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-2">
              <span className="vd-gold-text">Sobre</span> Nós
            </h1>
            <p className="text-white/35 text-sm mb-10">Serviço editorial independente desde 2024</p>

            <div className="space-y-10 text-white/55 leading-relaxed">

              <section>
                <h2 className="text-xl font-bold text-white mb-4">Quem Somos</h2>
                <p className="mb-4">
                  O <strong className="text-amber-400">melhorescasinopt.com</strong> é um serviço editorial de comparação independente especializado em casinos online licenciados pelo <strong className="text-white/75">SRIJ</strong> em Portugal. A nossa missão é ajudar os jogadores portugueses a tomar decisões informadas sobre onde jogar com segurança.
                </p>
                <p>
                  Somos uma terceira parte completamente independente. As nossas análises não são influenciadas pelos operadores de casino — avaliamos cada plataforma com base em critérios objectivos e verificáveis.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white mb-4">O Que Fazemos</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { icon: "🛡", title: "Verificamos Licenças", desc: "Confirmamos a licença SRIJ de cada operador antes de o apresentar no nosso website." },
                    { icon: "💰", title: "Testamos Bónus", desc: "A nossa equipa analisa os termos dos bónus, requisitos de apostas e limites de levantamento." },
                    { icon: "⚡", title: "Medimos Levantamentos", desc: "Testamos os tempos reais de levantamento via MB WAY, Multibanco e transferência bancária." },
                    { icon: "💬", title: "Avaliamos Suporte", desc: "Contactamos o suporte ao cliente de cada casino em português para avaliar qualidade e rapidez." },
                    { icon: "🎮", title: "Jogamos os Jogos", desc: "Testamos os jogos disponíveis, qualidade do software e experiência mobile em cada plataforma." },
                    { icon: "🔄", title: "Actualizamos Regularmente", desc: "As nossas análises são revistas mensalmente para garantir informação precisa e actual." },
                  ].map((item) => (
                    <div key={item.title} className="vd-feature-card p-5 flex gap-3">
                      <span className="text-xl flex-shrink-0 mt-0.5">{item.icon}</span>
                      <div>
                        <p className="text-white font-semibold text-sm mb-1">{item.title}</p>
                        <p className="text-white/40 text-xs leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white mb-4">A Nossa Promessa Editorial</h2>
                <p className="mb-4">
                  Embora possamos receber comissões de afiliado pelos registos efectuados através dos nossos links, <strong className="text-white/75">esta relação comercial não influencia as nossas classificações</strong>. Um casino com melhor desempenho real ficará sempre acima de um casino que pague comissões mais elevadas.
                </p>
                <p>
                  Para mais detalhes sobre o nosso modelo de negócio, consulte a nossa{" "}
                  <Link href="/disclaimer" className="text-amber-400 hover:underline">Declaração de Divulgação</Link>.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white mb-4">Jogo Responsável</h2>
                <p className="mb-4">
                  Acreditamos que o jogo deve ser uma forma de entretenimento responsável. Por isso, só recomendamos casinos licenciados pelo SRIJ com ferramentas robustas de jogo responsável — limites de depósito, auto-exclusão e acesso a ajuda profissional.
                </p>
                <div className="flex flex-wrap gap-3">
                  <a href="https://www.srij.turismodeportugal.pt/pt/sos-jogadores/autoexclusao-e-proibicao" target="_blank" rel="noopener noreferrer"
                    className="vd-trust-pill text-xs">🛡 Auto-Exclusão SRIJ</a>
                  <a href="https://www.icad.pt/ImageContent/Index/21?languageId=0" target="_blank" rel="noopener noreferrer"
                    className="vd-trust-pill text-xs">💙 ICAD</a>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white mb-4">Fale Connosco</h2>
                <p className="mb-4">
                  Tem sugestões, quer reportar informações incorrectas ou está interessado em parceria? Estamos disponíveis para o ouvir.
                </p>
                <Link href="/contact"
                  className="vd-btn-gold vd-btn-shine inline-flex"
                  style={{ padding: "13px 32px", borderRadius: 999, fontSize: 14, fontWeight: 800 }}>
                  Enviar Mensagem →
                </Link>
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
