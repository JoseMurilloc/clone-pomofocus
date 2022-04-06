import styled from "styled-components";


export const Footer = styled.div`
  border: 0.2rem solid #efefef;
  padding-top: 4rem;
  padding-bottom: 2rem;
  background: #fff;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .header-footer {
    margin-bottom: 1.4rem;

    .header-footer-link {
      color: hsl(357, 12%, 42%);
      font-size: 1.6rem;
      margin: 0rem 0.4rem;
      font-weight: bold;
      cursor: pointer;
      text-transform: uppercase;
    }
  }

  .made-header-message {
    margin-bottom: 2rem;
    span {
      color: hsl(357, 12%, 42%);
      font-size: 1.6rem;

      strong {
        color: rgb(217 85 80);
        font-weight: bold;
        opacity: 0.8;
        cursor: pointer;
      }
    }
  }

  .copyright {
    padding: 0;

    small {
      font-size: 1.2rem;
      color: hsl(357, 8%, 60%);
    }
  }
`;


export const ContainerLinkSocial = styled.div`
  display: flex;
  max-width: 62rem;
  margin-bottom: 1.7rem;

  .link-social {

    display: flex;
    justify-content: center;
    align-items: center;

    margin: 0.6rem 0.4rem;
    background-color: #999;
    width: 4.5rem;
    height: 4.5rem;

    border-radius: 50%;
  }

  .link-social-icon {
    width: 3rem;
  }
`;
