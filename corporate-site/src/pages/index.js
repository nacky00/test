import React from 'react'
import styled from 'styled-components'
import Theme from 'theme'

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
        <section>
          <div style={{ backgroundColor: "pink" }}>
            <h1>Product</h1>
            <div>
              <div>
                <img />
                イメージ
              </div>
              <div>
                <button>AppStore</button>
                <button>GooglePlay</button>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div>
            test
          </div>
        </section>
      </div>
  </div>
)
