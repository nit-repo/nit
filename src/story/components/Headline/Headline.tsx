import './Headline.css';

interface HeadlineProps {
  text: string;
  align?: 'left' | 'center' | 'right';
  color?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export function Headline({ text, align = 'center', color = '#ffffff', size = 'xl' }: HeadlineProps) {
  return (
    <h1 className={`headline headline--${size}`} style={{ textAlign: align, color }}>
      {text}
    </h1>
  );
}
