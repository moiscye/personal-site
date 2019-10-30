import React, { Component } from "react";
import styled from "styled-components";
import smoothScroll from "../../utils/smoothScroll";
import { media } from "../../utils/mediaQueriesBuilder";
import { Socials } from "../../utils/socials";
import {
  colorGrey4,
  colorPrimary,
  colorPrimaryDark
} from "../../utils/variables";
import { H1, H4 } from "../../utils/typography";
// import avatar from "../../images/avatar.jpg";
import avatar from "../../images/me.jpg";
import resume from "../../images/MoisesCV.pdf";

const StyledSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 10rem 6rem;
  height: 95.5vh;
  background-color: rgba(0, 0, 0, 0.02);
`;

const InfoBox = styled.div`
  text-align: center;
`;

const Avatar = styled.div`
	display: inline-block;
	background-image: url('${avatar}');
	background-position: center;
	background-size: cover;
	height: 15rem;
	width: 15rem;
	border-radius: 30%;
	margin-bottom: 2rem;
`;

const Name = styled(H1)`
  color: #fff;
  margin-bottom: 1.3rem;
`;

const Status = styled(H4)`
  font-weight: 300;
  color: #fff;
`;

const Buttons = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 2rem;
  width: auto;
`;

const Button = styled.a`
  color: #fff;
  font-size: 1.6rem;
  font-family: inherit;
  font-weight: inherit;
  width: 15rem;
  text-decoration: none;
  padding: 1.5rem 0;
  border-radius: 3px;
  border: 2px solid ${props => (props.secondary ? "#fff" : "transparent")};
  border-bottom: 2px solid
    ${props => (props.secondary ? "#fff" : colorPrimaryDark)};
  background-color: ${props =>
    props.secondary ? "rgba(27,32,35, .6)" : colorPrimary};
  cursor: pointer;
  transition: all 0.2s;
  outline: none;

  :not(:last-child) {
    margin-right: 2rem;
  }

  :hover {
    transform: scale(1.05);
  }

  :active {
    transform: scale(1);
    background-color: ${props =>
      props.secondary ? "rgba(27,32,35, .9)" : colorPrimaryDark};
    border: 2px solid
      ${props => (props.secondary ? `${colorGrey4}` : "transparent")};
    color: ${colorGrey4};
  }

  ${media.sizeSmall2`
		width: 13rem;
	`}
`;

class Header extends Component {
  render() {
    return (
      <StyledSection>
        <InfoBox>
          <Avatar className="scrollreveal" />
          <Name className="scrollreveal">Moises Cruz</Name>
          <Status className="scrollreveal">
            &lt; Full-Stack Web Developer &#47;&gt;
          </Status>
          <Buttons className="scrollreveal">
            <Button onClick={() => smoothScroll("footer")}>Contact Me</Button>
            <Button secondary href={resume} target="_blank" rel="noopener">
              Resume
            </Button>
          </Buttons>
          <div className="scrollreveal">
            <Socials />
          </div>
        </InfoBox>
      </StyledSection>
    );
  }
}

export default Header;
