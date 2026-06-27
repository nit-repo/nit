import './Background.css';
import type { BackgroundConfig } from '../../types';
import { type ReactNode } from 'react';

interface BackgroundProps extends BackgroundConfig {
  children: ReactNode;
}

export function Background({ color, gradient, imageSrc, children }: BackgroundProps) {
  const style: React.CSSProperties = {
    background: gradient ?? color ?? '#111',
    ...(imageSrc && {
      backgroundImage: `url(${imageSrc})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }),
  };

  return (
    <div className="story-bg" style={style}>
      {imageSrc && <div className="story-bg__overlay" />}
      <div className="story-bg__content">{children}</div>
    </div>
  );
}
