import { createGlobalStyle } from "styled-components";

const resolution = {
  desktop_12: '62.5%', //1280px
  desktop_13: '62.5%', //1366px
  desktop_16: '81.25%', //1600px
  desktop_19: '100%', //1920px
  desktop_25: '112.5%', //2560px
  desktop_34: '137.5%', //3440px
  desktop_38: '3840px', //156.25
}


export const Responsive = createGlobalStyle`

  @media (min-width: 1280px) {
    html {
      font-size: ${resolution.desktop_12};
    }
  }

  @media (min-width: 1366px) {
    html {
      font-size: ${resolution.desktop_13};
    }
  }

  @media (min-width: 1600px) {
    html {
      font-size: ${resolution.desktop_16};
    }
  }

  @media (min-width: 1920px) {
    html {
      font-size: ${resolution.desktop_19};
    }

  }



  @media (min-width: 2300px) {
    html {
      font-size: ${resolution.desktop_25};
    }
  }

  @media (min-width: 2560px) {
    html {
      font-size: ${resolution.desktop_25};
    }
  }

  @media (min-width: 3440px) {
    html {
      font-size: ${resolution.desktop_34};
    }
  }
`;

