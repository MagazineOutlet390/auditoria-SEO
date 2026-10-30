import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { SEO_PLANS, SEO_FAQS } from '../data/siteData';
import { PageHero } from '../components/common/PageHero';
import { SEOHead } from '../components/common/SEOHead';
import { useLanguage } from '../i18n/LanguageContext';
import { getHreflangs } from '../i18n/routes';
import { Check, ArrowRight, HelpCircle, ChevronDown, ChevronUp, Search, TrendingUp, Award } from 'lucide-react';

export const SeoServicesPage: React.FC = () => {
  const { lang, t, getWhatsAppUrl } = useLanguage();
  const location = useLocation();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const scrollToPlans = () => {
    const el = document.getElementById('planos');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const sData = t.seoServicesPage;
  const hreflangs = getHreflangs(location.pathname);

  return (
    <main className="bg-white">
      {/* Dynamic Route Metadata */}
      <SEOHead
        title={t.meta.seoServicesTitle}
        description={t.meta.seoServicesDescription}
        canonicalPath={location.pathname}
        ogType="website"
        ogImage="/og-image.png"
        currentLang={lang}
        hreflangs={hreflangs}
      />

      {/* Reusable Hero matching exactly the Home visual identity and background */}
      <PageHero
        kicker={sData.kicker}
        title={
          <>
            {sData.titlePart1}{' '}
            <span className="text-shimmer inline">
              {sData.titleShimmer}
            </span>
          </>
        }
        typewriterLabel={sData.typewriterLabel}
        typewriterPhrases={sData.typewriterPhrases}
        subtitle={sData.subtitle}
        primaryCta={{
          label: sData.primaryCta,
          href: getWhatsAppUrl(t.whatsappMessages.seoServices),
          isExternal: true,
        }}
        secondaryCta={{
          label: sData.secondaryCta,
          onClick: scrollToPlans,
        }}
        trustBadges={sData.trustBadges}
      />

      {/* Pricing and Plans Cards */}
      <section id="planos" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-20">
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-semibold tracking-wider text-[#1A73E8] uppercase">
            Investimento & Escopo
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-2 mb-3">
            Escolha o formato ideal para o momento do seu negócio
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Valores transparentes e entregáveis definidos com precisão, sem surpresas ou cobranças adicionais ocultas.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {SEO_PLANS.map((plan) => {
            const isAuditoria = plan.id === 'auditoria-seo';
            const isPerformance = plan.id === 'seo-performance';

            return (
              <div
                key={plan.id}
                className={`rounded-2xl p-8 sm:p-10 flex flex-col justify-between transition-all duration-200 ${
                  plan.highlighted
                    ? 'border-2 border-[#1A73E8] bg-white shadow-md relative'
                    : 'border border-slate-200/90 bg-white hover:border-slate-300'
                }`}
              >
                <div>
                  <div className="flex items-center gap-2 text-slate-500 mb-3">
                    {isAuditoria && <Search className="w-5 h-5 text-[#1A73E8]" />}
                    {isPerformance && <TrendingUp className="w-5 h-5 text-[#1A73E8]" />}
                    {!isAuditoria && !isPerformance && <Award className="w-5 h-5 text-[#1A73E8]" />}
                    <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                      {isAuditoria ? 'Diagnóstico Pontual' : isPerformance ? 'Evolução Contínua' : 'Solução Completa'}
                    </span>
                  </div>

                  <h3 className="text-2xl font-extrabold text-slate-900 mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed mb-6 min-h-[32px]">
                    {plan.tagline}
                  </p>

                  {/* Price display with tabular figures */}
                  <div className="py-4 px-5 rounded-xl bg-slate-50 border border-slate-100 mb-6">
                    <span className="text-xs font-medium text-slate-500 block mb-1">
                      Investimento
                    </span>
                    <div className="text-3xl font-extrabold text-slate-900 font-mono tracking-tight">
                      {plan.price}
                    </div>
                  </div>

                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {plan.description}
                  </p>

                  {/* Deliverables List */}
                  <div className="space-y-3 mb-8 pt-4 border-t border-slate-100">
                    <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                      Itens e Entregáveis Inclusos:
                    </h4>
                    <ul className="space-y-3">
                      {plan.deliverables.map((item, itemIdx) => (
                        <li key={itemIdx} className="flex items-start gap-2.5 text-sm text-slate-700">
                          <Check className="w-4 h-4 text-[#1A73E8] shrink-0 mt-0.5" />
                          <span className="leading-snug">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-6 border-t border-slate-100">
                  <a
                    href={getWhatsAppUrl(plan.whatsappMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-center gap-2 w-full py-3.5 px-4 rounded-lg font-semibold text-sm transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${
                      plan.highlighted
                        ? 'bg-[#1A73E8] hover:bg-[#174EA6] text-white shadow-sm focus-visible:ring-[#1A73E8]'
                        : 'bg-slate-900 hover:bg-slate-800 text-white focus-visible:ring-slate-900'
                    }`}
                  >
                    <span>{sData.contractButton}</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Why Structured SEO Strategy Section */}
      <section className="py-16 bg-slate-50 border-t border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-semibold tracking-wider text-[#1A73E8] uppercase">
              Fundamentos
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-2 mb-4">
              Por que uma estratégia de SEO consistente supera soluções improvisadas
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              Diferente de anúncios pagos que cessam no momento em que a verba acaba, a autoridade orgânica constrói um ativo patrimonial permanente para o seu domínio.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-xl border border-slate-200/90 shadow-sm">
              <h3 className="text-base font-bold text-slate-900 mb-2">
                Tráfego Qualificado e Espontâneo
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Quem pesquisa no Google já possui uma dor e intenção clara. Seu site é apresentado exatamente no momento em que o cliente procura pela solução.
              </p>
            </div>
            <div className="p-6 bg-white rounded-xl border border-slate-200/90 shadow-sm">
              <h3 className="text-base font-bold text-slate-900 mb-2">
                Credibilidade e Confiança Natural
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Os usuários reconhecem os resultados orgânicos como recomendações imparciais de relevância pelo Google, conferindo autoridade instantânea ao negócio.
              </p>
            </div>
            <div className="p-6 bg-white rounded-xl border border-slate-200/90 shadow-sm">
              <h3 className="text-base font-bold text-slate-900 mb-2">
                Redução do Custo por Aquisição
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Ao somar visitas orgânicas com tráfego pago, sua empresa diversifica canais e reduz a vulnerabilidade diante do aumento no custo dos leilões de anúncios.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SEO FAQ Section */}
      <section className="py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-xs font-semibold tracking-wider text-[#1A73E8] uppercase">
            Tire suas Dúvidas
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-2 mb-3">
            Perguntas Frequentes sobre os Serviços de SEO
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Respostas técnicas, honestas e sem rodeios para as principais dúvidas sobre nossos planos.
          </p>
        </div>

        <div className="space-y-4">
          {SEO_FAQS.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div
                key={idx}
                className="border border-slate-200/90 rounded-xl overflow-hidden bg-white transition-colors"
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
      </section>

      {/* Concluding CTA */}
      <section className="py-16 bg-slate-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">
            Ainda em dúvida sobre qual plano escolher?
          </h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto mb-8">
            Envie o link do seu site pelo WhatsApp. Faremos uma análise preliminar rápida para recomendar a opção mais adequada para o seu estágio atual.
          </p>
          <a
            href={getWhatsAppUrl(t.whatsappMessages.seoServices)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-slate-900 bg-white hover:bg-slate-100 rounded-lg shadow-sm transition-all"
          >
            <span>{sData.bottomCtaButton}</span>
            <ArrowRight className="w-4 h-4 text-[#1A73E8]" />
          </a>
        </div>
      </section>
    </main>
  );
};
