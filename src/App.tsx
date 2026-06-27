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

    // Save response to responses.txt via the local server
    try {
      await fetch('http://localhost:3001/response', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ result: value }),
      });
    } catch {
      console.warn('Could not save response — is the server running?');
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
