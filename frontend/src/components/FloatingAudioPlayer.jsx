import React, { useRef, useEffect } from 'react';
import { useAudio } from '../context/AudioPlayerContext';
import './FloatingAudioPlayer.css';

function FloatingAudioPlayer() {
  const { audio, title, playing, stopAudio } = useAudio();
  const audioRef = useRef(null);

  useEffect(() => {
    if (!audioRef.current) return;
    if (playing && audio) {
      audioRef.current.src = audio;
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [audio, playing]);

  if (!audio) return null;

  return (
    <div className="floating-player">
      <p className="audio-title">{title}</p>
      <audio ref={audioRef} controls />
      <button onClick={stopAudio} className="close-btn">✖</button>
    </div>
  );
}

export default FloatingAudioPlayer;
