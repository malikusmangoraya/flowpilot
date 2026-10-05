import React from 'react';
import { BRAND } from './BRAND';

/**
 * The FlowPilot mark: a gradient tile carrying An orbital flow with launch chevron.
 * Vector only - no raster assets - so it stays crisp at any size and
 * inherits the surrounding layout.
 */
export function BrandMark({ size = 34, className = '', title, ...rest }) {
  const uid = React.useId().replace(/[^a-zA-Z0-9]/g, '');
  const gid = `bm-{uid}`;
  const label = title || BRAND.name;
  return (
    <svg
      viewBox="0 0 64 64"
      width={size}
      height={size}
      className={className}
      role="img"
      aria-label={label}
      {...rest}
    >
      <defs>
        <linearGradient id={gid} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={BRAND.primary} />
          <stop offset="100%" stopColor={BRAND.secondary} />
        </linearGradient>
      </defs>
      <rect width="64" height="64" rx="14.3" fill={`url(#${gid})`} />
      <g transform="translate(14.0 14.0) scale(0.5625)">
        <circle cx='32' cy='33' r='22' fill='none' stroke='#ffffff' stroke-width='4'/><ellipse cx='32' cy='33' rx='22' ry='9' fill='none' stroke='#ffffff' stroke-width='3'/><polygon points='24,24 40,33 24,42' fill='#ffffff'/><polygon points='29,29 35,33 29,37' fill='#22546b'/><polygon points='48,8 51,11 48,14 45,11' fill='#ffffff'/>
      </g>
    </svg>
  );
}

export default BrandMark;
