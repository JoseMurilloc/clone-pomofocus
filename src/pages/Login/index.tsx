import React from 'react';
import { Link } from 'react-router-dom';
import { IconMain } from '../../commons/icons/Main';
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
            <IconMain.FaCheckCircle size={55} color="#fff" />
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
            <Button />
          </div>

          <div className="containerForgotPassword">
            <span>Forgot Password</span>
          </div>
        </Form>
      </Main>
      <Footer>
        <span>Do not have an account?</span>
        <Link to="/signup">Create account</Link>
      </Footer>
    </Container>
  )
}