import React, { useEffect, useRef, useState } from "react";

import "./ShowcaseComponent.css";
import { ShowcaseItem } from "./ShowcaseItem/ShowcaseItem";
import Video from "./Video/Video";
import PlayIcon from "assets/icons/web-icon-play.svg";
import ImproveIcon from "assets/icons/web-icon-improve.svg";
import ReinforceIcon from "assets/icons/web-icon-reinforce.svg";
import RewardsIcon from "assets/icons/web-icon-rewards.svg";
import TrackIcon from "assets/icons/web-icon-track.svg";

import PlayIconSelected from "assets/icons/web-icon-play-selected.svg";
import ImproveIconSelected from "assets/icons/web-icon-improve-selected.svg";
import ReinforceIconSelected from "assets/icons/web-icon-reinforce-selected.svg";
import RewardsIconSelected from "assets/icons/web-icon-rewards-selected.svg";
import TrackIconSelected from "assets/icons/web-icon-track-selected.svg";

import PlayVideo from "assets/videos/learn-by-playing.mp4";
import RewardsVideo from "assets/videos/get-rewards.mp4";
import ImproveYourKnowledgeVideo from "assets/videos/improve-your-knowledge.mp4";
import PersonalizedVideo from "assets/videos/personalized-experience.mp4";
import TrackPerformanceVideo from "assets/videos/track-performance.mp4";

export function ShowcaseComponent({ isLight }) {
  const [index, setIndex] = useState(0);

  const [video, setVideo] = useState(0);
  const [delayVideo, setDelayVideo] = useState(0);

  useEffect(() => {
    setVideo(0);
  }, [index]);
  return (
    <div className="showcase--container">
      <div className="showcase--items">
        <ShowcaseItem
          itemIndex={0}
          title={"Learn by playing"}
          description={
            "Play a variety of interactive games that increase your knowledge in a fun & engaging way."
          }
          icon={PlayIcon}
          iconSelected={PlayIconSelected}
          index={index}
          isLight={isLight}
          onClick={() => setIndex(0)}
          currentVideoTime={index == 0 ? video : 0}
          videoDelay={delayVideo}
        />

        <ShowcaseItem
          itemIndex={1}
          title={"Track performance"}
          description={
            "Get real-time insights, and detect your knowledge gaps before they hurt performance."
          }
          icon={TrackIcon}
          iconSelected={TrackIconSelected}
          index={index}
          isLight={isLight}
          onClick={() => setIndex(1)}
          currentVideoTime={index == 1 ? video : 0}
          videoDelay={delayVideo}
        />

        <ShowcaseItem
          itemIndex={2}
          title={"Personalized experience"}
          description={
            "Experience a personalized learning journey each time you train with Coach."
          }
          index={index}
          icon={ReinforceIcon}
          isLight={isLight}
          iconSelected={ReinforceIconSelected}
          onClick={() => setIndex(2)}
          currentVideoTime={index == 2 ? video : 0}
          videoDelay={delayVideo}
        />
        <ShowcaseItem
          itemIndex={3}
          title={"Improve your knowledge"}
          description={
            "Improve your knowledge efficiently with lessons that will fix your knowledge gaps"
          }
          index={index}
          icon={ImproveIcon}
          isLight={isLight}
          iconSelected={ImproveIconSelected}
          onClick={() => setIndex(3)}
          currentVideoTime={index == 3 ? video : 0}
          videoDelay={delayVideo}
        />
        <ShowcaseItem
          itemIndex={4}
          title={"Challenge Yourself"}
          description={
            "Get better with each game and earn the #1 spot in your company!"
          }
          icon={RewardsIcon}
          iconSelected={RewardsIconSelected}
          index={index}
          isLight={isLight}
          onClick={() => setIndex(4)}
          currentVideoTime={index == 4 ? video : 0}
          videoDelay={delayVideo}
        />
      </div>
      <div className="showcase--display">
        {index == 0 && (
          <Video
            isLight={isLight}
            videoLink={PlayVideo}
            setVideo={setVideo}
            setDelayVideo={setDelayVideo}
            onVideoEnd={() => setIndex(1)}
          ></Video>
        )}
        {index == 1 && (
          <Video
            isLight={isLight}
            videoLink={TrackPerformanceVideo}
            setVideo={setVideo}
            setDelayVideo={setDelayVideo}
            onVideoEnd={() => setIndex(2)}
          ></Video>
        )}
        {index == 2 && (
          <Video
            isLight={isLight}
            videoLink={PersonalizedVideo}
            setVideo={setVideo}
            setDelayVideo={setDelayVideo}
            onVideoEnd={() => setIndex(3)}
          ></Video>
        )}
        {index == 3 && (
          <Video
            isLight={isLight}
            videoLink={ImproveYourKnowledgeVideo}
            setVideo={setVideo}
            setDelayVideo={setDelayVideo}
            onVideoEnd={() => setIndex(4)}
          ></Video>
        )}
        {index == 4 && (
          <Video
            isLight={isLight}
            videoLink={RewardsVideo}
            setVideo={setVideo}
            setDelayVideo={setDelayVideo}
          ></Video>
        )}
      </div>
    </div>
  );
}
