import React, { useEffect, useRef, useState } from "react";

import "./ShowcaseComponent.css";
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

import Analytics from "assets/videos/admin-analytics.mp4";
import AssignTraining from "assets/videos/admin-assigntraining.mp4";
import CreateContent from "assets/videos/admin-createcontent.mp4";
import Feedback from "assets/videos/admin-feedback.mp4";
import Organize from "assets/videos/admin-organize.mp4";

import { ShowcaseItemMinimized } from "./ShowcaseItem/ShowcaseItemMinimized";
import { appShowcaseData, webShowcaseData } from "constants/app_showcase";
import VideoMinimized from "./Video/VideoMinimized";

export function WebShowcaseComponentMobile({ isLight }) {
  const [index, setIndex] = useState(0);

  const [video, setVideo] = useState(0);
  const [delayVideo, setDelayVideo] = useState(0);

  useEffect(() => {
    setVideo(0);
  }, [index]);
  return (
    <div className="showcase--container-mobile">
      <div className="showcase--display-mobile">
        {index == 0 && (
          <VideoMinimized
            isLight={true}
            isWeb={true}
            videoLink={Analytics}
            setVideo={setVideo}
            setDelayVideo={setDelayVideo}
            onVideoEnd={() => setIndex(1)}
          ></VideoMinimized>
        )}
        {index == 1 && (
          <VideoMinimized
            isLight={true}
            isWeb={true}
            videoLink={AssignTraining}
            setVideo={setVideo}
            setDelayVideo={setDelayVideo}
            onVideoEnd={() => setIndex(2)}
          ></VideoMinimized>
        )}
        {index == 2 && (
          <VideoMinimized
            isLight={true}
            isWeb={true}
            videoLink={CreateContent}
            setVideo={setVideo}
            setDelayVideo={setDelayVideo}
            onVideoEnd={() => setIndex(3)}
          ></VideoMinimized>
        )}
        {index == 3 && (
          <VideoMinimized
            isLight={true}
            isWeb={true}
            videoLink={Feedback}
            setVideo={setVideo}
            setDelayVideo={setDelayVideo}
            onVideoEnd={() => setIndex(4)}
          ></VideoMinimized>
        )}
        {index == 4 && (
          <VideoMinimized
            isLight={true}
            isWeb={true}
            videoLink={Organize}
            setVideo={setVideo}
            setDelayVideo={setDelayVideo}
          ></VideoMinimized>
        )}
      </div>
      <div className="showcase--items-mobile">
        <ShowcaseItemMinimized
          itemIndex={0}
          icon={ReinforceIcon}
          iconSelected={ReinforceIconSelected}
          index={index}
          isLight={isLight}
          onClick={() => setIndex(0)}
          currentVideoTime={index == 0 ? video : 0}
          videoDelay={delayVideo}
        />

        <ShowcaseItemMinimized
          itemIndex={1}
          icon={ImproveIcon}
          iconSelected={ImproveIconSelected}
          index={index}
          isLight={isLight}
          onClick={() => setIndex(1)}
          currentVideoTime={index == 1 ? video : 0}
          videoDelay={delayVideo}
        />

        <ShowcaseItemMinimized
          itemIndex={2}
          index={index}
          icon={PlayIcon}
          isLight={isLight}
          iconSelected={PlayIconSelected}
          onClick={() => setIndex(2)}
          currentVideoTime={index == 2 ? video : 0}
          videoDelay={delayVideo}
        />
        <ShowcaseItemMinimized
          itemIndex={3}
          index={index}
          icon={ImproveIcon}
          isLight={isLight}
          iconSelected={ImproveIconSelected}
          onClick={() => setIndex(3)}
          currentVideoTime={index == 3 ? video : 0}
          videoDelay={delayVideo}
        />

        <ShowcaseItemMinimized
          itemIndex={4}
          icon={TrackIcon}
          iconSelected={TrackIconSelected}
          index={index}
          isLight={isLight}
          onClick={() => setIndex(4)}
          currentVideoTime={index == 4 ? video : 0}
          videoDelay={delayVideo}
        />
      </div>
      <div className="showcase--item-content-minimized">
        <h5>{webShowcaseData[index].title}</h5>
        <p>{webShowcaseData[index].description}</p>
      </div>
    </div>
  );
}
