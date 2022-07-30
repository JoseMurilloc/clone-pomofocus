import { createGlobalStyle } from "styled-components";

export const breakPoints = {
  screenSm: '700px',
  screenMd: '1024px',
  screenLg: '1200px',
  screenXl: '1600px',
  screenBl: '2000px',
}


export const ResponsiveScalesLayout = createGlobalStyle`
  @media screen and (min-width: ${breakPoints.screenSm}){
    html {
      font-size: 52.5%;
    }
  }

  @media screen and (min-width: ${breakPoints.screenMd}){
    html {
      font-size: 58.5%;
    }
  }

  @media screen and (min-width: ${breakPoints.screenLg}){
    html {
      font-size: 62.5%;
    }
  }

  @media screen and (min-width:${breakPoints.screenXl}){
    html {
      font-size: 81.5%;
    }
  }

  @media screen and (min-width: ${breakPoints.screenBl}){
    html {
      font-size: 100%;
    }
  }
`;

