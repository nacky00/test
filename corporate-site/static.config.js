import path from 'path'
import axios from 'axios'

export default {
  paths: {
    root: process.cwd(), // プロジェクトのルート。よく分からなければ変更しないでください。
    src: 'src', // ソースフォルダ。index.jsをエントリーポイントとして含む必要あり。
    temp: 'tmp', // ビルドで発生する公開しないファイルの置き場。
    dist: 'dist', // 本番用出力フォルダ。
    devDist: 'tmp/dev-server', // The development scratch directory.
    public: 'public', // The public directory (files copied to dist during build)
    assets: 'dist', // The output directory for bundled JS and CSS
    buildArtifacts: 'artifacts', // The output directory for generated (internal) resources
  },
  siteRoot: 'https://relyontrip.com',
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
