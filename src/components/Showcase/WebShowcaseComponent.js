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

import Analytics from "assets/videos/admin-analytics.mp4";
import AssignTraining from "assets/videos/admin-assigntraining.mp4";
import CreateContent from "assets/videos/admin-createcontent.mp4";
import Feedback from "assets/videos/admin-feedback.mp4";
import Organize from "assets/videos/admin-organize.mp4";

export function WebShowcaseComponent({ isLight }) {
  const [index, setIndex] = useState(0);

  const [video, setVideo] = useState(0);
  const [delayVideo, setDelayVideo] = useState(0);

  useEffect(() => {
    setVideo(0);
  }, [index]);
  return (
    <div className="showcase--container">
      <div className="showcase--display">
        {index == 0 && (
          <Video
            isLight={isLight}
            isWeb={true}
            videoLink={Analytics}
            setVideo={setVideo}
            setDelayVideo={setDelayVideo}
            onVideoEnd={() => setIndex(1)}
          ></Video>
        )}
        {index == 1 && (
          <Video
            isLight={isLight}
            isWeb={true}
            videoLink={AssignTraining}
            setVideo={setVideo}
            setDelayVideo={setDelayVideo}
            onVideoEnd={() => setIndex(2)}
          ></Video>
        )}
        {index == 2 && (
          <Video
            isLight={isLight}
            isWeb={true}
            videoLink={CreateContent}
            setVideo={setVideo}
            setDelayVideo={setDelayVideo}
            onVideoEnd={() => setIndex(3)}
          ></Video>
        )}
        {index == 3 && (
          <Video
            isLight={isLight}
            isWeb={true}
            videoLink={Feedback}
            setVideo={setVideo}
            setDelayVideo={setDelayVideo}
            onVideoEnd={() => setIndex(4)}
          ></Video>
        )}
        {index == 4 && (
          <Video
            isLight={isLight}
            isWeb={true}
            videoLink={Organize}
            setVideo={setVideo}
            setDelayVideo={setDelayVideo}
          ></Video>
        )}
      </div>
      <div className="showcase--items">
        <ShowcaseItem
          itemIndex={0}
          title={"Get Detailed Analytics"}
          description={
            "Get a complete overview of your organization’s learning progress and detect knowledge gaps before they hurt performance."
          }
          icon={ReinforceIcon}
          iconSelected={ReinforceIconSelected}
          index={index}
          isLight={isLight}
          onClick={() => setIndex(0)}
          currentVideoTime={index == 0 ? video : 0}
          videoDelay={delayVideo}
        />

        <ShowcaseItem
          itemIndex={1}
          title={"Assign Training"}
          description={
            "Add roles to users and assign training based on their role & department. Save time by importing your users in bulk."
          }
          icon={ImproveIcon}
          iconSelected={ImproveIconSelected}
          index={index}
          isLight={isLight}
          onClick={() => setIndex(1)}
          currentVideoTime={index == 1 ? video : 0}
          videoDelay={delayVideo}
        />

        <ShowcaseItem
          itemIndex={2}
          title={"Create Content"}
          description={
            "Easily create new modules or let our team take care of it. Create as many courses as needed without an additional charge."
          }
          index={index}
          icon={PlayIcon}
          isLight={isLight}
          iconSelected={PlayIconSelected}
          onClick={() => setIndex(2)}
          currentVideoTime={index == 2 ? video : 0}
          videoDelay={delayVideo}
        />
        <ShowcaseItem
          itemIndex={3}
          title={"Receive Feedback"}
          description={
            "Coach makes it easy to give and receive feedback. Get alerts when something is wrong, and make accurate decisions based on user feedback and data."
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
          title={"Organize"}
          description={
            "Create an organization chart for your business and get detailed reports on how different units perform."
          }
          icon={TrackIcon}
          iconSelected={TrackIconSelected}
          index={index}
          isLight={isLight}
          onClick={() => setIndex(4)}
          currentVideoTime={index == 4 ? video : 0}
          videoDelay={delayVideo}
        />
      </div>
    </div>
  );
}
