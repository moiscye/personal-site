import React, { Component } from "react";
import styled from "styled-components";
import ScrollReveal from "scrollreveal";
import { P } from "../../utils/typography";
import {
  colorGrey1,
  colorGrey2,
  colorGrey3,
  colorGrey4,
  colorGrey6,
  colorPrimary,
  colorPrimaryLight
} from "../../utils/variables";

import { twinkleEffect } from "../../utils/keyframes";
import { Container } from "../common/container";

import { svg_icons } from "../../feed/skillIcons";
import { ReactComponent as GithubSvg } from "../../images/icons/github.svg";

import natours_img from "../../images/portfolio/natours.jpg";
import nexter_img from "../../images/portfolio/nexter.jpg";
import trillo_img from "../../images/portfolio/trillo.jpg";

const portfolio_array = [
  {
    imgPath: trillo_img,
    icons: [4, 5, 6, 9],
    title: "Trillo",
    text:
      "Hotel Booking using CSS Flex. Simple yet efficient Responsive Hotel booking website that allows users to easily select their rooms",
    liveLink: "",
    sourceLink: ""
  },
  {
    imgPath: nexter_img,
    icons: [4, 5, 6, 9],
    title: "Nexter",
    text:
      "Real estate Responsive website made with CSS Grid. This website will allow clients to easy find their dream luxury Home.",
    liveLink: "",
    sourceLink: ""
  },

  {
    imgPath: natours_img,
    icons: [4, 5, 9],
    title: "Natours",
    text:
      "Tours Booking Pure CSS.Simple, Responsive yet efficient Tour booking website that allows users to easily select their preferred tours",
    liveLink: "",
    sourceLink: ""
  }
];

const Wrapper = styled.div`
  width: 100%;
`;

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  width: 100%;

  @supports (display: grid) {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(33.3333rem, 0.4fr));
    justify-items: center;
    align-content: start;
    align-items: start;
  }

  overflow: hidden;
  /* height: ${props => (props.isShowAll ? "" : "92rem")}; */
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  height: 45rem;
  margin: 0 1rem 2rem 1rem;
  width: 31.3333rem;
  background-color: #fff;
  box-shadow: 0 0.5px 1px rgba(0, 0, 0, 0.15);
  border: 1px solid ${colorGrey6};
  border-radius: 8px;
  overflow: hidden;
`;

const Image = styled.div`
  width: 100%;
  height: 45%;
  display: flex;
  justify-content: center;
  margin-top: 0.5rem;
  opacity: 0.88;
  overflow: hidden;

  img {
    height: 100%;
    width: auto;
  }
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 1.2rem 1.6rem 1.8rem 1.6rem;
`;

const StyledH4 = styled.h4`
  font-size: 2.2rem;
  font-weight: 400;
  color: ${colorGrey1};
  margin-top: 2rem;
  margin-bottom: 1rem;
`;

const Buttons = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-top: auto;
  padding: 1.8rem 1.6rem;
`;

const Button = styled.a`
  display: flex;
  align-items: center;

  font-size: 1.4rem;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  color: #fff;
  background-color: ${props =>
    props.secondary ? colorGrey4 : colorPrimaryLight};

  & > * {
    animation: ${props => (props.twinkle ? "none" : "none")} 3s infinite;
  }

  :not(:last-child) {
    margin-right: 0.8rem;
  }

  :active {
    background-color: ${props => (props.secondary ? colorGrey3 : colorPrimary)};
    color: ${colorGrey6};
  }

  :active #live {
    background-color: ${colorGrey6};
  }

  :active #github {
    fill: ${colorGrey6};
  }
`;

const IconsBox = styled.div`
  display: flex;
`;

const Icon = styled.div`
  height: 1.5rem;
  width: 1.5rem;
  fill: ${props => (props.color ? props.color : "#fff")};
  text-align: center;
  margin-right: 0.5rem;
`;

const WhiteDot = styled.div`
  height: 0.75rem;
  width: 0.75rem;
  border-radius: 50%;
  background-color: #fff;
  margin-right: 0.5rem;
  opacity: 1;
`;

const ShowAllBtn = styled.button`
  display: block;
  margin: 1.9rem auto;
  font-family: inherit;
  font-size: 1.5rem;
  font-weight: 400;
  text-transform: uppercase;
  background-color: transparent;
  outline: none;
  cursor: pointer;
  color: ${colorGrey4};
  border: none;
  border-bottom: 1px solid ${colorGrey4};
  animation: ${twinkleEffect} 3s infinite;
  :hover {
    color: ${colorGrey2};
    border-bottom: 2px solid ${colorGrey2};
  }

  :active {
    color: ${colorGrey3};
    border-bottom: 1px solid ${colorGrey3};
  }
`;

const DetailsComponent = ({ className, icons, title, text }) => {
  return (
    <Details className={className}>
      <IconsBox>
        {icons.map((index, i) => (
          <Icon color={colorPrimary} key={i}>
            {svg_icons[index].svg}
          </Icon>
        ))}
      </IconsBox>
      <StyledH4>{title}</StyledH4>
      <P>{text}</P>
    </Details>
  );
};

// buttons component for the live / source code buttons
const ButtonsComponent = ({ className, title, liveLink, sourceLink }) => {
  return (
    <Buttons className={className}>
      <Button href={liveLink} target="_blank" rel="noopener" twinkle>
        <WhiteDot id="live" />
        <span>Live</span>
      </Button>
      {sourceLink ? (
        <Button href={sourceLink} target="_blank" rel="noopener" secondary>
          <Icon id="github">
            <GithubSvg />
          </Icon>
          <span>Source</span>
        </Button>
      ) : null}
    </Buttons>
  );
};

const CardComponent = ({ className, p_array, isShowAll }) => (
  <Cards className={className} isShowAll={isShowAll}>
    {p_array.map(({ imgPath, icons, title, text, liveLink, sourceLink }, i) => (
      <Card key={i} className="scrollreveal">
        <Image>
          <img src={imgPath} alt={text} />
        </Image>
        <DetailsComponent icons={icons} title={title} text={text} />
        <ButtonsComponent
          title={title}
          liveLink={liveLink}
          sourceLink={sourceLink}
        />
      </Card>
    ))}
  </Cards>
);

//------------------------------------------------------------------------------

class Portfolio extends Component {
  constructor() {
    super();
    this.state = {
      showAllText: "Show All",
      isShowAll: false
    };
  }

  showAll = () => {
    //since more cards will be shown, scrollreveal needs to sync them
    if (this.state.isShowAll) {
      this.setState({
        showAllText: "Show All",
        isShowAll: false
      });
    } else {
      this.setState({
        showAllText: "Hide",
        isShowAll: true
      });
    }
    ScrollReveal().sync();
  };

  render() {
    console.log(this.state.isShowAll);

    return (
      <Container title="Portfolio" transparent>
        <Wrapper>
          <CardComponent
            p_array={portfolio_array}
            isShowAll={this.state.isShowAll}
          />
          <ShowAllBtn>
            {/* {this.state.showAllText} */}

            <Button twinkle>
              <span>More projects coming up soon...</span>
              <WhiteDot id="live" />
            </Button>
          </ShowAllBtn>
        </Wrapper>
      </Container>
    );
  }
}

export default Portfolio;
