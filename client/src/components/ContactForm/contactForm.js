import React, { Component } from "react";
import axios from "axios";
import styled from "styled-components";
import { H1 } from "../../utils/typography";

const Form = styled.form``;
const Row2 = styled.div`
  display: grid;
  grid-template-columns: 1.3fr 1fr;
  column-gap: 1.5rem;
`;
const Row3 = styled.div`
  display: grid;
  grid-template-columns: 1fr min-content min-content;
  column-gap: 1.5rem;
`;

const FormContainer = styled.div`
  background-color: rgba(15, 15, 50, 0.2);

  padding: 4rem;
  display: grid;
  row-gap: 1rem;
  color: #ddd;
`;

const FormTitle = styled(H1)`
  margin-bottom: 1.5rem;
  color: #ddd;
`;
const Input = styled.input`
  background: #242424;
  padding: 1rem 2rem;
  font-size: 1.4rem;
  border: none;
  outline: none;
  color: #ddd;
  border-radius: 3px;
  transition: transform 0.3s;
  :active,
  :focus {
    background: #372f2f;
    transform: scale(1.02);
  }
`;

const TextArea = styled.textarea`
  background: #242424;
  font-family: inherit;
  border-radius: 3px;
  resize: none;
  padding: 1rem 2rem;
  font-size: 1.4rem;
  border: none;
  outline: none;
  color: #ddd;
  transition: transform 0.3s;
  :active,
  :focus {
    background: #372f2f;
    transform: scale(1.02);
  }
`;

const Button = styled.button`
  background: #242424;
  font-size: 1.4rem;
  padding: 1rem 2rem;
  text-transform: uppercase;
  cursor: pointer;
  display: inline-block;
  color: #aaa;
  border: none;
  transition: all 0.3s;
  border-radius: 3px;
  :hover,
  :active {
    outline: none;
    transform: translateY(-3px);
    background: #372f2f;
    color: #ddd;
  }
`;

export default class ContactModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      contactDetails: {
        name: "",
        surname: "",
        phoneNumber: "",
        email: "",
        message: ""
      }
    };
  }
  handleChange = e => {
    var data = { ...this.state.contactDetails };
    data[e.target.id] = e.target.value;
    this.setState({
      contactDetails: data
    });
  };

  handleSubmit = async e => {
    e.preventDefault();
    console.log("this.state", this.state);
    // this.props.handleClose();
    // axios.post("/api/contact", this.state.contactDetails);
  };

  render() {
    return (
      <Form id="my-form" onSubmit={this.handleSubmit}>
        <FormContainer>
          {/* <FormTitle>Get in touch!</FormTitle> */}
          <Row2>
            <Input
              name="name"
              id="name"
              type="text"
              placeholder="Name"
              required
              onChange={this.handleChange}
            />
            <Input
              name="surname"
              id="surname"
              type="text"
              placeholder="Surname"
              onChange={this.handleChange}
            />
          </Row2>

          <Row2>
            <Input
              name="email"
              id="email"
              type="email"
              placeholder="Email"
              required
              onChange={this.handleChange}
            />
            <Input
              name="phoneNumber"
              id="phoneNumber"
              type="phone"
              placeholder="Phone"
              onChange={this.handleChange}
            />
          </Row2>
          <TextArea
            placeholder="Message"
            onChange={this.handleChange}
            name="message"
            id="message"
          />
          <Row3>
            <div></div>
            <Button type="submit">Submit</Button>
            <Button type="button">Reset</Button>
          </Row3>
        </FormContainer>
      </Form>
    );
  }
}
