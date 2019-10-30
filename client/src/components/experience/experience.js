import React, { Component } from "react";
import styled from "styled-components";
import { media } from "../../utils/mediaQueriesBuilder";
import { Container } from "../common/container";
import {
  colorGrey3,
  colorGrey4,
  colorGrey7,
  colorGrey2,
  colorPrimary
} from "../../utils/variables";

import mvpLogo from "../../images/experience/mvp.jpg";

import telmexLogo from "../../images/experience/telmex.jpg";
import laTrobeLogo from "../../images/experience/latrobe.jpg";

// array of experiences, makes it easy to add or remove in the future
const experiences_list = [
  {
    logoPath: mvpLogo,
    company: "MVP Studio",
    link: "https://mvp.studio/",
    position: "Web Application Developer",
    duration: "May 2019 - Present",
    details: [
      "Creating Restful API’s fetching data from Azure SQL Server Storage and MongoDB Atlas",
      "Building reusable and testable code with the best programming practices",
      "Implementation of security and data protection",
      "Develop new user-facing features using ReactJS and semantic UI",
      "Ensure all user input is validated before submitting to the back-end",
      "Translating design and wireframes into high quality code",
      "App reviewing and planning of future upgrades with the development team"
    ]
  },
  {
    logoPath: laTrobeLogo,
    company: "La Trobe University",
    link: "https://www.latrobe.edu.au/",
    position: "Tutor",
    duration: "Jan 2016 - Dec 2018",
    details: [
      "I impart valuable, industry proven knowledge to students across four programs",
      "Object-oriented Programming",
      "Mobile and Pervasive Computing",
      "Design Software Engineering",
      "Algorithms and Data Structures"
    ]
  },
  {
    logoPath: telmexLogo,
    company: "Telmex",
    link: "https://telmex.com/",
    duration: "Dec 2012 - May 2014",
    position: "Software Developer",
    details: [
      "Designing, developing and delivering high-volume applications for critical systems",
      "Analyzing user requirements; envisioning system features and functionality",
      "Integrate applications; studying and establishing connectivity with search engines, and information servers",
      "Design and develop web services",
      "Support users by developing documentation and assistance tools"
    ]
  }
];

const ExperienceContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 4rem 3rem;

  :first-child {
    padding-top: 3rem;
  }

  :last-child {
    padding-bottom: 3rem;
  }

  :not(:last-child) {
    border-bottom: 1px solid ${colorGrey7};
  }

  ${media.sizeSmall2`
		flex-direction: column;
		padding-left: 1.6rem;
		padding-right: 1.6rem;
	`}
`;

const Image = styled.div`
  flex: 0 0 auto;
  margin-right: 3rem;
  height: 12rem;
  width: 14rem;
  display: flex;
  justify-content: center;
  border-radius: 50%;
  overflow: hidden;

  img {
    height: 100%;
    width: auto;
  }

  ${media.sizeMedium`
		height: 10rem;
		width: 10rem;
	`}

  ${media.sizeSmall2`
		flex-direction: column;
		margin: 0 auto 1rem auto;
	`}
`;

const Company = styled.a`
  :link,
  :visited {
    font-size: 2.5rem;
    font-weight: 400;
    color: ${colorPrimary};
    text-decoration: none;
  }

  :hover {
    text-decoration: underline;
  }
`;

const PositionText = styled.p`
  font-size: 1.7rem;
  font-weight: 400;
  margin: 0.8rem 0;
  color: ${colorGrey3};
`;

const DurationText = styled.p`
  font-size: 1.6rem;
  font-weight: 300;
  margin-bottom: 1.2rem;
  color: ${colorGrey4};
`;

const Ul = styled.ul`
  margin-left: 1.7rem;
  list-style-position: outside;
`;

const Li = styled.li`
  font-size: 1.8rem;
  font-weight: 300;
  line-height: 1.3;
  color: ${colorGrey2};
`;

class Experience extends Component {
  render() {
    return (
      <Container title="My Work Experience">
        <div>
          {experiences_list.map(
            ({ logoPath, company, link, position, duration, details }, i) => (
              <ExperienceContainer key={i}>
                <Image className="scrollreveal">
                  <img src={logoPath} alt={company} />
                </Image>
                <div className="scrollreveal">
                  <Company target="_blank" rel="noopener" href={link}>
                    {company}
                  </Company>
                  <PositionText>{position}</PositionText>
                  <DurationText>{duration}</DurationText>
                  <Ul>
                    {details.map((detail, i) => (
                      <Li key={i}>{detail}</Li>
                    ))}
                  </Ul>
                </div>
              </ExperienceContainer>
            )
          )}
        </div>
      </Container>
    );
  }
}

export default Experience;
