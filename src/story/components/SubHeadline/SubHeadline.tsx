import './SubHeadline.css';

interface SubHeadlineProps {
  text: string;
  align?: 'left' | 'center' | 'right';
  color?: string;
}

export function SubHeadline({ text, align = 'center', color = 'rgba(255,255,255,0.75)' }: SubHeadlineProps) {
  return (
    <p className="sub-headline" style={{ textAlign: align, color }}>
      {text}
    </p>
  );
}
