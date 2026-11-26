import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowLeft, BookOpen, Home } from 'lucide-react';
import { SEOHead } from '../components/common/SEOHead';
import { useLanguage } from '../i18n/LanguageContext';

export const NotFoundPage: React.FC = () => {
  const { lang, currentRoutes } = useLanguage();
  const location = useLocation();

  const copy =
    lang === 'es'
      ? {
          seoTitle: 'Página no encontrada (404) | Auditoria SEO',
          seoDesc: 'La URL solicitada no existe o fue movida.',
          badge: 'Error 404',
          title: 'Página no encontrada',
          description:
            'El contenido que busca no existe en esta dirección o fue eliminado de forma permanente.',
          homeBtn: 'Volver al Inicio',
          blogBtn: 'Explorar el Blog de SEO',
        }
      : lang === 'en'
      ? {
          seoTitle: 'Page Not Found (404) | Auditoria SEO',
          seoDesc: 'The requested URL could not be found.',
          badge: 'Error 404',
          title: 'Page Not Found',
          description:
            'The page you are looking for does not exist at this address or has been permanently removed.',
          homeBtn: 'Back to Home',
          blogBtn: 'Browse the SEO Blog',
        }
      : {
          seoTitle: 'Página não encontrada (404) | Auditoria SEO',
          seoDesc: 'A página solicitada não existe ou foi removida.',
          badge: 'Erro 404',
          title: 'Página não encontrada',
          description:
            'O endereço acessado não corresponde a nenhuma página ativa ou foi removido permanentemente.',
          homeBtn: 'Voltar para o Início',
          blogBtn: 'Acessar o Blog de SEO',
        };

  return (
    <main className="bg-white py-24 sm:py-32">
      <SEOHead
        title={copy.seoTitle}
        description={copy.seoDesc}
        canonicalPath={location.pathname}
        noindex={true}
        currentLang={lang}
        jsonLd={null}
      />

      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-xs font-bold uppercase tracking-wider text-[#1A73E8] mb-3">
          {copy.badge}
        </p>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
          {copy.title}
        </h1>
        <p className="text-base text-slate-600 leading-relaxed mb-8">
          {copy.description}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            to={currentRoutes.home}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[#1A73E8] hover:bg-[#174EA6] text-white text-sm font-semibold transition-colors w-full sm:w-auto"
          >
            <Home className="w-4 h-4 shrink-0" />
            <span>{copy.homeBtn}</span>
          </Link>
          <Link
            to={currentRoutes.blog}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 text-sm font-semibold transition-colors w-full sm:w-auto"
          >
            <BookOpen className="w-4 h-4 shrink-0" />
            <span>{copy.blogBtn}</span>
          </Link>
        </div>

        <div className="mt-8">
          <Link
            to={currentRoutes.home}
            className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-500 hover:text-slate-800"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>auditoriaseo.com.br</span>
          </Link>
        </div>
      </div>
    </main>
  );
};
