import React from "react";
import styled, { css } from "styled-components";
import Comment from "../comment/Comment";

const Container = styled.div``;

const comments = [
  {
    img: "https://images.pexels.com/photos/1008000/pexels-photo-1008000.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    name: "John Doe",
    date: "1 years ago",
    detail:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi repellendus excepturi cumque debitis temporibus inventore in sequi ab perferendis. A ipsam corporis necessitatibus quae officiis explicabo ea laudantium deleniti reiciendis.",
  },
  {
    img: "https://images.pexels.com/photos/1008000/pexels-photo-1008000.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    name: "Jane Doe",
    date: "2 years ago",
    detail:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi repellendus excepturi cumque debitis temporibus inventore in sequi ab perferendis. A ipsam corporis necessitatibus quae officiis explicabo ea laudantium deleniti reiciendis.",
  },
  {
    img: "https://images.pexels.com/photos/1008000/pexels-photo-1008000.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    name: "John Doe",
    date: "2 years ago",
    detail:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi repellendus excepturi cumque debitis temporibus inventore in sequi ab perferendis. A ipsam corporis necessitatibus quae officiis explicabo ea laudantium deleniti reiciendis.",
  },
  {
    img: "https://images.pexels.com/photos/1008000/pexels-photo-1008000.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    name: "John Doe",
    date: "2 years ago",
    detail:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi repellendus excepturi cumque debitis temporibus inventore in sequi ab perferendis. A ipsam corporis necessitatibus quae officiis explicabo ea laudantium deleniti reiciendis.",
  },
];
const Comments = () => {
  return (
    <Container>
      {comments.map((comment) => (
        <Comment comment={comment}></Comment>
      ))}
    </Container>
  );
};

export default Comments;
