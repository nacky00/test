import React from 'react'
import styled from 'styled-components'
import Theme from 'theme'
import { NewsSection } from 'components/organisms/NewsSection'
import { ProductSection } from 'components/organisms/ProductSection'
import { CompanySection } from 'components/organisms/CompanySection'

export default () => (
  <div>
    <MainVisual>
      <MainTitle>
        <h1>Something Message</h1>
        <p>message message message</p>
      </MainTitle>
      <MainMovie autoPlay="true" loop="true" muted="true" playsInline>
        <source src="/sample_movie.mp4" type="video/mp4"/>
      </MainMovie>
    </MainVisual>
    
    <div className="contents" style={{ backgroundColor: "beige", marginTop: "32%" }}>
        <ProductSection />
        <NewsSection />
        <CompanySection />
      </div>
  </div>
)


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