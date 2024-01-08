'use client';
import React from 'react';

interface IAuido {
  url?: string;
}

type ReturnTypeAudit = {
  isPlaying: boolean;
  toggleIsPlaying: () => void;
};

export const useAudio = ({ url }: IAuido): ReturnTypeAudit => {
  const [audio, setAudio] = React.useState<HTMLAudioElement>();
  const [isPlaying, setIsPlaying] = React.useState(false);
  const toggleIsPlaying = (): void => setIsPlaying((val) => !val);

  React.useEffect(() => {
    setAudio(new Audio(url));
  }, [url]);

  React.useEffect(() => {
    if (isPlaying && audio) {
      isPlaying ? audio.play() : audio.pause();
    }
  }, [audio, isPlaying]);

  React.useEffect(() => {
    audio?.addEventListener('ended', () => setIsPlaying(false));
    return (): void => {
      audio?.removeEventListener('ended', () => setIsPlaying(false));
    };
  }, [audio]);

  return {
    isPlaying,
    toggleIsPlaying,
  };
};
