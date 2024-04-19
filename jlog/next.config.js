// vanilla-extract 플러그인을 사용하여 next.js 프로젝트에 vanilla-extract를 설정하는 방법
const { createVanillaExtractPlugin } = require('@vanilla-extract/next-plugin');
const withVanillaExtract = createVanillaExtractPlugin();

// contentlayer 플러그인을 사용하여 next.js 프로젝트에 contentlayer를 설정하는 방법
const { withContentlayer } = require('next-contentlayer');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: (()=> {
    if (process.env.NODE_ENV === 'production') {
      compilerConfig = {
        ...compilerConfig,
        // 프로덕션 환경에서 리액트 테스팅 라이브러리에서 사용하는 data-testid 속성삭제
        reactRemoveTestId: true,
      }
    }
  })
};

module.exports = withVanillaExtract(withContentlayer(nextConfig));