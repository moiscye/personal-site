import React from "react";
import styled from "styled-components";
import { media } from "../../utils/mediaQueriesBuilder";
import { minWidth, maxWidth } from "../../utils/variables";
import { Title } from "../../utils/typography";

const OutterDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10rem 6rem 2rem 6rem;
  margin: 0 auto;

  ${media.sizeMedium`
		padding: 8rem 3rem 2rem 3rem;
	`}

  ${media.sizeSmall1`
		padding: 8rem 1.5rem 2rem 1.5rem;
	`}
`;

const InnerDiv = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  padding: ${props => (props.transparent ? `none` : `3rem`)};
  min-width: ${minWidth};
  max-width: ${maxWidth};
  width: 100%;
  background-color: ${props => (props.transparent ? `transparent` : `#fff`)};
  box-shadow: ${props =>
    props.transparent
      ? `none`
      : `0 0 0 0.5px rgba(50,50,93,.12), 0 2px 5px 0 rgba(50,50,93,.07), 0 3px 9px 0 rgba(50,50,93,.03), 0 1px 1.5px 0 rgba(0,0,0,.03), 0 1px 2px 0 rgba(0,0,0,.03)`};
  border-radius: 3px;

  :hover {
    box-shadow: ${props =>
      props.transparent
        ? `none`
        : `0 0 0 0.5px rgba(50,50,93,.17), 0 2px 5px 0 rgba(50,50,93,.12), 0 3px 9px 0 rgba(50,50,93,.08), 0 1px 1.5px 0 rgba(0,0,0,.08), 0 1px 2px 0 rgba(0,0,0,.08)`};
  }

  ${media.sizeSmall3`
		padding: ${props => (props.transparent ? `none` : `2.5rem`)};
	`}
`;

export const Container = ({ children, className, transparent, title, ref }) => {
  return (
    <OutterDiv className={className}>
      <Title>{title}</Title>
      <InnerDiv className="scrollreveal" transparent={transparent}>
        {children}
      </InnerDiv>
    </OutterDiv>
  );
};
