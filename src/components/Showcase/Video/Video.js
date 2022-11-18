import React, { useRef } from 'react';

import PhoneMockup from '../../../assets/icons/phone-mockup.svg';
import PhoneMockupDark from '../../../assets/icons/phone-mockup-dark.svg';

import './Video.css';

export default function Video({
  videoLink,
  setVideo,
  setDelayVideo,
  onVideoEnd,
  isLight,
}) {
  const videoRef = useRef();

  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const onPlayHandler = async () => {
    let time = 0;
    setDelayVideo((videoRef.current.duration * 1000) / 100);

    while (time < 100) {
      time = time + 1;
      setVideo((prev) => prev + 1);
      await sleep((videoRef.current.duration * 1000) / 100);
    }
  };

  return (
    <div className={`${isLight ? 'video-container-full' : 'video-container'}`}>
      <video
        src={videoLink}
        muted={true}
        onEnded={onVideoEnd}
        height={450}
        ref={videoRef}
        autoPlay={true}
        onPlay={onPlayHandler}
      ></video>
      <img
        src={isLight ? PhoneMockupDark : PhoneMockup}
        className="phone-mockup"
        height={550}
      />
    </div>
  );
}
