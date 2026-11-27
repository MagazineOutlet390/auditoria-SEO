import React from 'react';

interface UsFlagIconProps {
  className?: string;
}

/**
 * Crisp inline SVG United States flag (w-4 h-3 default) for navigation & footer integration.
 */
export const UsFlagIcon: React.FC<UsFlagIconProps> = ({ className = 'w-4 h-3 shrink-0 rounded-[2px]' }) => (
  <svg
    viewBox="0 0 24 16"
    className={className}
    aria-hidden="true"
    focusable="false"
  >
    <rect width="24" height="16" fill="#FFFFFF" />
    <rect y="0" width="24" height="1.23" fill="#B22234" />
    <rect y="2.46" width="24" height="1.23" fill="#B22234" />
    <rect y="4.92" width="24" height="1.23" fill="#B22234" />
    <rect y="7.38" width="24" height="1.23" fill="#B22234" />
    <rect y="9.84" width="24" height="1.23" fill="#B22234" />
    <rect y="12.3" width="24" height="1.23" fill="#B22234" />
    <rect y="14.77" width="24" height="1.23" fill="#B22234" />
    <rect width="10.4" height="8.61" fill="#3C3B6E" />
    <g fill="#FFFFFF">
      <circle cx="2" cy="1.7" r="0.45" />
      <circle cx="4.2" cy="1.7" r="0.45" />
      <circle cx="6.4" cy="1.7" r="0.45" />
      <circle cx="8.6" cy="1.7" r="0.45" />
      <circle cx="3.1" cy="3.1" r="0.45" />
      <circle cx="5.3" cy="3.1" r="0.45" />
      <circle cx="7.5" cy="3.1" r="0.45" />
      <circle cx="2" cy="4.5" r="0.45" />
      <circle cx="4.2" cy="4.5" r="0.45" />
      <circle cx="6.4" cy="4.5" r="0.45" />
      <circle cx="8.6" cy="4.5" r="0.45" />
      <circle cx="3.1" cy="5.9" r="0.45" />
      <circle cx="5.3" cy="5.9" r="0.45" />
      <circle cx="7.5" cy="5.9" r="0.45" />
      <circle cx="2" cy="7.3" r="0.45" />
      <circle cx="4.2" cy="7.3" r="0.45" />
      <circle cx="6.4" cy="7.3" r="0.45" />
      <circle cx="8.6" cy="7.3" r="0.45" />
    </g>
  </svg>
);
