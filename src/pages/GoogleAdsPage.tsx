import React, { useState } from 'react';
import { GOOGLE_ADS_STAGES, GOOGLE_ADS_BOUNDARIES, GOOGLE_ADS_FAQS, getWhatsAppLink } from '../data/siteData';
import { PageHero } from '../components/common/PageHero';
import { SEOHead } from '../components/common/SEOHead';
import { Check, X, ArrowRight, HelpCircle, ChevronDown, ChevronUp, AlertCircle, Target, ShieldCheck, Zap } from 'lucide-react';

export const GoogleAdsPage: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const scrollToStages = () => {
    const el = document.getElementById('etapas');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="bg-white">
      {/* Dynamic Route Metadata */}
      <SEOHead
        title="Google Ads: Configuração e Otimização de Campanhas | Auditoria SEO"
        description="Configure suas campanhas do Google Ads com uma estrutura profissional, segmentação estratégica e otimização inicial para aproveitar melhor seu investimento em anúncios."
        canonicalPath="/google-ads"
        ogType="website"
        ogImage="https://auditoriaseo.com.br/og-image.png"
      />

      {/* Reusable Hero matching exactly the Home visual identity and background */}
      <PageHero
        kicker="Google Ads para Negócios Locais"
        title={
          <>
            Estruturação profissional de campanhas.{' '}
            <span className="text-shimmer inline">
              Prontas para gerar contatos no WhatsApp.
            </span>
          </>
        }
        typewriterLabel="Foco em:"
        typewriterPhrases={[
          'Zero desperdício de verba.',
          'Pesquisas com real intenção de compra.',
          'Conta pronta sem mensalidade recorrente.',
        ]}
        subtitle="Configure sua conta do Google Ads do jeito certo desde o primeiro dia. Sem desperdício de verba com cliques curiosos e sem contratos de mensalidade recorrente."
        extraBanner={
          <div className="p-4 rounded-xl bg-blue-50/80 border border-blue-200/90 flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-[#1A73E8] shrink-0 mt-0.5" />
            <div className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              <strong className="font-semibold text-slate-900">Modelo de Entrega Pontual:</strong> Este serviço contempla a criação, estruturação, configuração inicial e otimização inicial da sua conta e campanhas.{' '}
              <span className="font-semibold text-[#174EA6]">Não cobramos gestão mensal recorrente.</span> A conta é 100% sua e fica pronta para veicular.
            </div>
          </div>
        }
        primaryCta={{
          label: 'Solicitar proposta no WhatsApp',
          href: getWhatsAppLink('Olá! Gostaria de conversar sobre a estruturação de campanhas no Google Ads para o meu negócio.'),
          isExternal: true,
        }}
        secondaryCta={{
          label: 'Conhecer as etapas',
          onClick: scrollToStages,
        }}
        trustBadges={[
          'Sem mensalidade recorrente de gestão',
          'A conta e os dados são 100% seus',
          'Segmentação cirúrgica com palavras negativas',
        ]}
      />

      {/* Service Explanation */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-xs font-semibold tracking-wider text-[#1A73E8] uppercase">
              O Problema e a Solução
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-2 mb-6">
              Por que a maioria das pequenas empresas perde dinheiro no Google Ads?
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-slate-600 leading-relaxed">
              <p>
                O Google Ads é a ferramenta de tráfego com maior intenção de compra do mundo. No entanto, sua interface padrão foi desenhada para incentivar configurações amplas que consomem o orçamento rapidamente com termos irrelevantes.
              </p>
              <p>
                Quando uma clínica, consultório ou prestador de serviço ativa anúncios sem uma lista sólida de palavras-chave negativas e sem segmentação cirúrgica, até 70% da verba é gasta com quem busca empregos, cursos ou serviços gratuitos.
              </p>
              <p className="font-medium text-slate-900">
                Nosso trabalho é blindar sua conta, configurar os termos exatos de alta intenção comercial e entregar uma estrutura enxuta e eficiente.
              </p>
            </div>
          </div>

          <div className="bg-slate-50 rounded-2xl p-8 sm:p-10 border border-slate-200/90 shadow-sm space-y-6">
            <h3 className="text-lg font-bold text-slate-900">
              O que uma conta bem estruturada proporciona:
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-slate-700">
                <Target className="w-5 h-5 text-[#1A73E8] shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-slate-900 font-semibold">Foco em Pesquisas Transacionais</strong>
                  Apareça apenas para quem está ativamente procurando contratar o serviço no seu raio de atendimento.
                </div>
              </li>
              <li className="flex items-start gap-3 text-sm text-slate-700">
                <ShieldCheck className="w-5 h-5 text-[#1A73E8] shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-slate-900 font-semibold">Blindagem com Palavras Negativas</strong>
                  Centenas de exclusões pré-configuradas para impedir que cliques indesejados consumam seu saldo.
                </div>
              </li>
              <li className="flex items-start gap-3 text-sm text-slate-700">
                <Zap className="w-5 h-5 text-[#1A73E8] shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-slate-900 font-semibold">Mensuração de Conversões</strong>
                  Rastreamento correto de cliques no WhatsApp para você saber exatamente quais palavras geram contatos.
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 4 Process Stages */}
      <section id="etapas" className="py-20 bg-slate-50 border-t border-b border-slate-200/80 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <span className="text-xs font-semibold tracking-wider text-[#1A73E8] uppercase">
              Etapas do Processo
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-2 mb-4">
              Como estruturamos sua campanha do zero ao ar
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              Um cronograma transparente dividido em quatro fases técnicas objetivas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {GOOGLE_ADS_STAGES.map((stage) => (
              <div
                key={stage.number}
                className="bg-white p-6 sm:p-8 rounded-xl border border-slate-200/90 shadow-sm"
              >
                <span className="font-mono text-2xl font-extrabold text-[#1A73E8] block mb-3">
                  {stage.number}
                </span>
                <h3 className="text-base font-bold text-slate-900 mb-2">
                  {stage.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {stage.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Scope Limits and Transparency (Critical requirement) */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-semibold tracking-wider text-[#1A73E8] uppercase">
            Clareza de Escopo
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-2 mb-4">
            O que está incluso e quais são os limites do serviço
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Acreditamos na honestidade comercial. Veja exatamente o que entregamos e o que fica sob responsabilidade do cliente.
          </p>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-sm divide-y divide-slate-100">
          {GOOGLE_ADS_BOUNDARIES.map((item, idx) => (
            <div key={idx} className="p-5 sm:p-6 flex items-start gap-4">
              {item.isIncluded ? (
                <div className="w-6 h-6 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-4 h-4" />
                </div>
              ) : (
                <div className="w-6 h-6 rounded-full bg-slate-100 text-slate-500 flex items-center justify-center shrink-0 mt-0.5">
                  <X className="w-4 h-4" />
                </div>
              )}
              <div className="text-sm sm:text-base text-slate-700 leading-relaxed">
                {item.text}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Google Ads FAQs */}
      <section className="py-20 bg-slate-50 border-t border-slate-200/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold tracking-wider text-[#1A73E8] uppercase">
              Dúvidas Frequentes
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-2 mb-3">
              Perguntas Frequentes sobre a Estruturação no Google Ads
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              Esclarecimentos fundamentais antes de iniciar a estruturação da sua conta.
            </p>
          </div>

          <div className="space-y-4">
            {GOOGLE_ADS_FAQS.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="border border-slate-200/90 rounded-xl overflow-hidden bg-white"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(idx)}
                    className="w-full py-4 px-6 text-left flex items-center justify-between gap-4 font-bold text-slate-900 hover:text-[#1A73E8] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1A73E8]"
                    aria-expanded={isOpen}
                  >
                    <span className="text-base flex items-center gap-2">
                      <HelpCircle className="w-4 h-4 text-[#1A73E8] shrink-0" />
                      <span>{faq.question}</span>
                    </span>
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5 text-slate-400 shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />
                    )}
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-5 pt-1 text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/50">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-slate-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">
            Quer estruturar seus anúncios no Google com precisão técnica?
          </h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto mb-8 leading-relaxed">
            Converse diretamente conosco pelo WhatsApp. Entendemos seu nicho de atuação e desenhamos a proposta ideal para colocar suas campanhas no ar.
          </p>
          <a
            href={getWhatsAppLink('Olá! Gostaria de conversar sobre a estruturação de campanhas no Google Ads para o meu negócio.')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-slate-900 bg-white hover:bg-slate-100 rounded-lg shadow-sm transition-all"
          >
            <span>Solicitar proposta no WhatsApp</span>
            <ArrowRight className="w-4 h-4 text-[#1A73E8]" />
          </a>
        </div>
      </section>
    </main>
  );
};
