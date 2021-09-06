import React from 'react'
import styled from 'styled-components'
import Theme from 'theme'
import { NewsSection } from 'components/organisms/NewsSection'
import { ProductSection } from 'components/organisms/ProductSection'
import { CompanySection } from 'components/organisms/CompanySection'
import { ContactSection } from 'components/organisms/ContactSection'
import Meta from 'meta'

export default () => (
  <div>
    <Meta description={`株式会社RelyonTrip（リリオントリップ）のコーポレートサイトです。`} url={`https://relyontrip.com`}/>
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
    margin-top: 56%;
  }
`

const MainVisual = styled.div`
  position: fixed;
  width: 100%;
  height: 540px;
  z-index: -1;
  top: 0;
  background-color: ${Theme.color.black};
`

const MainMovie = styled.video`
  position: absolute;
  width: 100%;
  height: 100%;
  ${Theme.mediaQuery.mobile} {
    height: auto;
  }
`;