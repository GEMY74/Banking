import React from "react";
import styled from "styled-components";
import arrow from "../img/arrow.svg";

function SecondaryButton({ name }) {
  return (
    <SecondaryButtonStyle>
      {name} <img src={arrow} alt="arrow" />
    </SecondaryButtonStyle>
  );
}

export default SecondaryButton;

const SecondaryButtonStyle = styled.button`
  background-color: var(--dark-primary);
  padding: 0.5rem 1.5rem;
  color: inherit;
  font-family: inherit;
  font-size: 20px;
  border: none;
  outline: none;
  border-radius: 15px;
  cursor: pointer;
  display: flex;
  align-items: center;

  @media (max-width: 500px) {
    font-size: 15px;
  }
  img {
    padding-left: 10px;
    transition: all 0.4s ease-in-out;
    animation: animate 1s infinite;
  }

  @keyframes animate {
    0% {
      transform: translateX(0);
    }

    50% {
      transform: translateX(5px);
    }

    100% {
      transform: translateX(0);
    }
  }
`;
