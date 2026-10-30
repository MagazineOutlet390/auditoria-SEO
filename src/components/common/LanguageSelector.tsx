import React, { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../../i18n/LanguageContext';
import { Language } from '../../i18n/types';
import { Globe, ChevronDown, Check } from 'lucide-react';

interface LanguageOption {
  code: Language;
  label: string;
  flag: string;
  title: string;
}

const LANGUAGES: LanguageOption[] = [
  { code: 'pt', label: 'PT', flag: '🇧🇷', title: 'Português (Brasil)' },
  { code: 'es', label: 'ES', flag: '🇪🇸', title: 'Español (Latinoamérica)' },
  { code: 'en', label: 'EN', flag: '🇺🇸', title: 'English' },
];

export const LanguageSelector: React.FC<{ isMobile?: boolean }> = ({ isMobile = false }) => {
  const { lang, setLanguage, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const activeOption = LANGUAGES.find((opt) => opt.code === lang) || LANGUAGES[0];

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Mobile rendering: inline segmented button pills that look super clean inside the mobile drawer or header
  if (isMobile) {
    return (
      <div className="flex items-center gap-1.5 p-1 rounded-xl bg-slate-100/90 border border-slate-200/80">
        <span className="sr-only">{t.nav.langSelectAria}</span>
        {LANGUAGES.map((option) => {
          const isActive = option.code === lang;
          return (
            <button
              key={option.code}
              type="button"
              onClick={() => setLanguage(option.code)}
              aria-pressed={isActive}
              title={option.title}
              className={`flex-1 py-1.5 px-2.5 rounded-lg text-xs font-bold flex items-center justify-center gap-1.5 transition-all ${
                isActive
                  ? 'bg-white text-[#1A73E8] shadow-xs border border-slate-200/80 font-extrabold'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
              }`}
            >
              <span className="text-sm leading-none" aria-hidden="true">
                {option.flag}
              </span>
              <span>{option.label}</span>
            </button>
          );
        })}
      </div>
    );
  }

  // Desktop rendering: compact, elegant dropdown
  return (
    <div className="relative shrink-0" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={t.nav.langSelectAria}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        className="inline-flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-semibold text-slate-700 hover:text-slate-900 bg-slate-50 hover:bg-slate-100 border border-slate-200/90 rounded-lg transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1A73E8]"
      >
        <span className="text-sm leading-none" aria-hidden="true">
          {activeOption.flag}
        </span>
        <span className="font-bold">{activeOption.label}</span>
        <ChevronDown
          className={`w-3.5 h-3.5 text-slate-400 transition-transform duration-200 ${
            isOpen ? 'rotate-180 text-[#1A73E8]' : ''
          }`}
        />
      </button>

      {isOpen && (
        <div
          role="listbox"
          aria-label={t.nav.langSelectAria}
          className="absolute right-0 mt-1.5 w-44 rounded-xl bg-white border border-slate-200 shadow-lg py-1.5 z-50 animate-in fade-in slide-in-from-top-1 duration-150"
        >
          {LANGUAGES.map((option) => {
            const isSelected = option.code === lang;
            return (
              <button
                key={option.code}
                type="button"
                role="option"
                aria-selected={isSelected}
                onClick={() => {
                  setLanguage(option.code);
                  setIsOpen(false);
                }}
                className={`w-full px-3 py-2 text-left text-xs flex items-center justify-between gap-2 hover:bg-slate-50 transition-colors ${
                  isSelected ? 'font-bold text-[#1A73E8] bg-blue-50/50' : 'text-slate-700'
                }`}
              >
                <div className="flex items-center gap-2">
                  <span className="text-base leading-none" aria-hidden="true">
                    {option.flag}
                  </span>
                  <span>{option.title}</span>
                </div>
                {isSelected && <Check className="w-3.5 h-3.5 text-[#1A73E8] shrink-0" />}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};
