import './FinalResponse.css';

interface FinalResponseProps {
  result: string;
  onReplay?: () => void;
}

const responses: Record<string, { emoji: string; title: string; message: string; gradient: string }> = {
  accept: {
    emoji: '🤝',
    title: 'Thank you.',
    message: 'This means everything to me. I will not waste this.',
    gradient: 'linear-gradient(160deg, #134e5e 0%, #71b280 100%)',
  },
  reject: {
    emoji: '💔',
    title: 'I understand.',
    message: "I'm still sorry. You don't owe me anything — I just needed you to know.",
    gradient: 'linear-gradient(160deg, #4b134f 0%, #c94b4b 100%)',
  },
  default: {
    emoji: '💖',
    title: 'Thank you for reading.',
    message: 'Whatever you feel right now is valid.',
    gradient: 'linear-gradient(160deg, #1a1a2e 0%, #16213e 100%)',
  },
};

export function FinalResponse({ result, onReplay }: FinalResponseProps) {
  const content = responses[result] ?? responses.default;

  return (
    <div className="final-response" style={{ background: content.gradient }}>
      <div className="final-response__inner">
        <div className="final-response__emoji">{content.emoji}</div>
        <h1 className="final-response__title">{content.title}</h1>
        <p className="final-response__message">{content.message}</p>

        {onReplay && (
          <button className="final-response__replay" onClick={onReplay} type="button">
            Read again
          </button>
        )}
      </div>
    </div>
  );
}
