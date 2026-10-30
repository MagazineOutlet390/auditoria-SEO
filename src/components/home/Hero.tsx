import React from 'react';
import { PageHero } from '../common/PageHero';
import { useLanguage } from '../../i18n/LanguageContext';

export const Hero: React.FC = () => {
  const { t, currentRoutes, getWhatsAppUrl } = useLanguage();
  const h = t.home.hero;

  return (
    <PageHero
      kicker={h.kicker}
      title={
        <>
          {h.titlePart1}{' '}
          <span className="text-shimmer inline">
            {h.titleShimmer}
          </span>
        </>
      }
      typewriterLabel={h.typewriterLabel}
      typewriterPhrases={h.typewriterPhrases}
      subtitle={h.subtitle}
      primaryCta={{
        label: h.primaryCta,
        href: getWhatsAppUrl(t.whatsappMessages.homeHero),
        isExternal: true,
      }}
      secondaryCta={{
        label: h.secondaryCta,
        href: currentRoutes.seoServices,
      }}
      trustBadges={h.trustBadges}
    />
  );
};
