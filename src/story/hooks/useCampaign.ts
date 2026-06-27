import { useState, useCallback } from 'react';
import type { StoryPageData } from '../types';

interface UseCampaignReturn {
  currentPage: StoryPageData;
  currentIndex: number;
  totalPages: number;
  isFirst: boolean;
  isLast: boolean;
  progress: number; // 0–1
  next: () => void;
  previous: () => void;
  goTo: (index: number) => void;
}

export function useCampaign(pages: StoryPageData[]): UseCampaignReturn {
  const [index, setIndex] = useState(0);
  const total = pages.length;

  const next = useCallback(() => {
    setIndex((i) => Math.min(i + 1, total - 1));
  }, [total]);

  const previous = useCallback(() => {
    setIndex((i) => Math.max(i - 1, 0));
  }, []);

  const goTo = useCallback((i: number) => {
    setIndex(Math.max(0, Math.min(i, total - 1)));
  }, [total]);

  return {
    currentPage: pages[index],
    currentIndex: index,
    totalPages: total,
    isFirst: index === 0,
    isLast: index === total - 1,
    progress: total > 1 ? index / (total - 1) : 1,
    next,
    previous,
    goTo,
  };
}
