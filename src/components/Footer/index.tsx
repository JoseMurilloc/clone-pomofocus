import React from 'react';
import * as S from './styles'

import stripeImage from '../../assets/stripe.png';
import twitterImage from '../../assets/twitter.png';
import facebookImage from '../../assets/facebook.png';


export function Footer() {
  return (
    <S.Footer>
      <div className="header-footer">
        <a className="header-footer-link" href="/">Home</a>
        <a className="header-footer-link" href="/">Privacy</a>
        <a className="header-footer-link" href="/">Contact</a>
        <a className="header-footer-link" href="/">Simples page</a>
      </div>
      <S.ContainerLinkSocial>
        <a href="/" className="link-social">
          <img
            className="link-social-icon"
            src={facebookImage}
            alt="sprite-icon"
          />
        </a>
        <a href="/" className="link-social">
          <img
            className="link-social-icon"
            src={twitterImage}
            alt="sprite-icon"
          />
        </a>
        <a href="/" className="link-social">
          <img
            className="link-social-icon"
            src={stripeImage}
            alt="sprite-icon"
          />
        </a>
      </S.ContainerLinkSocial>
      <div className="made-header-message">
        <span>{`Made with <3 by`} <strong>Yuya Uzu</strong></span>
      </div>
      <div className="copyright">
        <small>©Pomofocus 2019. All Rights Reserved.</small>
      </div>
    </S.Footer>
  )
}
