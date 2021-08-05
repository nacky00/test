import React from 'react'
import styled from 'styled-components'
import Theme from 'theme'
import { AppleButton } from 'components/atoms/AppleButton'
import { GooglePlayButton } from 'components/atoms/GooglePlayButton'

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
        <ProductSection>
          <Wrapper>
            <h1>Product</h1>
              <ProductItem style={{ marginBottom: "2rem" }}>
                <img src="/img/thumbnail-caviia.png" />
                <StoreButtonsContainer>
                  <AppleButton/>
                  <GooglePlayButton/>
                </StoreButtonsContainer>
              </ProductItem>
              <ProductItem>
                <img src="/img/thumbnail-sassy.png" />
                <StoreButtonsContainer>
                  <AppleButton/>
                  <GooglePlayButton/>
                </StoreButtonsContainer>
              </ProductItem>
          </Wrapper>
        </ProductSection>
        <section>
          <div>
            test
          </div>
        </section>
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

const StoreButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
`

const ProductItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  img {
    margin-bottom: 1rem;
  }
`

const ProductSection = styled.section`
  background-color: ${Theme.color.white};
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  max-width: 800px;
  padding: 3rem 0;
`