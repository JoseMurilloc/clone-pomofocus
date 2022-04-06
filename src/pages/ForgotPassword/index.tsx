import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '../../commons/icons/Main';
import { Button } from '../../components/Form/Button';
import { Input } from '../../components/Form/Input';
import {
  Container,
  Header,
  Form,
  Footer,
  Main,
} from "./styles";

export function ForgotPassword() {
  return (
    <Container>
      <Main>
        <Header>
          <h1>
            <Icon.FaCheckCircle size={55} color="#fff" />
            Pomofocus
          </h1>
          <h2>Reset password</h2>
        </Header>
        <Form>

          <div className="containerLabelInput">
            <span>Email</span>
          </div>
          <div className="containerInput">
            <Input
              placeholder="example@gmail.com"
              type="email"
            />
          </div>

          <div className="containerButtonWithEmail">
            <Button title="Reset password"/>
          </div>
        </Form>
      </Main>
      <Footer>
        <span>Try other methods?</span>
        <Link to="/login">Login</Link>
      </Footer>
    </Container>
  )
}
