import React from 'react'
import styled from 'styled-components'
import Theme from '../theme'

const MainVisual = styled.div`
    position: fixed;
    width: 100%;
    z-index: -1;
    top: 0;
    height: 540px;
`;

const MainTitle = styled.div`
  position: "absolute;
  top: 50%;
  left: 0;
  padding-left: 32px
  z-index: 2;
  h1 {
    font-size: ${Theme.font.xlarge};
    color: ${Theme.color.white};
  }
`;

export default () => (
  <div>
    <MainVisual>
      <div style={{ position: "absolute", top: "50%", left: 0, paddingLeft: "32px", zIndex: 2 }}>
        <h1 style={{ fontSize: "56px" }}>Something Message</h1>
        <p>message message message</p>
      </div>
      <video autoPlay="true" loop="true" muted="true" playsInline width="100%" height="auto" style={{ position: "absolute", top: 0, left: 0, zIndex: 1, display: "block" }}>
        <source src="/sample_movie.mp4" type="video/mp4"/>
      </video>
    </MainVisual>
    
    <div className="contents" style={{ backgroundColor: "beige", marginTop: "32%" }}>
        <section>
          <div style={{ backgroundColor: "pink" }}>
            test
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
