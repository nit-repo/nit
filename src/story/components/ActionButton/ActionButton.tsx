import './ActionButton.css';
import type { ButtonVariant } from '../../types';

interface ActionButtonProps {
  label: string;
  onClick: () => void;
  variant?: ButtonVariant;
  disabled?: boolean;
}

export function ActionButton({ label, onClick, variant = 'primary', disabled = false }: ActionButtonProps) {
  return (
    <button
      className={`action-btn action-btn--${variant}`}
      onClick={onClick}
      disabled={disabled}
      type="button"
    >
      <span className="action-btn__label">{label}</span>
      {variant === 'primary' && <span className="action-btn__arrow">→</span>}
    </button>
  );
}
