import React from 'react';
import { TARGET_SEGMENTS } from '../../data/siteData';
import {
  Briefcase,
  Sparkles,
  Dumbbell,
  Activity,
  Smile,
  Stethoscope,
  Compass,
  Store,
} from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  Briefcase: <Briefcase className="w-5 h-5 text-[#1A73E8]" />,
  Sparkles: <Sparkles className="w-5 h-5 text-[#1A73E8]" />,
  Dumbbell: <Dumbbell className="w-5 h-5 text-[#1A73E8]" />,
  Activity: <Activity className="w-5 h-5 text-[#1A73E8]" />,
  Smile: <Smile className="w-5 h-5 text-[#1A73E8]" />,
  Stethoscope: <Stethoscope className="w-5 h-5 text-[#1A73E8]" />,
  Compass: <Compass className="w-5 h-5 text-[#1A73E8]" />,
  Store: <Store className="w-5 h-5 text-[#1A73E8]" />,
};

export const TargetAudience: React.FC = () => {
  return (
    <section className="py-20 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-semibold tracking-wider text-[#1A73E8] uppercase">
            Públicos Prioritários
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-2 mb-4">
            Para quem este trabalho é ideal
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Nossas soluções são desenhadas sob medida para negócios que dependem da decisão de contratação local e da confiança transmitida no ambiente digital.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TARGET_SEGMENTS.map((segment) => (
            <div
              key={segment.id}
              className="p-6 rounded-xl bg-white border border-slate-200/90 shadow-sm hover:border-[#1A73E8]/40 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center mb-4">
                  {iconMap[segment.iconName] || <Store className="w-5 h-5 text-[#1A73E8]" />}
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">
                  {segment.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  {segment.description}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 text-xs font-medium text-[#174EA6]">
                {segment.benefit}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
