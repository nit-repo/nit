// Shared TypeScript types for the Story Engine

export type MediaType = 'image' | 'video' | 'gif';
export type ButtonAction = 'next' | 'previous' | 'finish' | 'skip';
export type ButtonVariant = 'primary' | 'secondary' | 'skip';

export interface MediaConfig {
  type: MediaType;
  src: string;
  alt?: string;
}

export interface ButtonConfig {
  label: string;
  action: ButtonAction;
  variant?: ButtonVariant;
  result?: string;           // optional — passed back to onFinish(result)
}

export interface BackgroundConfig {
  color?: string;
  gradient?: string;
  imageSrc?: string;
}

export interface FooterConfig {
  text: string;
  link?: string;
}

export interface StoryPageData {
  id: string;
  title?: string;
  subHeadline?: string;
  media?: MediaConfig;
  button?: ButtonConfig;       // single button
  buttons?: ButtonConfig[];    // multiple buttons (e.g. accept / reject)
  background?: BackgroundConfig;
  footer?: FooterConfig;
}
