import React from 'react'
import styled from 'styled-components'
import Theme from 'theme'
import { NewsSection } from 'components/organisms/NewsSection'
import { ProductSection } from 'components/organisms/ProductSection'
import { CompanySection } from 'components/organisms/CompanySection'
import { ContactSection } from 'components/organisms/ContactSection'

export default () => (
  <div>
    <MainVisual>
      <MainMovie autoPlay="true" loop="true" muted="true" playsInline>
        <source src="/movie/top.mp4" type="video/mp4"/>
      </MainMovie>
    </MainVisual>
    
    <Contents>
        <ProductSection />
        <NewsSection />
        <CompanySection />
        <ContactSection />
      </Contents>
  </div>
)

const Contents = styled.div`
  margin-top: 32%;
  ${Theme.mediaQuery.mobile} {
    margin-top: 40%;
  }
`

const MainVisual = styled.div`
    position: fixed;
    width: 100%;
    z-index: -1;
    top: 0;
    height: 540px;
`;

const MainTitle = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  padding-left: 32px
  z-index: 2;
  h1 {
    font-size: ${Theme.font.xlarge};
    color: ${Theme.color.black};
  }
  p {
    font-size: ${Theme.font.large};
  }
`;

const MainMovie = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -2;
  display: block;
  width: 100%;
`;