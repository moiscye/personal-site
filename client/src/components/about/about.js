import React, { Component } from "react";
import styled from "styled-components";
import { H2, P } from "../../utils/typography";
import { Container } from "../common/container";

import { ReactComponent as GmailSvg } from "../../images/icons/gmail.svg";
import { ReactComponent as LocationSvg } from "../../images/icons/pin.svg";
import { ReactComponent as TranslateSvg } from "../../images/icons/google_translate.svg";

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 1rem 0;
`;

const About = styled.div`
  flex: 1 1 60%;
  padding: 2rem;
`;

const Info = styled.div`
  flex: 1 0 40%;
  padding: 2rem;
`;

const InfoList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;

  justify-content: space-between;
  align-content: space-between;
`;

const ListItem = styled.li`
  display: flex;

  :not(:last-child) {
    margin-bottom: 3rem;
  }
`;

const StyledH2 = styled(H2)`
  margin-bottom: 2rem;
`;

const Icon = styled.div`
  height: auto;
  width: 2.5rem;
  margin-right: 1.5rem;

  & > * {
    display: block;
    margin: auto;
  }
`;

const ListItemComponent = ({ className, svg, value }) => {
  return (
    <ListItem className={className}>
      <Icon>{svg}</Icon>
      <P>{value}</P>
    </ListItem>
  );
};

class AboutMe extends Component {
  render() {
    return (
      <Container title="About me">
        <Wrapper>
          <About className="scrollreveal">
            <StyledH2>Welcome to my page!</StyledH2>
            <P>
              Hello!!! My name is Moises and I am a passionate software engineer
              with experience in web application and enterprise software
              development. Dedicated to self-learning and continuous development
              in skills, qualifications, and knowledge.
              <br />
              <br />
              Please feel free to read more about me. Checkout my resume,
              projects or contact me.
            </P>
          </About>
          <Info className="scrollreveal">
            <StyledH2>Info</StyledH2>
            <InfoList>
              <ListItemComponent
                svg={<GmailSvg />}
                value="moy_085&#64;hotmail.com"
              />
              <ListItemComponent
                svg={<LocationSvg />}
                value="Melbourne, Australia"
              />
              <ListItemComponent
                svg={<TranslateSvg />}
                value="English, Spanish"
              />
            </InfoList>
          </Info>
        </Wrapper>
      </Container>
    );
  }
}

export default AboutMe;
