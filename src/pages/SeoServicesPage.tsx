import React from 'react';
import { Navigate } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';

export const SeoServicesPage: React.FC = () => {
  const { currentRoutes } = useLanguage();
  return <Navigate to={currentRoutes.home} replace />;
};
