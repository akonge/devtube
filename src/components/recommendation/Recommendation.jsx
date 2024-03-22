import React from "react";
import styled, { css } from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  cursor: pointer;
  margin: 20px 0;
  gap: 5px;
`;

const VideoImg = styled.img`
  width: 170px;
  height: 95px;
  object-fit: cover;
  border-radius: 5px;
`;

const VideoDetails = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 10px;
`;

const VideoDescription = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;

const VideoTitle = styled.h4`
  margin: 0;
  font-size: 14px;
`;

const VideoStats = styled.div`
  color: #515151;
  font-size: 12px;
  text-align: left;
  font-weight: 500;
`;

const ChannelName = styled.p`
  margin: 10px 0;
  font-weight: 600;
`;

const Recommendation = ({ video }) => {
  const { videoImg, channelImg, videoTitle, channelName, views, date } = video;
  return (
    <Container>
      <VideoImg
        src={
          videoImg ||
          "https://images.pexels.com/photos/590029/pexels-photo-590029.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        }
      />
      <VideoDetails>
        <VideoDescription>
          <VideoTitle>{videoTitle}</VideoTitle>
          <VideoStats>
            <ChannelName>{channelName}</ChannelName>
            {views} Views • {date} Year Ago
          </VideoStats>
        </VideoDescription>
      </VideoDetails>
    </Container>
  );
};

export default Recommendation;
