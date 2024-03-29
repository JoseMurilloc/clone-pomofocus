import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '../../commons/icons/Main';
import { Button } from '../../components/Form/Button';
import { ButtonLoginGithub } from '../../components/Form/ButtonLoginGithub';
import { Input } from '../../components/Form/Input';
import {
  Container,
  Header,
  Form,
  Footer,
  Main,
} from "./styles";

export function Login() {
  return (
    <Container>
      <Main>
        <Header>
          <h1>
            <Icon.FaCheckCircle size={55} color="#fff" />
            Pomofocus
          </h1>
          <h2>Login</h2>
        </Header>
        <Form>
          <ButtonLoginGithub />

          <div className="containerOr">
            <span>Or</span>
          </div>

          <div className="containerLabelInput">
            <span>Email</span>
          </div>
          <div className="containerInput">
            <Input
              placeholder="example@gmail.com"
              type="email"
            />
          </div>

          <div className="containerLabelInput">
            <span>Password</span>
          </div>
          <div className="containerInput">
            <Input
              placeholder="Password here"
              type="password"
            />
          </div>

          <div className="containerButtonWithEmail">
            <Button title="Log in with Email"/>
          </div>

          <div className="containerForgotPassword">
            <Link to="/forgot"><span>Forgot Password</span></Link>
          </div>
        </Form>
      </Main>
      <Footer>
        <span>Do not have an account?</span>
        <Link to="/register-me">Create account</Link>
      </Footer>
    </Container>
  )
}
