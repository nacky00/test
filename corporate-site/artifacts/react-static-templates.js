

import React from 'react'
import universal, { setHasBabelPlugin } from 'react-universal-component'

setHasBabelPlugin()

const universalOptions = {
  loading: () => null,
  error: props => {
    console.error(props.error);
    return <div>An error occurred loading this page's template. More information is available in the console.</div>;
  },
  ignoreBabelRename: true
}

const t_0 = universal(import('__react_static_root__/src/pages/404.js'), universalOptions)
      t_0.template = '__react_static_root__/src/pages/404.js'
      
const t_1 = universal(import('__react_static_root__/src/pages/copyright.js'), universalOptions)
      t_1.template = '__react_static_root__/src/pages/copyright.js'
      
const t_2 = universal(import('__react_static_root__/src/pages/index.js'), universalOptions)
      t_2.template = '__react_static_root__/src/pages/index.js'
      
const t_3 = universal(import('__react_static_root__/src/pages/link.js'), universalOptions)
      t_3.template = '__react_static_root__/src/pages/link.js'
      
const t_4 = universal(import('__react_static_root__/src/pages/news.js'), universalOptions)
      t_4.template = '__react_static_root__/src/pages/news.js'
      
const t_5 = universal(import('__react_static_root__/src/pages/privacy-policy.js'), universalOptions)
      t_5.template = '__react_static_root__/src/pages/privacy-policy.js'
      
const t_6 = universal(import('__react_static_root__/src/pages/sassy.js'), universalOptions)
      t_6.template = '__react_static_root__/src/pages/sassy.js'
      
const t_7 = universal(import('__react_static_root__/src/pages/terms.js'), universalOptions)
      t_7.template = '__react_static_root__/src/pages/terms.js'
      

// Template Map
export default {
  '__react_static_root__/src/pages/404.js': t_0,
'__react_static_root__/src/pages/copyright.js': t_1,
'__react_static_root__/src/pages/index.js': t_2,
'__react_static_root__/src/pages/link.js': t_3,
'__react_static_root__/src/pages/news.js': t_4,
'__react_static_root__/src/pages/privacy-policy.js': t_5,
'__react_static_root__/src/pages/sassy.js': t_6,
'__react_static_root__/src/pages/terms.js': t_7
}
// Not Found Template
export const notFoundTemplate = "__react_static_root__/src/pages/404.js"

