import React from 'react'

export default () => (
  <div>
    <div className="main-visual" style={{ position: "fixed", width: "100%", zIndex: -1, top: 0, backgroundColor: "green", height: "540px" }}>
      <div style={{ position: "absolute", top: "50%", left: 0, paddingLeft: "32px", zIndex: 2 }}>
        <h1 style={{ fontSize: "56px" }}>Something Message</h1>
        <p>message message message</p>
      </div>
      <video autoPlay="true" loop="true" muted="true" playsInline width="100%" height="auto" style={{ position: "absolute", top: 0, left: 0, zIndex: 1, display: "block" }}>
        <source src="/sample_movie.mp4" type="video/mp4"/>
      </video>
    </div>
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
