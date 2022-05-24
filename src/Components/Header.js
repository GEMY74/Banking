import React from "react";
import styled from "styled-components";
import bg from "../img/bg.svg";
import Navigation from "./Navigation";
import HeaderContent from "./HeaderContent";

function Header() {
  return (
    <HeaderStyle>
      <div className="header__content">
        <Navigation />
        <HeaderContent />
      </div>
    </HeaderStyle>
  );
}

const HeaderStyle = styled.header`
  height: 100vh;
  width: 100%;
  background-image: url(${bg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position-y: 100%;
  .header__content {
    padding: 0 10rem;

    @media screen and (max-width: 1347px) {
      padding: 1rem 14rem;
    }
    @media screen and (max-width: 1186px) {
      padding: 1rem 8rem;
    }
    @media screen and (max-width: 990px) {
      padding: 0.5rem 4rem;
    }
  }
`;

export default Header;
