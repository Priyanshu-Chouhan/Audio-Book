import React, { createContext, useContext, useState } from 'react';

const AudioContext = createContext();

export const AudioProvider = ({ children }) => {
  const [audio, setAudio] = useState(null);
  const [title, setTitle] = useState('');
  const [playing, setPlaying] = useState(false);

  const playAudio = (url, newTitle) => {
    if (audio !== url) {
      setTitle(newTitle);
      setAudio(url);
      setPlaying(true);
    } else {
      setPlaying(prev => !prev);
    }
  };

  const stopAudio = () => {
    setPlaying(false);
    setAudio(null);
  };

  return (
    <AudioContext.Provider value={{ audio, title, playing, playAudio, stopAudio }}>
      {children}
    </AudioContext.Provider>
  );
};

export const useAudio = () => useContext(AudioContext);
