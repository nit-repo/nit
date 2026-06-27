import './ProgressBar.css';

interface ProgressBarProps {
  total: number;
  current: number; // 0-indexed
}

export function ProgressBar({ total, current }: ProgressBarProps) {
  return (
    <div className="progress-bar" role="progressbar" aria-valuenow={current + 1} aria-valuemin={1} aria-valuemax={total}>
      {Array.from({ length: total }, (_, i) => (
        <div
          key={i}
          className={`progress-bar__segment ${i <= current ? 'progress-bar__segment--filled' : ''} ${i === current ? 'progress-bar__segment--active' : ''}`}
        />
      ))}
    </div>
  );
}
