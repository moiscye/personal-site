import React, { Component } from "react";
import styled from "styled-components";
import { media } from "../../utils/mediaQueriesBuilder";
import { H3 } from "../../utils/typography";
import { Container } from "../common/container";
import { svg_icons } from "../../feed/skillIcons";

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  width: 100%;

  @supports (display: grid) {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(14rem, 0.4fr));
    justify-items: center;
    align-content: start;
    align-items: start;
  }

  padding: 1rem 0;
`;

const IconBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 1.5rem;
  min-width: 11rem;
  transition: all 0.2s;

  & > :last-child {
    margin-top: 1rem;
  }

  :hover {
    transform: scale(1.05);
  }

  ${media.sizeSmall3`
		min-width: 9rem;
	`}
`;

const Icon = styled.div`
  text-align: center;
  border-radius: 1.5rem;
  padding: 1.7rem;
  fill: #fff;
  background-color: ${props => props.color};
  height: 7rem;
  width: 7rem;

  ${media.sizeSmall3`
		padding: 1.2rem;
		border-radius: 1rem;
		height: 6rem;
		width: 6rem;
	`}
`;

// construct an icon tag for each icon in the array
const Icons = ({ className, list }) => (
  <Wrapper className={className}>
    {list.map(({ name, color, svg }, i) => (
      <IconBox key={i}>
        <Icon color={color} className="scrollreveal">
          {svg}
        </Icon>
        <H3>{name}</H3>
      </IconBox>
    ))}
  </Wrapper>
);

//------------------------------------------------------------------------------

class Skills extends Component {
  render() {
    return (
      <Container title="Professional Skills">
        <Icons list={svg_icons} />
      </Container>
    );
  }
}

export default Skills;
