import React from "react";
import styled, { css } from "styled-components";

import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import SubscriptionsOutlinedIcon from "@mui/icons-material/SubscriptionsOutlined";
import VideoLibraryOutlinedIcon from "@mui/icons-material/VideoLibraryOutlined";
import Card from "../../components/card/Card";
import Tag from "../../components/tag/Tag";

const Container = styled.div`
  padding: 10px;
  display: flex;
  height: 100vh;
`;

const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  width: 65px;
  height: 100%;
  position: sticky;
  left: 0;
  min-height: 100vh;
`;

const IconContainer = styled.div`
  font-size: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  align-items: center;
  cursor: pointer;
`;
const RightContainer = styled.div`
  padding: 20px;
`;

const TagList = styled.div`
  display: flex;
  flex-direction: row;
  gap: 15px;
  margin-bottom: 40px;
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 30px;
`;

const tags = [
  "All",
  "JavaScript",
  "Python",
  "AI",
  "Music",
  "Gaming",
  "Modern Family",
];

const videos = [
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

const Home = () => {
  return (
    <Container>
      <LeftContainer>
        <IconContainer>
          <HomeOutlinedIcon />
          Home
        </IconContainer>
        <IconContainer>
          <SubscriptionsOutlinedIcon />
          Subscriptions
        </IconContainer>
        <IconContainer>
          <VideoLibraryOutlinedIcon />
          You
        </IconContainer>
      </LeftContainer>
      <RightContainer>
        <TagList>
          {tags.map((tag) => (
            <Tag tag={tag} />
          ))}
        </TagList>
        <CardContainer>
          {videos.map((video) => (
            <Card video={video} />
          ))}
        </CardContainer>
      </RightContainer>
    </Container>
  );
};

export default Home;
