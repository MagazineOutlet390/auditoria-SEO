import React from 'react';
import { PageHero } from '../common/PageHero';
import { getWhatsAppLink } from '../../data/siteData';

export const Hero: React.FC = () => {
  return (
    <PageHero
      kicker="Auditoria SEO & Estratégia Digital"
      title={
        <>
          Seu negócio precisa ser encontrado.{' '}
          <span className="text-shimmer inline">
            E convencer quem encontra você.
          </span>
        </>
      }
      typewriterLabel="Foco em:"
      typewriterPhrases={[
        'Visibilidade no Google.',
        'Mais oportunidades comerciais.',
        'Presença digital profissional.',
      ]}
      subtitle="Landing pages de alta conversão, SEO Local e estratégias digitais para fortalecer sua presença no Google e transformar oportunidades em contatos."
      primaryCta={{
        label: 'Quero melhorar minha presença digital',
        href: getWhatsAppLink('Olá! Quero melhorar a presença digital do meu negócio com a Auditoria SEO.'),
        isExternal: true,
      }}
      secondaryCta={{
        label: 'Conhecer os serviços',
        href: '/servicos-seo',
      }}
      trustBadges={[
        'Sem contratos abusivos',
        'Comunicação direta via WhatsApp',
        'Atendimento em todo o Brasil',
      ]}
    />
  );
};
