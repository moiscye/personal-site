import React, { Component } from "react";
import classNames from "classnames";
import styled from "styled-components";
import Scrollspy from "react-scrollspy";

import { media } from "../../utils/mediaQueriesBuilder";
import smoothScroll from "../../utils/smoothScroll";
import { ReactComponent as MenuSvg } from "../../images/icons/menu.svg";
import { colorGrey6, colorPrimary } from "../../utils/variables";
// import {ReactComponent as MenuSvg} from '../../images/icons/menu.svg';

// once user scrolls pass header section, navbar sticks at top and is blue
const Nav = styled.nav`
  position: ${props => (props.isBlueNav ? "fixed" : "absolute")};
  left: 0;
  right: 0;
  z-index: 999;
  color: #fff;
  background-color: ${props =>
    props.isBlueNav ? colorPrimary : "rgba(255,255,255,.02)"};
    /* background-color: ${colorPrimary}; */
  box-shadow: ${props =>
    props.isBlueNav
      ? "0 .1rem .15rem rgba(0,0,0,.3)"
      : "0 .1rem .15rem rgba(0,0,0,.1)"};
`;

// nav becomes collapsible via toggle button if screen is small
const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding: 1.6rem 3rem;

  .collapsible {
    ${media.sizeSmall1`
			position: absolute;
			display: inline;
			top: 100%;
			right: 0;
			margin: .5rem;
			padding: 1rem;
			z-index: 9999;
			background-color: ${props =>
        props.isBlueNav ? colorPrimary : "rgba(255,255,255,.1)"};
			box-shadow: ${props =>
        props.isBlueNav
          ? "0 .1rem .15rem rgba(0,0,0,.3)"
          : "0 .1rem .15rem rgba(0,0,0,.1)"};
			border-radius: 3px;
			transition: all .2s;
			visibility: hidden;
			opacity: 0;
		`}

    &--toggle {
      visibility: visible;
      opacity: 1;
    }
  }

  .scrollspy {
    position: relative;
    display: flex;
    list-style: none;
    ${media.sizeSmall1`
			flex-direction: column;
		`}

    &--item-active {
      border-radius: 4px;
      background-color: rgba(255, 255, 255, 0.15);
    }
  }
`;

const Brand = styled.div`
  height: 100%;
`;

const Name = styled.button`
  font-family: inherit;
  white-space: nowrap;
  font-size: 3.8rem;
  font-weight: 600;
  color: inherit;
  background: transparent;
  border: none;
  cursor: pointer;
  outline: none;
`;

const Toggler = styled.button`
  display: none;
  position: relative;
  fill: #fff;
  background-color: transparent;
  backface-visibility: hidden;
  height: 3rem;
  width: 3rem;
  transition: all 1s;
  border: none;
  cursor: pointer;
  outline: none;

  :hover {
    fill: ${colorGrey6};
  }

  ${media.sizeSmall1`
			display: block;
		`}
`;

const Item = styled.li`
  :not(:last-child) {
    margin-right: 0.5rem;
  }

  ${media.sizeSmall1`
		width: 100%;
		:not(:last-child){
			margin-bottom: .38rem;
		};
	`}

  button {
    font-family: inherit;
    font-size: 1.8rem;
    font-weight: 300;
    white-space: nowrap;
    padding: 1rem 1.5rem;
    background: transparent;
    color: inherit;
    border: none;
    cursor: pointer;
    outline: none;
    border-radius: 4px;
    transition: all 0.2s;

    :hover {
      background-color: rgba(255, 255, 255, 0.2);
    }

    :active {
      background-color: rgba(255, 255, 255, 0.15);
    }

    ${media.sizeSmall1`
			width: 100%;
			text-align: left;
		`}
  }
`;

// each nav button activates scrollspy onClick and scrolls to element with the provided id
const NavButton = ({ className, refID, text }) => {
  return (
    <button
      onClick={() => {
        smoothScroll(refID);
      }}
    >
      {text}
    </button>
  );
};

//------------------------------------------------------------------------------

class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      isBlueNav: false,
      isToggleOn: false
    };

    // scroll listener to see if user has scrolled passes hero section so that the nav can stick to top
    window.onscroll = () => {
      this.toggleNav();
    };
  }

  toggleCollapsible = show => {
    if (show && this.state.isToggleOn) {
      this.setState({
        isToggleOn: !show
      });
    } else {
      this.setState({
        isToggleOn: show
      });
    }
  };

  // to be described
  toggleNav = () => {
    const HeaderElement = document.getElementById("home");
    this.setState({
      isBlueNav: HeaderElement.getBoundingClientRect().bottom <= 45
    });
  };

  render() {
    return (
      <Nav isBlueNav={this.state.isBlueNav}>
        <Wrapper isBlueNav={this.state.isBlueNav}>
          <Brand>
            <Name
              onClick={() => {
                smoothScroll("home");
              }}
            >
              Moises
            </Name>
          </Brand>
          <Toggler
            onClick={() => {
              this.toggleCollapsible(true);
            }}
            onBlur={() => {
              this.toggleCollapsible(false);
            }}
          >
            <MenuSvg />
          </Toggler>
          <div
            className={
              this.state.isToggleOn
                ? classNames("collapsible", "collapsible--toggle")
                : "collapsible"
            }
          >
            <Scrollspy
              className={"scrollspy"}
              items={["home", "about", "skills", "portfolio", "experience"]}
              currentClassName="scrollspy--item-active"
              // offset={-150}
            >
              <Item>
                <NavButton refID="home" text="Home" />
              </Item>
              <Item>
                <NavButton refID="about" text="About" />
              </Item>
              <Item>
                <NavButton refID="skills" text="Skills" />
              </Item>
              <Item>
                <NavButton refID="portfolio" text="Portfolio" />
              </Item>
              <Item>
                <NavButton refID="experience" text="Experience" />
              </Item>
            </Scrollspy>
          </div>
        </Wrapper>
      </Nav>
    );
  }
}

export default Navbar;
