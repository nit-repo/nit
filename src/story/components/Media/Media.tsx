import './Media.css';
import type { MediaConfig } from '../../types';

interface MediaProps extends MediaConfig {}

export function Media({ type, src, alt = '' }: MediaProps) {
  if (type === 'video') {
    return (
      <div className="media media--video">
        <video
          className="media__video"
          src={src}
          autoPlay
          muted
          loop
          playsInline
        />
      </div>
    );
  }

  // image | gif
  return (
    <div className="media media--image">
      <img className="media__img" src={src} alt={alt} />
    </div>
  );
}
