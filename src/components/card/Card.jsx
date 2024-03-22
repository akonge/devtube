import React from "react";
import { useNavigate } from "react-router-dom";
import styled, { css } from "styled-components";

const Container = styled.div`
  width: 356px;
  display: flex;
  flex-direction: column;
  cursor: pointer;
`;

const VideoImg = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 5px;
`;

const VideoDetails = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 10px;
`;

const ChannelImg = styled.img`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  cursor: pointer;
  object-fit: cover;
  margin-right: 10px;
`;

const VideoDescription = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;

const VideoTitle = styled.h2`
  margin: 5px;
  font-size: 18px;
`;

const VideoStats = styled.div`
  color: #515151;
  font-size: 14px;
  text-align: left;
  font-weight: 500;
`;

const ChannelName = styled.p`
  margin: 2px;
`;

const Card = ({ video }) => {
  const { videoImg, channelImg, videoTitle, channelName, views, date } = video;
  const navigate = useNavigate();
  return (
    <Container
      onClick={() => {
        navigate("/watch");
      }}
    >
      <VideoImg
        src={
          videoImg ||
          "https://images.pexels.com/photos/590029/pexels-photo-590029.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        }
      />
      <VideoDetails>
        <ChannelImg
          src={
            channelImg ||
            "https://images.pexels.com/photos/709143/pexels-photo-709143.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          }
        />
        <VideoDescription>
          <VideoTitle>{videoTitle}</VideoTitle>
          <VideoStats>
            <ChannelName>{channelName}</ChannelName>
            {views} Views • {date} Ago
          </VideoStats>
        </VideoDescription>
      </VideoDetails>
    </Container>
  );
};

export default Card;
