import React from "react";
import styled, { css } from "styled-components";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownOutlinedIcon from "@mui/icons-material/ThumbDownOutlined";
import ReplyOutlinedIcon from "@mui/icons-material/ReplyOutlined";
import NewComment from "../newComment/NewComment";
import Comments from "../comments/Comments";
import Recommendation from "../recommendation/Recommendation";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
`;

const LeftContainer = styled.div`
  flex: 2;
  /* background-color: red; */
  width: 100%;
  padding: 20px;
`;

const RightContainer = styled.div`
  flex: 1;
  /* background-color: blue; */
`;

const StyledVideo = styled.video`
  width: 100%;
  height: 501px;
  border-radius: 10px;
`;

const VideoDetails = styled.div``;

const ChannelContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const VideoTitle = styled.h2`
  margin: 5px 0;
  text-align: left;
  font-size: 20px;
`;

const VideoStats = styled.div`
  margin: 10px 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const VideoLeft = styled.div`
  font-size: 14px;
`;

const VideoRight = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  margin: 5px 0;
`;

const ChannelSubscription = styled.div``;

const StyledIcon = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3px;
  font-size: 14px;
`;

const ChannelImg = styled.img`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  cursor: pointer;
  object-fit: cover;
  margin-right: 10px;
`;

const ChannelInfoContainer = styled.div``;
const ChannelInfo = styled.div`
  text-align: left;
`;
const ChannelTitle = styled.h3`
  margin: 5px;
  font-size: 16px;
`;

const ChannelSubCount = styled.p`
  font-size: 12px;
  margin: 5px;
`;

const VideoDescription = styled.p`
  margin: 5px;
  font-size: 14px;
`;

const SubscribeButton = styled.button`
  color: white;
  background-color: red;
  width: 140px;
  outline: none;
  border: none;
  height: 40px;
  border-radius: 5px;
  padding: 5px 20px;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 12px;
  cursor: pointer;
`;

const CommentContainer = styled.div``;

const CommentTitle = styled.h3`
  text-align: left;
`;

const recommendations = [
  {
    videoImg:
      "https://images.pexels.com/photos/884788/pexels-photo-884788.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    channelImg:
      "https://images.pexels.com/photos/6711881/pexels-photo-6711881.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    videoTitle: "Random Video 1",
    channelName: "Quick GG",
    views: "24K",
    date: "1 year",
  },
  {
    videoImg:
      "https://images.pexels.com/photos/1166209/pexels-photo-1166209.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    channelImg:
      "https://images.pexels.com/photos/4668510/pexels-photo-4668510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    videoTitle: "Random Video 2",
    channelName: "Codevolution",
    views: "24K",
    date: "10 days",
  },
  {
    videoImg:
      "https://images.pexels.com/photos/1933239/pexels-photo-1933239.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    channelImg:
      "https://images.pexels.com/photos/445109/pexels-photo-445109.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    videoTitle: "Random Video 3",
    channelName: "Chilling Play",
    views: "24K",
    date: "20 min",
  },
  {
    videoImg:
      "https://images.pexels.com/photos/2341830/pexels-photo-2341830.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    channelImg:
      "https://images.pexels.com/photos/39866/entrepreneur-startup-start-up-man-39866.jpeg",
    videoTitle: "Random Video 4",
    channelName: "Lama Dev",
    views: "24K",
    date: "2 year",
  },
  {
    videoImg:
      "https://images.pexels.com/photos/884788/pexels-photo-884788.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    channelImg:
      "https://images.pexels.com/photos/6711881/pexels-photo-6711881.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    videoTitle: "Random Video 1",
    channelName: "Quick GG",
    views: "24K",
    date: "30 min",
  },
  {
    videoImg:
      "https://images.pexels.com/photos/1166209/pexels-photo-1166209.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    channelImg:
      "https://images.pexels.com/photos/4668510/pexels-photo-4668510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    videoTitle: "Random Video 2",
    channelName: "Codevolution",
    views: "24K",
    date: "3 years",
  },
  {
    videoImg:
      "https://images.pexels.com/photos/1933239/pexels-photo-1933239.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    channelImg:
      "https://images.pexels.com/photos/445109/pexels-photo-445109.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    videoTitle: "Random Video 3",
    channelName: "Chilling Play",
    views: "24K",
    date: "2 days",
  },
  {
    videoImg:
      "https://images.pexels.com/photos/2341830/pexels-photo-2341830.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    channelImg:
      "https://images.pexels.com/photos/39866/entrepreneur-startup-start-up-man-39866.jpeg",
    videoTitle: "Random Video 4",
    channelName: "Lama Dev",
    views: "24K",
    date: "20 days",
  },
  {
    videoImg:
      "https://images.pexels.com/photos/884788/pexels-photo-884788.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    channelImg:
      "https://images.pexels.com/photos/6711881/pexels-photo-6711881.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    videoTitle: "Random Video 1",
    channelName: "Quick GG",
    views: "24K",
    date: "40 min",
  },
  {
    videoImg:
      "https://images.pexels.com/photos/1166209/pexels-photo-1166209.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    channelImg:
      "https://images.pexels.com/photos/4668510/pexels-photo-4668510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    videoTitle: "Random Video 2",
    channelName: "Codevolution",
    views: "24K",
    date: "23 days",
  },
  {
    videoImg:
      "https://images.pexels.com/photos/1933239/pexels-photo-1933239.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    channelImg:
      "https://images.pexels.com/photos/445109/pexels-photo-445109.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    videoTitle: "Random Video 3",
    channelName: "Chilling Play",
    views: "24K",
    date: "10 min",
  },
  {
    videoImg:
      "https://images.pexels.com/photos/2341830/pexels-photo-2341830.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    channelImg:
      "https://images.pexels.com/photos/39866/entrepreneur-startup-start-up-man-39866.jpeg",
    videoTitle: "Random Video 4",
    channelName: "Lama Dev",
    views: "24K",
    date: "20 hours",
  },
];

const Video = () => {
  return (
    <Container>
      <LeftContainer>
        <StyledVideo controls>
          <source src="../../media/sample2.mp4" type="video/mp4" />
          Your browser does not support the video file
        </StyledVideo>
        <VideoDetails>
          <VideoTitle>
            React Testing Tutorial with React Library and Jest
          </VideoTitle>
          <VideoStats>
            <VideoLeft>7,948,154 views • Jun 22, 2022</VideoLeft>
            <VideoRight>
              <StyledIcon>
                <ThumbUpOutlinedIcon style={{ fontSize: "20px" }} /> 123
              </StyledIcon>
              <StyledIcon>
                <ThumbDownOutlinedIcon style={{ fontSize: "20px" }} /> Dislike
              </StyledIcon>
              <StyledIcon>
                <ReplyOutlinedIcon style={{ fontSize: "20px" }} /> Share
              </StyledIcon>
            </VideoRight>
          </VideoStats>
          <ChannelContainer>
            <ChannelImg src="https://images.pexels.com/photos/1008000/pexels-photo-1008000.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
            <ChannelInfo>
              <ChannelTitle>Lama Dev</ChannelTitle>
              <ChannelSubCount>150K subscribers</ChannelSubCount>
              <VideoDescription>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloribus ad est, eveniet quo distinctio quaerat cupiditate,
                officiis molestiae aspernatur eius dolores deserunt, sunt vero!
                Corrupti necessitatibus fuga aspernatur modi est?
              </VideoDescription>
            </ChannelInfo>
            <SubscribeButton>Subscribe</SubscribeButton>
          </ChannelContainer>
        </VideoDetails>
        <CommentContainer>
          <CommentTitle>Comments</CommentTitle>
          <NewComment />
          <Comments />
        </CommentContainer>
      </LeftContainer>

      <RightContainer>
        {recommendations.map((video) => (
          <Recommendation video={video} />
        ))}
      </RightContainer>
    </Container>
  );
};

export default Video;
