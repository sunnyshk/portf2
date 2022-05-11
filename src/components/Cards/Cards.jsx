import styled from "styled-components";
import { tani } from "../Projects/projectImages";
import { jc } from "../Projects/projectImages";

import React from "react";

const Cards = () => {
  return (
    <Container>
      <div className="card">
        <div className="image">
          <img src={tani} alt="" />
        </div>
        <div className="desc">
          <h2>Tanishq Website Clone</h2>
          <p>
            Tanishq deals in both mens and womens jewellery, This is a full
            stack project build by using Node.js, MongoDB and Express.js
          </p>
        </div>
        <div className="stack">
          <div>
            <h4>Techstack</h4>
            <ul>
              <li>Html</li>
              <li>Css</li>
              <li>React</li>
              <li>Node JS</li>
            </ul>
          </div>
          <div>
            <a
              href="https://heuristic-minsky-e408f0.netlify.app/"
              target="_blank"
            >
              Live
            </a>
            <a
              href="https://github.com/Luke0912/Tanishq/tree/juned/script"
              target="_blank"
            >
              Code
            </a>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="image">
          <img src={jc} alt="" />
        </div>
        <div className="desc">
          <h2>JCrew Website Clone</h2>
          <p>
            JCrew website clone which is specialized in mens and womens clothing
            build using React Framework internationally
          </p>
        </div>
        <div className="stack">
          <div>
            <h4>Techstack</h4>
            <ul>
              <li>Html</li>
              <li>Css</li>
              <li>Javascript</li>
              <li>Node JS</li>
            </ul>
          </div>
          <div>
            <a href="https://jcrew-eight.vercel.app/" target="_blank">
              Live
            </a>
            <a href="https://github.com/sunnyshk/JCrew-Project" target="_blank">
              Code
            </a>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="image">
          <img src={tani} alt="" />
        </div>
        <div className="desc">
          <h2>Nykaa Website Clone</h2>
          <p>
            Nykaa is an online web based retail store which is specialized in
            cosmetic & beauty products for men and women
          </p>
        </div>
        <div className="stack">
          <div>
            <h4>Techstack</h4>
            <ul>
              <li>Html</li>
              <li>Css</li>
              <li>Javascript</li>
              <li>Node JS</li>
            </ul>
          </div>
          <div>
            <a href="https://nykaaproject.netlify.app/" target="_blank">
              Live
            </a>
            <a href="https://github.com/sunnyshk/NykaaClone" target="_blank">
              Code
            </a>
          </div>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  width: 90%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width: 1155px){
    display: flex;
    flex-direction:column;
    align-items: center;
}
  .card {
    width: 30%;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
      rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
    padding: 10px;
    /* border: 1px solid red; */
  }
  .image img {
    width: 100%;
  }
  .stack {
    background-color: #e64e04;
    color: white;
    padding: 10px;
    border-radius: 10px;
    bottom: 0;
    position: relative;
    margin-top: 5px;
    display: flex;
    justify-content: space-between;
  }
  .desc p {
    font-size: 13px;
  }
  a {
    padding: 10px;
    margin-right: 10px;
    background-color: black;
    color: white;
    width: 80px;
  }
`;

export default Cards;
