import React, { useLayoutEffect } from 'react'
import { Root, Routes, addPrefetchExcludes } from 'react-static'
import { Link, Router, useLocation } from 'components/Router'
import Dynamic from 'containers/Dynamic'
import Footer from 'components/organisms/Footer'
import Header from 'components/organisms/Header'

import './app.css'

// Any routes that start with 'dynamic' will be treated as non-static routes
addPrefetchExcludes(['dynamic'])



function App() {
  return (
    <Root>
      <Header />
      <div>
        <React.Suspense fallback={<em>Loading...</em>}>
        <ScrollToTop />
          <Router>
            <Dynamic path="dynamic" />
            <Routes path="*" />
          </Router>
        </React.Suspense>
      </div>
      <Footer />
    </Root>
  )
}

// ページ遷移時に上部までスクロール
function ScrollToTop() {
  const { pathname } = useLocation()
  useLayoutEffect(() => {
      window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export default App