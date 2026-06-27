import './StoryPage.css';
import { Background } from '../Background/Background';
import { ProgressBar } from '../ProgressBar/ProgressBar';
import { Headline } from '../Headline/Headline';
import { SubHeadline } from '../SubHeadline/SubHeadline';
import { Media } from '../Media/Media';
import { ActionButton } from '../ActionButton/ActionButton';
import { Footer } from '../Footer/Footer';
import type { StoryPageData } from '../../types';

interface StoryPageProps extends StoryPageData {
  // Navigation
  onNext: (result?: string) => void;
  onPrevious: () => void;
  // Progress
  totalPages: number;
  currentIndex: number;
  isFirst: boolean;
  isLast: boolean;
}

export function StoryPage({
  title,
  subHeadline,
  media,
  button,
  buttons,
  background,
  footer,
  onNext,
  onPrevious,
  totalPages,
  currentIndex,
  isFirst,
}: StoryPageProps) {
  const handleButtonClick = () => {
    if (button?.action === 'previous') {
      onPrevious();
    } else {
      onNext(button?.result);
    }
  };

  return (
    <div className="story-page" onClick={(e) => {
      const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
      const x = e.clientX - rect.left;
      if (x < rect.width * 0.35) {
        if (!isFirst) onPrevious();
      }
    }}>
      <Background {...(background ?? {})}>
        <div className="story-page__inner">
          {/* Header */}
          <div className="story-page__header">
            <ProgressBar total={totalPages} current={currentIndex} />
          </div>

          {/* Media zone */}
          {media && (
            <div className="story-page__media">
              <Media {...media} />
            </div>
          )}

          {/* Text zone */}
          <div className="story-page__text">
            {title && <Headline text={title} />}
            {subHeadline && <SubHeadline text={subHeadline} />}
          </div>

          {/* CTA zone — single button */}
          {button && !buttons && (
            <div className="story-page__cta">
              <ActionButton
                label={button.label}
                onClick={handleButtonClick}
                variant={button.variant ?? 'primary'}
              />
            </div>
          )}

          {/* CTA zone — multiple buttons row */}
          {buttons && buttons.length > 0 && (
            <div className="story-page__cta story-page__cta--row">
              {buttons.map((btn) => (
                <ActionButton
                  key={btn.label}
                  label={btn.label}
                  onClick={() => {
                    if (btn.action === 'previous') {
                      onPrevious();
                    } else {
                      onNext(btn.result);
                    }
                  }}
                  variant={btn.variant ?? 'primary'}
                />
              ))}
            </div>
          )}

          {/* Footer */}
          {footer && (
            <div className="story-page__footer">
              <Footer {...footer} />
            </div>
          )}
        </div>
      </Background>
    </div>
  );
}
