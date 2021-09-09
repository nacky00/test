import path from 'path'
import axios from 'axios'

export default {
  siteRoot: 'http://zen-heisenberg-1912da.netlify.app',
  plugins: [
    [
      require.resolve('react-static-plugin-source-filesystem'),
      {
        location: path.resolve('./src/pages'),
      },
    ],
    require.resolve('react-static-plugin-reach-router'),
    require.resolve('react-static-plugin-sitemap'),
  ],
}
