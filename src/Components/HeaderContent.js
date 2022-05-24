import React from "react";
import styled from "styled-components";
import SecondaryButton from "./SecondaryButton";
import phone from "../img/phone.svg";
import ring1 from "../img/ring_orange.svg";

import message1 from "../img/message_blue.svg";
import message2 from "../img/message_pink.svg";

import Slide from "react-reveal/Slide";

// import { slideInLeft, slideInRight } from "react-animations";

function HeaderContent() {
  return (
    <HeaderContentStyle>
      <Slide left>
        <div className="left-content">
          <div className="left__text">
            <h1 className="Header__heading">
              Smart banking <br /> for freelancers!
            </h1>
            <SecondaryButton name="Register Now" />
          </div>
        </div>
      </Slide>

      <Slide right>
        <div className="right-content">
          <img src={phone} alt="phone" />
          <img src={ring1} alt="ring" className="ring1" />
          <img src={message1} alt="message" className="message1" />
          <img src={message2} alt="message" className="message2" />
        </div>
      </Slide>
    </HeaderContentStyle>
  );
}

export default HeaderContent;

const HeaderContentStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 2rem;
  @media screen and (max-width: 900px) {
    flex-direction: column;
  }

  .left-content {
    display: flex;
    align-items: center;
    padding-right: 3rem;
    justify-content: center;
    @media screen and (max-width: 700px) {
      margin-bottom: 50px;
      margin-left: 20px;
    }
  }

  .Header__heading {
    font-size: 4rem;
    font-weight: 700;
    margin-bottom: 20px;
    @media screen and (max-width: 700px) {
      font-size: 1.5rem;
      margin-bottom: 20px;
      text-align: center;
    }
  }

  img {
    max-width: 80%;
  }

  .right-content {
    position: relative;
    display: flex;
    justify-content: center;

    .ring1 {
      position: absolute;
      bottom: 25%;
      right: 10%;
      left: auto;
      animation: move2 20s infinite;
      transition: all 0.4s ease-in-out;
      @media screen and (max-width: 500px) {
        width: 60px;
      }
    }

    .message1 {
      position: absolute;
      bottom: 25%;
      left: -10%;
      right: auto;
      animation: move 5s infinite;
      transition: all 0.4s ease-in-out;
      @media screen and (max-width: 500px) {
        width: 70px;
      }
    }

    .message2 {
      position: absolute;
      top: 0;
      right: 5%;
      left: auto;
      transition: all 0.4s ease-in-out;
      animation: move 8s infinite;
      animation-delay: 0.5s;
      @media screen and (max-width: 500px) {
        width: 50px;
      }
    }
  }

  .message1 {
    @keyframes move {
      0% {
        transform: translateY(0) rotate(0) scale(1) translateX(0);
      }
      50% {
        transform: translateY(-10px) rotate(20deg) scale(1.1) translateX(10px);
      }
      100% {
        transform: translateY(0) rotate(0deg) scale(1) translateX(0);
      }
    }
    @keyframes move2 {
      0% {
        transform: translateY(0) rotate(0) scale(1) translateX(0);
      }
      50% {
        transform: translateY(-10px) rotate(60deg) scale(1.1) translateX(10px);
      }
      100% {
        transform: translateY(0) rotate(0deg) scale(1) translateX(0);
      }
    }
  }
`;
