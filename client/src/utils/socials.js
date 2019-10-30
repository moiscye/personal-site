import React from "react";
import styled from "styled-components";

import { ReactComponent as Github } from "../images/icons/github.svg";
import { ReactComponent as Linkedin } from "../images/icons/linkedin.svg";

import { colorGrey4, colorGrey5 } from "./variables";

const Wrapper = styled.div`
  display: flex;
  margin-top: ${props => (props.isSmall ? "1rem" : "1.8rem")};
  justify-content: center;
`;

const SocialIcon = styled.a`
  fill: ${colorGrey5};
  height: ${props => (props.isSmall ? "2rem" : "2.5rem")};
  width: ${props => (props.isSmall ? "2rem" : "2.5rem")};
  cursor: pointer;
  transition: all 0.2s;

  :not(:last-child) {
    margin-right: ${props => (props.isSmall ? "1rem" : "1.2rem")};
  }

  :hover {
    fill: #fff;
  }
  :active {
    fill: ${colorGrey4};
  }
`;

export const Socials = ({ small }) => {
  return (
    <Wrapper isSmall={small}>
      <SocialIcon
        isSmall={small}
        href="https://github.com/moiscye"
        target="_blank"
        rel="noopener"
        onClick={() => {}}
      >
        <Github />
      </SocialIcon>
      <SocialIcon
        isSmall={small}
        href="https://www.linkedin.com/in/moisesdcruz"
        target="_blank"
        rel="noopener"
        onClick={() => {}}
      >
        <Linkedin />
      </SocialIcon>
    </Wrapper>
  );
};
