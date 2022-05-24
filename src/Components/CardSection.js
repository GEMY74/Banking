import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../styles/Layouts";
import card from "../img/creditcard.svg";

function Card() {
  return (
    <CardSectionStyled>
      <InnerLayout>
        <div className="card-container">
          <div className="card-left">
            <h2 className="secondary-heading">
              One card for all your payments
            </h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt
              reprehenderit doloremque quia? Odit illo, tempore quod vero
              exercitationem, voluptatum laudantium quo harum, adipisci tenetur
              eum.
            </p>
          </div>
          <div className="card-right">
            <img src={card} alt="" />
          </div>
        </div>
      </InnerLayout>
    </CardSectionStyled>
  );
}

const CardSectionStyled = styled.section`
  .card-container {
    display: flex;
    align-items: center;

    justify-content: space-between;
    @media screen and (max-width: 845px) {
      flex-direction: column;
    }
    .card-right {
      display: flex;
      justify-content: flex-end;
      img {
        filter: drop-shadow(0px 50px 100px rgba(22, 25, 79, 0.15));
        @media (max-width: 700px) {
          width: 100%;
        }
      }
    }
    .card-left {
      margin-right: 15px;
      p {
        padding: 1rem 0;
        text-align: center;
      }

      .secondary-heading {
        text-align: center;
        @media (max-width: 700px) {
          font-size: 2rem;
        }
      }
    }
  }
`;

export default Card;
