import React from "react";
import styled from "styled-components";

import { Socials } from "../../utils/socials";
import { H1, P } from "../../utils/typography";
import { colorGrey6, colorPrimary } from "../../utils/variables";
import ContactForm from "../ContactForm/contactForm";

const Container = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: auto auto;

  justify-items: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.2);
  padding: 2rem 4rem;
`;

const Wrapper = styled.div``;
const Title = styled(H1)`
  margin-bottom: 3rem;
  color: #ddd;
`;

const Content = styled(P)`
  margin-bottom: 3rem;
  color: ${colorGrey6};
`;

const A = styled.a`
  :link,
  :visited {
    padding: 0.1rem 0.5rem;
    background-color: ${colorPrimary};
    color: #ddd;
    text-decoration: none;
  }

  :hover {
    border-bottom: 2px solid #ddd;
  }
`;

const Footer = () => {
  return (
    <Container>
      <Wrapper className="scrollreveal">
        <Title className="scrollreveal">Let's get in touch!</Title>
        <Content>
          If you would like to know more about me
          <br />
          Send me an email at:
          <A href="mailto: moy_085@hotmail.com" rel="noopener">
            moy_085@hotmail.com
          </A>
          <br />
          or submit the following form.
        </Content>
        <Socials small />
      </Wrapper>

      <ContactForm />
      {/* 
      <Form id="my-form">
        <FormContainer>
          
          <Row2>
            <Input type="text" placeholder="Name" required />
            <Input type="text" placeholder="Surname" />
          </Row2>

          <Row2>
            <Input type="email" placeholder="Email" required />
            <Input type="phone" placeholder="Phone" />
          </Row2>
          <TextArea placeholder="Message" />
          <Row3>
            <div></div>
            <Button type="submit">Submit</Button>
            <Button type="button">Reset</Button>
          </Row3>
        </FormContainer>
      </Form> */}
    </Container>
  );
};

export default Footer;
