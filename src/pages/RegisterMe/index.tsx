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

export function RegisterMe() {
  return (
    <Container>
      <Main>
        <Header>
          <h1>
            <IconMain.FaCheckCircle size={55} color="#fff" />
            Pomofocus
          </h1>
          <h2>Create Account</h2>
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

          <div className="containerButtonWithEmail">
            <Button title="Log in with Email"/>
          </div>
        </Form>
      </Main>
      <Footer>
        <span>Already have an account?</span>
        <Link to="/login">Log in</Link>
      </Footer>
    </Container>
  )
}