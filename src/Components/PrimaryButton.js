import React from "react";
import styled from "styled-components";

function PrimaryButton({ name }) {
  return <ButtonStyle>{name}</ButtonStyle>;
}

export default PrimaryButton;

const ButtonStyle = styled.button`
  background-color: var(--accent-pink);
  padding: 0.5rem 1.5rem;
  color: inherit;
  font-family: inherit;
  font-size: inherit;
  border: none;
  outline: none;
  border-radius: 15px;
  cursor: pointer;
  @media (max-width: 1150px) {
    display: none;
  }
`;
