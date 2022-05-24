import React from "react";
import styled from "styled-components";
import logo from "../img/logo.svg";

function Footer() {
  return (
    <FooterStyled>
      <div className="footer-con">
        <div className="logo-con">
          <div className="logo-items">
            <img src={logo} alt="logo" />
            <p>Copyright @2022 Mohamed Gamal. All rights reserved.</p>
          </div>
        </div>
      </div>
    </FooterStyled>
  );
}

export default Footer;

const FooterStyled = styled.footer`
  padding: 1rem;
  background-color: #dce2f0;

  .logo-con {
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      width: 70px;
      display: block;
      margin: auto;
      margin-bottom: 10px;
    }
  }
`;
