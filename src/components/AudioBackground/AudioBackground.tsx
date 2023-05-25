import React from 'react';
import ReactAudioPlayer from "react-audio-player";

const AudioBackground = () => {
  return (
    <ReactAudioPlayer
      src="/LivingInHope.mp3"
      autoPlay
      loop
    />
  );
};

export default AudioBackground;