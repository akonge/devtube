import React from "react";
import styled, { css } from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";
import VideoCallOutlinedIcon from "@mui/icons-material/VideoCallOutlined";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Link } from "react-router-dom";
import { NoEncryption } from "@mui/icons-material";

const NavbarContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px;
  align-items: center;
`;

const LeftContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  flex: 1;
  margin-left: 10px;
`;

const CenterContainer = styled.div`
  flex: 3;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledInputContainer = styled.div`
  height: 25px;
  width: 60%;
  padding: 5px 20px;
  border: 1px solid gray;
  border-radius: 20px;
  outline: none;
  position: relative;
  display: flex;
`;

const StyledInput = styled.input`
  width: 95%;
  border: none;
  outline: none;
`;

const RightContainer = styled.div`
  display: flex;
  gap: 30px;
  align-items: center;
  flex: 1;
  justify-content: right;
`;

const ProfileImg = styled.img`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  cursor: pointer;
`;

const StyledIcon = styled.div`
  cursor: pointer;
`;

const Navbar = ({ setOpen }) => {
  return (
    <NavbarContainer>
      <LeftContainer>
        <MenuIcon style={{ cursor: "pointer" }} onClick={() => setOpen(true)} />
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          DevTube
        </Link>
      </LeftContainer>
      <CenterContainer>
        <StyledInputContainer>
          <StyledInput
            type="text"
            name="search-container"
            id="search-container"
            placeholder="Search"
          />
          <SearchOutlinedIcon
            style={{ position: "absolute", right: "10px", cursor: "pointer" }}
          />
        </StyledInputContainer>
      </CenterContainer>
      <RightContainer>
        <StyledIcon>
          <VideoCallOutlinedIcon />
        </StyledIcon>
        <StyledIcon>
          <NotificationsNoneIcon />
        </StyledIcon>
        <ProfileImg src="https://images.pexels.com/photos/3764579/pexels-photo-3764579.jpeg" />
      </RightContainer>
    </NavbarContainer>
  );
};

export default Navbar;
