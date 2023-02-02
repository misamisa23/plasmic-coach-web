import React, { useEffect, useRef, useState } from "react";

import "./ShowcaseComponent.css";
import { ShowcaseItem } from "./ShowcaseItem/ShowcaseItem";
import Video from "./Video/Video";


import AnalyticsIcon from "assets/icons/web-icon-analytics.svg";
import AssignIcon from "assets/icons/web-icon-assign.svg";
import ContentIcon from "assets/icons/web-icon-content.svg";
import FeedbackIcon from "assets/icons/web-icon-feedback.svg";
import OrganizeIcon from "assets/icons/web-icon-organize.svg";

import AnalyticsSelected from "assets/icons/web-icon-analytics-selected.svg";
import AssignSelected from "assets/icons/web-icon-assign-selected.svg";
import ContentSelected from "assets/icons/web-icon-content-selected.svg";
import FeedbackSelected from "assets/icons/web-icon-feedback-selected.svg";
import OrganizeSelected from "assets/icons/web-icon-organize-selected.svg";

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
          icon={AnalyticsIcon}
          iconSelected={AnalyticsSelected}
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
          icon={AssignIcon}
          iconSelected={AssignSelected}
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
          icon={ContentIcon}
          isLight={isLight}
          iconSelected={ContentSelected}
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
          icon={FeedbackIcon}
          isLight={isLight}
          iconSelected={FeedbackSelected}
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
          icon={OrganizeIcon}
          iconSelected={OrganizeSelected}
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
