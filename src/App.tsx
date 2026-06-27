import { useState } from 'react';
import './index.css';
import { Campaign } from './story/pages/Campaign';
import { FinalResponse } from './story/components/FinalResponse/FinalResponse';
import apologyPages from './story/data/apolo.json';
import type { StoryPageData } from './story/types';

function App() {
  const [finishResult, setFinishResult] = useState<string | null>(null);

  const handleFinish = async (result?: string) => {
    const value = result ?? 'default';

    // Reads from environment variables (recommended) or fallback string
    const GOOGLE_SHEETS_URL = import.meta.env.VITE_GOOGLE_SHEETS_URL || "https://script.google.com/macros/s/AKfycbwmR6aiMibOdahahs2HqqsnLdz-fjawFPKNlLPfafFqxwCDgVLEZ6EHQm6EjhCF1N-SZw/exec";

    if (GOOGLE_SHEETS_URL && GOOGLE_SHEETS_URL !== "https://script.google.com/macros/s/AKfycbwmR6aiMibOdahahs2HqqsnLdz-fjawFPKNlLPfafFqxwCDgVLEZ6EHQm6EjhCF1N-SZw/exec") {
      try {
        await fetch(GOOGLE_SHEETS_URL, {
          method: 'POST',
          mode: 'no-cors', // Prevents browser security blocks
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ result: value }),
        });
      } catch (e) {
        console.error('Error saving to Google Sheets:', e);
      }
    } else {
      console.warn('Google Sheets URL not configured.');
    }

    setFinishResult(value);
  };

  const handleReplay = () => {
    setFinishResult(null);
  };

  return (
    <main className="app">
      <div className="app__card">
        {finishResult ? (
          <FinalResponse result={finishResult} onReplay={handleReplay} />
        ) : (
          <Campaign
            pages={apologyPages as StoryPageData[]}
            onFinish={handleFinish}
          />
        )}
      </div>
    </main>
  );
}

export default App;
