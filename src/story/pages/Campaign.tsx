import './Campaign.css';
import { useCampaign } from '../hooks/useCampaign';
import { StoryPage } from '../components/StoryPage/StoryPage';
import type { StoryPageData } from '../types';

interface CampaignProps {
  pages: StoryPageData[];
  onFinish?: (result?: string) => void;
}

export function Campaign({ pages, onFinish }: CampaignProps) {
  const {
    currentPage,
    currentIndex,
    totalPages,
    isFirst,
    isLast,
    next,
    previous,
  } = useCampaign(pages);

  const handleNext = (result?: string) => {
    if (isLast && onFinish) {
      onFinish(result);
    } else {
      next();
    }
  };

  return (
    <div className="campaign">
      <div className="campaign__card" key={currentPage.id}>
        <StoryPage
          {...currentPage}
          onNext={handleNext}
          onPrevious={previous}
          totalPages={totalPages}
          currentIndex={currentIndex}
          isFirst={isFirst}
          isLast={isLast}
        />
      </div>
    </div>
  );
}
