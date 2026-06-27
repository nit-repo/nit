import './Footer.css';
import type { FooterConfig } from '../../types';

interface FooterProps extends FooterConfig {}

export function Footer({ text, link }: FooterProps) {
  return (
    <footer className="story-footer">
      {link ? (
        <a className="story-footer__link" href={link} target="_blank" rel="noopener noreferrer">
          {text}
        </a>
      ) : (
        <p className="story-footer__text">{text}</p>
      )}
    </footer>
  );
}
