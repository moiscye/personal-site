import React, { Component } from "react";
import styled, { createGlobalStyle } from "styled-components";
import ScrollReveal from "scrollreveal";
import { media } from "./utils/mediaQueriesBuilder";

//components
import Particles from "react-particles-js";
import particlesOptions from "./feed/particlesjs-config";
import { MeteorComponent } from "../src/utils/meteorShower";
import NavBar from "./components/navbar/navbar";
import Header from "../src/components/home/header";
import AboutMe from "./components/about/about";
import Skills from "./components/skills/skills";
import Experience from "./components/experience/experience";
import Footer from "./components/footer/footer";

import {
  colorHeader1,
  colorHeader2,
  colorGrey1,
  colorGrey7,
  colorPrimary
} from "./utils/variables";

//  fonts

import fontBold from "./fonts/StratumNo1 Bold.ttf";
import fontHeavy from "./fonts/StratumNo1 Heavy.ttf";
import fontLight from "./fonts/StratumNo1 Light.ttf";
import fontMedium from "./fonts/StratumNo1 Medium.ttf";
import fontRegular from "./fonts/StratumNo1 Regular.ttf";
import fontThin from "./fonts/StratumNo1 Thin.ttf";
import Portfolio from "./components/portfolio/portfolio";

//global styling

const GlobalStyle = createGlobalStyle`
	@font-face {
	    font-family: "Stratum";
	    src: url('${fontBold}');
	    font-weight: 500;
	}

	@font-face {
	    font-family: "Stratum";
	    src: url('${fontHeavy}');
	    font-weight: 600;
	}

	@font-face {
	    font-family: "Stratum";
	    src: url('${fontLight}');
	    font-weight: 200;
	}

	@font-face {
	    font-family: "Stratum";
	    src: url('${fontMedium}');
	    font-weight: 400;
	}

	@font-face {
	    font-family: "Stratum";
	    src: url('${fontRegular}');
	    font-weight: 300;
	}

	@font-face {
	    font-family: "Stratum";
	    src: url('${fontThin}');
	    font-weight: 100;
	}

	*,
	*::before,
	*::after{
		margin: 0;
		padding: 0;
		box-sizing: inherit;
		font-weight: inherit;
	}

	::selection{
		background-color: ${colorPrimary};
		color: #fff;
	}

	html{
		font-size: 62.5%;
		color: ${colorGrey1};
		box-sizing: border-box;
		font-family: "Stratum", "Montserrat", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
		font-weight: 300;
		line-height: 1;

		${media.sizeLarge`
			font-size: 57%;
		`}

		${media.sizeSmall`
			font-size: 50.5%;
		`}

	}

	body{
		min-width: 320px;
		
	}

	.particles-js{
		background-color: ${colorHeader1};
		background-image: linear-gradient(to bottom, ${colorHeader1}, ${colorHeader2});
		position: fixed;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		z-index: -99;
	}
`;

const Section = styled.section`
  background-color: ${props =>
    props.transparent ? `transparent` : colorGrey7};

  :nth-of-type(2) {
    padding-top: 6rem;
    border-top-right-radius: 50% 3vh;
    border-top-left-radius: 50% 3vh;
  }

  :nth-last-of-type(2) {
    padding-bottom: 10rem;
  }
`;

class App extends Component {
  componentDidMount() {
    // configuration for scrollreveal
    const config = {
      origin: "top",
      distance: "20px",
      duration: 450,
      delay: 200,
      scale: 1,
      opacity: 0,
      easing: "ease",
      reset: true
    };

    ScrollReveal().reveal(".scrollreveal", config);
  }
  render() {
    return (
      <>
        <GlobalStyle />
        <Particles className="particles-js" params={particlesOptions} />
        {/* <MeteorComponent num={10} /> */}
        <NavBar />
        <Section id="home" transparent>
          <Header />
        </Section>
        <Section id="about">
          <AboutMe />
        </Section>
        <Section id="skills">
          <Skills />
        </Section>

        <Section id="portfolio">
          <Portfolio />
        </Section>

        <Section id="experience">
          <Experience />
        </Section>

        <Section id="footer" transparent>
          <Footer />
        </Section>
      </>
    );
  }
}

export default App;
